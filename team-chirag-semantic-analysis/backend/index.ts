// backend/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import passport from 'passport';
import './config/passport';
import authRoutes from './routes/authRoutes';
import chatRoutes from './routes/chat'; // New TypeScript chat system
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { initializeEnvironment } from './utils/environment';

// Initialize environment and load config
dotenv.config();

const startServer = async () => {
  try {
    // Initialize the application environment for the chat system
    const config = await initializeEnvironment();
    
    const app = express();
    const PORT = process.env.PORT || 5000;

    // CORS configuration
    app.use(cors({
      origin: ['http://localhost:5173', 'http://localhost:3000'], // Support both Vite and standard React ports
      credentials: true
    }));

    // Middleware
    app.use(express.json({ limit: '10mb' }));
    app.use(express.urlencoded({ extended: true, limit: '10mb' }));
    app.use(passport.initialize());

    // Request logging in development
    if (process.env.NODE_ENV === 'development') {
      app.use((req, res, next) => {
        console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
        next();
      });
    }

    // Health check
    app.get('/', (req: Request, res: Response) => {
      res.json({
        message: 'DSA Learning Backend is running with TypeScript!',
        timestamp: new Date().toISOString(),
        services: {
          auth: '✅ Active',
          chat: '✅ Active (TypeScript)',
          database: '✅ Connected'
        }
      });
    });

    // Routes
    app.use('/api/users', authRoutes);
    app.use('/auth', authRoutes);
    app.use('/api/chat', chatRoutes); // New TypeScript chat system

    // Error handling
    app.use(notFoundHandler);
    app.use(errorHandler);

    // MongoDB connection
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: process.env.DATABASE_NAME
    });
    console.log('✅ Connected to MongoDB');

    // Start server
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
      console.log(`📡 Chat API (TypeScript): http://localhost:${PORT}/api/chat`);
      console.log(`🔐 Auth API: http://localhost:${PORT}/api/users`);
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`\n📋 Available endpoints:`);
        console.log(`   POST /api/chat - DSA Learning Chat (replaces Python handler)`);
        console.log(`   GET  /api/chat/health - Chat service health check`);
        console.log(`   GET  /api/chat/session/:user_id - Get learning session`);
        console.log(`   POST /api/chat/session/:user_id/reset - Reset learning session`);
        console.log(`   POST /api/users/register - User registration`);
        console.log(`   POST /api/users/login - User login`);
      }
    });

    // Graceful shutdown
    const gracefulShutdown = (signal: string) => {
      console.log(`\n🛑 ${signal} received, shutting down gracefully...`);
      server.close(async () => {
        try {
          await mongoose.connection.close();
          console.log('✅ MongoDB connection closed');
          console.log('✅ Server closed');
          process.exit(0);
        } catch (error) {
          console.error('❌ Error during shutdown:', error);
          process.exit(1);
        }
      });
    };

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Start the server
startServer();
