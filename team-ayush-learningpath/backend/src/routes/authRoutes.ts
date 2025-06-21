import { Router } from 'express';
import {
    registerUser,
    loginUser,
    getMyProfile,
    changePassword,
    logoutUser // <-- Logout controller included
} from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';
// Update the import path if the file is named differently or located elsewhere
import { registerRules, loginRules, changePasswordRules, validate } from '../validators/authValidator'; // Make sure this file exists at the specified path

const router = Router();

router.post('/register', registerRules(), validate, registerUser);
router.post('/login', loginRules(), validate, loginUser);
router.get('/me', protect, getMyProfile);
router.put('/changepassword', protect, changePasswordRules(), validate, changePassword);
router.post('/logout', protect, logoutUser); // <-- Logout route added

export default router;