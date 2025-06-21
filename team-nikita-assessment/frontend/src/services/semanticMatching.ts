//Author:Yeddula Pushkala         Date:13-06-25
import { pipeline } from '@xenova/transformers';

export class SemanticSimilarityMatcher {
  private initialized = false;
  private embeddingPipeline: any = null;
  private intentEmbeddings: Map<string, number[]> = new Map();

  async initialize(): Promise<void> {
    try {
      // Initialize the embedding pipeline with proper error handling
      this.embeddingPipeline = await pipeline(
        'feature-extraction',
        'Xenova/all-MiniLM-L6-v2',
        { 
          cache_dir: './.cache',
          local_files_only: false,
          revision: 'main'
        }
      );
      
      // Precompute intent embeddings for faster matching
      await this.precomputeIntentEmbeddings();
      
      this.initialized = true;
      console.log('Semantic matching initialized successfully');
    } catch (error) {
      console.warn('Semantic matching initialization failed, falling back to keyword matching:', error);
      this.initialized = false;
      // Don't throw - gracefully fall back to keyword matching
    }
  }

  private async precomputeIntentEmbeddings(): Promise<void> {
    const intentDescriptions = {
      navigation: "help guide start begin navigate use website platform tutorial instructions dashboard menu",
      concept_explanation: "prerequisites requirements concepts explain fundamentals basics needed understanding theory",
      technical_support: "error problem issue broken not working loading failed troubleshoot bug crash",
      results_interpretation: "score results performance understand interpret meaning explain analysis grade",
      learning_guidance: "study learn next recommend suggest path guidance what should advice direction",
      ml_concepts: "machine learning overfitting gradient descent neural networks regularization backpropagation",
      assessment_help: "retake time limit question format scoring system review answers practice test quiz",
      features: "features capabilities functions tools options what does platform offer services"
    };

    for (const [intent, description] of Object.entries(intentDescriptions)) {
      try {
        const embedding = await this.getEmbedding(description);
        this.intentEmbeddings.set(intent, embedding);
      } catch (error) {
        console.warn(`Failed to compute embedding for intent ${intent}:`, error);
      }
    }
  }

  private async getEmbedding(text: string): Promise<number[]> {
    if (!this.embeddingPipeline) {
      throw new Error('Embedding pipeline not initialized');
    }
    
    const result = await this.embeddingPipeline(text, { 
      pooling: 'mean', 
      normalize: true 
    });
    return Array.from(result.data);
  }

  private cosineSimilarity(vec1: number[], vec2: number[]): number {
    if (vec1.length !== vec2.length) {
      throw new Error('Vectors must have the same length');
    }

    const dotProduct = vec1.reduce((sum, a, i) => sum + a * vec2[i], 0);
    const magnitude1 = Math.sqrt(vec1.reduce((sum, a) => sum + a * a, 0));
    const magnitude2 = Math.sqrt(vec2.reduce((sum, a) => sum + a * a, 0));
    
    if (magnitude1 === 0 || magnitude2 === 0) {
      return 0;
    }
    
    return dotProduct / (magnitude1 * magnitude2);
  }

  async getSemanticSimilarity(userInput: string): Promise<{ intent: string; confidence: number }> {
    if (!this.initialized || !this.embeddingPipeline || this.intentEmbeddings.size === 0) {
      // Return low confidence to trigger keyword matching fallback
      return { intent: 'unknown', confidence: 0.1 };
    }

    try {
      const userEmbedding = await this.getEmbedding(userInput.toLowerCase().trim());
      let bestMatch = { intent: 'unknown', confidence: 0 };

      for (const [intent, intentEmbedding] of this.intentEmbeddings) {
        const similarity = this.cosineSimilarity(userEmbedding, intentEmbedding);
        if (similarity > bestMatch.confidence) {
          bestMatch = { intent, confidence: similarity };
        }
      }

      // Apply confidence threshold - only return confident matches
      if (bestMatch.confidence < 0.3) {
        return { intent: 'unknown', confidence: 0.1 };
      }

      return bestMatch;
    } catch (error) {
      console.warn('Semantic similarity calculation failed:', error);
      return { intent: 'unknown', confidence: 0.1 };
    }
  }

  // Method to check if semantic matching is available
  isInitialized(): boolean {
    return this.initialized && this.embeddingPipeline !== null;
  }

  // Method to get available intents
  getAvailableIntents(): string[] {
    return Array.from(this.intentEmbeddings.keys());
  }
}
