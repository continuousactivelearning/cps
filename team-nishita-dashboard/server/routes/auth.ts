import { Router, Request, Response } from 'express'
import { User } from '../models/user.js';
import { JWTPayload, tokenGeneration } from '../middleware/jwt.js'
import * as bcrypt from 'bcryptjs'
const SALT = 10;
export const authRouter = Router();


authRouter.post('/register', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(400).json({
      message: 'User already exists'
    })
    return;
  }
  const hashedPassword = await bcrypt.hash(password, SALT);
  const newUser = await User.create({
    username: username,
    password: hashedPassword
  });
  const token = tokenGeneration({ id: newUser._id as string, username: newUser.username });
  res.status(201).json({
    message: `${username} registered successfully`,
    access_token: token,
  });
  return;
})


authRouter.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
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
  const token = tokenGeneration({ id: user._id as string, username: user.username })
  res.status(200).json({
    message: 'Login Successful',
    access_token: token
  });
  return;
})
