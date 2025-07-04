import User from '../models/User';
import Quiz from '../models/Quiz';
import CustomQuiz from '../models/CustomQuiz';
import type { Request, Response } from 'express';
import mongoose from 'mongoose';
import { getRecommendedPath } from '../main/recommendationPath';
import Course from '../models/Course';
import type { CourseStatus } from '../types/customTypes';

// Get user dashboard with comprehensive info
export const getUserDashboard = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Populate quizzes, custom quizzes, and courses
        const user = await User.findById(id)
            .populate('courses.courseId')
            .populate('quizzes.quizId')
            .populate('customQuizzes.quizId');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Quiz stats
        const totalQuizzes = user.quizzes.length;
        const totalCustomQuizzes = user.customQuizzes.length;
        const totalCourses = user.courses.length;

        // Average score (standard quizzes)
        const totalScore = user.quizzes.reduce((sum, quiz) => sum + quiz.userScore, 0);
        const averageScore = totalQuizzes > 0 ? totalScore / totalQuizzes : 0;

        // Custom quiz stats
        const submittedCustomQuizzes = user.customQuizzes.filter(q => q.submittedAt);
        const avgCustomQuizScore = submittedCustomQuizzes.length > 0
            ? submittedCustomQuizzes.reduce((sum, q) => sum + q.userScore, 0) / submittedCustomQuizzes.length
            : 0;

        // Course progress breakdown
        const completedCourses = user.courses.filter(course => course.status === 'completed');
        const inProgressCourses = user.courses.filter(course => course.status === 'in-progress');
        const enrolledCourses = user.courses.filter(course => course.status === 'enrolled');

        // Recent activity (last 5 quizzes and custom quizzes)
        const recentQuizzes = user.quizzes.slice(-5).map(quiz => ({
            quizId: quiz.quizId,
            score: quiz.userScore,
            submittedAt: null
        }));
        const recentCustomQuizzes = user.customQuizzes.slice(-5).map(quiz => ({
            quizId: quiz.quizId,
            score: quiz.userScore,
            submittedAt: quiz.submittedAt || null
        }));

        // Determine user level based on performance
        let userLevel = 'beginner';
        if (averageScore >= 80) userLevel = 'advanced';
        else if (averageScore >= 60) userLevel = 'intermediate';

        // Dashboard response
        res.json({
            userInfo: {
                name: user.name,
                email: user.email,
                preferredLanguage: user.lang,
                currentLevel: userLevel,
                memberSince: user.createdAt,
                // lastLogin: user.lastLogin, // future work guys
            },
            statistics: {
                totalQuizzesTaken: totalQuizzes,
                totalCustomQuizzes: totalCustomQuizzes,
                totalCoursesEnrolled: totalCourses,
                averageScore: Math.round(averageScore * 100) / 100,
                averageCustomQuizScore: Math.round(avgCustomQuizScore * 100) / 100,
                totalScore: totalScore
            },
            courseProgress: {
                completed: completedCourses.length,
                inProgress: inProgressCourses.length,
                enrolled: enrolledCourses.length,
                courses: user.courses.map(course => ({
                    courseName: course.courseName,
                    status: course.status,
                    result: course.result
                }))
            },
            recentActivity: {
                recentQuizzes,
                recentCustomQuizzes
            },
            recommendations: {
                suggestedLevel: userLevel,
                suggestedTopics: getSuggestedTopics(userLevel, user.courses),
                nextSteps: getNextSteps(userLevel, totalQuizzes, averageScore),
                path: user.recommendedPath ? user.recommendedPath : null
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch dashboard', details: err });
    }
};

// Helper function to get suggested topics based on user level
function getSuggestedTopics(level: string, courses: any[]): string[] {
    const topicMap = {
        beginner: ['Arrays', 'Strings', 'BasicDataStructures'],
        intermediate: ['LinkedLists', 'Stacks', 'Queues', 'Recursion'],
        advanced: ['Matrices', 'AdvancedAlgorithms', 'ComplexDataStructures']
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
            quizLevel,
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
                quizDoc.quizLevel === quizLevel &&
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
        'AdvancedAlgorithms': ['Arrays', 'LinkedLists', 'Recursion'],
        'ComplexDataStructures': ['Stacks', 'Queues', 'Matrices'],
        'SystemDesign': ['BasicDataStructures', 'Algorithms']
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
            topics: Array.from(new Set(quizzes.map(quiz => quiz.topic.courseName))),
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

        const topicsCovered = Array.from(new Set(quizAttempts.map(attempt => {
            const quizDoc = attempt.quizId as any;
            return quizDoc?.topic?.courseName;
        }).filter(Boolean)));

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

// Recommend a path of courses for a user to reach a target
export const getRecommendedPathForUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { target } = req.query;
        if (!target || typeof target !== 'string') {
            return res.status(400).json({ error: 'Target course/topic is required as query param' });
        }
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Extract completed course names
        const completed = user.courses
            .filter((c: any) => c.status === 'completed')
            .map((c: any) => c.courseName);
        // Generate recommended path
        const path = await getRecommendedPath(completed, target);

        // Save the recommended path to the user
        user.recommendedPath = { target, path };
        await user.save();

        res.json({ recommendedPath: path });
    } catch (err) {
        res.status(500).json({ error: 'Failed to generate recommended path', details: err });
    }
};

// User submits a list of courses with status
export const updateUserCourses = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { completedCourses } = req.body; // Array of course names
        const { status = 'enrolled' } = req.query;

        if (!Array.isArray(completedCourses)) {
            return res.status(400).json({ error: 'completedCourses must be an array of course names' });
        }

        if (!['completed', 'enrolled', 'in-progress'].includes(status as string)) {
            return res.status(400).json({
                error: 'Status must be one of: completed, enrolled, in-progress'
            });
        }

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        for (const courseName of completedCourses) {
            const course = await Course.findOne({ courseName });
            if (course) {
                const userCourse = user.courses.find((c: any) => c.courseName === courseName);
                if (userCourse) {
                    userCourse.status = status as CourseStatus;
                    // Set result based on status
                    if (status === 'completed') {
                        userCourse.result = 100;
                    } else if (status === 'in-progress') {
                        userCourse.result = 50;
                    } else {
                        userCourse.result = 0;
                    }
                } else {
                    user.courses.push({
                        courseId: course._id as mongoose.Types.ObjectId,
                        courseName: course.courseName,
                        status: status as CourseStatus,
                        result: status === 'completed' ? 100 : status === 'in-progress' ? 50 : 0
                    });
                }
            }
        }

        await user.save();
        res.json({
            message: `Courses updated with status: ${status}`,
            courses: user.courses,
            updatedCount: completedCourses.length
        });

    } catch (err) {
        res.status(500).json({ error: 'Failed to update courses', details: err });
    }
};

