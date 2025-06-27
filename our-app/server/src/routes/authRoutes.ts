import express, { RequestHandler } from 'express';
import { login, signup } from '../controllers/authController';

const router = express.Router();

// POST /api/login
router.post('/login', login as RequestHandler);

// POST /api/signup
router.post('/signup', signup as RequestHandler);

export default router; 