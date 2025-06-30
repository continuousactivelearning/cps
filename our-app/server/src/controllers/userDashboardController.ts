import User from '../models/User';
import Quiz from '../models/Quiz';
import type { Request, Response } from 'express';
import mongoose from 'mongoose';

// Get user dashboard with comprehensive info
export const getUserDashboard = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id).populate('courses.courseId').populate('quizzes.quizId');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Calculate user statistics
        const totalQuizzes = user.quizzes.length;
        const totalCustomQuizzes = user.customQuizzes.length;
        const totalCourses = user.courses.length;

        // Calculate average score from all quiz attempts
        const totalScore = user.quizzes.reduce((sum, quiz) => sum + quiz.userScore, 0);
        const averageScore = totalQuizzes > 0 ? totalScore / totalQuizzes : 0;

        // Get course progress
        const completedCourses = user.courses.filter(course => course.status === 'completed').length;
        const inProgressCourses = user.courses.filter(course => course.status === 'in-progress').length;
        const enrolledCourses = user.courses.filter(course => course.status === 'enrolled').length;

        // Get recent quiz attempts (last 5)
        const recentQuizzes = user.quizzes.slice(0, 5);

        // Determine user level based on performance
        let userLevel = 'beginner';
        if (averageScore >= 80) userLevel = 'advanced';
        else if (averageScore >= 60) userLevel = 'intermediate';

        // Extract user preferences and progress
        const userData = {
            userInfo: {
                name: user.name,
                email: user.email,
                preferredLanguage: user.lang,
                currentLevel: userLevel,
                memberSince: user.createdAt
            },
            statistics: {
                totalQuizzesTaken: totalQuizzes,
                totalCustomQuizzes: totalCustomQuizzes,
                totalCoursesEnrolled: totalCourses,
                averageScore: Math.round(averageScore * 100) / 100,
                totalScore: totalScore
            },
            courseProgress: {
                completed: completedCourses,
                inProgress: inProgressCourses,
                enrolled: enrolledCourses,
                courses: user.courses.map(course => ({
                    courseName: course.courseName,
                    status: course.status,
                    result: course.result
                }))
            },
            recentActivity: {
                recentQuizzes: recentQuizzes.map(quiz => ({
                    quizId: quiz.quizId,
                    score: quiz.userScore
                }))
            },
            recommendations: {
                suggestedLevel: userLevel,
                suggestedTopics: getSuggestedTopics(userLevel, user.courses),
                nextSteps: getNextSteps(userLevel, totalQuizzes, averageScore)
            }
        };

        res.json(userData);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch dashboard', details: err });
    }
};

// Helper function to get suggested topics based on user level
function getSuggestedTopics(level: string, courses: any[]): string[] {
    const topicMap = {
        beginner: ['Arrays', 'Strings', 'Basic Data Structures'],
        intermediate: ['Linked Lists', 'Stacks', 'Queues', 'Recursion'],
        advanced: ['Matrices', 'Advanced Algorithms', 'Complex Data Structures']
    };

    const completedTopics = courses
        .filter(course => course.status === 'completed')
        .map(course => course.courseName);

    return topicMap[level as keyof typeof topicMap]?.filter(topic =>
        !completedTopics.includes(topic)
    ) || [];
}

// Helper function to get next steps for user
function getNextSteps(level: string, totalQuizzes: number, averageScore: number): string[] {
    const steps: string[] = [];

    if (totalQuizzes < 5) {
        steps.push('Take more quizzes to establish your baseline');
    }

    if (averageScore < 60) {
        steps.push('Review basic concepts and retake beginner quizzes');
    } else if (averageScore >= 80 && level === 'intermediate') {
        steps.push('Ready to advance to advanced level topics');
    }

    if (level === 'beginner' && averageScore >= 70) {
        steps.push('Consider moving to intermediate level topics');
    }

    return steps;
}

