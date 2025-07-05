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

        // Validate ObjectId format
        if (!id || !mongoose.isValidObjectId(id)) {
            return res.status(400).json({ error: 'Invalid user ID format' });
        }

        // Populate quizzes, custom quizzes, and courses
        const user = await User.findById(id)
            .populate('courses.courseId')
            .populate('quizzes.quizId')
            .populate('customQuizzes.quizId');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Debugging logs
        console.log('User ID:', id);
        console.log('User quizzes:', user.quizzes);
        console.log('User courses:', user.courses);
        console.log('Unique quiz IDs:', new Set(user.quizzes.map(q => q.quizId)));
        console.log('Unique course names:', new Set(user.courses.map(c => c.courseName)));

        // Auto-enroll user in recommended path courses if they have a recommended path
        if (user.recommendedPath && user.recommendedPath.path && user.recommendedPath.path.length > 0) {
            const recommendedCourses = user.recommendedPath.path;
            const userCourseNames = user.courses.map(course => course.courseName);
            
            // Find courses in recommended path that user is not enrolled in
            const missingCourses = recommendedCourses.filter(courseName => 
                !userCourseNames.includes(courseName)
            );
            
            if (missingCourses.length > 0) {
                // Find course documents for missing courses
                const coursesToAdd = await Course.find({ 
                    courseName: { $in: missingCourses } 
                });
                
                // Add missing courses with 'enrolled' status
                for (const course of coursesToAdd) {
                    user.courses.push({
                        courseId: course._id as mongoose.Types.ObjectId,
                        courseName: course.courseName,
                        status: 'enrolled',
                        result: 0
                    });
                }
                
                // Save user if we added any courses
                if (coursesToAdd.length > 0) {
                    await user.save();
                    console.log(`Auto-enrolled user ${user.name} in missing recommended path courses: ${coursesToAdd.map(c => c.courseName).join(', ')}`);
                }
            }
        }

        // Quiz stats
        const totalQuizzes = user.quizzes.length;
        const totalCustomQuizzes = user.customQuizzes.length;
        const totalCourses = user.courses.length;

        // Average score (learning path courses only)
        const completedCoursesWithScores = user.courses.filter(course => 
            course.status === 'completed' && course.result > 0
        );
        const totalCourseScore = completedCoursesWithScores.reduce((sum, course) => sum + course.result, 0);
        const averageScore = completedCoursesWithScores.length > 0 
            ? totalCourseScore / completedCoursesWithScores.length 
            : 0;

        // Basic quiz stats (for reference)
        const totalBasicQuizScore = user.quizzes.reduce((sum, quiz) => sum + quiz.userScore, 0);
        const avgBasicQuizScore = totalQuizzes > 0 ? totalBasicQuizScore / totalQuizzes : 0;

        // Custom quiz stats
        const submittedCustomQuizzes = user.customQuizzes.filter(q => q.submittedAt);
        const avgCustomQuizScore = submittedCustomQuizzes.length > 0
            ? submittedCustomQuizzes.reduce((sum, q) => sum + q.userScore, 0) / submittedCustomQuizzes.length
            : 0;

        // Course progress breakdown
        const completedCourses = user.courses.filter(course => course.status === 'completed');
        const inProgressCourses = user.courses.filter(course => course.status === 'in-progress');
        const enrolledCourses = user.courses.filter(course => course.status === 'enrolled');

        // Recent activity - Show ALL attempts, not just unique quizzes, to include all test history
        // Get all quiz attempts with proper quiz information
        const allQuizAttempts = user.quizzes.map(quiz => {
            let quizTitle = 'Basic Quiz';
            let quizLevel = 'beginner';
            let quizLang = user.lang || 'java';
            let topicName = 'basic';

            // Extract quiz information from populated data
            if (quiz.quizId && typeof quiz.quizId === 'object') {
                const quizData = quiz.quizId as any;
                quizLevel = quizData.quizLevel || quizLevel;
                quizLang = quizData.lang || quizLang;
                topicName = quizData.topic?.courseName || topicName;
                
                // Generate a comprehensive title based on available data
                if (quizData.title) {
                    quizTitle = quizData.title;
                } else {
                    // Construct title from parts
                    const langPart = (quizLang || 'Java').charAt(0).toUpperCase() + (quizLang || 'Java').slice(1);
                    const topicPart = (topicName === 'basic') ? 'Basic' : 
                                     topicName.charAt(0).toUpperCase() + topicName.slice(1);
                    const levelPart = (quizLevel || 'Beginner').charAt(0).toUpperCase() + (quizLevel || 'Beginner').slice(1);
                    
                    if (topicName === 'basic') {
                        quizTitle = `${langPart} Basic Quiz - ${levelPart}`;
                    } else {
                        quizTitle = `${langPart} ${topicPart} - ${levelPart} Quiz`;
                    }
                }
            } else {
                // Fallback if quiz data is not populated - try to construct from user language
                const langPart = (quizLang || 'Java').charAt(0).toUpperCase() + (quizLang || 'Java').slice(1);
                quizTitle = `${langPart} Basic Quiz - Beginner`;
            }

            return {
                quizId: quiz.quizId,
                score: quiz.userScore,
                submittedAt: quiz.submittedAt || new Date(),
                type: 'basic',
                title: quizTitle,
                level: quizLevel,
                lang: quizLang,
                topic: topicName
            };
        });

        const allCustomQuizAttempts = user.customQuizzes.map(quiz => {
            let quizTitle = 'Custom Quiz';
            
            if (quiz.quizId && typeof quiz.quizId === 'object') {
                const quizData = quiz.quizId as any;
                quizTitle = quizData.title || quizTitle;
            }

            return {
                quizId: quiz.quizId,
                score: quiz.userScore,
                submittedAt: quiz.submittedAt || new Date(),
                type: 'custom',
                title: quizTitle
            };
        });

        // Sort all attempts by date and take the most recent ones
        const recentQuizzes = allQuizAttempts
            .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())
            .slice(0, 10); // Increased to show more history
            
        const recentCustomQuizzes = allCustomQuizAttempts
            .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())
            .slice(0, 10); // Increased to show more history
        const recentCourses = user.courses
            .filter(course => course.status === 'completed')
            .slice(-5)
            .map(course => ({
                quizId: course.courseId,
                courseName: course.courseName,
                score: course.result,
                submittedAt: null,
                type: 'course'
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
                avgBasicQuizScore: Math.round(avgBasicQuizScore * 100) / 100,
                totalCourseScore: totalCourseScore,
                completedCoursesCount: completedCoursesWithScores.length
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
            quizzes: user.quizzes || [], // <-- ADD THIS
            customQuizzes: user.customQuizzes || [], // <-- AND THIS
            recentActivity: {
                recentQuizzes,
                recentCustomQuizzes,
                recentCourses
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

        // Validate ObjectId format
        if (!id || !mongoose.isValidObjectId(id)) {
            return res.status(400).json({ error: 'Invalid user ID format' });
        }

        // Find the user and populate quizzes for proper checking
        const user = await User.findById(id).populate('quizzes.quizId');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // For basic quizzes, STRICTLY block after one attempt
        if (topic === 'basic') {
            // Check if user has already attempted this basic quiz level
            const basicQuizAttempts = user.quizzes.filter(userQuiz => {
                const quizData = userQuiz.quizId as any;
                return quizData && 
                       quizData.lang === lang && 
                       quizData.quizLevel === quizLevel && 
                       quizData.topic?.courseName === topic;
            });

            if (basicQuizAttempts.length > 0) {
                return res.status(400).json({ 
                    error: 'Basic quiz already attempted',
                    message: `You have already completed the ${quizLevel} level basic quiz. You cannot retake it.`,
                    canRetake: false,
                    attemptCount: basicQuizAttempts.length
                });
            }
        } else {
            // For topic quizzes (after dashboard path selection), implement 2-attempt limit with lockout
            const quizzes = await Quiz.find({
                lang,
                quizLevel,
                'topic.courseName': topic
            });

            if (quizzes.length > 0) {
                // Get all attempts for this specific topic and level
                const userAttempts = user.quizzes.filter(userQuiz => 
                    quizzes.some(quiz => {
                        const quizObjectId = quiz._id as mongoose.Types.ObjectId;
                        const userQuizId = typeof userQuiz.quizId === 'string' 
                            ? userQuiz.quizId 
                            : userQuiz.quizId.toString();
                        return quizObjectId.toString() === userQuizId;
                    })
                ).filter(attempt => 
                    typeof attempt.userScore === 'number' && 
                    Array.isArray(attempt.userAnswers) && 
                    attempt.userAnswers.length > 0
                );

                // Check if user has already passed (>50%)
                const totalQuestions = quizzes.reduce((sum, quiz) => sum + quiz.questions.length, 0);
                const passingScore = totalQuestions * 0.5;
                
                const passedAttempt = userAttempts.find(attempt => attempt.userScore > passingScore);
                if (passedAttempt) {
                    return res.status(400).json({ 
                        error: 'Level already passed',
                        message: `You have already passed ${topic} ${quizLevel} level. You cannot retake it.`,
                        canRetake: false
                    });
                }

                // Check if user has failed twice (≤50% both times)
                if (userAttempts.length >= 2) {
                    const failedAttempts = userAttempts.filter(attempt => attempt.userScore <= passingScore);
                    
                    if (failedAttempts.length >= 2) {
                        // Get the timestamp of the second failed attempt
                        const sortedFailedAttempts = failedAttempts.sort((a, b) => {
                            const aTime = a.submittedAt ? new Date(a.submittedAt).getTime() : 0;
                            const bTime = b.submittedAt ? new Date(b.submittedAt).getTime() : 0;
                            return bTime - aTime; // Sort by most recent first
                        });
                        
                        const lastFailedAttemptTime = sortedFailedAttempts[0].submittedAt 
                            ? new Date(sortedFailedAttempts[0].submittedAt).getTime()
                            : new Date(user.updatedAt).getTime(); // Fallback to user update time
                        
                        const now = Date.now();
                        const lockoutDuration = 24 * 60 * 60 * 1000; // 24 hours

                        if (now - lastFailedAttemptTime < lockoutDuration) {
                            const unlockTime = lastFailedAttemptTime + lockoutDuration;
                            return res.status(400).json({
                                error: 'Quiz locked due to failed attempts',
                                message: `You have failed this level twice. Please try again after the cooldown period.`,
                                locked: true,
                                unlockTime: unlockTime,
                                attemptsRemaining: 0
                            });
                        }
                    }
                }
            }
        }

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
            userAnswers: answers,
            submittedAt: new Date()
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

        // Validate ObjectId format
        if (!id || !mongoose.isValidObjectId(id)) {
            return res.status(400).json({ error: 'Invalid user ID format' });
        }

        // Find user's quiz attempts for this topic
        const user = await User.findById(id).populate({
            path: 'quizzes.quizId',
            model: 'Quiz'
        });
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

        if (quizAttempts.length === 0) {
            return res.status(404).json({ error: 'No quiz attempts found for this topic.' });
        }

        // --- Detailed review for the LATEST attempt ---
        const latestAttempt = quizAttempts[quizAttempts.length - 1];
        const quizDoc = latestAttempt.quizId as any;

        if (!quizDoc || !quizDoc.questions) {
            return res.status(500).json({ error: 'Could not retrieve quiz questions for review.' });
        }

        let questionDetails: Array<{
            questionText: string;
            options: any;
            userAnswer: any;
            correctAnswer: string;
            isCorrect: boolean;
            score: number;
        }> = [];

        quizDoc.questions.forEach((question: any, index: number) => {
            const userAnswer = latestAttempt.userAnswers[index];
            const isCorrect = userAnswer === question.correctOption;
            questionDetails.push({
                questionText: question.questionText,
                options: question.options,
                userAnswer: userAnswer,
                correctAnswer: question.correctOption,
                isCorrect: isCorrect,
                score: isCorrect ? question.score : 0,
            });
        });
        
        const totalQuestions = quizDoc.questions.length;
        const correctAnswers = questionDetails.filter(q => q.isCorrect).length;
        const percentage = (correctAnswers / totalQuestions) * 100;

        // --- Summary statistics for ALL attempts ---
        const totalAttempts = quizAttempts.length;
        const averageScore = totalAttempts > 0
            ? quizAttempts.reduce((sum, attempt) => sum + attempt.userScore, 0) / totalAttempts
            : 0;
        const bestScore = totalAttempts > 0
            ? Math.max(...quizAttempts.map(attempt => attempt.userScore))
            : 0;

        res.json({
            quizInfo: {
                language: lang,
                level: quizLevel,
                topic: topic,
                totalQuestions: totalQuestions
            },
            // Summary stats for all attempts
            summary: {
                totalAttempts,
                averageScore: Math.round(averageScore * 100) / 100,
                bestScore,
            },
            // Detailed results of the latest attempt
            latestAttemptDetails: {
                score: latestAttempt.userScore,
                correctAnswers,
                totalQuestions,
                percentage: Math.round(percentage * 100) / 100,
                grade: getGrade(percentage),
                questionDetails: questionDetails,
            },
            message: 'Review data retrieved successfully.'
        });

    } catch (err) {
        console.error("Error in reviewQuiz:", err); // Add logging
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
            submittedAt: new Date()
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

// Review quiz by level with detailed question breakdown
export const reviewQuizByLevel = async (req: Request, res: Response) => {
    try {
        const { id, level } = req.params;

        // Validate ObjectId format
        if (!id || !mongoose.isValidObjectId(id)) {
            return res.status(400).json({ error: 'Invalid user ID format' });
        }

        // Find user and populate quiz data
        const user = await User.findById(id).populate('quizzes.quizId');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Filter quiz attempts by level
        const quizAttempts = user.quizzes.filter(quiz => {
            const quizDoc = quiz.quizId as any;
            return quizDoc && quizDoc.quizLevel === level;
        });

        if (quizAttempts.length === 0) {
            return res.status(404).json({ 
                error: `No quiz attempts found for level: ${level}`,
                level,
                statistics: {
                    totalAttempts: 0,
                    averageScore: 0,
                    bestScore: 0,
                    latestScore: 0,
                    topicsCovered: []
                },
                attempts: [],
                recommendations: [`Start taking ${level} level quizzes to track your progress`]
            });
        }

        // Calculate statistics
        const totalAttempts = quizAttempts.length;
        const scores = quizAttempts.map(attempt => attempt.userScore);
        const averageScore = scores.reduce((sum, score) => sum + score, 0) / totalAttempts;
        const bestScore = Math.max(...scores);
        const latestScore = scores[scores.length - 1];

        // Get topics covered
        const topicsCovered = Array.from(new Set(quizAttempts.map(attempt => {
            const quizDoc = attempt.quizId as any;
            return quizDoc?.topic?.courseName;
        }).filter(Boolean)));

        // Create detailed attempt history with question breakdown
        const detailedAttempts = quizAttempts.map((attempt, index) => {
            const quizDoc = attempt.quizId as any;
            
            if (!quizDoc || !quizDoc.questions) {
                return {
                    attemptNumber: index + 1,
                    score: attempt.userScore,
                    totalPossibleScore: 0,
                    percentage: 0,
                    topic: quizDoc?.topic?.courseName || 'Unknown',
                    submittedAt: new Date(),
                    questions: [],
                    error: 'Quiz data not available'
                };
            }

            // Calculate percentage
            const totalPossibleScore = quizDoc.questions.length;
            const percentage = Math.round((attempt.userScore / totalPossibleScore) * 100);

            // Create question details
            const questionDetails = quizDoc.questions.map((question: any, qIndex: number) => ({
                questionText: question.questionText,
                options: question.options,
                correctOption: question.correctOption,
                userAnswer: attempt.userAnswers[qIndex] || 'Not answered',
                isCorrect: attempt.userAnswers[qIndex] === question.correctOption,
                score: question.score || 1,
                earnedScore: attempt.userAnswers[qIndex] === question.correctOption ? (question.score || 1) : 0
            }));

            return {
                attemptNumber: index + 1,
                quizId: quizDoc._id,
                quizTitle: quizDoc.title || `${level} Level Quiz`,
                score: attempt.userScore,
                totalPossibleScore: totalPossibleScore,
                percentage: percentage,
                topic: quizDoc.topic?.courseName || 'General',
                submittedAt: new Date(),
                questions: questionDetails
            };
        });

        // Calculate improvement trend
        const improvement = totalAttempts > 1
            ? scores[scores.length - 1] - scores[0]
            : 0;

        // Generate recommendations
        const recommendations = generateQuizRecommendations(level, bestScore, totalAttempts, improvement, topicsCovered);

        res.json({
            level: level,
            levelName: level.charAt(0).toUpperCase() + level.slice(1),
            statistics: {
                totalAttempts,
                averageScore: Math.round(averageScore * 100) / 100,
                bestScore,
                latestScore,
                bestPercentage: detailedAttempts.length > 0 ? Math.max(...detailedAttempts.map(a => a.percentage)) : 0,
                latestPercentage: detailedAttempts.length > 0 ? detailedAttempts[detailedAttempts.length - 1]?.percentage : 0,
                topicsCovered,
                totalTopics: topicsCovered.length
            },
            attempts: detailedAttempts,
            progress: {
                improvement: improvement,
                improvementPercentage: totalAttempts > 1 && detailedAttempts.length >= 2
                    ? detailedAttempts[detailedAttempts.length - 1]?.percentage - detailedAttempts[0]?.percentage
                    : 0
            },
            recommendations: recommendations,
            lastUpdated: new Date().toISOString()
        });

    } catch (err) {
        console.error('Error in reviewQuizByLevel:', err);
        res.status(500).json({ error: 'Failed to fetch quiz review', details: err });
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

// Complete a specific course
export const completeCourse = async (req: Request, res: Response) => {
    try {
        const { id, courseName } = req.params;
        const { result, status = 'completed' } = req.body;

        // Log received data
        console.log(`=== COMPLETING COURSE API CALL ===`);
        console.log(`User ID: ${id}`);
        console.log(`Course Name: "${courseName}"`);
        console.log(`Received Body:`, req.body);
        
        // Extract the additional actualScore field if provided
        const { actualScore } = req.body;
        if (actualScore) {
            console.log(`Actual average score provided: ${actualScore}`);
        }

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        console.log(`Looking for course name "${courseName}" in user's courses:`, user.courses.map((c: any) => c.courseName));
        
        // Find the course in user's courses - with case-insensitive comparison as a fallback
        let userCourse = user.courses.find((c: any) => c.courseName === courseName);
        
        // Try case-insensitive search if exact match fails
        if (!userCourse) {
            userCourse = user.courses.find((c: any) => 
                c.courseName.toLowerCase() === courseName.toLowerCase()
            );
            
            if (userCourse) {
                console.log(`Found course "${userCourse.courseName}" using case-insensitive match for "${courseName}"`);
            }
        }
        
        if (!userCourse) {
            console.error(`Course "${courseName}" not found in user progress. Available courses:`, 
                user.courses.map((c: any) => c.courseName));
            return res.status(404).json({ 
                error: 'Course not found in user progress',
                courseName: courseName,
                availableCourses: user.courses.map((c: any) => c.courseName)
            });
        }

        // Update course status and result
        userCourse.status = status;
        
        // Ensure result is a positive number
        // If result is provided in the request, use it
        // Otherwise, keep existing value or default to 70 for completed courses
        if (typeof result === 'number' && !isNaN(result)) {
            userCourse.result = Math.max(result, 0);
            console.log(`Setting course result to: ${userCourse.result}`);
        } else if (status === 'completed' && (!userCourse.result || userCourse.result === 0)) {
            // If course is marked completed but has no score, set a default passing score
            userCourse.result = 70;
            console.log(`Course completed with no score provided. Setting default score: ${userCourse.result}`);
        }

        await user.save();

        // We can't store the actualScore in the database schema without modifying it,
        // but we can return it in the response for the current session
        console.log(`Course "${userCourse.courseName}" updated: status=${userCourse.status}, result=${userCourse.result}`);
        if (actualScore) {
            console.log(`Note: Actual score ${actualScore} was calculated but using ${userCourse.result} as official score`);
        }

        res.json({
            message: 'Course completion updated successfully',
            course: {
                courseName: userCourse.courseName,
                status: userCourse.status,
                result: userCourse.result,
                // Include actual score in response if available, but we're not storing it
                actualScore: actualScore || userCourse.result
            }
        });

    } catch (err) {
        console.error('Error completing course:', err);
        res.status(500).json({ error: 'Failed to complete course', details: err });
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

// Review course results with detailed breakdown
export const reviewCourse = async (req: Request, res: Response) => {
    try {
        const { id, courseName } = req.params;

        // Validate ObjectId format
        if (!id || !mongoose.isValidObjectId(id)) {
            return res.status(400).json({ error: 'Invalid user ID format' });
        }

        // Find user's course progress
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const courseProgress = user.courses.find(course => 
            course.courseName === courseName
        );

        if (!courseProgress) {
            return res.status(404).json({ error: 'Course not found in user progress' });
        }

        // Get user's preferred language
        const lang = user.lang || 'java';
        const levels = ['beginner', 'intermediate', 'advanced'];
        
        // Aggregate quiz attempts across all levels for this course - but keep levels separate
        const levelResults = await Promise.all(levels.map(async (level) => {
            try {
                // Get all quizzes for this course and level
                const quizzes = await Quiz.find({
                    lang: lang,
                    quizLevel: level,
                    'topic.courseName': courseName
                });

                if (quizzes.length === 0) {
                    return {
                        level: level,
                        totalQuestions: 0,
                        attempts: [],
                        bestScore: 0,
                        latestScore: 0,
                        totalAttempts: 0,
                        questions: [],
                        bestPercentage: 0,
                        latestPercentage: 0
                    };
                }

                // Find user's attempts for this level/course combination
                const userAttempts = user.quizzes.filter(userQuiz => 
                    quizzes.some(quiz => (quiz._id as mongoose.Types.ObjectId).equals(userQuiz.quizId))
                );

                if (userAttempts.length === 0) {
                    return {
                        level: level,
                        totalQuestions: quizzes[0]?.questions?.length || 0,
                        attempts: [],
                        bestScore: 0,
                        latestScore: 0,
                        totalAttempts: 0,
                        questions: [],
                        bestPercentage: 0,
                        latestPercentage: 0
                    };
                }

                // Get the latest attempt for detailed review
                const latestAttempt = userAttempts[userAttempts.length - 1];
                const latestQuiz = quizzes.find(q => (q._id as mongoose.Types.ObjectId).equals(latestAttempt.quizId));
                
                // Calculate statistics
                const scores = userAttempts.map(attempt => attempt.userScore);
                const bestScore = scores.length > 0 ? Math.max(...scores) : 0;
                const latestScore = scores.length > 0 ? scores[scores.length - 1] : 0;
                
                // Calculate percentages based on quiz length
                const totalQuestions = latestQuiz?.questions?.length || 0;
                const bestPercentage = totalQuestions > 0 ? Math.round((bestScore / totalQuestions) * 100) : 0;
                const latestPercentage = totalQuestions > 0 ? Math.round((latestScore / totalQuestions) * 100) : 0;

                // Create detailed questions review from the LATEST attempt only
                const questionsReview = latestQuiz ? latestQuiz.questions.map((question, qIndex) => ({
                    questionText: question.questionText,
                    options: question.options,
                    correctOption: question.correctOption,
                    userAnswer: latestAttempt.userAnswers[qIndex] || 'Not answered',
                    isCorrect: latestAttempt.userAnswers[qIndex] === question.correctOption,
                    score: question.score,
                    earnedScore: latestAttempt.userAnswers[qIndex] === question.correctOption ? question.score : 0
                })) : [];

                return {
                    level: level,
                    totalQuestions: totalQuestions,
                    attempts: userAttempts.map((attempt, index) => ({
                        attemptNumber: index + 1,
                        score: attempt.userScore,
                        totalQuestions: totalQuestions,
                        percentage: totalQuestions > 0 ? Math.round((attempt.userScore / totalQuestions) * 100) : 0,
                        submittedAt: attempt.submittedAt || 'N/A'
                    })),
                    bestScore: bestScore,
                    latestScore: latestScore,
                    totalAttempts: userAttempts.length,
                    questions: questionsReview,
                    bestPercentage: bestPercentage,
                    latestPercentage: latestPercentage
                };
            } catch (err) {
                console.error(`Error processing level ${level}:`, err);
                return {
                    level: level,
                    totalQuestions: 0,
                    attempts: [],
                    bestScore: 0,
                    latestScore: 0,
                    totalAttempts: 0,
                    questions: [],
                    bestPercentage: 0,
                    latestPercentage: 0,
                    error: `Failed to process ${level} level`
                };
            }
        }));

        // Calculate overall course statistics
        const totalAttempts = levelResults.reduce((sum, level) => sum + level.totalAttempts, 0);
        const totalQuestions = levelResults.reduce((sum, level) => sum + level.totalQuestions, 0);
        const averageScore = levelResults.length > 0 
            ? levelResults.reduce((sum, level) => sum + (level.bestPercentage || 0), 0) / levelResults.length 
            : 0;

        // Determine completion status
        const completedLevels = levelResults.filter(level => (level.bestPercentage || 0) >= 60).length;
        const isFullyCompleted = completedLevels === 3;

        res.json({
            courseInfo: {
                courseName: courseProgress.courseName,
                status: courseProgress.status,
                result: courseProgress.result,
                language: lang,
                totalLevels: levels.length,
                completedLevels: completedLevels,
                isFullyCompleted: isFullyCompleted
            },
            statistics: {
                totalAttempts: totalAttempts,
                totalQuestions: totalQuestions,
                averageScore: Math.round(averageScore),
                completionPercentage: Math.round((completedLevels / levels.length) * 100)
            },
            levelResults: levelResults,
            recommendations: getRecommendations(levelResults, courseName),
            lastUpdated: new Date().toISOString()
        });

    } catch (err) {
        console.error('Error reviewing course:', err);
        res.status(500).json({ error: 'Failed to fetch course review', details: err });
    }
};

// Helper function to generate recommendations based on course performance
function getRecommendations(levelResults: any[], courseName: string): string[] {
    const recommendations: string[] = [];
    
    const beginnerLevel = levelResults.find(level => level.level === 'beginner');
    const intermediateLevel = levelResults.find(level => level.level === 'intermediate');
    const advancedLevel = levelResults.find(level => level.level === 'advanced');

    if (beginnerLevel && (beginnerLevel.bestPercentage || 0) < 60) {
        recommendations.push(`Focus on strengthening basic ${courseName} concepts`);
    }
    
    if (beginnerLevel && (beginnerLevel.bestPercentage || 0) >= 60 && (!intermediateLevel || intermediateLevel.totalAttempts === 0)) {
        recommendations.push(`Ready to attempt intermediate ${courseName} level`);
    }
    
    if (intermediateLevel && (intermediateLevel.bestPercentage || 0) >= 60 && (!advancedLevel || advancedLevel.totalAttempts === 0)) {
        recommendations.push(`Ready to attempt advanced ${courseName} level`);
    }
    
    if (advancedLevel && (advancedLevel.bestPercentage || 0) >= 80) {
        recommendations.push(`Excellent mastery of ${courseName}! Consider moving to the next concept.`);
    }

    // If no specific recommendations, provide general guidance
    if (recommendations.length === 0) {
        const totalAttempts = levelResults.reduce((sum, level) => sum + level.totalAttempts, 0);
        if (totalAttempts === 0) {
            recommendations.push(`Start with the beginner level to build foundation in ${courseName}`);
        } else {
            recommendations.push(`Continue practicing to improve your ${courseName} skills`);
        }
    }

    return recommendations;
}

// Helper function to generate quiz recommendations
function generateQuizRecommendations(level: string, bestScore: number, totalAttempts: number, improvement: number, topicsCovered: string[]): string[] {
    const recommendations: string[] = [];
    
    // Calculate approximate percentage (assuming ~10-20 questions per quiz)
    const estimatedPercentage = (bestScore / Math.max(15, bestScore)) * 100;
    
    if (totalAttempts === 0) {
        recommendations.push(`Start taking ${level} level quizzes to build your foundation`);
    } else if (estimatedPercentage < 40) {
        recommendations.push(`Focus on reviewing ${level} level concepts before retaking quizzes`);
        recommendations.push(`Consider studying the basics more thoroughly`);
    } else if (estimatedPercentage < 60) {
        recommendations.push(`You're making progress! Keep practicing ${level} level quizzes`);
        recommendations.push(`Review questions you got wrong to improve further`);
    } else if (estimatedPercentage < 80) {
        recommendations.push(`Good performance on ${level} level! Ready for more challenging topics`);
        if (level === 'beginner') {
            recommendations.push(`Consider attempting intermediate level quizzes`);
        }
    } else {
        recommendations.push(`Excellent mastery of ${level} level concepts!`);
        if (level === 'beginner') {
            recommendations.push(`Ready to advance to intermediate level`);
        } else if (level === 'intermediate') {
            recommendations.push(`Ready to advance to advanced level`);
        } else {
            recommendations.push(`Consider exploring more advanced topics or different subjects`);
        }
    }
    
    if (improvement > 0 && totalAttempts > 1) {
        recommendations.push(`Great improvement! Your score increased by ${improvement} points`);
    } else if (improvement < 0 && totalAttempts > 1) {
        recommendations.push(`Take some time to review before the next attempt`);
    }
    
    if (topicsCovered.length > 0) {
        recommendations.push(`Topics covered: ${topicsCovered.join(', ')}`);
    }
    
    return recommendations;
}

// Debug endpoint to help identify missing quizzes and test history issues
export const debugUserQuizHistory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validate ObjectId format
        if (!id || !mongoose.isValidObjectId(id)) {
            return res.status(400).json({ error: 'Invalid user ID format' });
        }

        // Get user with populated quiz data
        const user = await User.findById(id)
            .populate('quizzes.quizId')
            .populate('customQuizzes.quizId');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Get all available Java basic quizzes
        const allJavaQuizzes = await Quiz.find({ 
            lang: 'java', 
            'topic.courseName': 'basic' 
        });

        // Analyze user's quiz attempts
        const quizAnalysis = user.quizzes.map((attempt, index) => {
            let quizInfo: any = null;
            if (attempt.quizId && typeof attempt.quizId === 'object') {
                const quizData = attempt.quizId as any;
                quizInfo = {
                    id: quizData._id,
                    title: quizData.title,
                    level: quizData.quizLevel,
                    lang: quizData.lang,
                    topic: quizData.topic?.courseName,
                    description: quizData.description
                };
            }

            return {
                attemptIndex: index,
                quizId: attempt.quizId?.toString() || 'Unknown',
                userScore: attempt.userScore,
                userAnswers: attempt.userAnswers?.length || 0,
                submittedAt: attempt.submittedAt,
                quizInfo: quizInfo,
                isPopulated: !!quizInfo
            };
        });

        // Find missing basic quizzes that user hasn't attempted
        const attemptedQuizIds = user.quizzes.map(q => q.quizId?.toString()).filter(Boolean);
        const missingBasicQuizzes = allJavaQuizzes.filter(quiz => 
            !attemptedQuizIds.includes((quiz._id as any).toString())
        );

        res.json({
            userInfo: {
                id: user._id,
                name: user.name,
                email: user.email,
                lang: user.lang
            },
            totalAttempts: user.quizzes.length,
            totalCustomAttempts: user.customQuizzes.length,
            allJavaBasicQuizzes: allJavaQuizzes.map(q => ({
                id: q._id,
                title: q.title,
                level: q.quizLevel,
                topic: q.topic?.courseName,
                description: q.description
            })),
            userQuizAttempts: quizAnalysis,
            missingBasicQuizzes: missingBasicQuizzes.map(q => ({
                id: q._id,
                title: q.title,
                level: q.quizLevel,
                topic: q.topic?.courseName,
                description: q.description
            })),
            summary: {
                totalJavaBasicQuizzes: allJavaQuizzes.length,
                attemptedQuizzes: attemptedQuizIds.length,
                missingQuizzes: missingBasicQuizzes.length,
                populationIssues: quizAnalysis.filter(a => !a.isPopulated).length
            }
        });

    } catch (err) {
        console.error('Error in debugUserQuizHistory:', err);
        res.status(500).json({ error: 'Failed to debug quiz history', details: err });
    }
};