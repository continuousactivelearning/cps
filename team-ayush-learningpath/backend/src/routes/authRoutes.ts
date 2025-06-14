import { Router } from 'express';
import { registerUser, loginUser, getMyProfile, changePassword, logoutUser } from '../controllers/authController';
import { protect } from '../middlewares/authMiddleware';
import { registerRules, loginRules, changePasswordRules, validate } from '../validators/authValidator';

const router = Router();

router.post('/register', registerRules(), validate, registerUser);
router.post('/login', loginRules(), validate, loginUser);
router.get('/me', protect, getMyProfile);
router.put('/changepassword', protect, changePasswordRules(), validate, changePassword);
router.post('/logout', protect, logoutUser);

export default router;