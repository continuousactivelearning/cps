import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import jwt from 'jsonwebtoken';

// JWT Secret configuration (will be loaded after dotenv.config() below)
const getJWTSecret = () => process.env.JWT_SECRET || 'changeme';

import prereqRoutes from './src/routes/prerequisites';
import summaryRoutes from './src/routes/summaryRoute';
import quizAttempts from './src/routes/quixAttempts';
import learningPath from './src/routes/learningPath';
import authRoutes from './src/routes/auth';
import notificationRoutes from './src/routes/notifications';
import chatRoutes from './src/routes/chat';
import { authenticate } from './src/middleware/auth';
import Notification from './src/models/Notification';
import Chat from './src/models/Chat';

// Load environment variables from .env file
dotenv.config();

const app = express();
const server = createServer(app);

// CORS configuration for production and development
const allowedOrigins = [
  
  'http://localhost:3000',
  'http://localhost:5173',
  'https://ssmp.onrender.com',

];

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }
});

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Health check route for Render
app.get('/', (req, res) => {
  res.json({ 
    message: 'Server is running 🚀',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/prerequisites', authenticate, prereqRoutes);
app.use('/api', summaryRoutes);
app.use('/api', quizAttempts);
app.use('/api', learningPath);
app.use('/api/notifications', notificationRoutes);
app.use('/api/chat', chatRoutes);

// WebSocket authentication
io.use((socket: Socket, next) => {
  const token = socket.handshake.auth.token;
  console.log('WebSocket auth attempt, token:', token ? 'present' : 'missing');

  if (!token) {
    console.log('WebSocket auth failed: No token provided');
    return next(new Error('Authentication error'));
  }

  try {
    const decoded = jwt.verify(token, getJWTSecret()) as any;
    console.log('WebSocket auth successful for user:', decoded.id);
    (socket as any).data = { user: decoded };
    next();
  } catch (error) {
    console.log('WebSocket auth failed: Invalid token', error);
    next(new Error('Authentication error'));
  }
});

// WebSocket events
io.on('connection', (socket: Socket) => {
  const user = (socket as any).data.user;
  console.log('User connected:', user.username);

  socket.join(`user_${user.id}`);
  if (user.role === 'admin') socket.join('admin_room');

  socket.on('send_message', async ({ chatId, message }) => {
    try {
      const chat = await Chat.findById(chatId);
      if (!chat) return;

      const newMessage = {
        sender: user.role,
        senderId: user.id,
        message,
        timestamp: new Date()
      };

      chat.messages.push(newMessage);

      if (user.role === 'admin' && !chat.adminId) {
        chat.adminId = user.id;
        chat.status = 'in_progress';
      }

      await chat.save();

      const recipientId = user.role === 'admin' ? chat.studentId : chat.adminId;
      if (recipientId) {
        const notification = await Notification.create({
          userId: recipientId,
          type: 'chat_response',
          title: 'New Message',
          message: `New message in chat: ${chat.subject}`,
          relatedData: { chatId: chat._id }
        });

        io.to(`user_${recipientId}`).emit('new_message', {
          chatId,
          message: newMessage,
          notification
        });
      }

      socket.emit('message_sent', { chatId, message: newMessage });

      if (user.role === 'student') {
        io.to('admin_room').emit('new_chat_message', {
          chatId,
          message: newMessage,
          chat
        });
      }

    } catch (error) {
      console.error('Error sending message:', error);
      socket.emit('error', { message: 'Failed to send message' });
    }
  });

  socket.on('new_chat', async ({ subject, message }) => {
    try {
      const chat = new Chat({
        studentId: user.id,
        subject,
        messages: [{
          sender: 'student',
          senderId: user.id,
          message,
          timestamp: new Date()
        }]
      });

      await chat.save();
      io.to('admin_room').emit('new_chat_request', { chat });

    } catch (error) {
      console.error('Error creating chat:', error);
      socket.emit('error', { message: 'Failed to create chat' });
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', user.username);
  });
});

// MongoDB connection with better error handling
const mongoUri = process.env.MONGO_URI || 'mongodb+srv://dsivasai05:csk@cluster0.nmjhsng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const port = process.env.PORT || 5000;

// Improved MongoDB connection with retry logic
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    console.log('⚠️ Retrying connection in 5 seconds...');
    setTimeout(connectDB, 5000);
  }
};

// Handle MongoDB connection events
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Start server
server.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📊 Health check: http://localhost:${port}/`);
});

// Connect to MongoDB
connectDB();

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

