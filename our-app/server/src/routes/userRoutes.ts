import express from 'express';
import type { RequestHandler } from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/userController';
import {
    getUserDashboard,
    getQuestions,
    submitAnswers,
    reviewQuiz,
    getQuizByLevel,
    submitQuizByLevel,
    reviewQuizByLevel,
    createAssessment,
    getRecommendedPathForUser,
    updateCompletedCourses
} from '../controllers/userDashboardController';

const router = express.Router();

// User-specific routes with prefix /api/users/

// GET /api/users - Get all users (must come first)
router.get('/', getAllUsers as RequestHandler);

// POST /api/users - Create new user
router.post('/', createUser as RequestHandler);

// GET /api/users/:id/dashboard
router.get('/:id/dashboard', getUserDashboard as RequestHandler);

// GET /api/users/:id/recommend-path?target=CourseName
router.get('/:id/recommend-path', getRecommendedPathForUser as RequestHandler);

// POST /api/users/:id/completed-courses
router.post('/:id/completed-courses', updateCompletedCourses as RequestHandler);

// GET /api/users/:id/quiz/:level/questions
router.get('/:id/quiz/:level/questions', getQuizByLevel as RequestHandler);

// POST /api/users/:id/quiz/:level/submit
router.post('/:id/quiz/:level/submit', submitQuizByLevel as RequestHandler);

// GET /api/users/:id/quiz/:level/review
router.get('/:id/quiz/:level/review', reviewQuizByLevel as RequestHandler);

// POST /api/users/:id/assessment
router.post('/:id/assessment', createAssessment as RequestHandler);

// GET /api/users/:id/:lang/:quizLevel/:topic/questions
router.get('/:id/:lang/:quizLevel/:topic/questions', getQuestions as RequestHandler);

// POST /api/users/:id/:lang/:quizLevel/:topic/submit
router.post('/:id/:lang/:quizLevel/:topic/submit', submitAnswers as RequestHandler);

// GET /api/users/:id/:lang/:quizLevel/:topic/review
router.get('/:id/:lang/:quizLevel/:topic/review', reviewQuiz as RequestHandler);

// PUT /api/users/:id - Update user
router.put('/:id', updateUser as RequestHandler);

// DELETE /api/users/:id - Delete user
router.delete('/:id', deleteUser as RequestHandler);

// GET /api/users/:id - Get user by ID (must come last)
router.get('/:id', getUserById as RequestHandler);

export default router; 