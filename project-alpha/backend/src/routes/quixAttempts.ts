import express, { Request, Response, Router } from 'express';
import mongoose from 'mongoose';
import { authenticate } from '../middleware/auth';
import User from '../models/User';

const router: Router = express.Router();
const MAX_ATTEMPTS_PER_DAY = 3;

// Get the database connection
const getDb = () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.db;
  }
  return null;
};

// Endpoint to record and check quiz attempts
router.post('/quiz-attempts', authenticate, async (req: Request, res: Response): Promise<void> => {
  const userId = req.userId; // Get userId from authenticated request
  const { quizId, score, passed, topic } = req.body; // Include topic from frontend
  if (!topic) {
    res.status(400).json({ message: 'Topic is required.' });
    return;
  }
  
  const db = getDb();
  if (!db) {
    res.status(500).json({ message: 'Database connection not available.' });
    return;
  }
  
  const today = new Date().toISOString().split('T')[0]; // Current date (YYYY-MM-DD)

  try {
    // Find attempts for this user and course today
    const startOfDay = new Date(today);
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    const attemptsToday = await db.collection('quizAttempts').countDocuments({
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
    await db.collection('quizAttempts').insertOne({
      userId,
      topic, // Store topic with attempt
      quizId,
      score,
      passed,
      timestamp: new Date(),
    });

    // Also save to user's profile
    const user = await User.findById(userId);
    if (user) {
      // Add topic to user's topics if not already present
      if (!user.topics.includes(topic)) {
        user.topics.push(topic);
      }
      
      // Add quiz score to user's quizScores
      user.quizScores.push({
        topic,
        score,
        date: new Date()
      });
      
      await user.save();
    }

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
router.get('/quiz-attempts', authenticate, async (req: Request, res: Response): Promise<void> => {
  const userId = req.userId; // Get userId from authenticated request
  const topic = req.query.topic as string; // Get topic from query
  if (!topic) {
    res.status(400).json({ message: 'Topic is required.' });
    return;
  }
  
  const db = getDb();
  if (!db) {
    res.status(500).json({ message: 'Database connection not available.' });
    return;
  }
  
  const today = new Date().toISOString().split('T')[0];

  try {
    const startOfDay = new Date(today);
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    const attemptsToday = await db.collection('quizAttempts').countDocuments({
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
