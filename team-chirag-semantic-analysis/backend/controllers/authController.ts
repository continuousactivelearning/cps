// backend/controllers/userController.ts
import { Request, Response } from 'express';
import User from '../models/User';

export const updateUserOnboarding = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, userInfo, knownConcepts } = req.body;

    if (!email || !userInfo || !knownConcepts) {
      res.status(400).json({ message: 'Missing required fields: email, userInfo, or knownConcepts' });
      return;
    }

    // First, let's check if the user exists
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          userInfo,
          knownConcepts,
          isFirstTime: false, // Mark onboarding as completed
          updatedAt: new Date(),
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: 'Failed to update user' });
      return;
    }
    
    res.status(200).json({ message: 'Onboarding data saved successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.query;

    if (!email) {
      res.status(400).json({ message: 'Email is required' });
      return;
    }

    const user = await User.findOne({ email }).select('-__v -password');
    
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Add computed hasCompletedOnboarding field - be more lenient
    const hasCompletedOnboarding = !user.isFirstTime || 
      !!(user.userInfo && (
        user.userInfo.programmingExperience || 
        (user.userInfo.knownLanguages && user.userInfo.knownLanguages.length > 0) ||
        user.userInfo.dsaExperience ||
        user.userInfo.preferredPace
      ));

    const userWithOnboardingStatus = {
      ...user.toObject(),
      hasCompletedOnboarding
    };

    res.status(200).json({ user: userWithOnboardingStatus });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export const updateUserAvatar = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, avatar } = req.body;

    if (!email || !avatar) {
      res.status(400).json({ message: 'Email and avatar are required' });
      return;
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          avatar,
          updatedAt: new Date(),
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json({ message: 'Avatar updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export const verifyUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.query;

    if (!email) {
      res.status(400).json({ message: 'Email is required' });
      return;
    }

    const user = await User.findOne({ email }).select('email name avatar');
    
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json({ 
      message: 'User verified', 
      user: {
        email: user.email,
        name: user.name,
        avatar: user.avatar
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

// Local Authentication Endpoints
export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: 'Name, email, and password are required' });
      return;
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists with this email' });
      return;
    }

    // Hash password (in production, use bcrypt)
    // For now, we'll store plaintext but in production you should hash it
    // const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = new User({
      name,
      email,
      password, // In production: password: hashedPassword
      isFirstTime: true,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const savedUser = await newUser.save();
    
    // Return user data without password
    const userResponse = {
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      isFirstTime: savedUser.isFirstTime,
      hasCompletedOnboarding: false // New users haven't completed onboarding yet
    };

    res.status(201).json({ 
      message: 'User registered successfully', 
      user: userResponse,
      token: 'dummy-token-' + savedUser._id // In production, generate proper JWT
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: 'Email and password are required' });
      return;
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Check password (in production, use bcrypt.compare)
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    const isPasswordValid = password === user.password; // Simple comparison for demo

    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Check if user has completed onboarding - be more lenient
    // Consider onboarding complete if user has ANY userInfo data or isFirstTime is false
    const hasCompletedOnboarding = !user.isFirstTime || 
      !!(user.userInfo && (
        user.userInfo.programmingExperience || 
        (user.userInfo.knownLanguages && user.userInfo.knownLanguages.length > 0) ||
        user.userInfo.dsaExperience ||
        user.userInfo.preferredPace
      ));
    
    // Return user data without password
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      isFirstTime: user.isFirstTime,
      hasCompletedOnboarding: hasCompletedOnboarding
    };

    res.status(200).json({ 
      message: 'Login successful', 
      user: userResponse,
      token: 'dummy-token-' + user._id // In production, generate proper JWT
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};
