import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import prereqRoutes from './routes/prerequisites';

dotenv.config(); // Load .env

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/prerequisites', prereqRoutes);

mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
