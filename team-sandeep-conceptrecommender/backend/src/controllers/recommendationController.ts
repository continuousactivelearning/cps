import { Request, Response } from 'express';
import RecommendationService from '../services/recommendationService';
import { Topic } from '../models/Topic';

interface AuthRequest extends Request {
  user?: { id: string; role?: string };
}

export const getRecommendations = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Get user's known topics from request body
    const { knownTopics, userEmail } = req.body;
    console.log('=== RECOMMENDATION REQUEST ===');
    console.log('Request body:', req.body);
    console.log('User ID from token:', userId);
    console.log('UserEmail from body:', userEmail);
    console.log('KnownTopics from body:', knownTopics);
    
    if (!knownTopics || !Array.isArray(knownTopics)) {
      return res.status(400).json({ message: 'Known topics array is required' });
    }

    // Use userEmail from request body if provided, otherwise use userId
    const userIdentifier = userEmail || userId;
    console.log('Final user identifier:', userIdentifier);

    // Generate recommendations using the service
    const recommendations = await RecommendationService.generateRecommendations(userIdentifier, knownTopics);

    console.log('=== RECOMMENDATION RESPONSE ===');
    console.log('Returning recommendations for user:', userIdentifier);
    console.log('Number of recommendations:', recommendations.length);

    return res.json({ recommendations });
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return res.status(500).json({ message: 'Error getting recommendations' });
  }
};

export const refreshRecommendations = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Get user's known topics
    const { knownTopics, userEmail } = req.body;
    console.log('=== REFRESH RECOMMENDATION REQUEST ===');
    console.log('Request body:', req.body);
    console.log('User ID from token:', userId);
    console.log('UserEmail from body:', userEmail);
    console.log('KnownTopics from body:', knownTopics);
    
    if (!knownTopics || !Array.isArray(knownTopics)) {
      return res.status(400).json({ message: 'Known topics array is required' });
    }

    // Use userEmail from request body if provided, otherwise use userId
    const userIdentifier = userEmail || userId;
    console.log('Final user identifier:', userIdentifier);

    // Generate fresh recommendations
    const recommendations = await RecommendationService.generateRecommendations(userIdentifier, knownTopics);

    console.log('=== REFRESH RECOMMENDATION RESPONSE ===');
    console.log('Returning recommendations for user:', userIdentifier);
    console.log('Number of recommendations:', recommendations.length);

    return res.json({ recommendations });
  } catch (error) {
    console.error('Error refreshing recommendations:', error);
    return res.status(500).json({ message: 'Error refreshing recommendations' });
  }
};