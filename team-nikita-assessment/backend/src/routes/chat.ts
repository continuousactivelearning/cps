//Author:Yeddula Pushkala     Date:13-06-25
import express, { Request, Response } from 'express';
import { getAssessment } from '../services/apiService';

const router = express.Router();

router.post('/generate', async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Chat endpoint called with:', req.body);
    
    const { userInput, context } = req.body;
    
    if (!userInput) {
      res.status(400).json({ 
        error: 'User input is required',
        response: "Please provide a question or message."
      });
      return;
    }

    // Build comprehensive chat prompt
    const chatPrompt = `You are an intelligent assistant for EduAssess, an ML assessment platform that helps students learn machine learning concepts through prerequisite-based testing.

Platform Context: EduAssess offers AI-generated quizzes, prerequisite testing, performance tracking, and personalized ML learning paths.

User Question: ${userInput}

Provide a helpful, conversational response about ML concepts, platform features, or assessment guidance. Keep responses educational and focused on the platform.`;

    console.log('Calling getAssessment with prompt...');
    const response = await getAssessment(chatPrompt);
    console.log('Received response from getAssessment:', response);
    
    const chatResponse = response.choices?.[0]?.message?.content || 
                        response.generated_text || 
                        "I'm here to help with your ML learning journey!";

    res.json({
      response: chatResponse,
      confidence: 0.8,
      sources: ['LLM API']
    });
  } catch (error) {
    console.error('Chat API Error Details:', error);
    
    // Fix for TS18046: Properly handle unknown error type
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    res.status(500).json({ 
      error: 'Failed to generate chat response',
      response: "I'm experiencing technical difficulties, but I'm here to help with EduAssess features and ML concepts!",
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    });
  }
});

export default router;
