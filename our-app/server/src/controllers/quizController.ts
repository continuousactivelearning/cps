import Quiz from '../models/Quiz';
import User from '../models/User';
import CustomQuiz from '../models/CustomQuiz';
import type { Request, Response } from 'express';
import type { QuizDocument } from '../interfaces/Document_Interfaces';
import mongoose from 'mongoose';

export const getAllQuizzes = async (req: Request, res: Response) => {
    try {
        // console.log('MongoDB connection state:', mongoose.connection.readyState);
        // console.log('Connected to database:', mongoose.connection.name);

        const quizzes = await Quiz.find();
        // console.log('Quizzes found:', quizzes.length);
        // console.log('First quiz:', quizzes[0]);

        res.json(quizzes);
    } catch (err) {
        console.error('Error fetching quizzes:', err);
        res.status(500).json({ error: 'Failed to fetch quizzes', details: err });
    }
};

export const getQuizById = async (req: Request, res: Response) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
        res.json(quiz);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quiz', details: err });
    }
};

export const createQuiz = async (req: Request, res: Response) => {
    try {
        console.log('Creating quiz with body:', req.body);
        const quiz = new Quiz(req.body);
        await quiz.save();
        res.status(201).json(quiz);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create quiz', details: err });
    }
};

export const updateQuiz = async (req: Request, res: Response) => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
        res.json(quiz);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update quiz', details: err });
    }
};

export const deleteQuiz = async (req: Request, res: Response) => {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
        res.json({ message: 'Quiz deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete quiz', details: err });
    }
};

// METHODS FOR ADVANCED QUERYING

export const getQuizzesByLang = async (req: Request, res: Response) => {
    try {
        const { lang } = req.params;
        const validLanguages = ['cpp', 'python', 'javascript', 'java'];

        if (!validLanguages.includes(lang)) {
            return res.status(400).json({ error: 'Invalid language parameter' });
        }

        const quizzes = await Quiz.find({ lang }).populate('topic.courseID');
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quizzes' });
    }
};

