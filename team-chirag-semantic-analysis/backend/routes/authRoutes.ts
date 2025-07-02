// backend/routes/authRoutes.ts
import express from 'express';
import { googleAuthHandler } from '../controllers/authController';

const router = express.Router();

router.get('/google', googleAuthHandler); // Google OAuth endpoint

export default router;
