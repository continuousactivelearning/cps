import express from 'express';
import {
  getAllTopics,
  getTopicById,
  createTopic,
  updateTopic,
  deleteTopic,
  updateTutorialProgress,
} from '../controllers/topicController';
import { auth, adminAuth } from '../middleware/auth';

const router = express.Router();

router.get('/', getAllTopics);
router.get('/:id', getTopicById);
router.post('/', auth, adminAuth, createTopic);
router.patch('/:id', auth, adminAuth, updateTopic);
router.delete('/:id', auth, adminAuth, deleteTopic);
router.patch('/:topicId/tutorials/:tutorialId', auth, updateTutorialProgress);

export default router; 