export const getQuizzesByLevel = async (req: Request, res: Response) => {
    try {
        const { level } = req.params;
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLevels.includes(level)) {
            return res.status(400).json({
                error: 'Invalid level',
                validLevels
            });
        }

        const quizzes = await Quiz.find({ quizLevel: level });
        res.json({
            level,
            count: quizzes.length,
            quizzes
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quizzes by level', details: err });
    }
};

export const getQuizzesByTopic = async (req: Request, res: Response) => {
    try {
        const { topic } = req.params;

        const quizzes = await Quiz.find({ 'topic.courseName': { $regex: topic, $options: 'i' } });
        res.json({
            topic,
            count: quizzes.length,
            quizzes
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quizzes by topic', details: err });
    }
};

export const getQuizzesByLangAndLevel = async (req: Request, res: Response) => {
    try {
        const { lang, level } = req.params;
        const validLanguages = ['cpp', 'python', 'javascript', 'java'];
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLanguages.includes(lang) || !validLevels.includes(level)) {
            return res.status(400).json({ error: 'Invalid language or level parameter' });
        }

        const quizzes = await Quiz.find({ lang, quizLevel: level }).populate('topic.courseID');
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quizzes' });
    }
};

export const getQuizzesByLangAndTopic = async (req: Request, res: Response) => {
    try {
        const { lang, topic } = req.params;
        const validLanguages = ['cpp', 'python', 'javascript', 'java'];

        if (!validLanguages.includes(lang)) {
            return res.status(400).json({ error: 'Invalid language parameter' });
        }

        const quizzes = await Quiz.find({
            lang,
            'topic.courseName': { $regex: topic, $options: 'i' }
        }).populate('topic.courseID');
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quizzes' });
    }
};

export const getQuizzesByLevelAndTopic = async (req: Request, res: Response) => {
    try {
        const { level, topic } = req.params;
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLevels.includes(level)) {
            return res.status(400).json({
                error: 'Invalid level',
                validLevels
            });
        }

        const quizzes = await Quiz.find({
            quizLevel: level,
            'topic.courseName': { $regex: topic, $options: 'i' }
        });
        res.json({
            level,
            topic,
            count: quizzes.length,
            quizzes
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch quizzes by level and topic', details: err });
    }
};

export const getQuizzesByLangLevelAndTopic = async (req: Request, res: Response) => {
    try {
        const { lang, level, topic } = req.params;
        const validLanguages = ['cpp', 'python', 'javascript', 'java'];
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLanguages.includes(lang) || !validLevels.includes(level)) {
            return res.status(400).json({ error: 'Invalid language or level parameter' });
        }

        const quizzes = await Quiz.find({
            lang,
            quizLevel: level,
            'topic.courseName': { $regex: topic, $options: 'i' }
        }).populate('topic.courseID');
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quizzes' });
    }
};

export const searchQuizzes = async (req: Request, res: Response) => {
    try {
        const { q, lang, level, topic, limit = 20, page = 1 } = req.query;

        // Improved text search logic
        if (q) {
            const searchTerm = q as string;

            // Try multiple search approaches
            const titleSearch = await Quiz.find({ title: { $regex: searchTerm, $options: 'i' } });
            const descriptionSearch = await Quiz.find({ description: { $regex: searchTerm, $options: 'i' } });
            const topicSearch = await Quiz.find({ 'topic.courseName': { $regex: searchTerm, $options: 'i' } });

            // Try text search (might fail if index not working)
            let textSearch: any[] = [];
            try {
                textSearch = await Quiz.find({ $text: { $search: searchTerm } });
            } catch (textError) {
                console.log('Text search failed, using regex only:', textError);
            }

            // Combine all results and remove duplicates
            const allResults = [...titleSearch, ...descriptionSearch, ...topicSearch, ...textSearch];
            const uniqueResults = allResults.filter((quiz, index, self) =>
                index === self.findIndex(q => (q as any)._id.toString() === (quiz as any)._id.toString())
            );

            // Apply additional filters if specified
            let filteredResults = uniqueResults;
            if (lang) {
                filteredResults = filteredResults.filter(quiz => quiz.lang === lang);
            }
            if (level) {
                filteredResults = filteredResults.filter(quiz => quiz.quizLevel === level);
            }
            if (topic) {
                filteredResults = filteredResults.filter(quiz =>
                    quiz.topic.courseName.toLowerCase().includes((topic as string).toLowerCase())
                );
            }

            const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
            const paginatedResults = filteredResults.slice(skip, skip + parseInt(limit as string));

            console.log("Quiz search debug:", {
                searchTerm,
                titleSearchCount: titleSearch.length,
                descriptionSearchCount: descriptionSearch.length,
                topicSearchCount: topicSearch.length,
                textSearchCount: textSearch.length,
                totalUniqueResults: uniqueResults.length,
                finalResults: paginatedResults.length
            });

            res.json({
                quizzes: paginatedResults,
                pagination: {
                    page: parseInt(page as string),
                    limit: parseInt(limit as string),
                    total: filteredResults.length,
                    pages: Math.ceil(filteredResults.length / parseInt(limit as string))
                },
                searchInfo: {
                    searchTerm,
                    titleSearchCount: titleSearch.length,
                    descriptionSearchCount: descriptionSearch.length,
                    topicSearchCount: topicSearch.length,
                    textSearchCount: textSearch.length
                }
            });
        } else {
            // No search term, just apply filters
            const query: any = {};
            if (lang) query.lang = lang;
            if (level) query.quizLevel = level;
            if (topic) query['topic.courseName'] = { $regex: topic as string, $options: 'i' };

            const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
            const quizzes = await Quiz.find(query)
                .limit(parseInt(limit as string))
                .skip(skip)
                .sort({ createdAt: -1 });

            const total = await Quiz.countDocuments(query);

            res.json({
                quizzes,
                pagination: {
                    page: parseInt(page as string),
                    limit: parseInt(limit as string),
                    total,
                    pages: Math.ceil(total / parseInt(limit as string))
                }
            });
        }
    } catch (err) {
        console.error('Quiz search error:', err);
        res.status(500).json({ error: 'Failed to search quizzes', details: err });
    }
};

export const debugQuizzes = async (req: Request, res: Response) => {
    try {
        // Get all quizzes
        const allQuizzes = await Quiz.find().sort({ title: 1 }) as QuizDocument[];

        // Check for specific quiz with Arrays topic
        const arraysQuizzes = await Quiz.find({ 'topic.courseName': { $regex: 'Arrays', $options: 'i' } }) as QuizDocument[];

        // Test text search directly
        let textSearchResults: any[] = [];
        try {
            textSearchResults = await Quiz.find({ $text: { $search: 'Arrays' } }) as QuizDocument[];
        } catch (textError) {
            console.log('Text search failed:', textError);
        }

        // Test regex searches
        const titleSearchResults = await Quiz.find({ title: { $regex: 'Arrays', $options: 'i' } }) as QuizDocument[];
        const topicSearchResults = await Quiz.find({ 'topic.courseName': { $regex: 'Arrays', $options: 'i' } }) as QuizDocument[];

        res.json({
            totalQuizzes: allQuizzes.length,
            quizTitles: allQuizzes.map(q => q.title),
            arraysQuizzes: arraysQuizzes.map(q => ({ id: (q as any)._id.toString(), title: q.title, topic: q.topic.courseName })),
            textSearchResults: textSearchResults.map(q => ({ id: (q as any)._id.toString(), title: q.title, topic: q.topic.courseName })),
            titleSearchResults: titleSearchResults.map(q => ({ id: (q as any)._id.toString(), title: q.title, topic: q.topic.courseName })),
            topicSearchResults: topicSearchResults.map(q => ({ id: (q as any)._id.toString(), title: q.title, topic: q.topic.courseName })),
            sampleQuizzes: allQuizzes.slice(0, 5).map(q => ({ id: (q as any)._id.toString(), title: q.title, topic: q.topic.courseName, level: q.quizLevel }))
        });
    } catch (err) {
        console.error('Debug error:', err);
        res.status(500).json({ error: 'Failed to debug quizzes', details: err });
    }
};

export const getQuizReview = async (req: Request, res: Response) => {
    try {
        const { id: quizId } = req.params;
        const { userId } = req.query;

        // Validate required parameters
        if (!quizId || !userId) {
            return res.status(400).json({ 
                error: 'Quiz ID and User ID are required',
                message: 'Please provide both quizId and userId parameters' 
            });
        }

        // Validate ObjectId format
        if (!mongoose.isValidObjectId(quizId) || !mongoose.isValidObjectId(userId)) {
            return res.status(400).json({ error: 'Invalid quiz ID or user ID format' });
        }

        // Get user data
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Try to find the quiz in basic quizzes first
        let quiz = await Quiz.findById(quizId);
        let quizType = 'basic';
        let userAttempt: any = null;

        if (quiz) {
            // Find user's LATEST attempt for this basic quiz (get all attempts and take the last one)
            const allAttempts = user.quizzes.filter(q => q.quizId.toString() === quizId);
            userAttempt = allAttempts.length > 0 ? allAttempts[allAttempts.length - 1] : null;
        } else {
            // Try to find in custom quizzes
            quiz = await CustomQuiz.findById(quizId);
            quizType = 'custom';
            
            if (quiz) {
                // Find user's LATEST attempt for this custom quiz
                const allAttempts = user.customQuizzes.filter(q => q.quizId.toString() === quizId);
                userAttempt = allAttempts.length > 0 ? allAttempts[allAttempts.length - 1] : null;
            }
        }

        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }

        if (!userAttempt) {
            return res.status(404).json({ 
                error: 'No quiz attempt found',
                message: 'User has not attempted this quiz yet' 
            });
        }

        // Build comprehensive review data
        const questions = (quiz as any).questions || (quiz as any).customQuestions || [];
        const maxScore = questions.reduce((sum: number, q: any) => sum + (q.score || 1), 0);
        
        const reviewData = {
            quizInfo: {
                id: quiz._id,
                title: quiz.title,
                type: quizType,
                lang: quiz.lang,
                level: quiz.quizLevel,
                topic: quiz.topic?.courseName || 'N/A',
                description: quiz.description || 'No description available',
                totalQuestions: questions.length,
                maxScore: maxScore
            },
            userResult: {
                score: userAttempt.userScore || 0,
                percentage: maxScore > 0 ? Math.round(((userAttempt.userScore || 0) / maxScore) * 100) : 0,
                submittedAt: userAttempt.submittedAt || new Date(),
                totalAnswered: userAttempt.userAnswers.length,
                status: (userAttempt.userScore || 0) >= maxScore * 0.6 ? 'PASSED' : 'FAILED'
            },
            questions: questions.map((question, index) => {
                const userAnswer = userAttempt.userAnswers[index];
                const correctAnswer = question.correctOption;
                const isCorrect = userAnswer === correctAnswer;

                return {
                    questionNumber: index + 1,
                    questionText: question.questionText,
                    options: question.options.map(opt => ({
                        tag: opt.optionTag,
                        text: opt.optionText,
                        isCorrect: opt.optionTag === correctAnswer,
                        isUserAnswer: opt.optionTag === userAnswer
                    })),
                    userAnswer: userAnswer || 'NOT_ANSWERED',
                    correctAnswer: correctAnswer,
                    isCorrect: isCorrect,
                    points: isCorrect ? (question.score || 1) : 0,
                    maxPoints: question.score || 1,
                    explanation: isCorrect ? 'Correct answer!' : `Incorrect. The correct answer is ${correctAnswer}.`
                };
            }),
            summary: {
                totalQuestions: questions.length,
                correctAnswers: userAttempt.userAnswers.filter((answer, index) => 
                    answer === questions[index].correctOption
                ).length,
                incorrectAnswers: userAttempt.userAnswers.filter((answer, index) => 
                    answer && answer !== questions[index].correctOption
                ).length,
                unanswered: questions.length - userAttempt.userAnswers.filter(answer => answer).length,
                accuracy: questions.length > 0 ? Math.round((userAttempt.userAnswers.filter((answer, index) => 
                    answer === questions[index].correctOption
                ).length / questions.length) * 100) : 0
            },
            recommendations: generateRecommendations(userAttempt.userScore || 0, maxScore, quiz.lang, quiz.quizLevel, quiz.topic?.courseName || 'N/A')
        };

        res.json(reviewData);

    } catch (err) {
        console.error('Error in getQuizReview:', err);
        res.status(500).json({ error: 'Failed to get quiz review', details: err });
    }
};

// Helper function to generate recommendations
function generateRecommendations(userScore: number, maxScore: number, lang: string, level: string, topic: string) {
    const percentage = Math.round((userScore / maxScore) * 100);
    
    if (percentage >= 80) {
        return {
            message: "Excellent work! You've mastered this topic.",
            suggestions: [
                "Consider moving to the next difficulty level",
                "Try exploring related advanced topics",
                "Share your knowledge by helping others"
            ]
        };
    } else if (percentage >= 60) {
        return {
            message: "Good job! You have a solid understanding.",
            suggestions: [
                "Review the questions you missed",
                "Practice similar problems",
                "Consider retaking to improve your score"
            ]
        };
    } else {
        return {
            message: "Keep practicing! This topic needs more attention.",
            suggestions: [
                "Review the fundamental concepts",
                "Practice more problems on this topic",
                "Consider studying the material again before retaking"
            ]
        };
    }
}