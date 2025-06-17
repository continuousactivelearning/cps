//Author:Yeddula Pushkala          Date:13-06-25
import axios from 'axios';
import { getPrerequisites } from './prereqService';
import dotenv from 'dotenv';

dotenv.config();

export class LLMChatService {
  private readonly apiUrl = 'https://router.huggingface.co/nebius/v1/chat/completions';
  private readonly model = 'mistralai/Mistral-7B-Instruct-v0.2'; // Changed to Mistral 7B

  async generateChatResponse(userInput: string, context?: any): Promise<string> {
    try {
      // Use your existing knowledge base
      const relevantInfo = this.getRelevantKnowledge(userInput);
      
      const systemPrompt = `You are an intelligent assistant for EduAssess, an ML assessment platform. 
      You help users understand machine learning concepts, navigate the platform, and prepare for assessments.
      
      Available Platform Information: ${relevantInfo}
      
      Respond helpfully and conversationally. Keep responses focused on education and the platform.`;

      const response = await axios.post(
        this.apiUrl,
        {
          model: this.model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userInput }
          ],
          temperature: 0.7,
          max_tokens: 500,
        },
        {
          headers: {
            Authorization: `Bearer ${String(process.env.HF_TOKEN).trim()}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.choices[0]?.message?.content || "I'm here to help with your ML learning journey!";
    } catch (error) {
      console.error('LLM Chat Error:', error);
      return "I'm experiencing technical difficulties, but I'm here to help with EduAssess features and ML concepts!";
    }
  }

  private getRelevantKnowledge(userInput: string): string {
    const input = userInput.toLowerCase();
    const knowledge: string[] = [];

    // Platform features info
    if (input.includes('feature') || input.includes('what') || input.includes('platform')) {
      knowledge.push("EduAssess offers AI-generated quizzes, prerequisite testing, performance tracking, and personalized ML learning paths.");
    }

    // Navigation help
    if (input.includes('how') || input.includes('start') || input.includes('navigate')) {
      knowledge.push("To start: Click 'Start Assessment' → Select ML topic → Begin prerequisite test. Use main menu for 'Assessments', 'Results', and 'Progress'.");
    }

    // Concept explanations
    if (input.includes('concept') || input.includes('prerequisite') || input.includes('explain')) {
      const concepts = this.extractMLConcepts(input);
      if (concepts.length > 0) {
        concepts.forEach(concept => {
          const prereqs = getPrerequisites(concept);
          knowledge.push(`${concept} prerequisites: ${prereqs.join(', ')}`);
        });
      }
    }

    // Assessment info
    if (input.includes('assessment') || input.includes('test') || input.includes('quiz')) {
      knowledge.push("Assessments evaluate prerequisite knowledge. Scores above 70% indicate readiness; below 60% suggests reviewing fundamentals.");
    }

    return knowledge.join(' ') || "EduAssess is an ML assessment platform with AI-generated quizzes and prerequisite testing.";
  }

  private extractMLConcepts(input: string): string[] {
    const mlConcepts = ['neural networks', 'svm', 'linear regression', 'decision trees', 'clustering', 'overfitting', 'gradient descent', 'regularization'];
    return mlConcepts.filter(concept => input.includes(concept));
  }
}
