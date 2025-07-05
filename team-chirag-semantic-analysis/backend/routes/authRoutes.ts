import express from 'express';
import passport from 'passport';
import { updateUserOnboarding, getUserProfile, updateUserAvatar, verifyUser, registerUser, loginUser } from '../controllers/authController';
import { optionalAuth } from '../middleware/auth';
import { getConfig } from '../utils/environment';

const router = express.Router();
const config = getConfig();

// Local Authentication Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Google OAuth route
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
  session: false
}));

// Google OAuth callback
router.get('/google/callback', passport.authenticate('google', {
  session: false,
  failureRedirect: `${config.frontendUrl}/login`,
}), (req, res) => {
  const user = req.user as any;
  const token = user.token;
  const isFirstTime = user.isFirstTime;

  const html = `
    <html>
      <body>
        <script>
          window.opener.postMessage(${JSON.stringify({ token, user, isFirstTime })}, "${config.frontendUrl}");
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

export default router;
