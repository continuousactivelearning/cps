import express from 'express';
import passport from 'passport';
import { updateUserOnboarding, getUserProfile, updateUserAvatar } from '../controllers/authController';
import { optionalAuth } from '../middleware/auth';

const router = express.Router();

// Google OAuth route
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
  session: false
}));

// Google OAuth callback
router.get('/google/callback', passport.authenticate('google', {
  session: false,
  failureRedirect: 'http://localhost:5173/login',
}), (req, res) => {
  const user = req.user as any;
  const token = user.token;
  const isFirstTime = user.isFirstTime;

  const html = `
    <html>
      <body>
        <script>
          window.opener.postMessage(${JSON.stringify({ token, user, isFirstTime })}, "http://localhost:5173");
          window.close();
        </script>
      </body>
    </html>
  `;

  res.send(html);
});

// ✅ Onboarding data route with optional auth middleware
router.post('/onboarding', optionalAuth, updateUserOnboarding);

// ✅ Get user profile route
router.get('/profile', getUserProfile);

// ✅ Update user avatar route
router.put('/avatar', updateUserAvatar);

// ✅ Debug route to check users in database
router.get('/debug/users', async (req, res) => {
  try {
    const User = require('../models/User').default;
    const users = await User.find({}).select('name email userInfo knownConcepts');
    res.json({ 
      message: 'Users in database', 
      count: users.length,
      users: users.map((user: any) => ({
        name: user.name,
        email: user.email,
        hasUserInfo: !!user.userInfo,
        hasKnownConcepts: !!user.knownConcepts,
        userInfoFields: user.userInfo ? Object.keys(user.userInfo) : [],
        topicsCount: user.knownConcepts?.topics?.length || 0
      }))
    });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
});

// ✅ Create test user with sample data (for development)
router.post('/debug/create-test-user', async (req: any, res: any) => {
  try {
    const User = require('../models/User').default;
    
    const testUser = {
      name: 'Test User',
      email: 'test@example.com',
      avatar: 'https://via.placeholder.com/150',
      userInfo: {
        programmingExperience: 'Intermediate',
        knownLanguages: ['JavaScript', 'Python', 'React'],
        dsaExperience: 'Beginner',
        preferredPace: 'Medium'
      },
      knownConcepts: {
        topics: [
          {
            id: 'arrays',
            name: 'Arrays',
            type: 'data-structure',
            subtopics: [
              { id: 'array-basics', name: 'Array Basics', type: 'concept' },
              { id: 'array-operations', name: 'Array Operations', type: 'concept' }
            ]
          },
          {
            id: 'linked-lists',
            name: 'Linked Lists',
            type: 'data-structure',
            subtopics: [
              { id: 'singly-linked-list', name: 'Singly Linked List', type: 'concept' }
            ]
          }
        ],
        totalTopics: 2,
        totalSubtopics: 3
      }
    };

    // Check if test user already exists
    const existing = await User.findOne({ email: testUser.email });
    if (existing) {
      return res.json({ message: 'Test user already exists', user: existing });
    }

    const user = new User(testUser);
    await user.save();
    
    res.json({ message: 'Test user created successfully', user });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
});

export default router;
