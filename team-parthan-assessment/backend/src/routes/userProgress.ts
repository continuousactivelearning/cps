import express, { Request, Response } from 'express';
import Course, { ICourse } from '../models/Course';
import UserCourseProgress, { IUserCourseProgress } from '../models/UserCourseProgress';
import User, { IUser } from '../models/User';
import { auth } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/',auth, async (req: any, res: Response): Promise<void> => {
  const userId = req.userId;
  
  try {
    let userProgress = await UserCourseProgress.findOne({ userId });

    if (!userProgress) {
      const allCourses: ICourse[] = await Course.find();

      const topics = allCourses.map(course => ({
        id: course._id,
        name: course.name,
        prerequisites: course.prerequisites,
        status: course._id === 'basic_programming' ? 'ready' : 'not-started',
        attempts: 0,
        bestScore: 0,
        totalQuestions: 5,
        lastAttempt: null,
      }));

      userProgress = new UserCourseProgress({ userId, courseId: 'default', topics });
      await userProgress.save();
    }

    res.json(userProgress.topics);
  } catch (error) {
    console.error("Error fetching topics:", error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.post('/complete', auth, async (req: any, res: Response): Promise<void> => {
  const updates = req.body; // Expecting an array of { courseId, passed, score }

  if (!Array.isArray(updates)) {
    res.status(400).json({ error: 'Expected an array of course updates' });
    return;
  }

  try {
    const userId = req.userId;
    let progress = await UserCourseProgress.findOne({ userId });

    if (!progress) {
      res.status(404).json({ error: 'Progress not found' });
      return;
    }

    for (const { courseId, passed, score, total } of updates) {
      const topicIndex = progress.topics.findIndex(t => t.id === courseId);
      if (topicIndex === -1) continue;

      const topic = progress.topics[topicIndex];
      topic.score = score;
      topic.status = passed ? 'mastered' : 'in-progress';
      topic.attempts = (topic.attempts || 0) + 1;
      topic.bestScore = Math.max(topic.bestScore || 0, score);
      topic.lastAttempt = new Date();
      topic.totalQuestions = (total)? total : 5; 

      if (passed) {
        progress.topics.forEach(t => {
          if (
            t.status === 'not-started' &&
            Array.isArray(t.prerequisites) &&
            t.prerequisites.includes(courseId)
          ) {
            const allPreReqsMastered = t.prerequisites.every(preqId => {
              const preq = progress.topics.find(tp => tp.id === preqId);
              return preq && preq.status === 'mastered';
            });

            if (allPreReqsMastered) {
              t.status = 'ready';
            }
          }
        });
      }
    }

    await progress.save();
    res.json(progress.topics);
  } catch (err) {
    console.error("Error updating progress:", err);
    res.status(500).json({ error: 'Failed to update progress' });
  }
});


export default router;
