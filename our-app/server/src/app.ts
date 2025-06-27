import express from 'express';
import cors from 'cors';

// Import all route modules
import authRoutes from './routes/authRoutes';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import courseRoutes from './routes/courseRoutes';
import quizRoutes from './routes/quizRoutes';
import customQuizRoutes from './routes/customQuizRoutes';

const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Parse JSON payloads
app.use(express.json());

// Parse URL-encoded payloads
app.use(express.urlencoded({ extended: true }));


// Authentication routes (login, signup)
// Base path: /api
app.use('/api', authRoutes);

// Home page routes (landing page data)
// Base path: /api
app.use('/api', homeRoutes);

// User management routes (CRUD operations + dashboard)
// Base path: /api/users
app.use('/api/users', userRoutes);

// Course management routes (CRUD operations)
// Base path: /api/courses
app.use('/api/courses', courseRoutes);

// Quiz management routes (CRUD operations)
// Base path: /api/quizzes
app.use('/api/quizzes', quizRoutes);

// Custom quiz routes (CRUD operations)
// Base path: /api/custom-quizzes
app.use('/api/custom-quizzes', customQuizRoutes);

// ========================================
// ROOT ROUTE
// ========================================

// Health check and server status
app.get('/', (req, res) => {
    res.json({
        message: 'Server is running successfully!',
        status: 'OK',
        timestamp: new Date().toISOString(),
        endpoints: {
            auth: '/api/login, /api/signup',
            home: '/api/home',
            users: '/api/users/*',
            courses: {
                basic: '/api/courses/*',
                advanced: {
                    search: '/api/courses/search?q=term&level=beginner&prerequisite=javascript',
                    difficultyRange: '/api/courses/difficulty-range?minLevel=beginner&maxLevel=intermediate',
                    byTitle: '/api/courses/title/:title',
                    byLevel: '/api/courses/level/:level',
                    byPrerequisite: '/api/courses/prerequisite/:prerequisite',
                    byTitleAndLevel: '/api/courses/title/:title/level/:level',
                    byLevelAndPrerequisite: '/api/courses/level/:level/prerequisite/:prerequisite',
                    byTitleLevelAndPrerequisite: '/api/courses/title/:title/level/:level/prerequisite/:prerequisite'
                }
            },
            quizzes: {
                basic: '/api/quizzes/*',
                advanced: {
                    search: '/api/quizzes/search?q=term&language=java&level=beginner&topic=arrays',
                    byLanguage: '/api/quizzes/language/:language',
                    byLevel: '/api/quizzes/level/:level',
                    byTopic: '/api/quizzes/topic/:topic',
                    byLanguageAndLevel: '/api/quizzes/language/:language/level/:level',
                    byLanguageAndTopic: '/api/quizzes/language/:language/topic/:topic',
                    byLevelAndTopic: '/api/quizzes/level/:level/topic/:topic',
                    byLanguageLevelAndTopic: '/api/quizzes/language/:language/level/:level/topic/:topic'
                }
            },
            customQuizzes: '/api/custom-quizzes/*'
        }
    });
});

// ========================================
// ERROR HANDLING MIDDLEWARE
// ========================================

// 404 handler for undefined routes
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Route not found',
        message: `The requested route ${req.originalUrl} does not exist`,
        availableEndpoints: {
            auth: '/api/login, /api/signup',
            home: '/api/home',
            users: '/api/users/*',
            courses: {
                basic: '/api/courses/*',
                advanced: {
                    search: '/api/courses/search?q=term&level=beginner&prerequisite=javascript',
                    difficultyRange: '/api/courses/difficulty-range?minLevel=beginner&maxLevel=intermediate',
                    byTitle: '/api/courses/title/:title',
                    byLevel: '/api/courses/level/:level',
                    byPrerequisite: '/api/courses/prerequisite/:prerequisite',
                    byTitleAndLevel: '/api/courses/title/:title/level/:level',
                    byLevelAndPrerequisite: '/api/courses/level/:level/prerequisite/:prerequisite',
                    byTitleLevelAndPrerequisite: '/api/courses/title/:title/level/:level/prerequisite/:prerequisite'
                }
            },
            quizzes: {
                basic: '/api/quizzes/*',
                advanced: {
                    search: '/api/quizzes/search?q=term&language=java&level=beginner&topic=arrays',
                    byLanguage: '/api/quizzes/language/:language',
                    byLevel: '/api/quizzes/level/:level',
                    byTopic: '/api/quizzes/topic/:topic',
                    byLanguageAndLevel: '/api/quizzes/language/:language/level/:level',
                    byLanguageAndTopic: '/api/quizzes/language/:language/topic/:topic',
                    byLevelAndTopic: '/api/quizzes/level/:level/topic/:topic',
                    byLanguageLevelAndTopic: '/api/quizzes/language/:language/level/:level/topic/:topic'
                }
            },
            customQuizzes: '/api/custom-quizzes/*'
        }
    });
});

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Global error handler:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: 'Something went wrong on the server',
        timestamp: new Date().toISOString()
    });
});

export default app;
