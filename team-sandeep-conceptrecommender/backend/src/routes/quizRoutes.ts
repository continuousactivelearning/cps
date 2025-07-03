import express from 'express';
import { getTopicQuiz, submitQuiz, createQuiz, getRandomQuizQuestions } from '../controllers/quizController';
import { auth, adminAuth } from '../middleware/auth';

const router = express.Router();

// Get quiz for a topic
router.get('/topic/:topicName', auth, getTopicQuiz);

// Submit quiz answers
router.post('/topic/:topicName/submit', auth, submitQuiz);

// Create a new quiz (admin only)
router.post('/', auth, adminAuth, createQuiz);

// Get random quiz questions for a topic
router.get('/random', getRandomQuizQuestions);

export default router;