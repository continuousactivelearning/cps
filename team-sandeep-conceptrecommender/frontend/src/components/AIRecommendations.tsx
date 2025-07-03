import React from 'react';
import { Topic } from '../types';
import { Brain, ArrowRight } from 'lucide-react';

interface AIRecommendationsProps {
  topics: Topic[];
}

export const AIRecommendations: React.FC<AIRecommendationsProps> = ({ topics }) => {
  const recommendations = [
    {
      id: 1,
      title: "Focus on Dynamic Programming",
      description: "Based on your performance in Arrays & Strings, you might find Dynamic Programming concepts easier to grasp now.",
      priority: "high"
    },
    {
      id: 2,
      title: "Review Graph Algorithms",
      description: "Your understanding of Binary Trees suggests you're ready to tackle more complex graph structures.",
      priority: "medium"
    },
    {
      id: 3,
      title: "Practice Hash Tables",
      description: "Consider revisiting Hash Tables to strengthen your understanding of collision resolution.",
      priority: "low"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">AI Recommendations</h3>
          <p className="text-sm text-gray-600">Personalized learning suggestions</p>
        </div>
      </div>

      <div className="space-y-4">
        {recommendations.map(recommendation => (
          <div 
            key={recommendation.id}
            className="p-4 rounded-lg border border-gray-100 hover:border-purple-200 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{recommendation.title}</h4>
                <p className="text-sm text-gray-600">{recommendation.description}</p>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-medium ${
                recommendation.priority === 'high' 
                  ? 'bg-red-100 text-red-700'
                  : recommendation.priority === 'medium'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-green-100 text-green-700'
              }`}>
                {recommendation.priority}
              </div>
            </div>
            <button className="mt-3 text-sm text-purple-600 font-medium flex items-center hover:text-purple-700">
              View Details
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}; 