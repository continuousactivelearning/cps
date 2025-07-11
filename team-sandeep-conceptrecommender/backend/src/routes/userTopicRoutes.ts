// Author:@B V Sai Pranav
import express, { Request, Response } from 'express';
import { selectTopics, getUserTopics, updateTopicProgress, startTopic } from '../controllers/userTopicController';
import { auth } from '../middleware/auth';
import { UserTopic } from '../models/UserTopic';

const router = express.Router();

// Custom AuthRequest interface to include user
interface AuthRequest extends Request {
  user?: any;
}

// Select topics after signup
router.post('/select', auth, selectTopics);

// Start learning a topic
router.post('/start', auth, startTopic);

// Get user's selected topics
router.get('/', auth, getUserTopics);

// Update topic progress
router.patch('/:topicId/progress', auth, updateTopicProgress);

// Get all user topics for the logged-in user
router.get('/my', auth, async (req: AuthRequest, res: Response) => {
  try {
    const userEmail = req.user?.email;
    const userTopics = await UserTopic.find({ userEmail });
    res.json(userTopics);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user topics' });
  }
});

export default router;
