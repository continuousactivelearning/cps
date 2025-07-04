/*Author: Nakshatra Bhandary on 17/6/25*/
/*Updated by Nikita S Raj Kapini on 20/6/25*/
/*Modified by Nakshatra on 23/6/25 and 24/6/25 to add forgot password.*/
import express from 'express';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import transporter from '../utils/mailer';
//import { forgotPassword, verifyResetCode, resetPassword } from '../controllers/auth';

const router = express.Router();

// ─── Register ────────────────────────────────────────────────────────────────
router.post('/register', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  console.log("Inside /register");

  try {
    // 1. Check existing user
    const existing = await User.findOne({ email });
    if (existing) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    // 2. Hash & save
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hash });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// ─── Login ───────────────────────────────────────────────────────────────────
router.post('/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    // 1. Find user
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    // 2. Compare passwords
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    // 3. Sign token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// ─── Change Password ──────────────────────────────────────────────────────────
router.post('/change-password', async (req: Request, res: Response): Promise<void> => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { email: string };
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const { currentPassword, newPassword } = req.body;

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      res.status(400).json({ message: 'Current password is incorrect' });
      return;
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();

    res.json({ message: 'Password changed successfully' });
  } catch (err) {
    console.error('Change password error:', err);
    res.status(500).json({ message: 'Server error during password change' });
  }
});

// ─── Forgot Password and reset it──────────────────────────────────────────────────────────
// ─── Forgot Password ──────────────────────────────────────────────────────────
router.post('/forgot-password', async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;

  try {
    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // 2. Generate and save reset code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    user.resetCode = code;
    user.resetCodeExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    await user.save();

    // 3. Send email
    await transporter.sendMail({
      to: user.email,
      subject: 'Password Reset Code',
      text: `Your password reset code is: ${code}`,
    });

    res.json({ message: 'OTP sent to email' });
  } catch (err) {
    console.error('Forgot password error:', err);
    res.status(500).json({ message: 'Server error during password reset request' });
  }
});

// ─── Verify Reset Code ───────────────────────────────────────────────────────
router.post('/verify-reset-code', async (req: Request, res: Response): Promise<void> => {
  const { email, code } = req.body;

  try {
    // 1. Find user
    const user = await User.findOne({ email });
    if (!user || user.resetCode !== code) {
      res.status(400).json({ message: 'Invalid code' });
      return;
    }

    // 2. Check expiration
    if (user.resetCodeExpires && user.resetCodeExpires < new Date()) {
      res.status(400).json({ message: 'Code expired' });
      return;
    }

    res.json({ message: 'Code verified successfully' });
  } catch (err) {
    console.error('Verify reset code error:', err);
    res.status(500).json({ message: 'Server error during code verification' });
  }
});

// ─── Reset Password ──────────────────────────────────────────────────────────
router.post('/reset-password', async (req: Request, res: Response): Promise<void> => {
  const { email, code, newPassword, confirmPassword } = req.body;

  try {
    console.log(newPassword, confirmPassword)
    if (newPassword !== confirmPassword) {
      res.status(400).json({ message: 'Passwords do not match' });
      return;
    }

    // 1. Find user and validate code
    const user = await User.findOne({ email });
    if (!user || user.resetCode !== code) {
      res.status(400).json({ message: 'Invalid code' });
      return;
    }

    if (user.resetCodeExpires && user.resetCodeExpires < new Date()) {
      res.status(400).json({ message: 'Code expired' });
      return;
    }

    // 2. Hash new password and save
    const hash = await bcrypt.hash(newPassword, 10);
    user.password = hash;
    user.resetCode = undefined;
    user.resetCodeExpires = undefined;
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (err) {
    console.error('Reset password error:', err);
    res.status(500).json({ message: 'Server error during password reset' });
  }
});


export default router;
export const authRoutes = router;
