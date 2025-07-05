import express from 'express';
import type { RequestHandler } from 'express';
import { getAllCustomQuizzes, getCustomQuizById, createCustomQuiz, updateCustomQuiz, deleteCustomQuiz } from '../controllers/customQuizController';

const router = express.Router();

// GET /api/custom-quizzes
router.get('/', getAllCustomQuizzes as RequestHandler);

// GET /api/custom-quizzes/:id
router.get('/:id', getCustomQuizById as RequestHandler);

// POST /api/custom-quizzes
router.post('/', createCustomQuiz as RequestHandler);

// PUT /api/custom-quizzes/:id
router.put('/:id', updateCustomQuiz as RequestHandler);

// DELETE /api/custom-quizzes/:id
router.delete('/:id', deleteCustomQuiz as RequestHandler);

export default router; 