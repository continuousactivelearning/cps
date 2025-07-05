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

    console.log(`✅ User verified: ${email}`);
    res.status(200).json({ 
      message: 'User verified', 
      user: {
        email: user.email,
        name: user.name,
        avatar: user.avatar
      }
    });
  } catch (error) {
    console.error('❌ Error verifying user:', error);
    res.status(500).json({ message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

// Debug endpoints for development
export const createTestUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const testUser = new User({
      email: 'test@example.com',
      name: 'Test User',
      avatar: 'https://via.placeholder.com/150',
      userInfo: {
        programmingExperience: 'intermediate',
        knownLanguages: ['JavaScript', 'Python', 'TypeScript'],
        dsaExperience: 'beginner',
        preferredPace: 'moderate'
      },
      knownConcepts: {
        topics: [
          { name: 'Arrays', confidence: 8 },
          { name: 'Linked Lists', confidence: 6 },
          { name: 'Binary Trees', confidence: 4 }
        ]
      }
    });

    await testUser.save();
    console.log('✅ Test user created successfully');
    res.status(200).json({ message: 'Test user created', user: testUser });
  } catch (error: any) {
    if (error.code === 11000) {
      console.log('ℹ️ Test user already exists');
      res.status(200).json({ message: 'Test user already exists' });
    } else {
      console.error('❌ Error creating test user:', error);
      res.status(500).json({ message: 'Error creating test user', error: error instanceof Error ? error.message : 'Unknown error' });
    }
  }
};

export const debugUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find({}).select('email name avatar userInfo knownConcepts').limit(10);
    console.log(`📊 Debug: Found ${users.length} users`);
    res.status(200).json({ count: users.length, users });
  } catch (error) {
    console.error('❌ Error fetching debug users:', error);
    res.status(500).json({ message: 'Error fetching users', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};
