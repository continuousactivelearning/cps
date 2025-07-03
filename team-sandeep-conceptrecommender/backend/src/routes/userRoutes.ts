import express from 'express';
import { register, login, getProfile, updateProfile, verifyToken, uploadProfileImage, getSecurityQuestion, verifySecurityAnswer, resetPassword } from '../controllers/userController';
import { auth, authenticateToken } from '../middleware/auth';
import { upload } from '../middleware/upload';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', auth, getProfile);
router.patch('/profile', auth, updateProfile);
router.get('/verify', authenticateToken, verifyToken);
router.post('/upload-profile-image', auth, upload.single('image'), uploadProfileImage);
router.post('/forgot-password', getSecurityQuestion);
router.post('/verify-security-answer', verifySecurityAnswer);
router.post('/reset-password', resetPassword);

export default router; 