// Create custom quiz for user based on enrolled courses
export const createCustomQuizForUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { lang, level, totalQuestions = 15, questionsPerTopic } = req.query;
        console.log(lang, level, totalQuestions, questionsPerTopic);
        // Validate required parameters
        if (!lang || !level) {
            return res.status(400).json({
                error: 'Language and level are required query parameters'
            });
        }

        if (!['cpp', 'python', 'javascript', 'java'].includes(lang as string)) {
            return res.status(400).json({
                error: 'Invalid language. Must be one of: cpp, python, javascript, java'
            });
        }

        if (!['beginner', 'intermediate', 'advanced'].includes(level as string)) {
            return res.status(400).json({
                error: 'Invalid level. Must be one of: beginner, intermediate, advanced'
            });
        }

        const totalQuestionsNum = parseInt(totalQuestions as string);
        if (isNaN(totalQuestionsNum) || totalQuestionsNum <= 0) {
            return res.status(400).json({
                error: 'totalQuestions must be a positive number'
            });
        }

        // Find the user and their enrolled courses
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const enrolledCourses = user.courses
            .filter((c: any) => c.status === 'enrolled' || c.status === 'in-progress')
            .map((c: any) => c.courseName);

        if (enrolledCourses.length === 0) {
            return res.status(400).json({
                error: 'User has no enrolled courses. Please enroll in courses first.'
            });
        }

        // Find quizzes for the enrolled courses
        const quizzes = await Quiz.find({
            lang: lang as string,
            quizLevel: level as string,
            'topic.courseName': { $in: enrolledCourses }
        });

        if (quizzes.length === 0) {
            return res.status(404).json({
                error: `No quizzes found for language: ${lang}, level: ${level}, and enrolled courses: ${enrolledCourses.join(', ')}`
            });
        }

        // Extract all questions from matching quizzes
        const allQuestions = quizzes.flatMap(quiz =>
            quiz.questions.map(question => ({
                questionText: question.questionText,
                options: question.options,
                correctOption: question.correctOption,
                score: question.score,
                sourceQuiz: quiz.title,
                topic: quiz.topic.courseName
            }))
        );

        if (allQuestions.length === 0) {
            return res.status(404).json({
                error: 'No questions found for the specified criteria'
            });
        }

        // Shuffle questions and select based on criteria
        const shuffledQuestions = shuffleArray([...allQuestions]);
        let selectedQuestions: typeof allQuestions = [];

        if (questionsPerTopic) {
            const questionsPerTopicNum = parseInt(questionsPerTopic as string);
            if (isNaN(questionsPerTopicNum) || questionsPerTopicNum <= 0) {
                return res.status(400).json({
                    error: 'questionsPerTopic must be a positive number'
                });
            }

            // Group questions by topic
            const questionsByTopic: { [key: string]: typeof allQuestions } = {};
            allQuestions.forEach(question => {
                if (!questionsByTopic[question.topic]) {
                    questionsByTopic[question.topic] = [];
                }
                questionsByTopic[question.topic].push(question);
            });

            // Select questions from each topic
            Object.keys(questionsByTopic).forEach(topic => {
                const topicQuestions = shuffleArray([...questionsByTopic[topic]]);
                const selectedFromTopic = topicQuestions.slice(0, questionsPerTopicNum);
                selectedQuestions.push(...selectedFromTopic);
            });

            // If we have more questions than needed, randomly select from all
            if (selectedQuestions.length > totalQuestionsNum) {
                selectedQuestions = shuffleArray(selectedQuestions).slice(0, totalQuestionsNum);
            }
        } else {
            // Random selection without topic constraints
            selectedQuestions = shuffledQuestions.slice(0, totalQuestionsNum);
        }

        // Create custom quiz object
        const customQuizData = {
            title: `Custom Quiz - ${level} ${lang}`,
            description: `Custom quiz for ${user.name} based on enrolled courses`,
            lang: lang as string,
            quizLevel: level as string,
            customQuestions: selectedQuestions.map(q => ({
                questionText: q.questionText,
                options: q.options,
                correctOption: q.correctOption,
                score: q.score,
                topic: {
                    courseID: null,
                    courseName: q.topic
                }
            })),
            quizScore: 0,
            userId: id,
            isSubmitted: false,
            userScore: 0,
            userAnswers: [],
            submittedAt: null
        };

        // Save custom quiz to database
        const savedCustomQuiz = new CustomQuiz(customQuizData);
        await savedCustomQuiz.save();

        // Calculate total possible score
        const totalScore = selectedQuestions.reduce((sum, q) => sum + q.score, 0);

        res.json({
            customQuiz: savedCustomQuiz,
            quizInfo: {
                totalQuestions: selectedQuestions.length,
                totalScore,
                topics: Array.from(new Set(selectedQuestions.map(q => q.topic))),
                enrolledCourses,
                language: lang,
                level: level
            },
            message: 'Custom quiz created and saved successfully'
        });

    } catch (err) {
        res.status(500).json({ error: 'Failed to create custom quiz', details: err });
    }
};

