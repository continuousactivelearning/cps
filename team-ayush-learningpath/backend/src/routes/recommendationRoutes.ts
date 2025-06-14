import { Router } from 'express';
import { getRecommendations } from '../controllers/recommendationController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', protect, getRecommendations);

export default router;