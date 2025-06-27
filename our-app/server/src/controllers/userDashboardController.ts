import User from '../models/User';
import Quiz from '../models/Quiz';
import Course from '../models/Course';
import { Request, Response } from 'express';
import { OptionTag } from '../types/customTypes';

// Get user dashboard with basic info
export const getUserDashboard = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id).populate('courses.courseId');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Extract user preferences and progress
        const userData = {
            name: user.name,
            language: 'java', // Default language, can be made dynamic
            level: 'beginner', // Default level, can be calculated from progress
            topic: 'Arrays', // Default topic, can be made dynamic
            courses: user.courses,
            quizCount: user.quizzes.length,
            customQuizCount: user.customQuizzes.length
        };

        res.json(userData);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch dashboard', details: err });
    }
};

// Get questions for specific language, level, and topic
export const getQuestions = async (req: Request, res: Response) => {
    try {
        const { id, language, quizLevel, topic } = req.params;

        // Find quizzes matching the criteria
        const quizzes = await Quiz.find({
            language,
            level: quizLevel,
            'topic.courseName': topic
        });

        if (quizzes.length === 0) {
            return res.status(404).json({ error: 'No questions found for the specified criteria' });
        }

        // Extract questions from all matching quizzes
        const allQuestions = quizzes.flatMap(quiz => quiz.questions);

        res.json(allQuestions);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch questions', details: err });
    }
};

// Submit answers for specific language, level, and topic
export const submitAnswers = async (req: Request, res: Response) => {
    try {
        const { id, language, quizLevel, topic } = req.params;
        const { answers } = req.body; // Array of OptionTag values

        if (!answers || !Array.isArray(answers)) {
            return res.status(400).json({ error: 'Answers array is required' });
        }

        // Find the user
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Find quizzes for scoring
        const quizzes = await Quiz.find({
            language,
            level: quizLevel,
            'topic.courseName': topic
        });

        if (quizzes.length === 0) {
            return res.status(404).json({ error: 'No quizzes found for the specified criteria' });
        }

        // Calculate score (simplified scoring logic)
        let totalScore = 0;
        let correctAnswers = 0;
        let totalQuestions = 0;

        quizzes.forEach(quiz => {
            quiz.questions.forEach((question, index) => {
                totalQuestions++;
                if (answers[index] === question.correctOption) {
                    correctAnswers++;
                    totalScore += question.score;
                }
            });
        });

        const percentage = (correctAnswers / totalQuestions) * 100;

        // Save quiz result to user
        const quizResult = {
            quizId: quizzes[0]._id, // Using first quiz as reference
            userScore: totalScore,
            userAnswers: answers
        };

        user.quizzes.push(quizResult);
        await user.save();

        res.json({
            score: totalScore,
            correctAnswers,
            totalQuestions,
            percentage,
            message: 'Quiz submitted successfully'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to submit answers', details: err });
    }
};

// Review quiz results
export const reviewQuiz = async (req: Request, res: Response) => {
    try {
        const { id, language, quizLevel, topic } = req.params;

        // Find user's quiz attempts for this topic
        const user = await User.findById(id).populate('quizzes.quizId');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const quizAttempts = user.quizzes.filter(quiz => {
            const quizDoc = quiz.quizId as any;
            return quizDoc &&
                quizDoc.language === language &&
                quizDoc.level === quizLevel &&
                quizDoc.topic.courseName === topic;
        });

        res.json({
            attempts: quizAttempts,
            totalAttempts: quizAttempts.length,
            averageScore: quizAttempts.length > 0
                ? quizAttempts.reduce((sum, attempt) => sum + attempt.userScore, 0) / quizAttempts.length
                : 0
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch review', details: err });
    }
};

// Assessment endpoint
export const createAssessment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { courses, targetCourse } = req.body;

        if (!courses || !Array.isArray(courses) || !targetCourse) {
            return res.status(400).json({ error: 'Courses array and target course are required' });
        }

        // Find the user
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create assessment based on user's course progress and target
        const assessment = {
            userId: id,
            courses: courses,
            targetCourse: targetCourse,
            createdAt: new Date(),
            status: 'pending'
        };

        // You can save this to a separate Assessment model if needed
        // For now, we'll return the assessment plan
        res.json({
            assessment,
            message: 'Assessment created successfully'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create assessment', details: err });
    }
};

// Get quiz questions by difficulty
export const getQuizByDifficulty = async (req: Request, res: Response) => {
    try {
        const { id, difficulty } = req.params;

        // Find quizzes by difficulty level
        const quizzes = await Quiz.find({ level: difficulty });

        if (quizzes.length === 0) {
            return res.status(404).json({ error: 'No quizzes found for this difficulty level' });
        }

        // Extract questions from all quizzes of this difficulty
        const allQuestions = quizzes.flatMap(quiz => quiz.questions);

        res.json(allQuestions);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quiz questions', details: err });
    }
};

// Submit quiz answers by difficulty
export const submitQuizByDifficulty = async (req: Request, res: Response) => {
    try {
        const { id, difficulty } = req.params;
        const { answers } = req.body;

        if (!answers || !Array.isArray(answers)) {
            return res.status(400).json({ error: 'Answers array is required' });
        }

        // Find the user
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Find quizzes of this difficulty
        const quizzes = await Quiz.find({ level: difficulty });

        if (quizzes.length === 0) {
            return res.status(404).json({ error: 'No quizzes found for this difficulty level' });
        }

        // Calculate score
        let totalScore = 0;
        let correctAnswers = 0;
        let totalQuestions = 0;

        quizzes.forEach(quiz => {
            quiz.questions.forEach((question, index) => {
                totalQuestions++;
                if (answers[index] === question.correctOption) {
                    correctAnswers++;
                    totalScore += question.score;
                }
            });
        });

        const percentage = (correctAnswers / totalQuestions) * 100;

        // Save result
        const quizResult = {
            quizId: quizzes[0]._id,
            userScore: totalScore,
            userAnswers: answers
        };

        user.quizzes.push(quizResult);
        await user.save();

        res.json({
            score: totalScore,
            correctAnswers,
            totalQuestions,
            percentage,
            difficulty,
            message: 'Quiz submitted successfully'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to submit quiz', details: err });
    }
};

// Review quiz by difficulty
export const reviewQuizByDifficulty = async (req: Request, res: Response) => {
    try {
        const { id, difficulty } = req.params;

        const user = await User.findById(id).populate('quizzes.quizId');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const quizAttempts = user.quizzes.filter(quiz => {
            const quizDoc = quiz.quizId as any;
            return quizDoc && quizDoc.level === difficulty;
        });

        res.json({
            difficulty,
            attempts: quizAttempts,
            totalAttempts: quizAttempts.length,
            averageScore: quizAttempts.length > 0
                ? quizAttempts.reduce((sum, attempt) => sum + attempt.userScore, 0) / quizAttempts.length
                : 0
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch review', details: err });
    }
}; 