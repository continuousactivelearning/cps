//developed by :@AlakhMathur
/*import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import prereqRoutes from './routes/prereqRoutes';
import questionRoutes from "./routes/questionRoutes";
import learnRoutes from "./routes/learnRoutes";

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
app.use("/api/learn", learnRoutes);

app.get('/',(req,res)=>{res.json('server is running')})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Instructor from './models/Instructor';
import jwt from 'jsonwebtoken';

import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import prereqRoutes from './routes/prereqRoutes';
import questionRoutes from "./routes/questionRoutes";
import learnRoutes from "./routes/learnRoutes";
import topicsRoutes from './routes/topicsRoutes';
import instructorAuthRoutes from './routes/instructorAuthRoutes';
import queryRoutes from './routes/queryRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use('/uploads', express.static('Server/uploads'));

mongoose.connect(process.env.MONGO_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,    
} as any)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);  
app.use('/api/user', userRoutes);
app.use('/api/prerequisite', prereqRoutes); 
app.use("/api/question", questionRoutes);
app.use("/api/learn", learnRoutes);
app.use('/api/topics', topicsRoutes);
app.use('/api/instructor', instructorAuthRoutes);
app.use('/api/query', queryRoutes);

app.get('/',(req,res)=>{res.json('server is running')})

app.get('/api/instructor/verify', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(403).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'changeme');
    const instructorId = (typeof decoded === 'string') ? undefined : decoded['id'];
    if (!instructorId) return res.status(403).json({ message: 'Invalid token' });
    const instructor = await Instructor.findById(instructorId);
    if (!instructor) return res.status(403).json({ message: 'Invalid token' });
    res.status(200).json({ valid: true });
  } catch (err) {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
});

app.get('/api/instructor/me', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'changeme');
    const instructorId = (typeof decoded === 'string') ? undefined : decoded['id'];
    if (!instructorId) return res.status(404).json({ message: 'Instructor not found' });
    const instructor = await Instructor.findById(instructorId).select('-password');
    if (!instructor) return res.status(404).json({ message: 'Instructor not found' });
    res.json(instructor);
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));