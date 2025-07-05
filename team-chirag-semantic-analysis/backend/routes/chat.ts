import express from 'express';
import { 
  handleChat, 
  healthCheck, 
  getLearningSession, 
  resetLearningSession 
} from '../controllers/chatController';

const router = express.Router();

// Main chat endpoint - handles all chat messages with DSA learning capabilities
router.post('/', handleChat);

// Health check endpoint
router.get('/health', healthCheck);

// Learning session management
router.get('/session/:user_id', getLearningSession);
router.post('/session/:user_id/reset', resetLearningSession);

export default router;
