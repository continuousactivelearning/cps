/**
 * Error handling middleware for the Express application
 */

import { Request, Response, NextFunction } from 'express';

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

/**
 * Global error handler middleware
 */
export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Set default values
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  console.error(`Error ${err.statusCode}: ${err.message}`);
  console.error(err.stack);

  // Send error response
  res.status(err.statusCode).json({
    error: {
      message: err.message,
      status: err.statusCode,
      timestamp: new Date().toISOString(),
      path: req.path
    }
  });
};

/**
 * Handle 404 routes
 */
export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const error: AppError = new Error(`Route ${req.originalUrl} not found`);
  error.statusCode = 404;
  next(error);
};

/**
 * Create application error
 */
export const createError = (message: string, statusCode: number = 500): AppError => {
  const error: AppError = new Error(message);
  error.statusCode = statusCode;
  error.isOperational = true;
  return error;
};
