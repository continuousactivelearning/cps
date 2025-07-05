// backend/controllers/userController.ts
import { Request, Response } from 'express';
import User from '../models/User';

export const updateUserOnboarding = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, userInfo, knownConcepts } = req.body;

    console.log('📥 Onboarding request received:', {
      email,
      hasUserInfo: !!userInfo,
      hasKnownConcepts: !!knownConcepts,
      userInfoKeys: userInfo ? Object.keys(userInfo) : [],
      knownConceptsKeys: knownConcepts ? Object.keys(knownConcepts) : []
    });

    if (!email || !userInfo || !knownConcepts) {
      console.warn('❗ Missing required fields in onboarding submission');
      res.status(400).json({ message: 'Missing required fields: email, userInfo, or knownConcepts' });
      return;
    }

    // First, let's check if the user exists
    const existingUser = await User.findOne({ email });
    console.log('🔍 User lookup result:', {
      email,
      userExists: !!existingUser,
      userId: existingUser?._id
    });

    if (!existingUser) {
      console.warn(`❗ User not found with email: ${email}`);
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          userInfo,
          knownConcepts,
          updatedAt: new Date(),
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      console.warn(`❗ Failed to update user with email: ${email}`);
      res.status(404).json({ message: 'Failed to update user' });
      return;
    }

    console.log(`✅ Onboarding data updated for user: ${email}`);
    console.log('📊 Updated user data preview:', {
      hasUserInfo: !!updatedUser.userInfo,
      hasKnownConcepts: !!updatedUser.knownConcepts,
      topicsCount: updatedUser.knownConcepts?.topics?.length || 0
    });
    
    res.status(200).json({ message: 'Onboarding data saved successfully', user: updatedUser });
  } catch (error) {
    console.error('❌ Error saving onboarding data:', error);
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

    const user = await User.findOne({ email }).select('-__v');
    
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    console.log(`✅ User profile fetched for: ${email}`);
    res.status(200).json({ user });
  } catch (error) {
    console.error('❌ Error fetching user profile:', error);
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

    console.log(`✅ Avatar updated for user: ${email}`);
    res.status(200).json({ message: 'Avatar updated successfully', user: updatedUser });
  } catch (error) {
    console.error('❌ Error updating user avatar:', error);
    res.status(500).json({ message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};