// Get questions for specific language, level, and topic
export const getQuestions = async (req: Request, res: Response) => {
    try {
        const { id, lang, quizLevel, topic } = req.params;

        // Find quizzes matching the criteria
        const quizzes = await Quiz.find({
            lang,
            quizLevel,
            'topic.courseName': topic
        });

        if (quizzes.length === 0) {
            return res.status(404).json({ error: 'No questions found for the specified criteria' });
        }

        // Extract questions from all matching quizzes
        const allQuestions = quizzes.flatMap(quiz => quiz.questions);

        res.json({
            quizInfo: {
                language: lang,
                level: quizLevel,
                topic: topic,
                totalQuestions: allQuestions.length,
                totalQuizzes: quizzes.length
            },
            questions: allQuestions
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch questions', details: err });
    }
};

// Submit answers for specific language, level, and topic
export const submitAnswers = async (req: Request, res: Response) => {
    try {
        const { id, lang, quizLevel, topic } = req.params;
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
            lang,
            quizLevel, // Fixed: using correct field name
            'topic.courseName': topic
        });

        if (quizzes.length === 0) {
            return res.status(404).json({ error: 'No quizzes found for the specified criteria' });
        }

        // Calculate score
        let totalScore = 0;
        let correctAnswers = 0;
        let totalQuestions = 0;
        let questionDetails: Array<{
            questionText: string;
            userAnswer: any;
            correctAnswer: string;
            isCorrect: boolean;
            score: number;
            topic: string;
        }> = [];

        quizzes.forEach(quiz => {
            quiz.questions.forEach((question, index) => {
                totalQuestions++;
                const isCorrect = answers[index] === question.correctOption;
                if (isCorrect) {
                    correctAnswers++;
                    totalScore += question.score;
                }
                questionDetails.push({
                    questionText: question.questionText,
                    userAnswer: answers[index],
                    correctAnswer: question.correctOption,
                    isCorrect: isCorrect,
                    score: isCorrect ? question.score : 0,
                    topic: quiz.topic.courseName
                });
            });
        });

        const percentage = (correctAnswers / totalQuestions) * 100;

        // Save quiz result to user
        const quizResult = {
            quizId: quizzes[0]._id as mongoose.Types.ObjectId,
            userScore: totalScore,
            userAnswers: answers
        };

        user.quizzes.push(quizResult);
        await user.save();

        res.json({
            quizInfo: {
                language: lang,
                level: quizLevel,
                topic: topic,
                totalQuestions: totalQuestions
            },
            results: {
                score: totalScore,
                correctAnswers,
                totalQuestions,
                percentage: Math.round(percentage * 100) / 100,
                grade: getGrade(percentage)
            },
            questionDetails: questionDetails,
            message: 'Quiz submitted successfully'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to submit answers', details: err });
    }
};

// Helper function to get grade based on percentage
function getGrade(percentage: number): string {
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
}

// Review quiz results
export const reviewQuiz = async (req: Request, res: Response) => {
    try {
        const { id, lang, quizLevel, topic } = req.params;

        // Find user's quiz attempts for this topic
        const user = await User.findById(id).populate('quizzes.quizId');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const quizAttempts = user.quizzes.filter(quiz => {
            const quizDoc = quiz.quizId as any;
            return quizDoc &&
                quizDoc.lang === lang &&
                quizDoc.quizLevel === quizLevel && // Fixed: using correct field name
                quizDoc.topic.courseName === topic;
        });

        const totalAttempts = quizAttempts.length;
        const averageScore = totalAttempts > 0
            ? quizAttempts.reduce((sum, attempt) => sum + attempt.userScore, 0) / totalAttempts
            : 0;

        const bestScore = totalAttempts > 0
            ? Math.max(...quizAttempts.map(attempt => attempt.userScore))
            : 0;

        const latestAttempt = totalAttempts > 0
            ? quizAttempts[quizAttempts.length - 1]
            : null;

        res.json({
            quizInfo: {
                language: lang,
                level: quizLevel,
                topic: topic
            },
            statistics: {
                totalAttempts,
                averageScore: Math.round(averageScore * 100) / 100,
                bestScore,
                latestScore: latestAttempt?.userScore || 0
            },
            attempts: quizAttempts.map(attempt => ({
                attemptId: (attempt as any)._id || attempt.quizId,
                score: attempt.userScore,
                answers: attempt.userAnswers
            })),
            progress: {
                improvement: totalAttempts > 1
                    ? latestAttempt && quizAttempts[0]
                        ? latestAttempt.userScore - quizAttempts[0].userScore
                        : 0
                    : 0,
                trend: getProgressTrend(quizAttempts)
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch review', details: err });
    }
};

// Helper function to determine progress trend
function getProgressTrend(attempts: any[]): string {
    if (attempts.length < 2) return 'insufficient_data';

    const scores = attempts.map(attempt => attempt.userScore);
    const firstHalf = scores.slice(0, Math.ceil(scores.length / 2));
    const secondHalf = scores.slice(Math.ceil(scores.length / 2));

    const firstAvg = firstHalf.reduce((sum, score) => sum + score, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((sum, score) => sum + score, 0) / secondHalf.length;

    if (secondAvg > firstAvg + 5) return 'improving';
    if (secondAvg < firstAvg - 5) return 'declining';
    return 'stable';
}

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
            status: 'pending',
            prerequisites: analyzePrerequisites(courses, targetCourse)
        };

        res.json({
            assessment,
            message: 'Assessment created successfully',
            recommendations: generateCourseRecommendations(courses, targetCourse)
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create assessment', details: err });
    }
};

// Helper function to analyze prerequisites
function analyzePrerequisites(completedCourses: string[], targetCourse: string): string[] {
    const coursePrerequisites: { [key: string]: string[] } = {
        'Advanced Algorithms': ['Arrays', 'Linked Lists', 'Recursion'],
        'Complex Data Structures': ['Stacks', 'Queues', 'Matrices'],
        'System Design': ['Basic Data Structures', 'Algorithms']
    };

    const required = coursePrerequisites[targetCourse] || [];
    return required.filter(prereq => !completedCourses.includes(prereq));
}

// Helper function to generate course recommendations
function generateCourseRecommendations(completedCourses: string[], targetCourse: string): string[] {
    const missingPrereqs = analyzePrerequisites(completedCourses, targetCourse);
    return missingPrereqs.length > 0
        ? [`Complete prerequisites: ${missingPrereqs.join(', ')}`]
        : ['Ready to start the target course'];
}

// Get quiz questions by level
export const getQuizByLevel = async (req: Request, res: Response) => {
    try {
        const { id, level } = req.params;

        // Validate level
        const validLevels = ['beginner', 'intermediate', 'advanced'];
        if (!validLevels.includes(level)) {
            return res.status(400).json({
                error: 'Invalid level',
                validLevels
            });
        }

        // Find quizzes by level
        const quizzes = await Quiz.find({ quizLevel: level });

        if (quizzes.length === 0) {
            return res.status(404).json({ error: 'No quizzes found for this level' });
        }

        // Extract questions from all quizzes of this level
        const allQuestions = quizzes.flatMap(quiz => quiz.questions);

        res.json({
            level,
            totalQuizzes: quizzes.length,
            totalQuestions: allQuestions.length,
            topics: [...new Set(quizzes.map(quiz => quiz.topic.courseName))],
            questions: allQuestions
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quiz questions', details: err });
    }
};

// Submit quiz answers by level
export const submitQuizByLevel = async (req: Request, res: Response) => {
    try {
        const { id, level } = req.params;
        const { answers } = req.body;

        if (!answers || !Array.isArray(answers)) {
            return res.status(400).json({ error: 'Answers array is required' });
        }

        // Find the user
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Find quizzes of this level
        const quizzes = await Quiz.find({ quizLevel: level });

        if (quizzes.length === 0) {
            return res.status(404).json({ error: 'No quizzes found for this level' });
        }

        // Calculate score
        let totalScore = 0;
        let correctAnswers = 0;
        let totalQuestions = 0;
        let questionDetails: Array<{
            questionText: string;
            userAnswer: any;
            correctAnswer: string;
            isCorrect: boolean;
            score: number;
            topic: string;
        }> = [];

        quizzes.forEach(quiz => {
            quiz.questions.forEach((question, index) => {
                totalQuestions++;
                const isCorrect = answers[index] === question.correctOption;
                if (isCorrect) {
                    correctAnswers++;
                    totalScore += question.score;
                }
                questionDetails.push({
                    questionText: question.questionText,
                    userAnswer: answers[index],
                    correctAnswer: question.correctOption,
                    isCorrect: isCorrect,
                    score: isCorrect ? question.score : 0,
                    topic: quiz.topic.courseName
                });
            });
        });

        const percentage = (correctAnswers / totalQuestions) * 100;

        // Save result
        const quizResult = {
            quizId: quizzes[0]._id as mongoose.Types.ObjectId,
            userScore: totalScore,
            userAnswers: answers,
            updatedAt: new Date()
        };

        user.quizzes.push(quizResult);
        await user.save();

        res.json({
            level,
            results: {
                score: totalScore,
                correctAnswers,
                totalQuestions,
                percentage: Math.round(percentage * 100) / 100,
                grade: getGrade(percentage)
            },
            questionDetails: questionDetails,
            message: 'Quiz submitted successfully'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to submit quiz', details: err });
    }
};

// Review quiz by level
export const reviewQuizByLevel = async (req: Request, res: Response) => {
    try {
        const { id, level } = req.params;

        const user = await User.findById(id).populate('quizzes.quizId');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const quizAttempts = user.quizzes.filter(quiz => {
            const quizDoc = quiz.quizId as any;
            return quizDoc && quizDoc.quizLevel === level;
        });

        const totalAttempts = quizAttempts.length;
        const averageScore = totalAttempts > 0
            ? quizAttempts.reduce((sum, attempt) => sum + attempt.userScore, 0) / totalAttempts
            : 0;

        const bestScore = totalAttempts > 0
            ? Math.max(...quizAttempts.map(attempt => attempt.userScore))
            : 0;

        const topicsCovered = [...new Set(quizAttempts.map(attempt => {
            const quizDoc = attempt.quizId as any;
            return quizDoc?.topic?.courseName;
        }).filter(Boolean))];

        res.json({
            level,
            statistics: {
                totalAttempts,
                averageScore: Math.round(averageScore * 100) / 100,
                bestScore,
                topicsCovered
            },
            attempts: quizAttempts.map(attempt => ({
                attemptId: (attempt as any)._id || attempt.quizId,
                score: attempt.userScore,
                topic: (attempt.quizId as any)?.topic?.courseName
            })),
            progress: {
                improvement: totalAttempts > 1
                    ? quizAttempts[quizAttempts.length - 1]?.userScore - quizAttempts[0]?.userScore
                    : 0,
                trend: getProgressTrend(quizAttempts)
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch review', details: err });
    }
}; 