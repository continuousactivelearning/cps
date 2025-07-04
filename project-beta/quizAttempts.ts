import express, { Request, Response, Router } from 'express';
import { MongoClient } from 'mongodb';

const router: Router = express.Router();
const MAX_ATTEMPTS_PER_DAY = 3;

// MongoDB connection (replace with your connection string)
const client = new MongoClient('mongodb://localhost:27017');
const db = client.db('quizApp');
const attemptsCollection = db.collection('quizAttempts');

// Middleware to get userId from JWT or session (simplified)
const getUserId = (req: Request): string => {
  // Replace with actual JWT/session parsing logic
  return (req.headers['user-id'] as string) || 'default-user';
};

// Endpoint to record and check quiz attempts
router.post('/quiz-attempts', async (req: Request, res: Response): Promise<void> => {
  const userId = getUserId(req);
  const { quizId, score, passed, topic } = req.body; // Include topic from frontend
  if (!topic) {
    res.status(400).json({ message: 'Topic is required.' });
    return;
  }
  const today = new Date().toISOString().split('T')[0]; // Current date (YYYY-MM-DD)

  try {
    // Find attempts for this user and course today
    const startOfDay = new Date(today);
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    const attemptsToday = await attemptsCollection.countDocuments({
      userId,
      topic, // Filter by course topic
      timestamp: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    if (attemptsToday >= MAX_ATTEMPTS_PER_DAY) {
      res.status(403).json({
        canAttempt: false,
        attemptsToday,
        message: `Max attempts reached for ${topic} today. Please try again tomorrow.`,
      });
      return;
    }

    // Record the new attempt
    await attemptsCollection.insertOne({
      userId,
      topic, // Store topic with attempt
      quizId,
      score,
      passed,
      timestamp: new Date(),
    });

    res.json({
      canAttempt: true,
      attemptsToday: attemptsToday + 1,
      message: 'Attempt recorded.',
    });
  } catch (err) {
    console.error('Error handling quiz attempt:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Endpoint to check remaining attempts
router.get('/quiz-attempts', async (req: Request, res: Response): Promise<void> => {
  const userId = getUserId(req);
  const topic = req.query.topic as string; // Get topic from query
  if (!topic) {
    res.status(400).json({ message: 'Topic is required.' });
    return;
  }
  const today = new Date().toISOString().split('T')[0];

  try {
    const startOfDay = new Date(today);
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    const attemptsToday = await attemptsCollection.countDocuments({
      userId,
      topic, // Filter by course topic
      timestamp: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    res.json({
      canAttempt: attemptsToday < MAX_ATTEMPTS_PER_DAY,
      attemptsToday,
      message: attemptsToday >= MAX_ATTEMPTS_PER_DAY
        ? `Max attempts reached for ${topic} today. Please try again tomorrow.`
        : `${MAX_ATTEMPTS_PER_DAY - attemptsToday} attempt(s) remaining today for ${topic}.`,
    });
  } catch (err) {
    console.error('Error checking quiz attempts:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

export default router;
