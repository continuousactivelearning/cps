import { Request, Response } from 'express';
import { ExamResult } from '../models/ExamResult';
import { Topic } from '../models/Topic';
import { UserTopic } from '../models/UserTopic';

interface AuthRequest extends Request {
  user?: any;
}

export const submitExamResult = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user || !req.user.email) {
      console.error('Auth error: req.user or req.user.email missing', req.user);
      return res.status(401).json({ message: 'User not authenticated or email missing' });
    }

    const { topicName, score, totalQuestions, correctAnswers, timeTaken } = req.body;
    // Validate required fields
    if (
      !topicName ||
      typeof score !== 'number' ||
      typeof totalQuestions !== 'number' ||
      typeof correctAnswers !== 'number' ||
      typeof timeTaken !== 'number'
    ) {
      console.error('Validation error: Missing or invalid fields', { topicName, score, totalQuestions, correctAnswers, timeTaken });
      return res.status(400).json({
        message: 'Missing or invalid required fields',
        details: { topicName, score, totalQuestions, correctAnswers, timeTaken }
      });
    }
    console.log('ExamResult payload:', { userEmail: req.user.email, topicName, score, totalQuestions, correctAnswers, timeTaken });

    // Use userEmail instead of userId, as required by the schema
    const examResult = new ExamResult({
      userEmail: req.user.email, 
      topicName,
      score,
      totalQuestions,
      correctAnswers,
      timeTaken,
      completedAt: new Date(), // ensure completedAt is set
    });

    try {
      await examResult.save();
      console.log('ExamResult saved:', examResult);
    } catch (saveErr) {
      console.error('Error saving ExamResult:', saveErr);
      return res.status(500).json({ message: 'Failed to save exam result', error: saveErr instanceof Error ? saveErr.message : saveErr });
    }

    // Determine status based on score
    const status: 'completed' | 'in-progress' = score >= 70 ? 'completed' : 'in-progress';

    // Upsert user-topic progress
    try {
      await UserTopic.findOneAndUpdate(
        { userEmail: req.user.email, topicName },
        {
          userEmail: req.user.email,
          topicName,
          status,
          progress: score,
          lastAccessed: new Date(),
        },
        { upsert: true, new: true }
      );
    } catch (userTopicErr) {
      console.error('Error updating UserTopic:', userTopicErr);
    }

    // Update topic status based on exam score (optional/global, not per user)
    try {
      const topic = await Topic.findOne({ name: topicName });
      if (topic) {
        if (score >= 90) {
          topic.status = 'completed';
        } else if (score >= 70) {
          topic.status = 'in-progress';
        }
        await topic.save();
      }
    } catch (topicErr) {
      console.error('Error updating Topic:', topicErr);
    }

    res.status(201).json(examResult);
  } catch (error) {
    console.error('submitExamResult error:', error);
    res.status(500).json({ message: 'Failed to submit exam result', error: error instanceof Error ? error.message : error });
  }
};

export const updateExamResult = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user || !req.user.email) {
      return res.status(401).json({ message: 'User not authenticated or email missing' });
    }

    const { topicName, score, totalQuestions, correctAnswers, timeTaken } = req.body;
    if (
      !topicName ||
      typeof score !== 'number' ||
      typeof totalQuestions !== 'number' ||
      typeof correctAnswers !== 'number' ||
      typeof timeTaken !== 'number'
    ) {
      return res.status(400).json({ message: 'Missing or invalid required fields' });
    }

    const userEmail = req.user.email;

    // Find the latest existing result for this user and topic
    const existingResult = await ExamResult.findOne({ userEmail, topicName }).sort({ completedAt: -1 });

    // If existing score is higher or equal, do not save or update anything
    if (existingResult && existingResult.score >= score) {
      console.log('DECISION: NOT UPDATING OR SAVING - Previous score is higher or equal');
      return res.status(200).json({ 
        message: 'Kept existing higher score.', 
        updated: false
      });
    }

    // If new score is higher or no existing score, save ExamResult and update UserTopic
    const newExamResult = new ExamResult({
      userEmail,
      topicName,
      score,
      totalQuestions,
      correctAnswers,
      timeTaken,
      completedAt: new Date(),
    });
    await newExamResult.save();

    console.log('DECISION: UPDATING AND SAVING - New score is higher or first attempt');
    const status: 'completed' | 'in-progress' = score >= 70 ? 'completed' : 'in-progress';
    const updatedUserTopic = await UserTopic.findOneAndUpdate(
      { userEmail, topicName },
      {
        userEmail,
        topicName,
        status,
        progress: score,
        lastAccessed: new Date(),
      },
      { upsert: true, new: true }
    );

    res.status(200).json({ 
      message: 'Score updated successfully.', 
      updated: true,
      userTopic: updatedUserTopic 
    });

  } catch (error) {
    console.error('updateExamResult error:', error);
    res.status(500).json({ message: 'Failed to update exam result', error: error instanceof Error ? error.message : error });
  }
};

export const getUserExamResults = async (req: AuthRequest, res: Response) => {
  try {
    // Use userEmail for query
    const examResults = await ExamResult.find({ userEmail: req.user.email })
      .sort({ completedAt: -1 });

    res.json(examResults);
  } catch {
    res.status(500).json({ message: 'Failed to get user exam results' });
  }
};

export const getTopicExamResults = async (req: Request, res: Response) => {
  try {
    const examResults = await ExamResult.find({ topicName: req.params.topicName })
      .sort({ completedAt: -1 });

    res.json(examResults);
  } catch {
    res.status(500).json({ message: 'Failed to get topic exam results' });
  }
};