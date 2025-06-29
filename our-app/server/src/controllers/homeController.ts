import type { Request, Response } from 'express';

export const getHome = async (req: Request, res: Response) => {
    try {
        // This endpoint can be used for frontend rendering
        // You can add any data needed for the home page here
        res.json({
            message: 'Welcome to the Learning Platform',
            status: 'success',
            data: {
                title: 'Learning Platform',
                description: 'Master programming concepts through interactive quizzes'
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to load home page', details: err });
    }
}; 