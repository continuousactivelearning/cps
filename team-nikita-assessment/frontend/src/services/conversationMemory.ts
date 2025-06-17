//Author:Yeddula Pushkala            Date:12-06-25
export interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    intent?: string;
    confidence?: number;
  }
  
  export interface ConversationContext {
    userId: string;
    sessionId: string;
    messageHistory: Message[];
    userProfile: {
      knowledgeLevel: 'beginner' | 'intermediate' | 'advanced';
      topicsDiscussed: string[];
      assessmentHistory: string[];
      identifiedGaps: string[];
      strugglingAreas: string[];
    };
    currentTopic?: string;
    lastIntent: string;
    contextWindow: number;
  }
  
  export class ConversationMemoryManager {
    private contexts: Map<string, ConversationContext> = new Map();
    private readonly maxContextWindow = 6;
  
    getContext(userId: string, sessionId: string): ConversationContext {
      // Validate input parameters
      if (!userId || !sessionId) {
        throw new Error('Invalid userId or sessionId provided to getContext');
      }
  
      const contextKey = `${userId}_${sessionId}`;
      
      if (!this.contexts.has(contextKey)) {
        console.log(`Creating new context for user: ${userId}, session: ${sessionId}`);
        const newContext: ConversationContext = {
          userId, 
          sessionId, 
          messageHistory: [],
          userProfile: { 
            knowledgeLevel: 'beginner', 
            topicsDiscussed: [], 
            assessmentHistory: [], 
            identifiedGaps: [],
            strugglingAreas: [] 
          },
          lastIntent: '', 
          contextWindow: this.maxContextWindow
        };
        
        this.contexts.set(contextKey, newContext);
      }
      
      const context = this.contexts.get(contextKey);
      if (!context) {
        throw new Error(`Failed to create or retrieve context for ${contextKey}`);
      }
      
      return context;
    }
  
    // CRITICAL FIX: Enhanced null safety for getPersonalizedResponse
    getPersonalizedResponse(context: ConversationContext | undefined, baseResponse: string): string {
      // Comprehensive null/undefined checks
      if (!context) {
        console.warn('Context is null/undefined in getPersonalizedResponse, returning base response');
        return baseResponse || "I can help you with your ML assessment needs.";
      }
  
      if (!context.userProfile) {
        console.warn('UserProfile is undefined in context, returning base response');
        return baseResponse || "I can help you with your ML assessment needs.";
      }
  
      // Validate baseResponse parameter
      if (!baseResponse || typeof baseResponse !== 'string') {
        console.warn('Invalid baseResponse provided, using default');
        return "I can help you with your ML assessment needs.";
      }
  
      const userProfile = context.userProfile;
      
      try {
        if (userProfile.knowledgeLevel === 'beginner') {
          return baseResponse.replace(/prerequisites/gi, 'prerequisites (concepts you need first)');
        }
        
        return baseResponse;
      } catch (error) {
        console.error('Error in getPersonalizedResponse:', error);
        return baseResponse;
      }
    }
  
    updateContext(userId: string, sessionId: string, message: Message, intent: string): void {
      try {
        const context = this.getContext(userId, sessionId);
        context.messageHistory.push(message);
        
        if (context.messageHistory.length > this.maxContextWindow) {
          context.messageHistory = context.messageHistory.slice(-this.maxContextWindow);
        }
        
        context.lastIntent = intent;
        this.updateUserProfile(context, message, intent);
      } catch (error) {
        console.error('Failed to update context:', error);
      }
    }
  
    private updateUserProfile(context: ConversationContext, message: Message, intent: string): void {
      if (!context?.userProfile) return;
  
      const mlTopics = ['linear regression', 'neural networks', 'decision trees', 'svm', 'clustering'];
      const foundTopics = mlTopics.filter(topic => 
        message.text.toLowerCase().includes(topic.toLowerCase())
      );
      context.userProfile.topicsDiscussed.push(...foundTopics);
      
      const complexTerms = ['gradient descent', 'backpropagation', 'regularization', 'overfitting'];
      if (complexTerms.some(term => message.text.toLowerCase().includes(term)) && 
          context.userProfile.knowledgeLevel === 'beginner') {
        context.userProfile.knowledgeLevel = 'intermediate';
      }
    }
  }
  