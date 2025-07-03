import express from 'express';
import { getRecommendations, refreshRecommendations } from '../controllers/recommendationController';
import { auth } from '../middleware/auth';

const router = express.Router();

router.get('/', auth, getRecommendations);
router.post('/refresh', auth, refreshRecommendations);

export default router; 