import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoute';
import userRoutes from './routes/detailsRouter';
import userProgressRoutes from './routes/userProgress';
import analyzeRoutes from './routes/analyzeRoute';
import studentRoutes from './routes/studentRoutes';
import instructorRoutes from './routes/instructorRoutes';
import path from 'path';

dotenv.config();

const app = express();

// Middleware
// app.use(cors());
app.use(cors(
  {
    origin: 'https://cps-ten.vercel.app/', // Adjust this to your frontend URL
    credentials: true, // Allow credentials if needed
  }
));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/me',userRoutes);
app.use('/api/user-progress', userProgressRoutes);
app.use('/api',analyzeRoutes)
app.use('/api/student', studentRoutes);
app.use('/api/instructor', instructorRoutes);



// Database connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI!;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log(err));