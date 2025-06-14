//Author:Yeddula Pushkala            Date:12-05-25
export interface IntentPattern {
    keywords: string[];
    phrases: string[];
    single_words?: string[];
    synonyms?: string[];
    context_indicators?: string[];
  }
  
  export const improvedIntentPatterns = {
    ml_concepts: {
      keywords: ['overfitting', 'regularization', 'gradient descent', 'backpropagation', 
                'activation function', 'loss function', 'hyperparameters', 'feature engineering'],
      phrases: [
        'What does ${concept} mean in ML?',
        'Explain ${concept} in simple terms',
        'How does ${concept} work?'
      ],
      context_indicators: ['ML concept', 'neural network term', 'deep learning'],
      single_words: ['overfitting', 'regularization', 'backpropagation'],
      synonyms: ['machine learning', 'deep learning', 'AI']
    },
  
    assessment_help: {
      keywords: ['retake', 'time limit', 'question format', 'scoring system',
                'review answers', 'practice test', 'mock exam'],
      phrases: [
        'Can I retake the assessment?',
        'How is the test scored?',
        'What format are the questions?'
      ],
      single_words: ['retake', 'scoring', 'format'],
      synonyms: ['test', 'quiz', 'exam', 'evaluation']
    },
  
    navigation: {
      keywords: ['start', 'begin', 'how', 'where', 'find', 'navigate', 'use', 'assessment', 'test', 'homepage', 'help', 'guide', 'tutorial', 'instructions', 'setup'],
      phrases: ['how do i', 'where can i', 'how to start', 'how to begin', 'where is', 'how do i use', 'getting started', 'need help with'],
      single_words: ['navigation', 'help', 'start', 'begin', 'guide', 'about', 'info', 'information'],
      synonyms: ['assistance', 'directions', 'guidance', 'support']
    },
  
    concept_explanation: {
      keywords: ['prerequisites', 'why', 'explain', 'what', 'concepts', 'needed', 'required', 'before', 'foundation', 'basics'],
      phrases: ['prerequisites for', 'why do i need', 'what concepts', 'explain why', 'what should i know', 'requirements for'],
      single_words: ['prerequisites', 'concepts', 'requirements', 'basics', 'fundamentals'],
      synonyms: ['dependencies', 'foundations', 'requirements', 'essentials']
    },
  
    technical_support: {
      keywords: ['error', 'not working', 'broken', 'failed', 'loading', 'stuck', 'crashed', 'problem', 'issue'],
      phrases: ['not working', 'error message', 'won\'t load', 'not loading', 'system error', 'technical issue'],
      single_words: ['error', 'problem', 'issue', 'broken', 'failed'],
      synonyms: ['bug', 'glitch', 'malfunction', 'trouble']
    },
  
    results_interpretation: {
      keywords: ['score', 'results', 'performance', 'grade', 'mean', 'interpret', 'understand', 'explain'],
      phrases: ['what does', 'my score', 'my results', 'what do these', 'how should i interpret'],
      single_words: ['score', 'results', 'performance', 'grade'],
      synonyms: ['outcome', 'evaluation', 'assessment', 'rating']
    },
  
    learning_guidance: {
      keywords: ['next', 'study', 'learn', 'recommend', 'suggest', 'path', 'after', 'should'],
      phrases: ['what should i', 'what next', 'recommend', 'study next', 'learning path', 'next steps'],
      single_words: ['next', 'study', 'learn', 'recommend'],
      synonyms: ['advice', 'direction', 'suggestion', 'guidance']
    },
  
    features: {
      keywords: ['features', 'capabilities', 'functions', 'tools', 'options', 'what does', 'platform', 'offer', 'services'],
      phrases: ['what features', 'platform capabilities', 'what can i do', 'available tools'],
      single_words: ['features', 'capabilities', 'tools', 'services'],
      synonyms: ['functionality', 'options', 'abilities', 'offerings']
    },
  
    escalation: {
      keywords: ['human', 'agent', 'support', 'help', 'person', 'representative', 'contact'],
      phrases: ['talk to human', 'human agent', 'speak to person', 'contact support', 'need help'],
      single_words: ['human', 'agent', 'support', 'person'],
      synonyms: ['representative', 'operator', 'assistant', 'staff']
    }
  };
  
  export type IntentType = keyof typeof improvedIntentPatterns;
  