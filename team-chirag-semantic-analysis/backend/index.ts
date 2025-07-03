// backend/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import passport from 'passport'; // ✅ add passport
import './config/passport'; // ✅ register the Google strategy
import authRoutes from './routes/authRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(passport.initialize()); // ✅ initialize passport

app.use('/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Backend is running with TypeScript!');
});

mongoose.connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
