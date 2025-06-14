import { Request, Response } from 'express';
import User from '../models/userModel';
import Concept from '../models/conceptModel';

export const getDashboard = async (req: Request, res: Response) => {
    try {
        const userProfile = await User.findById(req.user?.id)
            .populate({ path: 'learningHistory.concept', select: 'title description' });
        if (!userProfile) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(userProfile);
    } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};

export const updateProfile = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.user?.id);
        if (user) {
            user.name = req.body.name || user.name;
            const updatedUser = await user.save();
            res.status(200).json({ id: updatedUser._id, name: updatedUser.name, email: updatedUser.email });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};

export const logLearningActivity = async (req: Request, res: Response) => {
    try {
        const { conceptId } = req.params;
        const { masteryLevel } = req.body;
        const concept = await Concept.findById(conceptId);
        if (!concept) return res.status(404).json({ message: 'Concept not found' });
        const user = await User.findById(req.user?.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        const alreadyLearnedIndex = user.learningHistory.findIndex(item => item.concept.toString() === conceptId);
        if (alreadyLearnedIndex > -1) {
            user.learningHistory[alreadyLearnedIndex].masteryLevel = masteryLevel || 1;
            user.learningHistory[alreadyLearnedIndex].completedAt = new Date();
        } else {
            user.learningHistory.push({ concept: concept._id, masteryLevel: masteryLevel || 1, completedAt: new Date() });
        }
        await user.save();
        res.status(200).json(user.learningHistory);
    } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};