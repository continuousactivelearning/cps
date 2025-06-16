import express from 'express';
import { Request, Response } from 'express';
import { getAllModules } from '../controllers/courseController.js';
import { errorHandler } from '../middleware/errorHandler.js';
export const CourseRouter = express.Router();

CourseRouter.get('/getAllModules', getAllModules);

CourseRouter.use(errorHandler)

CourseRouter.use((req: Request, res: Response) => {
  res.status(404).json({ error: '404 Route not found' });
})