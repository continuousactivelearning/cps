import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { assessmentRoutes } from './routes/assessment';
import { responseRoutes } from './routes/response';

dotenv.config();


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/assessment', assessmentRoutes);
app.use('/api/response', responseRoutes);
//mongoose.connect(process.env.MONGO_URI!)
mongoose.connect('mongodb://localhost:27017/agenticAI')
  .then(() => app.listen(5000, () => console.log('Server running')))
  .catch(err => console.error(err));
