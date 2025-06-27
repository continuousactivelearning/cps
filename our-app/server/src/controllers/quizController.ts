import Quiz from '../models/Quiz';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

export const getAllQuizzes = async (req: Request, res: Response) => {
    try {
        console.log('Fetching all quizzes...');
        console.log('MongoDB connection state:', mongoose.connection.readyState);
        console.log('Connected to database:', mongoose.connection.name);

        const quizzes = await Quiz.find();
        console.log('Quizzes found:', quizzes.length);
        console.log('First quiz:', quizzes[0]);

        res.json(quizzes);
    } catch (err) {
        console.error('Error fetching quizzes:', err);
        res.status(500).json({ error: 'Failed to fetch quizzes', details: err });
    }
};

export const getQuizById = async (req: Request, res: Response) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
        res.json(quiz);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quiz', details: err });
    }
};

export const createQuiz = async (req: Request, res: Response) => {
    try {
        const quiz = new Quiz(req.body);
        await quiz.save();
        res.status(201).json(quiz);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create quiz', details: err });
    }
};

export const updateQuiz = async (req: Request, res: Response) => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
        res.json(quiz);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update quiz', details: err });
    }
};

export const deleteQuiz = async (req: Request, res: Response) => {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
        res.json({ message: 'Quiz deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete quiz', details: err });
    }
};

// NEW METHODS FOR ADVANCED QUERYING

export const getQuizzesByLanguage = async (req: Request, res: Response) => {
    try {
        const { language } = req.params;
        const validLanguages = ['cpp', 'python', 'javascript', 'java'];

        if (!validLanguages.includes(language)) {
            return res.status(400).json({
                error: 'Invalid language',
                validLanguages
            });
        }

        const quizzes = await Quiz.find({ language });
        res.json({
            language,
            count: quizzes.length,
            quizzes
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quizzes by language', details: err });
    }
};

export const getQuizzesByLevel = async (req: Request, res: Response) => {
    try {
        const { level } = req.params;
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLevels.includes(level)) {
            return res.status(400).json({
                error: 'Invalid level',
                validLevels
            });
        }

        const quizzes = await Quiz.find({ level });
        res.json({
            level,
            count: quizzes.length,
            quizzes
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quizzes by level', details: err });
    }
};

export const getQuizzesByTopic = async (req: Request, res: Response) => {
    try {
        const { topic } = req.params;

        const quizzes = await Quiz.find({ 'topic.courseName': { $regex: topic, $options: 'i' } });
        res.json({
            topic,
            count: quizzes.length,
            quizzes
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quizzes by topic', details: err });
    }
};

export const getQuizzesByLanguageAndLevel = async (req: Request, res: Response) => {
    try {
        const { language, level } = req.params;
        const validLanguages = ['cpp', 'python', 'javascript', 'java'];
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLanguages.includes(language)) {
            return res.status(400).json({
                error: 'Invalid language',
                validLanguages
            });
        }

        if (!validLevels.includes(level)) {
            return res.status(400).json({
                error: 'Invalid level',
                validLevels
            });
        }

        const quizzes = await Quiz.find({ language, level });
        res.json({
            language,
            level,
            count: quizzes.length,
            quizzes
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quizzes by language and level', details: err });
    }
};

export const getQuizzesByLanguageAndTopic = async (req: Request, res: Response) => {
    try {
        const { language, topic } = req.params;
        const validLanguages = ['cpp', 'python', 'javascript', 'java'];

        if (!validLanguages.includes(language)) {
            return res.status(400).json({
                error: 'Invalid language',
                validLanguages
            });
        }

        const quizzes = await Quiz.find({
            language,
            'topic.courseName': { $regex: topic, $options: 'i' }
        });
        res.json({
            language,
            topic,
            count: quizzes.length,
            quizzes
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quizzes by language and topic', details: err });
    }
};

export const getQuizzesByLevelAndTopic = async (req: Request, res: Response) => {
    try {
        const { level, topic } = req.params;
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLevels.includes(level)) {
            return res.status(400).json({
                error: 'Invalid level',
                validLevels
            });
        }

        const quizzes = await Quiz.find({
            level,
            'topic.courseName': { $regex: topic, $options: 'i' }
        });
        res.json({
            level,
            topic,
            count: quizzes.length,
            quizzes
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quizzes by level and topic', details: err });
    }
};

export const getQuizzesByLanguageLevelAndTopic = async (req: Request, res: Response) => {
    try {
        const { language, level, topic } = req.params;
        const validLanguages = ['cpp', 'python', 'javascript', 'java'];
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLanguages.includes(language)) {
            return res.status(400).json({
                error: 'Invalid language',
                validLanguages
            });
        }

        if (!validLevels.includes(level)) {
            return res.status(400).json({
                error: 'Invalid level',
                validLevels
            });
        }

        const quizzes = await Quiz.find({
            language,
            level,
            'topic.courseName': { $regex: topic, $options: 'i' }
        });
        res.json({
            language,
            level,
            topic,
            count: quizzes.length,
            quizzes
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quizzes by language, level and topic', details: err });
    }
};

export const searchQuizzes = async (req: Request, res: Response) => {
    try {
        const { q, language, level, topic, limit = 20, page = 1 } = req.query;

        const query: any = {};

        if (language) query.language = language;
        if (level) query.level = level;
        if (topic) query['topic.courseName'] = { $regex: topic as string, $options: 'i' };

        if (q) {
            query.$text = { $search: q as string };
        }

        const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

        const quizzes = await Quiz.find(query)
            .limit(parseInt(limit as string))
            .skip(skip)
            .sort({ createdAt: -1 });

        const total = await Quiz.countDocuments(query);

        res.json({
            quizzes,
            pagination: {
                page: parseInt(page as string),
                limit: parseInt(limit as string),
                total,
                pages: Math.ceil(total / parseInt(limit as string))
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to search quizzes', details: err });
    }
}; 