import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

export const protect = async (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (req.cookies && req.cookies.token) {
        try {
            token = req.cookies.token;
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
            req.user = await User.findById(decoded.id).select('-password');
            if (!req.user) {
                return res.status(401).json({ message: 'Not authorized, user not found.' });
            }
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Not authorized, token failed.' });
        }
    }
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token provided.' });
    }
};