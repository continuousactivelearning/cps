//Author:Yeddula Pushkala          Date:13-06-25
//Modified by Nakshatra Bhandary on 17/6/25 to change the model to an opensource one. Modified API call accordingly
//Updated by Nikita S Raj Kapini on 26/06/2025
import axios from 'axios';
import { getPrerequisites } from './prereqService';
import dotenv from 'dotenv';

dotenv.config();

interface ConceptNode {
  prereqs: string[];
  children: string[];
  description: string;
  difficulty: string;
}

const conceptGraph: { [key: string]: ConceptNode } = require('../conceptGraph.json'); // adjust path if needed



export class LLMChatService {
  private readonly apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  private readonly model = 'mistralai/mistral-7b-instruct:free'; // Updated to v0.3

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
        model: 'mistralai/mistral-7b-instruct:free',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userInput }
        ],
        temperature: 0.7,
        max_tokens: 500,
        return_full_text: false
      },
        {
          headers: {
            Authorization: `Bearer ${String(process.env.OPENROUTER_API_KEY).trim()}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.choices?.[0]?.message?.content?.trim() || 
       "I'm here to help with your ML learning journey!";
    } catch (error) {
      console.error('LLM Chat Error:', error);
      return "I'm experiencing technical difficulties, but I'm here to help with EduAssess features and ML concepts!";
    }
  }

  // Rest of your class remains unchanged

  private getAllPrerequisites(topic: string, visited = new Set<string>()): string[] {
  if (!conceptGraph[topic] || visited.has(topic)) return [];
  visited.add(topic);

  const direct = conceptGraph[topic].prereqs || [];
  let all = [...direct];

  for (const prereq of direct) {
    const deeper = this.getAllPrerequisites(prereq, visited);
    all.push(...deeper);
  }

  return Array.from(new Set(all)); // Remove duplicates
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
    const matchedConcepts = Object.keys(conceptGraph).filter(concept =>
      input.includes(concept.toLowerCase())
    );

    if (input.includes('prerequisite') || input.includes('requirement') || input.includes('before learning') || input.includes('concept')) {
      if (matchedConcepts.length > 0) {
        matchedConcepts.forEach(topic => {
          const prereqs = this.getAllPrerequisites(topic);
          if (prereqs.length > 0) {
            knowledge.push(`To study "${topic}", you should understand: ${prereqs.join(', ')}`);
          } else {
            knowledge.push(`"${topic}" has no specific prerequisites. It's a good starting point!`);
          }
        });
      } else {
        knowledge.push("I couldn’t find the topic you mentioned. Please make sure it's an ML concept covered on EduAssess.");
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

