import { Request, Response } from 'express';
import { User } from '../models/user.js';
import { JWTPayload, tokenGeneration } from '../middleware/jwt.js'
import * as bcrypt from 'bcryptjs'
const SALT = 10;

// Extend Express Request interface to include 'user'
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export async function registerUser(req: Request, res: Response) {
    const { username, password, role } = req.body;
    try {
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
            password: hashedPassword,
            role: role || 'user' // Default role to 'user' if not provided
        });
        const token = tokenGeneration({ id: newUser._id as string, username: newUser.username });
        res.status(201).json({
            message: `${username} registered successfully`,
            access_token: token,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
    return;
}

export async function loginUser(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !user.password) {
            res.status(404).json({
                message: 'User not found'
            })
            return;
        }
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
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        });

    }
    return;
}

export async function getUserByUsername(req: Request, res: Response) {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username }, {password: false, __v: false});
        if (!user) {
            res.status(404).json({
                message: 'User not found'
            })
            return;
        }
        res.status(200).json({
            message: 'User found',
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        });

    }
    return;
}

export async function getUserById(req: Request, res: Response) {
    const _id = req.user.id;
    try {
        const user = await User.findOne({ _id: _id }, { password: false, __v: false });
        if (!user) {
            res.status(404).json({
                message: 'User not found'
            })
            return;
        }
        res.status(200).json({
            message: 'User found',
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        });

    }
    return;
}

export async function updateUsername(req: Request, res: Response) {
    const _id = req.user.id;
    const { newUsername, password } = req.body;
    try {
        const user = await User.findOne({ _id: _id});
        if (!user) {
            res.status(404).json({
                message: 'User not found'
            })
            return;
        }
        const passwdTest = await bcrypt.compare(password, user.password);
        if (!passwdTest) {
            res.status(401).json({
                message: 'Invalid Password'
            })
            return;
        }
        user.username = newUsername;
        // Update the username in the database
        const updatedUser = await User.findOneAndUpdate({ _id: _id }, user, { new: true });
        if (!updatedUser) {
            res.status(500).json({
                message: 'Error updating username'
            });
            return;
        }
        const token = tokenGeneration({ id: updatedUser._id as string, username: updatedUser.username })
        res.status(200).json({
            message: 'Username updated successfully',
            data: updatedUser,
            access_token: token
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        });

    }
    return;
}

export async function updatePassword(req: Request, res: Response) {
    const _id = req.user.id;
    const { oldPassword, newPassword } = req.body;
    try {
        const user = await User.findOne({ _id: _id });
        if (!user) {
            res.status(404).json({
                message: 'User not found'
            })
            return;
        }
        const passwdTest = await bcrypt.compare(oldPassword, user.password);
        if (!passwdTest) {
            res.status(401).json({
                message: 'Invalid Password'
            })
            return;
        }
        user.password = await bcrypt.hash(newPassword, SALT);
        const updatedUser = await User.findOneAndUpdate({ _id: _id }, user, { new: true });
        if (!updatedUser) {
            res.status(500).json({
                message: 'Error updating password'
            });
            return;
        }
        const token = tokenGeneration({ id: updatedUser._id as string, username: updatedUser.username })
        res.status(200).json({
            message: 'Password updated successfully',
            data: updatedUser,
            access_token: token
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        });

    }
    return;
}

export async function removeUser(req: Request, res: Response) {
    const _id = req.user.id;
    const { password } = req.body;
    try {
        const user = await User.findOne({ _id: _id});
        if (!user) {
            res.status(404).json({
                message: 'User not found'
            })
            return;
        }
        const passwdTest = await bcrypt.compare(password, user.password);
        if (!passwdTest) {
            res.status(401).json({
                message: 'Invalid Password'
            })
            return;
        }
        const deletedUser = await User.findOneAndDelete({ _id: _id });
        if (!deletedUser) {
            res.status(404).json({
                message: 'User not found'
            })
            return;
        }
        res.status(200).json({
            message: 'User deleted successfully',
            data: deletedUser
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
    return;
}
