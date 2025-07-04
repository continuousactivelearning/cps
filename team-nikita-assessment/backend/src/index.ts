/* AUTHOR - NIKITA S RAJ KAPINI (CREATED ON 10/06/2025) */
/*Modified by Nakshatra Bhandary on 17/6/25 to add user login and registration*/
/*Modified by Nakshatra for deployment*/
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { authRoutes } from './routes/auth';
import { assessmentRoutes } from './routes/assessment';
import { responseRoutes } from './routes/response';
import chatRoutes from './routes/chat';
dotenv.config();

const app = express();
//app.use(cors({ origin: 'https://EduAssess.netlify.app' }));
app.use(cors({
  origin: ['https://cpseduassess.netlify.app','http://localhost:5173'], // or '*', if you're testing
  credentials: true
}));
app.use(express.json());
app.get('/', (_, res) => {
  res.send('API is running!');
});
app.use('/api/assessment', assessmentRoutes);
app.use('/api/response', responseRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/auth', authRoutes);
mongoose.connect(process.env.MONGO_URI!)
  .then(() => app.listen(5000, () => console.log('Server running')))
  .catch(err => console.error(err));
