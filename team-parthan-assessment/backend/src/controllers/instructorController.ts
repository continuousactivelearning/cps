import { Request, Response } from 'express';
import User from '../models/User';
import QuizConcern from '../models/QuizConcern';
import UserCourseProgress from '../models/UserCourseProgress';

export const getStudents = async (req: any, res: Response) => {
  const students = await User.find({ enrolledUnder: req.user.instructorCode });
  res.json(students);
};

export const getConcerns = async (req: any, res: Response) => {
  const concerns = await QuizConcern.find({ instructorCode: req.user.instructorCode });
  res.json(concerns);
};

export const resolveConcern = async (req: Request, res: Response): Promise<void> => {
  const { concernId, topicId, newStatus, scoreAdjustment, studentId } = req.body;

  // 1. Mark the concern as resolved
  await QuizConcern.findByIdAndUpdate(concernId, { status: 'resolved' });

  // 2. Update user course progress
  const userProgress = await UserCourseProgress.findOne({ userId: studentId });
  if (!userProgress) { res.status(404).json({ message: 'User progress not found' });
    return;}

  const topic = userProgress.topics.find(t => t.id === topicId);
  if (!topic) {res.status(404).json({ message: 'Topic not found in user progress' });
    return;}

  if (newStatus) topic.status = newStatus;
  if (scoreAdjustment !== undefined) topic.score = scoreAdjustment;

  await userProgress.save();

  res.json({ message: 'Concern resolved and progress updated' });
};


export const getStudentProgress = async (req: Request, res: Response): Promise<void> => {
  const { studentId } = req.params;

  try {
    const progress = await UserCourseProgress.findOne({ userId: studentId });
    if (!progress) {
      res.status(404).json({ message: 'Progress not found' });
      return;
    }

    const masteredTopics = progress.topics.filter(t => t.status === 'mastered');
    const averageScore = progress.topics.reduce((acc, topic) => {
    if (topic.score && topic.totalQuestions) {
      return acc + (topic.score / topic.totalQuestions * 100);
    }
    return acc;
  }, 0) / progress.topics.filter(t => t.score).length || 0;


    res.json({
      masteredTopicsCount: masteredTopics.length,
      averageScore: averageScore,
      masteredTopics: masteredTopics.map(t => t.name),
    });
  } catch (err) {
    console.error('Error in fetching progress:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const removeConcern = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await QuizConcern.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Concern not found' });
    }
    res.status(200).json({ success: true, message: 'Concern removed successfully' });
  } catch (err) {
    console.error('Error removing concern:', err);
    res.status(500).json({ success: false, message: 'Failed to delete concern' });
  }
};