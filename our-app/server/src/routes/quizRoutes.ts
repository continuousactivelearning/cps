import express, { RequestHandler } from 'express';
import {
    getAllQuizzes,
    getQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz,
    getQuizzesByLang,
    getQuizzesByLevel,
    getQuizzesByTopic,
    getQuizzesByLangAndLevel,
    getQuizzesByLangAndTopic,
    getQuizzesByLevelAndTopic,
    getQuizzesByLangLevelAndTopic,
    searchQuizzes,
    debugQuizzes
} from '../controllers/quizController';

const router = express.Router();

// GET /api/quizzes
router.get('/', getAllQuizzes as RequestHandler);

// GET /api/quizzes/debug - Debug endpoint to check database state
router.get('/debug', debugQuizzes as RequestHandler);

// GET /api/quizzes/search - Advanced search with query parameters
router.get('/search', searchQuizzes as RequestHandler);

// GET /api/quizzes/lang/:lang
router.get('/lang/:lang', getQuizzesByLang as RequestHandler);

// GET /api/quizzes/level/:level
router.get('/level/:level', getQuizzesByLevel as RequestHandler);

// GET /api/quizzes/topic/:topic
router.get('/topic/:topic', getQuizzesByTopic as RequestHandler);

// GET /api/quizzes/lang/:lang/level/:level
router.get('/lang/:lang/level/:level', getQuizzesByLangAndLevel as RequestHandler);

// GET /api/quizzes/lang/:lang/topic/:topic
router.get('/lang/:lang/topic/:topic', getQuizzesByLangAndTopic as RequestHandler);

// GET /api/quizzes/level/:level/topic/:topic
router.get('/level/:level/topic/:topic', getQuizzesByLevelAndTopic as RequestHandler);

// GET /api/quizzes/lang/:lang/level/:level/topic/:topic
router.get('/lang/:lang/level/:level/topic/:topic', getQuizzesByLangLevelAndTopic as RequestHandler);

// GET /api/quizzes/:id
router.get('/:id', getQuizById as RequestHandler);

// POST /api/quizzes
router.post('/', createQuiz as RequestHandler);

// PUT /api/quizzes/:id
router.put('/:id', updateQuiz as RequestHandler);

// DELETE /api/quizzes/:id
router.delete('/:id', deleteQuiz as RequestHandler);

export default router; 