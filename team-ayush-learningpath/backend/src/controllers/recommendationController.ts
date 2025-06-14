import { Request, Response } from 'express';
import User from '../models/userModel';
import axios from 'axios';

export const getRecommendations = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.user?.id).select('learningHistory');
        if (!user) return res.status(404).json({ message: 'User not found' });
        const payload = {
            userId: user._id,
            learningHistory: user.learningHistory,
            targetConcept: req.query.target || null,
        };
        // Placeholder for Flask API Call
        // const flaskApiUrl = process.env.FLASK_API_URL || 'http://localhost:5001/recommend';
        // const { data } = await axios.post(flaskApiUrl, payload);
        // return res.status(200).json(data);

        res.status(200).json({
            message: 'Recommendation engine call placeholder.',
            nextConcepts: [
                { id: 'mockId1', title: 'Introduction to AI', reason: 'Foundation for your goal.' },
                { id: 'mockId2', title: 'Data Structures', reason: 'Prerequisite for algorithms.' }
            ],
            sentPayload: payload,
        });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Flask API Error:', error.message);
            return res.status(502).json({ message: 'Recommendation service is unavailable.' });
        }
        res.status(500).json({ message: 'Server Error' });
    }
};