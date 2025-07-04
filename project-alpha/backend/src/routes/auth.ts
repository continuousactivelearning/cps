import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { requireRole, authenticate } from '../middleware/auth';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

// Register
router.post('/register', async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ message: 'All fields are required.' });
    return;
  }
  // Strong password regex: min 8 chars, upper, lower, number, special char
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]|;:'",.<>/?]).{8,}$/;
  if (!strongPasswordRegex.test(password)) {
    res.status(400).json({ message: 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.' });
    return;
  }
  try {
    // Check for unique username and email separately for better error messages
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      res.status(409).json({ message: 'Username already exists.' });
      return;
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(409).json({ message: 'Email already exists.' });
      return;
    }
    // Check if any admin exists
    const adminExists = await User.findOne({ role: 'admin' });
    const role = adminExists ? 'student' : 'admin';
    const hashed = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashed, role });
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
});

// Login
router.post('/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'All fields required.' });
    return;
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: 'Invalid credentials.' });
      return;
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.status(401).json({ message: 'Invalid credentials.' });
      return;
    }
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ 
      token, 
      user: { 
        id: user._id, 
        username: user.username, 
        email: user.email, 
        role: user.role, 
        avatar: user.avatar,
        topics: user.topics || [],
        prerequisites: user.prerequisites || [],
        quizScores: user.quizScores || [],
        learningPaths: user.learningPaths || []
      } 
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
});

// Admin: Get all users
router.get('/users', authenticate, requireRole('admin'), async (req: Request, res: Response) => {
  try {
    const users = await User.find({}, 'username email role _id topics prerequisites quizScores learningPaths avatar');
    res.json(users.map(u => ({
      id: u._id,
      username: u.username,
      email: u.email,
      role: u.role,
      topics: u.topics || [],
      prerequisites: u.prerequisites || [],
      quizScores: u.quizScores || [],
      learningPaths: u.learningPaths || [],
      avatar: u.avatar
    })));
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

// Check if admin exists
router.get('/check-admin', async (req: Request, res: Response): Promise<void> => {
  try {
    const adminExists = await User.findOne({ role: 'admin' });
    res.json({ adminExists: !!adminExists });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
});

// Verify current user's token and role (for debugging)
router.get('/verify-token', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json({
      tokenValid: true,
      userId: req.userId,
      userFromToken: req.user,
      userFromDB: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      },
      isAdmin: user.role === 'admin'
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
});

// Get user profile with complete data
router.get('/profile', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    
    res.json({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      topics: user.topics || [],
      prerequisites: user.prerequisites || [],
      quizScores: user.quizScores || [],
      learningPaths: user.learningPaths || []
    });
  } catch (err) {
    console.error('Profile fetch error:', err);
    res.status(500).json({ message: 'Failed to fetch profile' });
  }
});

// Update user profile (username, password, avatar)
router.put('/users/:id', authenticate, async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const { username, password, avatar } = req.body;
    // Only allow user themselves or admin
    if ((req.user.id + '') !== (userId + '') && req.user.role !== 'admin') {
      res.status(403).json({ message: 'Forbidden' });
      return;
    }
    const updateFields: any = {};
    if (username) updateFields.username = username;
    if (typeof avatar !== 'undefined') updateFields.avatar = avatar;
    if (password) {
      const hashed = await bcrypt.hash(password, 10);
      updateFields.password = hashed;
    }
    const updated = await User.findByIdAndUpdate(userId, updateFields, { new: true });
    if (!updated) {
      console.error('User not found or update failed for id:', userId);
      res.status(404).json({ message: 'User not found' });
      return;
    }
    // @ts-ignore
    res.json({
      id: updated._id,
      username: updated.username,
      email: updated.email,
      role: updated.role,
      avatar: (updated as any).avatar, // ignore TS error if avatar is missing from type
      topics: updated.topics || [],
      prerequisites: updated.prerequisites || [],
      quizScores: updated.quizScores || [],
      learningPaths: updated.learningPaths || []
    });
  } catch (err) {
    console.error('Profile update error:', err);
    res.status(500).json({ message: 'Failed to update profile' });
  }
});

// Delete user (admin only)
router.delete('/users/:id', authenticate, requireRole('admin'), async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const deleted = await User.findByIdAndDelete(userId);
    if (!deleted) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('User deletion error:', err);
    res.status(500).json({ message: 'Failed to delete user' });
  }
});

export default router; 
