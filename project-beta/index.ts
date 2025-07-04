// FileName: MultipleFiles/index.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import prereqRoutes from './routes/prerequisites';
import summaryRoutes from './routes/summaryRoute';
import quizAttempts from './routes/quixAttempts';
import authRoutes from './routes/authRoutes'; // Import the new auth routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/prerequisites', prereqRoutes);
app.use('/api', summaryRoutes);
app.use('/api', quizAttempts);
app.use('/api/auth', authRoutes); // Use the new auth routes

mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
