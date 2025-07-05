import express from 'express';
import passport from 'passport';
import { updateUserOnboarding, getUserProfile, updateUserAvatar, verifyUser, createTestUser, debugUsers } from '../controllers/authController';
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

// ✅ Verify user route for authentication
router.get('/verify', verifyUser);

// ✅ Update user avatar route
router.put('/avatar', updateUserAvatar);

// ✅ Debug route to check users in database
router.get('/debug/users', debugUsers);

// ✅ Create test user with sample data (for development)
router.post('/debug/create-test-user', createTestUser);

export default router;
