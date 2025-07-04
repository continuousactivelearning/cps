export class LLMChatService {
  private readonly backendApiUrl = `${import.meta.env.VITE_API_URL}/api`;

  async generateChatResponse(userInput: string): Promise<string> {
    try {
      const response = await fetch(`${this.backendApiUrl}/chat/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput })
      });

      if (!response.ok) throw new Error(`Backend error: ${response.status}`);
      
      const data = await response.json();
      return data.response;
      
    } catch (error) {
      console.error('Chat service error:', error);
      return this.getFallbackResponse(userInput);
    }
  }

  private getFallbackResponse(input: string): string {
    const lcInput = input.toLowerCase();
    return lcInput.includes('prerequisite') 
      ? "Understanding prerequisites is crucial for ML success. Would you like me to explain specific requirements?"
      : "Could you please rephrase your question?";
  }
}

/*
//Author:Yeddula Pushkala          Date:13-6-25
export class LLMChatService {
    private readonly backendApiUrl = 'http://localhost:5000/api';
  
    async generateChatResponse(userInput: string, context?: any): Promise<string> {
      try {
        console.log('Calling backend chat API with input:', userInput);
        
        const response = await fetch(`${this.backendApiUrl}/chat/generate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userInput,
            context: context || {}
          }),
        });
  
        console.log('Backend response status:', response.status);
  
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error(`Backend API error: ${response.status}`, errorData);
          throw new Error(`Backend API error: ${response.status}`);
        }
  
        const data = await response.json();
        console.log('Received chat response:', data);
        return data.response || "I'm here to help with your ML learning journey!";
      } catch (error) {
        console.error('Frontend LLM Chat Error:', error);
        return this.getFallbackResponse(userInput);
      }
    }
  
    private getFallbackResponse(userInput: string): string {
      const input = userInput.toLowerCase();
      
      if (input.includes('feature') || input.includes('what') || input.includes('platform')) {
        return "EduAssess offers AI-generated quizzes, prerequisite testing, performance tracking, and personalized ML learning paths.";
      }
      
      if (input.includes('how') || input.includes('start') || input.includes('navigate')) {
        return "To start: Click 'Start Assessment' → Select ML topic → Begin prerequisite test. Use main menu for 'Assessments', 'Results', and 'Progress'.";
      }
      
      return "I'm here to help with EduAssess features and ML concepts!";
    }
  }
*/