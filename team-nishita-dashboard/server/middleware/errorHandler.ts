import 'dotenv/config'
import { Request, Response, NextFunction } from 'express';
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.log({
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  })
  res.status(500).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  })
}
