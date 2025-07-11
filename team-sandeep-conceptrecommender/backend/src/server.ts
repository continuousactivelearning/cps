// Author:@B V Sai Pranav
console.log('=== Backend server starting ===');
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import topicRoutes from './routes/topicRoutes';
import examResultRoutes from './routes/examResultRoutes';
import recommendationRoutes from './routes/recommendationRoutes';
import userTopicRoutes from './routes/userTopicRoutes';
import quizRoutes from './routes/quizRoutes';
import path from 'path';
import pingRouter from './routes/ping';
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      'https://dsa-learning-path.onrender.com',
      'http://localhost:5173',
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/exam-results', examResultRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/user-topics', userTopicRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/ping', pingRouter);
// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/learning-platform';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
