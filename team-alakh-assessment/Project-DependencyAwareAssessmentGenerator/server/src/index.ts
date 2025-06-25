import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import prereqRoutes from './routes/prereqRoutes';
import questionRoutes from "./routes/questionRoutes";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dependencyApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,    
} as any)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);  
app.use('/api/user', userRoutes);
app.use('/api/prerequisite', prereqRoutes); 
app.use("/api/question", questionRoutes); 

app.get('/',(req,res)=>{res.json('server is running')})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));