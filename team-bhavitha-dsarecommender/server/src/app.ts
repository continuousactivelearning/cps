// src/app.ts

import express from "express";
import bodyParser from "body-parser";
import learningPathRoutes from "./routes/learningPath";
import cors from 'cors';
import authRoutes from './routes/auth';
import quizRoutes from "./routes/quiz";
import dotenv from "dotenv";
import connectDB from "./config/db";
import quizHistoryRoutes from "./routes/quizHistory";
import recommendationRoutes from "./routes/recommendation";
import exploreRoutes from "./routes/explore";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });


const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173',// frontend port
  credentials: true
}));
app.use(bodyParser.json());
app.use("/api/explore", exploreRoutes);
app.use("/api", learningPathRoutes);
app.use('/api', authRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/quiz-history", quizHistoryRoutes);
app.use("/api/recommendation", recommendationRoutes);

connectDB(); // before app.listen
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

