import express from 'express'
import { Router, Request, Response, NextFunction } from 'express'
import { User } from '../models/user'
import { JWTPayload, tokenGeneration } from '../middleware/jwt'
import * as bcrypt from 'bcryptjs'
import { updateStreak } from '../utils/streakUpdate'
const SALT = 10;
export const authRouter = Router();


authRouter.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password, role = 'user' } = req.body;
    if (!username || !password) {
      res.status(400).json({
        message: 'Username and password are required'
      })
      return;
    }
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json({
        message: 'User already exists'
      })
      return;
    }
    const hashedPassword = await bcrypt.hash(password, SALT);
    const newUser = await User.create({
      username: username,
      password: hashedPassword,
      role: role
    });
    const token = tokenGeneration({ id: newUser._id as string, username: newUser.username, role: newUser.role });
    let currentStreak = 0;
    try { currentStreak = await updateStreak(username); } catch (err) { console.log(err) }
    res.status(201).json({
      message: `${username} registered successfully`,
      access_token: token,
      user: {
        username: newUser.username,
        role: newUser.role,
        loginStreak: currentStreak,
        lastLogin: newUser.lastLogin
      }
    });
    return;
  } catch (err) { next(err); }
})


authRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({
        message: 'Username and password are required'
      })
      return;
    }
    const user = await User.findOne({ username });
    if (!user || !user.password) {
      res.status(404).json({
        message: 'User not found'
      })
      return;
    }
    console.log(user);
    const passwdTest = await bcrypt.compare(password, user.password);
    if (!passwdTest) {
      res.status(401).json({
        message: 'Invalid Credentials'
      })
      return;
    }
    const token = tokenGeneration({ id: user._id as string, username: user.username, role: user.role })
    let currentStreak = user.loginStreak || 0;
    try { currentStreak = await updateStreak(username); } catch (err) { console.log(err) }
    const updatedUser = await User.findById(user._id);
    res.status(200).json({
      message: 'Login Successful',
      access_token: token,
      user: {
        username: user.username,
        role: user.role,
        loginStreak: currentStreak,
        lastLogin: updatedUser?.lastLogin
      }
    });
    return;
  } catch (err) { next(err); }
})
