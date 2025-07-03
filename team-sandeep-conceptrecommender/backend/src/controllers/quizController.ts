import { Request, Response } from 'express';
import { Quiz } from '../models/Quiz';
import { UserTopic } from '../models/UserTopic';
import { Topic } from '../models/Topic';
import { ExamResult } from '../models/ExamResult';
import mongoose from 'mongoose';

interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role?: string;
  };
}

export const getTopicQuiz = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const { topicName } = req.params;
    const normalizedName = topicName;
    console.log('Looking for quiz with topicName:', normalizedName);
    const quiz = await Quiz.findOne({ Topic: normalizedName });
    console.log('Quiz found:', quiz);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found for this topic' });
    }

    // Select 10 random questions from the quiz
    const shuffled = quiz.questions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, 10);

    // Return quiz without correct answers
    const quizWithoutAnswers = {
      ...quiz.toObject(),
      questions: selectedQuestions.map(q => ({
        question: q.question,
        options: q.options,
        explanation: q.explanation,
        // Do not send correctAnswer
      })),
    };

    res.json(quizWithoutAnswers);
  } catch (error) {
    console.error('Error fetching quiz:', error);
    res.status(500).json({ error: 'Failed to fetch quiz' });
  }
};

export const submitQuiz = async (req: AuthRequest, res: Response) => {
  try {
    console.log('submitQuiz called');
    console.log('Current MongoDB database:', mongoose.connection.name);
    if (!req.user || !req.user.email) {
      console.log('User not authenticated:', req.user);
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const { topicName } = req.params;
    const { answers, timeTaken } = req.body;
    console.log('Params:', req.params);
    console.log('Body:', req.body);

    if (!Array.isArray(answers)) {
      console.log('Answers not array:', answers);
      return res.status(400).json({ error: 'Answers must be an array' });
    }

    // Get quiz and check answers by topicName
    const quiz = await Quiz.findOne({ topicName });
    if (!quiz) {
      console.log('Quiz not found for topicName:', topicName);
      return res.status(404).json({ error: 'Quiz not found' });
    }

    // Defensive: check for empty questions
    if (!quiz.questions || quiz.questions.length === 0) {
      console.log('Quiz has no questions:', quiz);
      return res.status(400).json({ error: 'Quiz has no questions.' });
    }
    // Calculate score
    let correctAnswers = 0;
    const results = quiz.questions.map((question, index) => {
      const isCorrect = question.correctAnswer === answers[index];
      if (isCorrect) correctAnswers++;
      return {
        question: question.question,
        userAnswer: answers[index],
        correctAnswer: question.correctAnswer,
        isCorrect,
        explanation: question.explanation,
      };
    });

    const score = quiz.questions.length > 0 ? (correctAnswers / quiz.questions.length) * 100 : 0;
    const passed = score >= quiz.passingScore;
    console.log('Score:', score, 'Passed:', passed);

    // Update user's topic status by topicName and userEmail
    let userTopic = await UserTopic.findOne({
      userEmail: req.user.email,
      topicName,
    });
    if (!userTopic) {
      userTopic = new UserTopic({
        userEmail: req.user.email,
        topicName,
      });
    }
    userTopic.status = passed ? 'completed' : 'in-progress';
    userTopic.progress = isNaN(score) ? 0 : (passed ? 100 : Math.round(score));
    try {
      await userTopic.save();
      console.log('UserTopic saved:', userTopic);
    } catch (err) {
      console.error('Error saving UserTopic:', err);
    }

    // Update topic status
    try {
      const topic = await Topic.findOne({ name: topicName });
      if (topic) {
        topic.status = passed ? 'completed' : 'in-progress';
        topic.progress = passed ? 100 : Math.round(score);
        await topic.save();
        console.log('Topic saved:', topic);
      }
    } catch (err) {
      console.error('Error saving Topic:', err);
    }

    // Store exam result in database using email instead of userId
    const examResult = new ExamResult({
      userEmail: req.user.email,
      topicName,
      score: Math.round(score),
      totalQuestions: quiz.questions.length,
      correctAnswers,
      timeTaken: timeTaken || 0,
      completedAt: new Date(),
    });
    try {
      await examResult.save();
      console.log('ExamResult saved:', examResult);
      // Immediately query for the document
      const found = await ExamResult.findOne({ _id: examResult._id });
      console.log('ExamResult found after save:', found);
    } catch (err) {
      console.error('Error saving ExamResult:', err);
    }

    res.json({
      score,
      passed,
      results,
      topicStatus: userTopic.status,
      examResultId: examResult._id,
    });
  } catch (error) {
    console.error('Error submitting quiz:', error);
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
};

export const createQuiz = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const { topicName, questions, passingScore, timeLimit, difficulty } = req.body;

    // Check if quiz already exists for this topic by name
    const existingQuiz = await Quiz.findOne({ topicName });
    if (existingQuiz) {
      return res.status(400).json({ error: 'Quiz already exists for this topic' });
    }

    const quiz = new Quiz({
      topicName,
      questions,
      passingScore: passingScore || 70,
      timeLimit: timeLimit || 30,
      difficulty,
    });

    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    console.error('Error creating quiz:', error);
    res.status(500).json({ error: 'Failed to create quiz' });
  }
};

export const getRandomQuizQuestions = async (req: Request, res: Response) => {
  try {
    const topic = req.query.topic as string;
    const count = parseInt(req.query.count as string) || 10;
    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }
    // Fetch 10 random questions for the topic from the flat collection
    const questions = await Quiz.aggregate([
      { $match: { Topic: topic } },
      { $sample: { size: count } },
    ]);
    // Map to frontend format
    const formatted = questions.map((q: any) => ({
      question: q[' "Question"']?.replace(/^\s*"|"\s*$/g, ''),
      options: [
        q[' "Option A"']?.replace(/^\s*"|"\s*$/g, ''),
        q[' "Option B"']?.replace(/^\s*"|"\s*$/g, ''),
        q[' "Option C"']?.replace(/^\s*"|"\s*$/g, ''),
        q[' "Option D"']?.replace(/^\s*"|"\s*$/g, ''),
      ],
      correctAnswer: ['A', 'B', 'C', 'D'].indexOf(q[' "Correct Answer"']?.replace(/^\s*"|"\s*$/g, '')),
    }));
    res.json({ questions: formatted });
  } catch (error) {
    console.error('Error fetching random quiz questions:', error);
    res.status(500).json({ error: 'Failed to fetch random quiz questions' });
  }
};