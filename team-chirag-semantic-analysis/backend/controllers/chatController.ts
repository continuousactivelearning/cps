import { Request, Response } from 'express';
import { generateResponse } from '../services/generateResponse';
import { YouTubeResourceFinder } from '../services/youtubeService';

interface MessageRequest {
  message: string;
}

export const handleChat = async (req: Request, res: Response) => {
  try {
    const { message }: MessageRequest = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const responseText = await generateResponse(message);

    const ytFinder = new YouTubeResourceFinder();
    const videos = await ytFinder.getVideos(message);

    res.json({
      response: responseText,
      videos
    });

  } catch (error: any) {
    console.error('Error in handleChat:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
