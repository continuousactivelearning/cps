import Quiz from '../models/Quiz';
import type { Request, Response } from 'express';
import type { QuizDocument } from '../interfaces/Document_Interfaces';

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