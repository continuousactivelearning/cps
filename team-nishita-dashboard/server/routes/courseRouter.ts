import express from 'express';
import { Request, Response } from 'express';
import { addModules, deleteModule, getAllModules, getModuleById, searchModuleByLabel, updateModule } from '../controllers/courseController.js';
import { errorHandler } from '../middleware/errorHandler.js';
import { get } from 'http';
import { jwtMiddleware } from '../middleware/jwt.js';
export const CourseRouter = express.Router();

CourseRouter.get('/getAllModules', getAllModules);
CourseRouter.get('/getModuleById/:id', getModuleById);
CourseRouter.get('/searchModuleByLabel', searchModuleByLabel);

CourseRouter.post('/addModules', jwtMiddleware, addModules);

CourseRouter.put('/updateModule/:id', jwtMiddleware, updateModule);

CourseRouter.delete('/deleteModule/:id', jwtMiddleware, deleteModule);

CourseRouter.use(errorHandler);

CourseRouter.use((req: Request, res: Response) => {
  res.status(404).json({ error: '404 Route not found' });
})