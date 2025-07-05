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

    // Start server
    const server = app.listen(PORT, () => {
      // Server started silently
    });

    // Graceful shutdown
    const gracefulShutdown = (signal: string) => {
      server.close(async () => {
        try {
          await mongoose.connection.close();
          process.exit(0);
        } catch (error) {
          process.exit(1);
        }
      });
    };

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));

  } catch (error) {
    process.exit(1);
  }
};

// Start the server
startServer();
