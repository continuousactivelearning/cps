//Author:Yeddula Pushkala            Date:13-06-25
export class PlatformKnowledge {
    static getFeatures(): string[] {
      return [
        "AI-generated quizzes based on ML prerequisites",
        "Prerequisite dependency mapping for ML concepts", 
        "Performance tracking and analytics",
        "Personalized learning paths",
        "Detailed assessment reports"
      ];
    }
  
    static getNavigationHelp(action: string): string {
      const navigation: Record<string, string> = {
        start: "Click 'Start Assessment' on homepage → Select ML topic → Begin prerequisite test",
        results: "Access 'Results' from main menu to see performance history and analytics", 
        progress: "Use 'Progress' section to monitor learning and identify knowledge gaps",
        retake: "You can retake assessments from your results page to improve scores"
      };
      
      return navigation[action] || "Use the main menu to navigate between Assessments, Results, and Progress sections.";
    }
  
    static getMLConceptInfo(concept: string): string {
      const concepts: Record<string, string> = {
        overfitting: "When a model learns training data too well, including noise, hurting performance on new data",
        "gradient descent": "Optimization algorithm that minimizes loss by moving toward steepest descent", 
        regularization: "Techniques to prevent overfitting by adding penalties for model complexity",
        "neural networks": "Computational models inspired by biological neural networks with interconnected nodes"
      };
  
      return concepts[concept.toLowerCase()] || `${concept} is an important ML concept covered in our assessments.`;
    }
  }
  