// Helper function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Submit custom quiz answers
export const submitCustomQuizAnswers = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; // user id
        const { customQuizId } = req.params; // custom quiz id
        const { answers } = req.body; // Array of OptionTag values

        if (!answers || !Array.isArray(answers)) {
            return res.status(400).json({ error: 'Answers array is required' });
        }

        // Find the user
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Find the custom quiz
        const customQuiz = await CustomQuiz.findById(customQuizId);
        if (!customQuiz) {
            return res.status(404).json({ error: 'Custom quiz not found' });
        }

        // Verify the custom quiz belongs to the user
        if (customQuiz.userId.toString() !== id) {
            return res.status(403).json({ error: 'Access denied. This custom quiz does not belong to you.' });
        }

        // Check if already submitted
        if (customQuiz.isSubmitted) {
            return res.status(400).json({ error: 'This custom quiz has already been submitted' });
        }

        // Calculate score
        let totalScore = 0;
        let correctAnswers = 0;
        let totalQuestions = customQuiz.customQuestions.length;
        let questionDetails: Array<{
            questionText: string;
            userAnswer: string;
            correctAnswer: string;
            isCorrect: boolean;
            score: number;
            topic: string;
        }> = [];

        customQuiz.customQuestions.forEach((question, index) => {
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
                topic: question.topic.courseName
            });
        });

        const percentage = (correctAnswers / totalQuestions) * 100;

        // Update custom quiz with submission data
        customQuiz.isSubmitted = true;
        customQuiz.userScore = totalScore;
        customQuiz.userAnswers = answers;
        customQuiz.submittedAt = new Date();
        await customQuiz.save();

        // Add to user's custom quizzes
        const customQuizResult = {
            quizId: customQuiz._id as mongoose.Types.ObjectId,
            userScore: totalScore,
            userAnswers: answers,
            submittedAt: new Date()
        };

        user.customQuizzes.push(customQuizResult);
        await user.save();

        res.json({
            customQuizInfo: {
                title: customQuiz.title,
                language: customQuiz.lang,
                level: customQuiz.quizLevel,
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
            message: 'Custom quiz submitted successfully'
        });

    } catch (err) {
        res.status(500).json({ error: 'Failed to submit custom quiz answers', details: err });
    }
};

