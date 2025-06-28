import jwt from 'jsonwebtoken';
import User from './models/User';
import { Types } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}

interface UserResponse {
  _id: string;
  name: string;
  email: string;
  token: string;
}

const generateToken = (id: Types.ObjectId): string => {
  return jwt.sign({ id: id.toString() }, process.env.JWT_SECRET!, {
    expiresIn: '30d'
  });
};

const login = async (email: string, password: string): Promise<UserResponse> => {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  if (!(await user.matchPassword(password))) {
    throw new Error('Invalid password');
  }

  return {
    _id: (user._id as Types.ObjectId).toString(),
    name: user.name,
    email: user.email,
    token: generateToken(user._id as Types.ObjectId)
  };
};

export { login };
