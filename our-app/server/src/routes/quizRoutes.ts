import express, { RequestHandler } from 'express';
import {
    getAllQuizzes,
    getQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz,
    getQuizzesByLanguage,
    getQuizzesByLevel,
    getQuizzesByTopic,
    getQuizzesByLanguageAndLevel,
    getQuizzesByLanguageAndTopic,
    getQuizzesByLevelAndTopic,
    getQuizzesByLanguageLevelAndTopic,
    searchQuizzes
} from '../controllers/quizController';

const router = express.Router();

// GET /api/quizzes
router.get('/', getAllQuizzes as RequestHandler);

// GET /api/quizzes/search - Advanced search with query parameters
router.get('/search', searchQuizzes as RequestHandler);

// GET /api/quizzes/language/:language
router.get('/language/:language', getQuizzesByLanguage as RequestHandler);

// GET /api/quizzes/level/:level
router.get('/level/:level', getQuizzesByLevel as RequestHandler);

// GET /api/quizzes/topic/:topic
router.get('/topic/:topic', getQuizzesByTopic as RequestHandler);

// GET /api/quizzes/language/:language/level/:level
router.get('/language/:language/level/:level', getQuizzesByLanguageAndLevel as RequestHandler);

// GET /api/quizzes/language/:language/topic/:topic
router.get('/language/:language/topic/:topic', getQuizzesByLanguageAndTopic as RequestHandler);

// GET /api/quizzes/level/:level/topic/:topic
router.get('/level/:level/topic/:topic', getQuizzesByLevelAndTopic as RequestHandler);

// GET /api/quizzes/language/:language/level/:level/topic/:topic
router.get('/language/:language/level/:level/topic/:topic', getQuizzesByLanguageLevelAndTopic as RequestHandler);

// GET /api/quizzes/:id
router.get('/:id', getQuizById as RequestHandler);

// POST /api/quizzes
router.post('/', createQuiz as RequestHandler);

// PUT /api/quizzes/:id
router.put('/:id', updateQuiz as RequestHandler);

// DELETE /api/quizzes/:id
router.delete('/:id', deleteQuiz as RequestHandler);

export default router; 