import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models/User';
import bcrypt from 'bcryptjs';
import path from 'path';
import mongoose from 'mongoose';
import multer from 'multer';

interface AuthRequest extends Request {
  user?: IUser & {
    save: () => Promise<IUser>;
  };
}

export const register = async (req: Request, res: Response) => {
  try {
    console.log('Received registration:', req.body);
    const { email, password, name, securityQuestion, securityAnswer } = req.body;

    if (!securityQuestion || !securityAnswer) {
      return res.status(400).json({ error: 'Security question and answer are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const user = new User({
      email,
      password,
      name,
      securityQuestion,
      securityAnswer
    });

    await user.save();
    console.log('User saved:', user);

    const token = jwt.sign(
      { id: user._id.toString(), email: user.email },
      process.env.JWT_SECRET || 'your_jwt_secret_key_here',
      { expiresIn: '7d' }
    );

    res.status(201).json({
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
        profileImage: user.profileImage,
      },
      token,
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(400).json({ error: 'Registration failed' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id.toString(), email: user.email },
      process.env.JWT_SECRET || 'your_jwt_secret_key_here',
      { expiresIn: '7d' }
    );

    res.json({
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
        profileImage: user.profileImage,
      },
      token,
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(400).json({ error: 'Login failed' });
  }
};

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    res.json({
      user: {
        id: req.user._id.toString(),
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
        profileImage: req.user.profileImage,
      },
    });
  } catch (err) {
    console.error('Profile fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password'] as const;
  const isValidOperation = updates.every(update => allowedUpdates.includes(update as typeof allowedUpdates[number]));

  if (!isValidOperation) {
    return res.status(400).json({ error: 'Invalid updates' });
  }

  try {
    updates.forEach(update => {
      const key = update as keyof IUser;
      if (key in req.user!) {
        (req.user as unknown as Record<string, unknown>)[key] = req.body[update];
      }
    });
    await req.user.save();

    res.json({
      user: {
        id: req.user._id.toString(),
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
        profileImage: req.user.profileImage,
      },
    });
  } catch (err) {
    console.error('Profile update error:', err);
    res.status(400).json({ error: 'Update failed' });
  }
};

export const verifyToken = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
        profileImage: user.profileImage,
      }
    });
  } catch (err) {
    console.error('Token verification error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const uploadProfileImage = async (req: AuthRequest & { file?: Express.Multer.File }, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Save the relative path to the image
    user.profileImage = `/uploads/profile-images/${req.file.filename}`;
    await user.save();
    res.json({ imageUrl: user.profileImage });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload image' });
  }
};

// Forgot Password Step 1: Get security question by email
export const getSecurityQuestion = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json({ securityQuestion: user.securityQuestion });
};

// Forgot Password Step 2: Verify security answer
export const verifySecurityAnswer = async (req: Request, res: Response) => {
  const { email, securityAnswer } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  const isMatch = await user.compareSecurityAnswer(securityAnswer);
  if (!isMatch) {
    return res.status(401).json({ error: 'Incorrect answer' });
  }
  res.json({ success: true });
};

// Forgot Password Step 3: Reset password
export const resetPassword = async (req: Request, res: Response) => {
  const { email, newPassword } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  user.password = newPassword;
  await user.save();
  res.json({ success: true });
};