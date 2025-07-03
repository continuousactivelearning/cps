import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export interface AuthRequest extends Request {
  userId?: string;
  user?: any;
}

// Generic middleware for any authenticated route
export const auth = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      res.status(401).json({ message: 'No token, authorization denied' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    const user = await User.findById(decoded.userId).select('-password -__v -avatar');

    if (!user) {
      res.status(401).json({ message: 'Token is not valid' });
      return;
    }

    req.userId = decoded.userId;
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// Role-based authorization middleware
export const authorize = (roles: string[] = []) => {
  return async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '');

      if (!token) {
        res.status(401).json({ message: 'No token, authorization denied' });
        return;
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
      const user = await User.findById(decoded.userId).select('-password -__v -avatar');

      if (!user) {
        res.status(401).json({ message: 'Token is not valid' });
        return;
      }

      if (roles.length && !roles.includes(user.role)) {
        res.status(403).json({ message: 'Access denied: insufficient role' });
        return;
      }

      req.userId = decoded.userId;
      req.user = user;
      next();
    } catch (err) {
      res.status(401).json({ message: 'Token is not valid' });
    }
  };
};
