/*Created by Nakshatra on 23/6/25 and 24/6/25 to add forgot password.*/
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import transporter from '../utils/mailer';

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(404).json({ message: 'User not found' });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    user.resetCode = code;
    user.resetCodeExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    await user.save();

    await transporter.sendMail({
      to: user.email,
      subject: 'Password Reset Code',
      text: `Your password reset code is: ${code}`,
    });

    res.json({ message: 'OTP sent to email' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const verifyResetCode = async (req: Request, res: Response) => {
  const { email, code } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.resetCode !== code)
      return res.status(400).json({ message: 'Invalid code' });

    if (user.resetCodeExpires && user.resetCodeExpires < new Date())
      return res.status(400).json({ message: 'Code expired' });

    res.json({ message: 'Code verified successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const { email, code, newPassword, confirmPassword } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.resetCode !== code)
      return res.status(400).json({ message: 'Invalid code' });

    if (user.resetCodeExpires && user.resetCodeExpires < new Date())
      return res.status(400).json({ message: 'Code expired' });

    if (!newPassword || !confirmPassword)
      return res.status(400).json({ message: 'Both password fields are required' });

    if (newPassword !== confirmPassword)
      return res.status(400).json({ message: 'Passwords do not match' });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    user.resetCode = undefined;
    user.resetCodeExpires = undefined;

    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
