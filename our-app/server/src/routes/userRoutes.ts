import express, { RequestHandler } from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/userController';
import { getUserDashboard, getQuestions, submitAnswers, reviewQuiz } from '../controllers/userDashboardController';
import mongoose from 'mongoose';

const router = express.Router();

// Middleware to validate MongoDB ObjectId
function validateObjectId(req: express.Request, res: express.Response, next: express.NextFunction) {
    const id = req.params.id;
    if (id && !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid user id format. Must be a MongoDB ObjectId.' });
    }
    next();
}

// User-specific routes with prefix /api/users/

// GET /api/users - Get all users (must come first)
router.get('/', getAllUsers as RequestHandler);

// POST /api/users - Create new user
router.post('/', createUser as RequestHandler);

// GET /api/users/:id/dashboard
router.get('/:id/dashboard', getUserDashboard as RequestHandler);

// GET /api/users/:id/quiz/:difficulty/questions
router.get('/:id/quiz/:difficulty/questions', (req, res) => {
    // TODO: Implement difficulty-based questions
    res.json({ message: 'Difficulty-based questions - to be implemented' });
});

// POST /api/users/:id/quiz/:difficulty/submit
router.post('/:id/quiz/:difficulty/submit', (req, res) => {
    // TODO: Implement difficulty-based submit
    res.json({ message: 'Difficulty-based submit - to be implemented' });
});

// GET /api/users/:id/quiz/:difficulty/review
router.get('/:id/quiz/:difficulty/review', (req, res) => {
    // TODO: Implement difficulty-based review
    res.json({ message: 'Difficulty-based review - to be implemented' });
});

// POST /api/users/:id/assessment
router.post('/:id/assessment', (req, res) => {
    // TODO: Implement assessment logic
    res.json({ message: 'Assessment endpoint - to be implemented' });
});

// GET /api/users/:id/:language/:quizLevel/:topic/questions
router.get('/:id/:language/:quizLevel/:topic/questions', getQuestions as RequestHandler);

// POST /api/users/:id/:language/:quizLevel/:topic/submit
router.post('/:id/:language/:quizLevel/:topic/submit', submitAnswers as RequestHandler);

// GET /api/users/:id/:language/:quizLevel/:topic/review
router.get('/:id/:language/:quizLevel/:topic/review', reviewQuiz as RequestHandler);

// PUT /api/users/:id - Update user
router.put('/:id', updateUser as RequestHandler);

// DELETE /api/users/:id - Delete user
router.delete('/:id', deleteUser as RequestHandler);

// GET /api/users/:id - Get user by ID (must come last)
router.get('/:id', getUserById as RequestHandler);

export default router; 