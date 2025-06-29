import User from '../models/User';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Lang } from '../types/customTypes';

const validLanguages: Lang[] = ['cpp', 'python', 'javascript', 'java'];

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        console.log('Fetching all users...');
        console.log('MongoDB connection state:', mongoose.connection.readyState);
        console.log('Connected to database:', mongoose.connection.name);

        const users = await User.find();
        console.log('Users found:', users.length);
        console.log('First user:', users[0]);

        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Failed to fetch users', details: err });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user', details: err });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { lang } = req.body;
        if (!lang || !validLanguages.includes(lang)) {
            return res.status(400).json({
                error: 'Invalid or missing language',
                validLanguages
            });
        }
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create user', details: err });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        if (req.body.lang && !validLanguages.includes(req.body.lang)) {
            return res.status(400).json({
                error: 'Invalid language',
                validLanguages
            });
        }
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update user', details: err });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete user', details: err });
    }
}; 