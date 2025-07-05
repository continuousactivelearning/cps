// backend/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user?: any;
}

export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    console.log('🔐 Auth header received:', authHeader ? `Bearer ${authHeader.substring(0, 20)}...` : 'None');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.warn('❗ No valid authorization header found');
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    console.log('🔑 Token extracted:', token.substring(0, 20) + '...');

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    console.log('✅ Token verified for user ID:', (decoded as any).id);
    
    req.user = decoded;
    next();
  } catch (error) {
    console.error('❌ Token verification failed:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Optional middleware - doesn't fail if no token provided
export const optionalAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      req.user = decoded;
      console.log('✅ Optional auth - user authenticated:', (decoded as any).id);
    } else {
      console.log('ℹ️ Optional auth - no token provided');
    }
    
    next();
  } catch (error) {
    console.warn('⚠️ Optional auth - token invalid, proceeding without auth:', error);
    next();
  }
};
