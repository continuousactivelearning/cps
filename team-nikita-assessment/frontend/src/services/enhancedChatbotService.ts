//Author:Yeddula Pushkala          Date:12-06-25
import { improvedIntentPatterns } from './intentClassification';
import { calculateIntentScore, calculateConfidenceThreshold } from '../utils/intentScoring';
import { SemanticSimilarityMatcher } from './semanticMatching';
import { ConversationMemoryManager } from './conversationMemory';
import type { ConversationContext, Message } from './conversationMemory';
import { ProgressiveFallbackManager } from './fallbackManager';
import { MetricsTracker } from './metricsTracker';
import { ErrorHandlingService } from './errorHandlingService';
import { LLMChatService } from './llmChatService';

export class EnhancedChatbotService {
  private semanticMatcher = new SemanticSimilarityMatcher();
  private memoryManager = new ConversationMemoryManager();
  private fallbackManager = new ProgressiveFallbackManager();
  private metricsTracker = new MetricsTracker();
  private llmChatService = new LLMChatService();
  private isSemanticMatchingAvailable = false;

  // Enhanced response templates with better coverage
  private responseTemplates = {
    features: [
      "EduAssess offers AI-generated quizzes, prerequisite testing, detailed performance reports, and progress tracking.",
      "Key features include: personalized learning paths, ML concept explanations, and dependency-aware assessments.",
      "Our platform provides automated quiz generation, progress analytics, and adaptive learning recommendations."
    ],
    
    ml_concepts: {
      overfitting: "Overfitting occurs when a model learns training data too well, including noise. Prevention methods:\n• Regularization (L1/L2)\n• Dropout layers\n• Early stopping\n• Cross-validation",
      gradient_descent: "Gradient descent optimizes models by moving toward the steepest descent of the loss function. Types:\n• Batch GD\n• Stochastic GD\n• Mini-batch GD",
      neural_networks: "Neural networks are computational models inspired by biological neural networks. Key components:\n• Neurons/nodes\n• Weights and biases\n• Activation functions\n• Backpropagation",
      regularization: "Regularization prevents overfitting by adding penalties to model complexity. Common types:\n• L1 (Lasso): Sparse features\n• L2 (Ridge): Smooth weights\n• Dropout: Random neuron deactivation",
      backpropagation: "Backpropagation calculates gradients for neural network training by propagating errors backward through layers."
    },

    navigation: [
      "To start an assessment: Click 'Start Assessment' → Select your ML topic → Begin the prerequisite test.",
      "Navigate using the main menu: 'Assessments' for tests, 'Results' for performance history, 'Progress' for analytics.",
      "Access your dashboard to view completed assessments, track learning progress, and get personalized recommendations."
    ],

    technical_support: [
      "For loading issues: Refresh the page, clear browser cache, or try a different browser (Chrome/Firefox recommended).",
      "If assessments won't start: Check your internet connection and ensure JavaScript is enabled.",
      "For persistent problems: Contact support with error details and your browser information."
    ],

    concept_explanation: [
      "Prerequisites are foundational concepts you need to understand before tackling advanced topics. They ensure you have the mathematical and theoretical background needed.",
      "Understanding prerequisites helps you identify knowledge gaps and build a solid foundation for complex ML algorithms.",
      "Each ML topic has specific prerequisites - would you like me to explain the requirements for a particular concept?"
    ],

    results_interpretation: [
      "Your assessment score indicates readiness for the target topic. Scores above 70% suggest good prerequisite knowledge.",
      "Score breakdown helps identify knowledge gaps. Focus on concepts where you scored below 60% for best results.",
      "Assessment results show your performance across different prerequisite areas - green areas are strengths, red areas need review."
    ],

    learning_guidance: [
      "Based on your assessment results, focus on strengthening your weakest prerequisite areas first.",
      "Your learning path should follow: 1) Master fundamentals, 2) Build statistical knowledge, 3) Practice implementations, 4) Attempt target topic.",
      "I can create a personalized study plan based on your performance. Which areas would you like to focus on?"
    ],

    assessment_help: [
      "You can retake assessments to improve your scores. Each attempt helps identify areas for improvement.",
      "Assessment questions are randomly generated and cover all prerequisite concepts for your target topic.",
      "Time limits vary by topic complexity. Most assessments take 15-30 minutes to complete."
    ]
  };

