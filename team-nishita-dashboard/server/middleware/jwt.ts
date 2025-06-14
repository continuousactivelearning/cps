import { Request, Response, NextFunction } from 'express';
import 'dotenv/config'
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRY = '1h';
export interface JWTPayload {
  id: string;
  username: string;
  sub: string;
}
interface AuthenticatedRequest extends Request {
  user?: JWTPayload;
};
export function jwtMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    res.status(401).json({ message: 'Authorization header missing' })
    return;
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    res.status(401).json({ message: 'Authorization header missing' })
    return;
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid or expired token' });
    return;
  }
}
export function tokenGeneration(payload: { id: string, username: string }) {
  return jwt.sign({ id: payload.id, username: payload.username, sub: payload.username }, JWT_SECRET, { expiresIn: JWT_EXPIRY })
}
