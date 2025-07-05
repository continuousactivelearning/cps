import { Request, Response, NextFunction } from 'express';
import { IntegratedChatHandlerService } from '../services/integratedChatHandlerService';
import { MessageRequest } from '../types/chat';

// Create a singleton instance of the chat handler service
const chatHandlerService = new IntegratedChatHandlerService();

/**
 * Enhanced chat controller using the new TypeScript service
 * Replaces the simple chat handler with full DSA learning capabilities
 */
export const handleChat = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { message, chat_history, user_id }: MessageRequest = req.body;

    // Validate input
    if (!message || typeof message !== 'string') {
      res.status(400).json({ 
        error: 'Message is required and must be a string.' 
      });
      return;
    }

    // Process the chat message using the integrated handler
    const result = await chatHandlerService.handleChatMessage(
      message,
      chat_history || [],
      user_id || 'default'
    );

    // Return the response in the format expected by the frontend
    res.json({
      response: result.response,
      videos: result.videos || [],
      analysis: result.analysis
    });

  } catch (error: any) {
    console.error('Error in handleChat:', error);
    
    // Pass the error to Express error handler
    next(error);
  }
};

/**
 * Health check endpoint for the chat service
 */
export const healthCheck = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'DSA Learning Chat Handler'
    });
  } catch (error: any) {
    console.error('Error in health check:', error);
    res.status(500).json({ 
      status: 'error', 
      error: 'Health check failed' 
    });
  }
};

/**
 * Get learning session info for a user
 */
export const getLearningSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { user_id } = req.params;

    if (!user_id) {
      res.status(400).json({ 
        error: 'User ID is required.' 
      });
      return;
    }

    const session = chatHandlerService.getLearningSession(user_id);
    
    res.json({
      session,
      active: session.current_path.length > 0,
      progress: session.current_path.length > 0 
        ? `${session.current_step_index + 1}/${session.current_path.length}`
        : '0/0'
    });

  } catch (error: any) {
    console.error('Error getting learning session:', error);
    next(error);
  }
};

/**
 * Reset learning session for a user
 */
export const resetLearningSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { user_id } = req.params;

    if (!user_id) {
      res.status(400).json({ 
        error: 'User ID is required.' 
      });
      return;
    }

    // Reset the learning session
    chatHandlerService.updateLearningSession(user_id, {
      current_path: [],
      completed_topics: [],
      current_step_index: 0,
      target_topic: null
    });

    res.json({
      message: 'Learning session reset successfully',
      user_id
    });

  } catch (error: any) {
    console.error('Error resetting learning session:', error);
    next(error);
  }
};