  async initialize(): Promise<void> {
    try {
      console.log('Initializing Enhanced Chatbot Service...');
      
      // Initialize semantic matching with timeout
      const initPromise = this.semanticMatcher.initialize();
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Initialization timeout')), 30000)
      );
      
      await Promise.race([initPromise, timeoutPromise]);
      this.isSemanticMatchingAvailable = this.semanticMatcher.isInitialized();
      
      console.log(`Semantic matching: ${this.isSemanticMatchingAvailable ? 'Available' : 'Fallback to keywords'}`);
    } catch (error) {
      console.warn('Semantic matcher initialization failed, using keyword matching only:', error);
      this.isSemanticMatchingAvailable = false;
      ErrorHandlingService.trackError('semantic_init_failure', { error: error.message });
    }
  }

  private async generateLLMResponse(userInput: string, context?: ConversationContext): Promise<string> {
    try {
      return await this.llmChatService.generateChatResponse(userInput, context);
    } catch (error) {
      console.error('LLM response failed, using fallback:', error);
      return this.getFallbackResponse(userInput);
    }
  }

  // MODIFIED: Enhanced classifyAndRespond method with FORCED LLM USAGE for testing
  async classifyAndRespond(
    userInput: string, 
    userId: string, 
    sessionId: string
  ): Promise<{ response: string; intent: string; confidence: number; suggestions: string[] }> {
    const startTime = Date.now();

    try {
      const processedInput = userInput.trim();
      
      if (!processedInput) {
        return {
          response: "I didn't receive any input. How can I help you with your ML assessment needs?",
          intent: 'empty_input',
          confidence: 1.0,
          suggestions: this.generateSuggestions('features')
        };
      }

      // Validate input parameters - ESSENTIAL for preventing undefined errors
      if (!userId || !sessionId) {
        console.error('Invalid userId or sessionId provided to classifyAndRespond');
        return {
          response: "I'm here to help! Please ask about our platform features or assessment options.",
          intent: 'error_recovery',
          confidence: 0.8,
          suggestions: ["What features does EduAssess offer?", "How do I start an assessment?"]
        };
      }

      // Enhanced context retrieval with comprehensive error handling
      let context: ConversationContext | undefined;
      try {
        context = this.memoryManager.getContext(userId, sessionId);
        console.log('Context retrieved successfully:', context?.userId);
      } catch (error) {
        console.error('Failed to get conversation context:', error);
        
        // Create emergency fallback context
        context = {
          userId: userId || 'anonymous',
          sessionId: sessionId || 'emergency-session',
          messageHistory: [],
          userProfile: {
            knowledgeLevel: 'beginner',
            topicsDiscussed: [],
            assessmentHistory: [],
            identifiedGaps: [],
            strugglingAreas: []
          },
          lastIntent: '',
          contextWindow: 6
        };
      }

      // Calculate pattern-based scores
      const patternScores = Object.entries(improvedIntentPatterns).map(([intent, patterns]) => ({
        intent,
        score: calculateIntentScore(processedInput, patterns)
      }));

      // Get semantic similarity if available
      let semanticResult = { intent: 'unknown', confidence: 0 };
      if (this.isSemanticMatchingAvailable) {
        try {
          semanticResult = await this.semanticMatcher.getSemanticSimilarity(processedInput);
        } catch (error) {
          console.warn('Semantic matching failed, using keyword matching:', error);
        }
      }

      // Combine pattern and semantic scores with weighted approach
      const combinedScores = patternScores.reduce((acc, { intent, score }) => {
        const semanticScore = intent === semanticResult.intent ? semanticResult.confidence : 0;
        // Weight: 60% pattern matching, 40% semantic matching
        acc[intent] = score * 0.6 + semanticScore * 0.4;
        return acc;
      }, {} as Record<string, number>);

      // Find best intent match
      const [bestIntent, bestScore] = Object.entries(combinedScores).reduce((a, b) => 
        a[1] > b[1] ? a : b
      );

      const { confidence, threshold } = calculateConfidenceThreshold(userInput, bestScore);
      const resolutionTime = Date.now() - startTime;

      // ADD DEBUG LOGGING TO TRACK DECISION FLOW
      console.log('Classification results:', {
        bestIntent,
        confidence,
        threshold,
        userInput: processedInput
      });

      let responseText: string;
      let finalIntent: string = bestIntent || 'navigation';
      let wasFallback = false;

      // OPTION 1: FORCE LLM USAGE FOR ALL QUERIES (TESTING MODE)
      if (confidence >= threshold) {
        finalIntent = bestIntent;
        
        // MODIFIED: Always try LLM first for testing purposes
        try {
          console.log('🚀 Attempting LLM response generation...');
          responseText = await this.generateLLMResponse(userInput, context);
          console.log('✅ LLM response generated successfully:', responseText.substring(0, 100) + '...');
        } catch (error) {
          console.error('❌ LLM failed, using template response:', error);
          responseText = this.getContextualResponse(finalIntent, userInput, context);
        }
        
        // Apply personalization if context exists
        if (context && context.userProfile) {
          try {
            responseText = this.memoryManager.getPersonalizedResponse(context, responseText);
          } catch (error) {
            console.error('Error in getPersonalizedResponse:', error);
          }
        }
        
        this.fallbackManager.resetFallbackCount(userId);
      } else {
        // Even for low confidence, try LLM first before fallback
        try {
          console.log('🚀 Low confidence - trying LLM before fallback...');
          responseText = await this.generateLLMResponse(userInput, context);
          finalIntent = 'llm_generated';
          console.log('✅ LLM handled low confidence query successfully');
        } catch (error) {
          console.error('❌ LLM failed for low confidence, using fallback manager');
          finalIntent = 'fallback';
          responseText = this.fallbackManager.handleFallback(userId, userInput, confidence);
          wasFallback = true;
          
          ErrorHandlingService.trackError('low_confidence_classification', {
            userInput,
            confidence,
            bestIntent,
            bestScore
          });
        }
      }

      // Safe context update
      if (context) {
        try {
          const message: Message = { 
            id: Date.now().toString(), 
            text: userInput, 
            isUser: true, 
            timestamp: new Date(),
            intent: finalIntent,
            confidence
          };
          
          this.memoryManager.updateContext(userId, sessionId, message, finalIntent);
        } catch (error) {
          console.error('Failed to update context:', error);
        }
      }

      return { 
        response: responseText, 
        intent: finalIntent, 
        confidence,
        suggestions: this.generateSuggestions(finalIntent)
      };

    } catch (error) {
      console.error('Critical error in classifyAndRespond:', error);
      ErrorHandlingService.trackError('classification_error', { 
        error: error instanceof Error ? error.message : String(error), 
        userInput 
      });
      
      return {
        response: "I'm here to help! Please ask about our platform features, how to start an assessment, or track your learning progress.",
        intent: 'error_recovery',
        confidence: 0.8,
        suggestions: [
          "What features does EduAssess offer?", 
          "How do I start an assessment?", 
          "Track learning progress"
        ]
      };
    }
  }

  private getContextualResponse(intent: string, userInput: string, context?: ConversationContext): string {
    const templates = this.responseTemplates[intent as keyof typeof this.responseTemplates];
    
    if (!templates) {
      return this.getFallbackResponse(userInput);
    }

    // Handle ML concepts specifically
    if (intent === 'ml_concepts') {
      const concept = this.extractMLConcept(userInput);
      if (concept && templates[concept as keyof typeof templates]) {
        return templates[concept as keyof typeof templates] as string;
      }
      return "I can explain ML concepts like overfitting, gradient descent, neural networks, regularization, and backpropagation. What would you like to learn about?";
    }

    // Handle array-based templates
    if (Array.isArray(templates)) {
      // Consider user knowledge level for response selection
      const isAdvanced = context?.userProfile?.knowledgeLevel === 'advanced';
      const responseIndex = isAdvanced ? 
        Math.min(templates.length - 1, 2) : // Use more detailed responses for advanced users
        Math.floor(Math.random() * templates.length);
      
      return templates[responseIndex];
    }

    return templates.toString();
  }

  private extractMLConcept(input: string): string {
    const concepts = ['overfitting', 'gradient_descent', 'neural_networks', 'regularization', 'backpropagation'];
    const normalizedInput = input.toLowerCase();
    
    return concepts.find(concept => {
      const conceptName = concept.replace('_', ' ');
      return normalizedInput.includes(conceptName) || normalizedInput.includes(concept);
    }) || '';
  }

  private getFallbackResponse(userInput: string): string {
    return "I'm not sure how to help with that specific request. Could you try rephrasing or ask about features, navigation, ML concepts, or assessment help?";
  }

  private generateSuggestions(intent: string): string[] {
    const suggestions = {
      features: ["How do AI-generated quizzes work?", "Show me my progress", "What are prerequisites?"],
      navigation: ["Take a new assessment", "View my results", "Get study recommendations"],
      ml_concepts: ["Explain overfitting", "What is gradient descent?", "How do neural networks work?"],
      technical_support: ["Report a bug", "Browser compatibility", "Account issues"],
      concept_explanation: ["Prerequisites for neural networks", "Why are prerequisites important?", "ML concept fundamentals"],
      results_interpretation: ["What does my score mean?", "How to improve performance?", "Understanding assessment results"],
      learning_guidance: ["What should I study next?", "Create learning path", "Study recommendations"],
      assessment_help: ["How to retake assessment?", "Question format help", "Scoring system explained"],
      llm_generated: ["Ask about ML concepts", "Platform features", "Assessment guidance"]
    };

    return suggestions[intent as keyof typeof suggestions] || 
           ["Ask about features", "Get help with navigation", "Learn ML concepts"];
  }

  // Additional helper methods
  trackUserFeedback(interactionIndex: number, rating: number): void {
    this.metricsTracker.trackUserFeedback(interactionIndex, rating);
  }

  getPerformanceReport(): string {
    return this.metricsTracker.generateReport();
  }

  isSemanticMatchingEnabled(): boolean {
    return this.isSemanticMatchingAvailable;
  }
}
