import express from 'express';
import {
  submitExamResult,
  updateExamResult,
  getUserExamResults,
  getTopicExamResults,
  // getExamResultById, // Uncomment if implemented in controller
} from '../controllers/examResultController';
import { auth, adminAuth } from '../middleware/auth';

const router = express.Router();

router.post('/', auth, submitExamResult);
router.post('/update', auth, updateExamResult);
router.get('/user', auth, getUserExamResults);
router.get('/topic/:topicName', auth, getTopicExamResults);
// router.get('/:id', auth, getExamResultById); // Uncomment if implemented

// Test route to verify backend is running
router.get('/test', (req, res) => {
  res.json({ message: 'ExamResult route is working!' });
});

export default router;