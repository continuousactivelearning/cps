//Author:Yeddula Pushkala          Date:13-6-25

export interface ChatbotMetrics {
    totalInteractions: number;
    successfulClassifications: number;
    fallbackRate: number;
    averageConfidence: number;
    resolutionTime: number;
    userSatisfaction: number;
    confidenceDistribution: {
      high: number; // >0.8
      medium: number; // 0.4-0.8
      low: number; // <0.4
    };
  }
  
  interface InteractionRecord {
    timestamp: Date;
    confidence: number;
    intent: string;
    wasFallback: boolean;
    resolutionTime: number;
    userFeedback?: number;
  }
  
  export class MetricsTracker {
    private metrics: ChatbotMetrics = {
      totalInteractions: 0,
      successfulClassifications: 0,
      fallbackRate: 0,
      averageConfidence: 0,
      resolutionTime: 0,
      userSatisfaction: 0,
      confidenceDistribution: { high: 0, medium: 0, low: 0 }
    };
  
    private interactions: InteractionRecord[] = [];
  
    trackInteraction(confidence: number, intent: string, wasFallback: boolean, resolutionTime: number): void {
      this.interactions.push({
        timestamp: new Date(),
        confidence,
        intent,
        wasFallback,
        resolutionTime
      });
  
      this.updateMetrics();
    }
  
    trackUserFeedback(interactionIndex: number, rating: number): void {
      if (this.interactions[interactionIndex]) {
        this.interactions[interactionIndex].userFeedback = rating;
        this.updateMetrics();
      }
    }
  
    private updateMetrics(): void {
      const total = this.interactions.length;
      if (total === 0) return;
  
      this.metrics.totalInteractions = total;
      this.metrics.successfulClassifications = this.interactions.filter(i => !i.wasFallback).length;
      this.metrics.fallbackRate = this.interactions.filter(i => i.wasFallback).length / total;
      this.metrics.averageConfidence = this.interactions.reduce((sum, i) => sum + i.confidence, 0) / total;
      this.metrics.resolutionTime = this.interactions.reduce((sum, i) => sum + i.resolutionTime, 0) / total;
  
      // Calculate confidence distribution
      const high = this.interactions.filter(i => i.confidence > 0.8).length;
      const low = this.interactions.filter(i => i.confidence < 0.4).length;
      const medium = total - high - low;
  
      this.metrics.confidenceDistribution = {
        high: high / total,
        medium: medium / total,
        low: low / total
      };
  
      // Calculate user satisfaction from feedback
      const feedbackInteractions = this.interactions.filter(i => i.userFeedback !== undefined);
      if (feedbackInteractions.length > 0) {
        this.metrics.userSatisfaction = feedbackInteractions.reduce((sum, i) => sum + (i.userFeedback || 0), 0) / feedbackInteractions.length;
      }
    }
  
    getMetrics(): ChatbotMetrics {
      return { ...this.metrics };
    }
  
    generateReport(): string {
      const metrics = this.getMetrics();
      return `
  📊 **Chatbot Performance Report**
  
  **Overall Performance:**
  - Total Interactions: ${metrics.totalInteractions}
  - Successful Classifications: ${(metrics.successfulClassifications / metrics.totalInteractions * 100).toFixed(1)}%
  - Fallback Rate: ${(metrics.fallbackRate * 100).toFixed(1)}%
  - Average Confidence: ${(metrics.averageConfidence * 100).toFixed(1)}%
  
  **Confidence Distribution:**
  - High Confidence (>80%): ${(metrics.confidenceDistribution.high * 100).toFixed(1)}%
  - Medium Confidence (40-80%): ${(metrics.confidenceDistribution.medium * 100).toFixed(1)}%
  - Low Confidence (<40%): ${(metrics.confidenceDistribution.low * 100).toFixed(1)}%
  
  **User Experience:**
  - Average Resolution Time: ${metrics.resolutionTime.toFixed(1)}ms
  - User Satisfaction: ${(metrics.userSatisfaction * 20).toFixed(1)}/10
  
  **Target Goals:**
  ${metrics.fallbackRate < 0.15 ? '✅' : '❌'} Fallback Rate < 15%
  ${metrics.averageConfidence > 0.6 ? '✅' : '❌'} Average Confidence > 60%
  ${metrics.confidenceDistribution.high > 0.5 ? '✅' : '❌'} High Confidence > 50%
      `;
    }
  }