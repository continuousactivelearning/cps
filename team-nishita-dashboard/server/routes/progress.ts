import { Router, Request, Response, NextFunction } from 'express';
import { UserProgress } from '../models/UserProgress.js';
import { User } from '../models/user.js';
import { jwtMiddleware } from '../middleware/jwt.js';

export const progressRouter = Router();

// All routes require authentication
progressRouter.use(jwtMiddleware);

// Get user's overall progress summary
progressRouter.get('/summary', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id;
    
    // Get user's total progress data
    const totalProgress = await UserProgress.aggregate([
      { $match: { userId: userId } },
      {
        $group: {
          _id: null,
          totalLessonsCompleted: { $sum: '$lessonsCompleted' },
          totalQuizzesTaken: { $sum: '$quizzesTaken' },
          totalStudyTime: { $sum: '$studyTime' },
          totalPointsEarned: { $sum: '$pointsEarned' },
          totalCheckIns: { $sum: { $cond: ['$isCheckedIn', 1, 0] } }
        }
      }
    ]);

    // Get user's current streak and total points
    const user = await User.findById(userId);
    
    const summary = {
      totalLessonsCompleted: totalProgress[0]?.totalLessonsCompleted || 0,
      totalQuizzesTaken: totalProgress[0]?.totalQuizzesTaken || 0,
      totalStudyTime: totalProgress[0]?.totalStudyTime || 0,
      totalPointsEarned: totalProgress[0]?.totalPointsEarned || 0,
      totalCheckIns: totalProgress[0]?.totalCheckIns || 0,
      currentStreak: user?.loginStreak || 0,
      totalPoints: user?.totalPoints || 0,
      loginStreak: user?.loginStreak || 0
    };

    res.status(200).json({ summary });
  } catch (error) {
    next(error);
  }
});

// Get user's progress for the last 7 days
progressRouter.get('/weekly', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id;
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const weeklyProgress = await UserProgress.find({
      userId: userId,
      date: { $gte: sevenDaysAgo }
    }).sort({ date: 1 });

    res.status(200).json({ weeklyProgress });
  } catch (error) {
    next(error);
  }
});

// Get user's progress for the last 30 days
progressRouter.get('/monthly', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id;
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const monthlyProgress = await UserProgress.find({
      userId: userId,
      date: { $gte: thirtyDaysAgo }
    }).sort({ date: 1 });

    res.status(200).json({ monthlyProgress });
  } catch (error) {
    next(error);
  }
});

// Update user progress (for tracking daily activities)
progressRouter.post('/update', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id;
    const { lessonsCompleted, quizzesTaken, studyTime, pointsEarned, isCheckedIn } = req.body;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Find existing progress for today or create new one
    let progress = await UserProgress.findOne({
      userId: userId,
      date: today
    });

    if (progress) {
      // Update existing progress
      progress.lessonsCompleted += lessonsCompleted || 0;
      progress.quizzesTaken += quizzesTaken || 0;
      progress.studyTime += studyTime || 0;
      progress.pointsEarned += pointsEarned || 0;
      progress.isCheckedIn = isCheckedIn || progress.isCheckedIn;
      await progress.save();
    } else {
      // Create new progress entry
      progress = await UserProgress.create({
        userId: userId,
        lessonsCompleted: lessonsCompleted || 0,
        quizzesTaken: quizzesTaken || 0,
        studyTime: studyTime || 0,
        pointsEarned: pointsEarned || 0,
        isCheckedIn: isCheckedIn || false,
        date: today
      });
    }

    // Update user's total points if points were earned
    if (pointsEarned && pointsEarned > 0) {
      await User.findByIdAndUpdate(userId, {
        $inc: { totalPoints: pointsEarned }
      });
    }

    res.status(200).json({ 
      message: 'Progress updated successfully',
      progress 
    });
  } catch (error) {
    next(error);
  }
});

// Get progress statistics for charts
progressRouter.get('/stats', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id;
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    // Get daily progress for the last 30 days
    const dailyStats = await UserProgress.aggregate([
      { $match: { userId: userId, date: { $gte: thirtyDaysAgo } } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          lessonsCompleted: { $sum: '$lessonsCompleted' },
          quizzesTaken: { $sum: '$quizzesTaken' },
          studyTime: { $sum: '$studyTime' },
          pointsEarned: { $sum: '$pointsEarned' },
          checkIns: { $sum: { $cond: ['$isCheckedIn', 1, 0] } }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    res.status(200).json({ dailyStats });
  } catch (error) {
    next(error);
  }
});
