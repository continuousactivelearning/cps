import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { errorHandler } from './middleware/errorHandler.js';
import { authRouter } from './routes/auth.js';
import { calendarRouter } from './routes/calendar.js';
import { courseRouter } from './routes/course.js';
import { achievementRouter } from './routes/achievements.js';
import { progressRouter } from './routes/progress.js'; 

import { requireRole, requireAuth } from './middleware/roleMiddleware.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({
  crossOriginResourcePolicy: false
}));
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Authorization', 'Content-Type']
}));
app.use(express.json());

const env = process.env.NODE_ENV || 'development';
const uri = process.env.MONGO_DB_URI || 'mongodb://127.0.0.1:27017/recommendation_app';

if (!uri) {
  throw new Error('Database not connected');
}

mongoose.connect(uri, {}).then(() => {
  console.log('connected to MongoDB');
}).catch((err) => {
  console.log('MongoDB connection Error', err);
});

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: "home route" });
});

// ✅ ROUTES
app.use('/api/auth', authRouter);
app.use('/api/calendar', calendarRouter);
app.use('/api/courses', courseRouter);
app.use('/api/achievement', achievementRouter);
app.use('/api/progress', progressRouter); // ✅ PROGRESS ROUTE REGISTERED

// ✅ ERROR HANDLING
app.use(errorHandler);

// ✅ 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: '404 Route not found' });
});

// ✅ SERVER LISTEN
const server = app.listen(PORT, () => {
  console.log(`Server is running over port: ${PORT} in ${env}`);
});

// ✅ GRACEFUL SHUTDOWN
function gracefulShutdown() {
  console.log('Received kill signal, closing gracefully');
  server.close(async () => {
    console.log('closing connections');
    await mongoose.connection.close();
    process.exit(0);
  });

  setTimeout(() => {
    console.error('closing connections forcefully');
    process.exit(1);
  }, 10000);
}
