import { Router, Request, Response, NextFunction } from 'express';
import { jwtMiddleware } from '../middleware/jwt.js';
import { requireRole } from '../middleware/roleMiddleware.js';
import { Achievement, IAchievement } from '../models/Achievement.js';
import UserBadge, { IUserBadge } from '../models/UserBadge.js';
import { User } from '../models/user.js';
import mongoose from 'mongoose';
import { checkBadges } from '../utils/badgeChecker.js';

export const achievementRouter = Router();

achievementRouter.get('/all', jwtMiddleware, requireRole('user'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).json({ message: 'Invalid or missing user ID' });
      return;
    }

    // 🔑 Check and award new badges
    const newlyUnlockedIds = await checkBadges(userId);

    // 🔑 Get user's earned badges
    const userBadges: IUserBadge[] = await UserBadge.find({ userId }).select('achievementId');
    const unlockedIds = userBadges.map(badge => badge.achievementId.toString());

    // 🔑 Get all achievements (with proper typing)
    const allAchievements = await Achievement.find({ isActive: true }) as (mongoose.Document & IAchievement)[];

    // ✅ Prepare unlocked badges with justUnlocked flag
    const unlockedBadges = allAchievements
      .filter(ach => unlockedIds.includes((ach._id as mongoose.Types.ObjectId).toString()))
      .map(ach => ({
        _id: (ach._id as mongoose.Types.ObjectId).toString(),
        name: (ach as IAchievement).name,
        description: (ach as IAchievement).description,
        pointsAwarded: (ach as IAchievement).pointsAwarded,
        imageUrl: (ach as IAchievement).imageUrl,
        condition: (ach as IAchievement).condition,
        justUnlocked: newlyUnlockedIds.includes((ach._id as mongoose.Types.ObjectId).toString())
      }));

    // ✅ Prepare locked badges
    const lockedBadges = allAchievements
      .filter(ach => !unlockedIds.includes((ach._id as mongoose.Types.ObjectId).toString()))
      .map(ach => ({
        _id: (ach._id as mongoose.Types.ObjectId).toString(),
        name: (ach as IAchievement).name,
        description: (ach as IAchievement).description,
        pointsAwarded: (ach as IAchievement).pointsAwarded,
        imageUrl: (ach as IAchievement).imageUrl,
        condition: (ach as IAchievement).condition
      }));

    // ✅ Get user profile data
    const user = await User.findById(userId).select('totalPoints loginStreak highestStreak level loginDays');
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json({
      unlockedBadges,
      lockedBadges,
      totalPoints: user.totalPoints,
      currentStreak: user.loginStreak,
      highestStreak: user.highestStreak,
      level: user.level,
      totalActiveDays: user.loginDays?.length || 0
    });
  } catch (err) {
    next(err);
  }
});