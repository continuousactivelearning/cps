import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export interface AuthRequest extends Request {
  userId?: string;
  user?: any;
}

export const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      res.status(401).json({ message: 'No token, authorization denied' });
      return;
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    const user = await User.findById(decoded.userId).select('-password').select('-__v').select('-avatar');

    if (!user) {
      res.status(401).json({ message: 'Token is not valid'});
    }

    req.userId = decoded.userId;
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};