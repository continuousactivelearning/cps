// utils/badgeChecker.ts
import { Achievement, IAchievement } from '../models/Achievement.js';
import UserBadge from '../models/UserBadge.js';
import { UserProgress } from '../models/UserProgress.js';
import { User } from '../models/user.js';
import { Types } from 'mongoose';

// Returns the newly unlocked achievement IDs
export const checkBadges = async (userId: string): Promise<string[]> => {
  const newlyUnlocked: string[] = [];
  try {
    const achievements = await Achievement.find({ isActive: true }).lean<IAchievement[]>();
    const userBadges = await UserBadge.find({ userId }).select('achievementId');
    const earnedAchievementIds = userBadges.map(badge => badge.achievementId.toString());

    const user = await User.findById(userId);
    if (!user) return [];

    const progressStats = await UserProgress.aggregate([
      { $match: { userId: new Types.ObjectId(userId) } },
      {
        $group: {
          _id: null,
          totalLessons: { $sum: '$lessonsCompleted' },
          totalQuizzes: { $sum: '$quizzesTaken' },
          totalStudyTime: { $sum: '$studyTime' },
          totalPointsFromProgress: { $sum: '$pointsEarned' },
          dailyCheckins: { $sum: { $cond: ['$isCheckedIn', 1, 0] } }
        }
      }
    ]);
    const stats = progressStats[0] || {};

    for (const achievement of achievements) {
      if (earnedAchievementIds.includes(String(achievement._id))) continue;

      const { field, operator, value } = achievement.condition;
      let valueToCheck = 0;
      switch (field) {
        case 'lessonsCompleted': valueToCheck = stats.totalLessons || 0; break;
        case 'quizzesTaken': valueToCheck = stats.totalQuizzes || 0; break;
        case 'currentStreak': valueToCheck = user.loginStreak || 0; break; // keep this for backwards compatibility
        case 'loginStreak': valueToCheck = user.loginStreak || 0; break;
        case 'totalPoints': valueToCheck = user.totalPoints || 0; break;
        case 'dailyCheckins': valueToCheck = stats.dailyCheckins || 0; break;
        case 'studyTime': valueToCheck = stats.totalStudyTime || 0; break;
      }


      let qualifies = false;
      if (operator === 'gte') qualifies = valueToCheck >= value;
      else if (operator === 'eq') qualifies = valueToCheck === value;
      else if (operator === 'lte') qualifies = valueToCheck <= value;

      if (qualifies) {
        await awardBadge(userId, String(achievement._id), achievement.pointsAwarded);
        newlyUnlocked.push(String(achievement._id));
      }
    }
  } catch (error) {
    console.error('Error checking badges:', error);
  }

  return newlyUnlocked;
};

// Award badge to user
const awardBadge = async (userId: string, achievementId: string, pointsAwarded: number) => {
  try {
    await UserBadge.create({ userId, achievementId, pointsAwarded });
    await User.findByIdAndUpdate(userId, { $inc: { totalPoints: pointsAwarded } });
    console.log(`Badge awarded to user ${userId}: ${achievementId} (+${pointsAwarded} points)`);
  } catch (error) {
    console.error('Error awarding badge:', error);
  }
};

export const updateUserLevel = async (userId: string, totalPoints: number): Promise<string> => {
  let level = 'Beginner';
  if (totalPoints >= 1000) level = 'Master';
  else if (totalPoints >= 600) level = 'Expert';
  else if (totalPoints >= 300) level = 'Scholar';
  else if (totalPoints >= 100) level = 'Learner';

  await User.findByIdAndUpdate(userId, { level });
  return level;
};
