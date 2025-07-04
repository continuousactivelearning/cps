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
  try {
    const existing = await User.findOne({ $or: [{ username }, { email }] });
    if (existing) {
      res.status(409).json({ message: 'User already exists.' });
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
    res.json({ token, user: { id: user._id, username: user.username, email: user.email, role: user.role, avatar: user.avatar } });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
});

// Admin: Get all users
router.get('/users', requireRole('admin'), async (req: Request, res: Response) => {
  try {
    const users = await User.find({}, 'username email role _id');
    res.json(users.map(u => ({
      id: u._id,
      username: u.username,
      email: u.email,
      role: u.role
    })));
  } catch (err) {
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
      avatar: (updated as any).avatar // ignore TS error if avatar is missing from type
    });
  } catch (err) {
    console.error('Profile update error:', err);
    res.status(500).json({ message: 'Failed to update profile' });
  }
});

export default router; 