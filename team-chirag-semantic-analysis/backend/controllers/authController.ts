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
          isFirstTime: false, // Mark onboarding as completed
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

    console.log(`✅ User profile fetched for: ${email}`, {
      hasUserInfo: !!user.userInfo,
      hasKnownConcepts: !!user.knownConcepts,
      hasCompletedOnboarding: userWithOnboardingStatus.hasCompletedOnboarding
    });
    
    res.status(200).json({ user: userWithOnboardingStatus });
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
      password: 'test123', // Simple password for testing
      avatar: 'https://via.placeholder.com/150',
      isFirstTime: false, // Mark as not first time
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
      console.log('ℹ️ Test user already exists, updating...');
      try {
        const updatedUser = await User.findOneAndUpdate(
          { email: 'test@example.com' },
          {
            $set: {
              name: 'Test User',
              password: 'test123',
              isFirstTime: false,
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
            }
          },
          { new: true }
        );
        res.status(200).json({ message: 'Test user updated', user: updatedUser });
      } catch (updateError) {
        console.error('❌ Error updating test user:', updateError);
        res.status(500).json({ message: 'Error updating test user' });
      }
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

// Debug endpoint to check specific user's data
export const debugUserData = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.query;
    
    if (!email) {
      res.status(400).json({ message: 'Email is required' });
      return;
    }

    const user = await User.findOne({ email }).select('-password');
    
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const hasCompletedOnboarding = !user.isFirstTime || 
      !!(user.userInfo && (
        user.userInfo.programmingExperience || 
        (user.userInfo.knownLanguages && user.userInfo.knownLanguages.length > 0) ||
        user.userInfo.dsaExperience ||
        user.userInfo.preferredPace
      ));

    const debugData = {
      email: user.email,
      name: user.name,
      isFirstTime: user.isFirstTime,
      hasUserInfo: !!user.userInfo,
      userInfo: user.userInfo,
      hasKnownConcepts: !!user.knownConcepts,
      knownConcepts: user.knownConcepts,
      hasCompletedOnboarding,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };

    console.log(`🔍 Debug data for ${email}:`, debugData);
    res.status(200).json({ debugData });
  } catch (error) {
    console.error('❌ Error debugging user data:', error);
    res.status(500).json({ message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

// Local Authentication Endpoints
export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    console.log('📝 Registration request received:', { email, name });

    if (!name || !email || !password) {
      res.status(400).json({ message: 'Name, email, and password are required' });
      return;
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.warn(`❗ User already exists with email: ${email}`);
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

    console.log(`✅ User registered successfully: ${email}`);
    
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
    console.error('❌ Error registering user:', error);
    res.status(500).json({ message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    console.log('🔐 Login request received:', { email });

    if (!email || !password) {
      res.status(400).json({ message: 'Email and password are required' });
      return;
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.warn(`❗ Login failed - user not found: ${email}`);
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Check password (in production, use bcrypt.compare)
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    const isPasswordValid = password === user.password; // Simple comparison for demo

    if (!isPasswordValid) {
      console.warn(`❗ Login failed - invalid password for: ${email}`);
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    console.log(`✅ User logged in successfully: ${email}`);
    
    // Check if user has completed onboarding - be more lenient
    // Consider onboarding complete if user has ANY userInfo data or isFirstTime is false
    const hasCompletedOnboarding = !user.isFirstTime || 
      !!(user.userInfo && (
        user.userInfo.programmingExperience || 
        (user.userInfo.knownLanguages && user.userInfo.knownLanguages.length > 0) ||
        user.userInfo.dsaExperience ||
        user.userInfo.preferredPace
      ));
    
    console.log(`🔍 Onboarding check for ${email}:`, {
      isFirstTime: user.isFirstTime,
      hasUserInfo: !!user.userInfo,
      programmingExp: user.userInfo?.programmingExperience,
      knownLanguages: user.userInfo?.knownLanguages?.length || 0,
      dsaExp: user.userInfo?.dsaExperience,
      preferredPace: user.userInfo?.preferredPace,
      hasCompletedOnboarding
    });
    
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
    console.error('❌ Error logging in user:', error);
    res.status(500).json({ message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};
