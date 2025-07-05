/**
 * Example Express.js app integration with the new TypeScript chat system
 * This shows how to integrate the converted chat handler into your existing Express app
 */

import express from 'express';
import cors from 'cors';
import { initializeEnvironment } from './utils/environment';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import chatRoutes from './routes/chat';

// Import other existing routes
// import authRoutes from './routes/authRoutes';
// import otherRoutes from './routes/other';

/**
 * Create and configure Express application
 */
const createApp = async (): Promise<express.Application> => {
  // Initialize environment and validate setup
  const config = await initializeEnvironment();

  const app = express();

  // Middleware
  app.use(cors({
    origin: config.frontendUrl,
    credentials: true
  }));
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Health check endpoint
  app.get('/health', (req, res) => {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'DSA Learning Backend',
      environment: config.nodeEnv
    });
  });

  // API Routes
  
  // New TypeScript chat system (replaces Python handler)
  app.use('/api/chat', chatRoutes);
  
  // Existing routes (if any)
  // app.use('/api/auth', authRoutes);
  // app.use('/api/other', otherRoutes);

  // Error handling
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};

/**
 * Start the server
 */
const startServer = async (): Promise<void> => {
  try {
    const app = await createApp();
    const config = await initializeEnvironment();

    const server = app.listen(config.port, () => {
      // Server started silently
    });

    // Graceful shutdown
    process.on('SIGTERM', () => {
      server.close(() => {
        process.exit(0);
      });
    });

    process.on('SIGINT', () => {
      server.close(() => {
        process.exit(0);
      });
    });

  } catch (error) {
    process.exit(1);
  }
};

// Start the server if this file is run directly
if (require.main === module) {
  startServer();
}

export { createApp, startServer };
