import express, { Request, Response } from 'express';
import { LLMChatService } from '../services/chatService';

const router = express.Router();
const chatService = new LLMChatService();

router.post('/generate', async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Chat endpoint called with:', req.body);
    
    const { userInput } = req.body;
    
    if (!userInput) {
      res.status(400).json({ 
        error: 'User input required',
        response: "Please ask a question about ML or EduAssess."
      });
      return;
    }

    const chatResponse = await chatService.generateChatResponse(userInput);
    
    res.json({
      response: chatResponse,
      confidence: 0.8,
      sources: ['Mistral-7B']
    });

  } catch (error) {
    console.error('Chat endpoint error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    res.status(500).json({
      error: 'LLM service unavailable',
      response: "I'm experiencing technical difficulties.",
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    });
  }
});

export default router;
