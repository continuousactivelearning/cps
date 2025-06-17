//Author:Yeddula Pushkala           Date:12-06-25
export class ProgressiveFallbackManager {
    private fallbackCounts: Map<string, number> = new Map();
  
    handleFallback(userId: string, userInput: string, confidence: number): string {
      const sessionKey = userId;
      const currentCount = this.fallbackCounts.get(sessionKey) || 0;
      this.fallbackCounts.set(sessionKey, currentCount + 1);
  
      switch (currentCount) {
        case 0:
          return this.firstLevelFallback(userInput, confidence);
        case 1:
          return this.secondLevelFallback(userInput);
        case 2:
          return this.thirdLevelFallback(userInput);
        default:
          return this.escalateToHuman(userId, userInput);
      }
    }
  
    private firstLevelFallback(userInput: string, confidence: number): string {
      const partialMatches = this.getPartialMatches(userInput);
      
      if (partialMatches.length > 0) {
        return `I'm not entirely sure I understood. Are you asking about ${partialMatches.join(', ')}? Or would you like help with navigation, prerequisites, technical issues, results, or learning guidance?`;
      }
      
      return "I'm not sure I understood that correctly. Could you rephrase your question? I can help with navigation, prerequisites, technical issues, results interpretation, or learning guidance.";
    }
  
    private secondLevelFallback(userInput: string): string {
      return `I'm still having trouble understanding. Let me offer some specific examples of what I can help with:
  
  **Navigation**: "How do I start an assessment?" or "Where can I find my results?"
  **Prerequisites**: "What do I need to know before studying Neural Networks?" 
  **Technical Issues**: "The assessment won't load" or "I'm getting an error"
  **Results**: "What does my score mean?" or "How should I interpret these results?"
  **Learning Guidance**: "What should I study next?" or "Recommend a learning path"
  
  Which of these sounds closest to what you're looking for?`;
    }
  
    private thirdLevelFallback(userInput: string): string {
      return `I apologize for the confusion. Let me try a different approach. When you mentioned "${userInput}", were you asking about:
  
  1. **Getting started** - How to use the platform or begin an assessment
  2. **Understanding concepts** - Learning about ML prerequisites or topics  
  3. **Solving problems** - Technical issues or errors you're experiencing
  4. **Interpreting information** - Understanding your results or scores
  5. **Next steps** - What to study or do after your assessment
  
  Or would you prefer to **speak with a human support agent** who can provide more personalized help?`;
    }
  
    private escalateToHuman(userId: string, userInput: string): string {
      this.logEscalation(userId, userInput);
      
      return `I understand this is frustrating. I'm connecting you with our support team now. They'll have access to our conversation history and can provide the personalized assistance you need.
  
  **Expected wait time**: Less than 2 minutes during business hours
  **Your conversation ID**: ${this.generateConversationId(userId)}
  
  In the meantime, you can also check our FAQ section or try browsing our help documentation.`;
    }
  
    private getPartialMatches(userInput: string): string[] {
      const keywords = {
        navigation: ['start', 'begin', 'use', 'how'],
        prerequisites: ['need', 'required', 'before'],
        technical: ['error', 'problem', 'not working'],
        results: ['score', 'results', 'understand'],
        learning: ['next', 'study', 'recommend']
      };
  
      const matches: string[] = [];
      const input = userInput.toLowerCase();
  
      for (const [category, words] of Object.entries(keywords)) {
        if (words.some(word => input.includes(word))) {
          matches.push(category);
        }
      }
  
      return matches;
    }
  
    resetFallbackCount(userId: string): void {
      this.fallbackCounts.delete(userId);
    }
  
    private logEscalation(userId: string, userInput: string): void {
      console.log(`Human escalation for user ${userId}: "${userInput}"`);
    }
  
    private generateConversationId(userId: string): string {
      return `${userId}_${Date.now()}`;
    }
  }
  