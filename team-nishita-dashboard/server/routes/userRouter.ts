import { Router, Request, Response } from 'express'
import { User } from '../models/user.js';
import { jwtMiddleware, JWTPayload, tokenGeneration } from '../middleware/jwt.js'
import { getUserByUsername, loginUser, registerUser, removeUser, updatePassword, updateUsername } from '../controllers/userController.js';
import { errorHandler } from '../middleware/errorHandler.js';

export const userRouter = Router();
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

userRouter.get('/getUserByUsername/:username', getUserByUsername);

userRouter.put('/updateUser', jwtMiddleware, updateUsername);
userRouter.put('/updatePassword', jwtMiddleware, updatePassword);

userRouter.delete('/deleteUser', jwtMiddleware, removeUser);

userRouter.use(errorHandler)

userRouter.use((req: Request, res: Response) => {
  res.status(404).json({ error: '404 Route not found' });
})
