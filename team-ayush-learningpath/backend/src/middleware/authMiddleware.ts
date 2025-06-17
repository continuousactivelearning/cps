// src/middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

export const protect = async (req: Request, res: Response, next: NextFunction) => {
    let token;

    // Safely check if req.cookies exists and then if it has a token property
    if (req.cookies && req.cookies.token) {
        try {
            token = req.cookies.token;
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };

            // Find user by ID and attach to request, excluding the password
            const userDoc = await User.findById(decoded.id).select('-password');

            if (!userDoc) {
                return res.status(401).json({ message: 'Not authorized, user not found.' });
            }

            req.user = {
                id: userDoc.id.toString(),
                email: userDoc.email,
                role: userDoc.role as "student" | "admin"
            };

            next();
        } catch (error) {
            return res.status(401).json({ message: 'Not authorized, token failed.' });
        }
    }

    // If token was not found in the cookie, send an error
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token provided.' });
    }
};