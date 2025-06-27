import CustomQuiz from '../models/CustomQuiz';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

export const getAllCustomQuizzes = async (req: Request, res: Response) => {
    try {
        const customQuizzes = await CustomQuiz.find();
        res.json(customQuizzes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch custom quizzes', details: err });
    }
};

export const getCustomQuizById = async (req: Request, res: Response) => {
    try {
        const customQuiz = await CustomQuiz.findById(req.params.id);
        if (!customQuiz) return res.status(404).json({ error: 'Custom quiz not found' });
        res.json(customQuiz);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch custom quiz', details: err });
    }
};

export const createCustomQuiz = async (req: Request, res: Response) => {
    try {
        const customQuiz = new CustomQuiz(req.body);
        await customQuiz.save();
        res.status(201).json(customQuiz);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create custom quiz', details: err });
    }
};

export const updateCustomQuiz = async (req: Request, res: Response) => {
    try {
        const customQuiz = await CustomQuiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!customQuiz) return res.status(404).json({ error: 'Custom quiz not found' });
        res.json(customQuiz);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update custom quiz', details: err });
    }
};

export const deleteCustomQuiz = async (req: Request, res: Response) => {
    try {
        const customQuiz = await CustomQuiz.findByIdAndDelete(req.params.id);
        if (!customQuiz) return res.status(404).json({ error: 'Custom quiz not found' });
        res.json({ message: 'Custom quiz deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete custom quiz', details: err });
    }
}; 