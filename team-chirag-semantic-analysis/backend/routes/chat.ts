import express from 'express';
import { handleChat } from '../controllers/chatController';

const router = express.Router();

router.post('/', handleChat);

export default router;
