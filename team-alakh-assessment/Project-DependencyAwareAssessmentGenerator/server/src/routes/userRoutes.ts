import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

// GET /api/user/passed
router.get('/passed', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { email: string };
    const user = await User.findOne({ email: decoded.email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    // 👇 Include email in the response
    res.json({ passed: user.passedArray, email: user.email });
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
});

export default router;
