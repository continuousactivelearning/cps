import express, { Request, Response } from 'express';
import cors from 'cors'
import helmet from 'helmet'
import { errorHandler } from './middleware/errorHandler.js'
import mongoose from 'mongoose';
import { userRouter } from './routes/userRouter.js'
import { CourseRouter } from './routes/courseRouter.js';
import { connectToDatabase } from './utils/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({
  crossOriginResourcePolicy: false
}))

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Authorization', 'Content-Type']
}))

app.use(express.json())

const env = process.env.NODE_ENV || 'development';

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: "home route" })
})
app.use('/user', userRouter)
app.use('/course', CourseRouter)

const server = app.listen(PORT, () => {
  console.log(`Server is running over port: ${PORT} in ${env}`);
  connectToDatabase();
})

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

function gracefulShutdown() {
  console.log('Received kill signal, closing gracefully');
  server.close(async () => {
    console.log('closing connections')
    await mongoose.connection.close();
    process.exit(0);
  })

  setTimeout(() => {
    console.error('closing connections forcefully');
    process.exit(1);
  }, 10000);
}
