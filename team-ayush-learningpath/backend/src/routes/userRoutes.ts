import { Router } from 'express';
import { getDashboard, updateProfile, logLearningActivity } from '../controllers/userController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.use(protect);

router.get('/dashboard', getDashboard);
router.put('/profile', updateProfile);
router.post('/learn/:conceptId', logLearningActivity);

export default router;