// Get custom quiz by ID
export const getCustomQuizById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; // user id
        const { customQuizId } = req.params; // custom quiz id

        // Find the user
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Find the custom quiz
        const customQuiz = await CustomQuiz.findById(customQuizId);
        if (!customQuiz) {
            return res.status(404).json({ error: 'Custom quiz not found' });
        }

        // Verify the custom quiz belongs to the user
        if (customQuiz.userId.toString() !== id) {
            return res.status(403).json({ error: 'Access denied. This custom quiz does not belong to you.' });
        }

        res.json({
            customQuiz,
            isSubmitted: customQuiz.isSubmitted,
            userScore: customQuiz.userScore,
            submittedAt: customQuiz.submittedAt
        });

    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch custom quiz', details: err });
    }
};

// Get all custom quizzes for a user
export const getUserCustomQuizzes = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Find the user
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Find all custom quizzes for the user
        const customQuizzes = await CustomQuiz.find({ userId: id }).sort({ createdAt: -1 });

        res.json({
            user: {
                name: user.name,
                email: user.email
            },
            customQuizzes: customQuizzes.map(quiz => ({
                _id: quiz._id,
                title: quiz.title,
                lang: quiz.lang,
                quizLevel: quiz.quizLevel,
                isSubmitted: quiz.isSubmitted,
                userScore: quiz.userScore,
                totalQuestions: quiz.customQuestions.length,
                createdAt: quiz.createdAt,
                submittedAt: quiz.submittedAt
            })),
            totalCustomQuizzes: customQuizzes.length,
            submittedQuizzes: customQuizzes.filter(quiz => quiz.isSubmitted).length
        });

    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user custom quizzes', details: err });
    }
}; 