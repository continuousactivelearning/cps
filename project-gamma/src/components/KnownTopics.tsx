import React from 'react';
import { Topic, ExamResult } from '../types';
import { TopicCard } from './TopicCard';
import { CheckCircle, Award, TrendingUp } from 'lucide-react';

interface KnownTopicsProps {
  topics: Topic[];
  examResults: ExamResult[];
  onTakeExam: (topicId: string) => void;
}

export const KnownTopics: React.FC<KnownTopicsProps> = ({ 
  topics, 
  examResults, 
  onTakeExam 
}) => {
  const knownTopics = topics.filter(topic => 
    topic.status === 'completed' || topic.status === 'mastered'
  );

  const getTopicExamResult = (topicId: string) => {
    return examResults.find(result => result.topicId === topicId);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Known Topics</h3>
          <p className="text-sm text-gray-600">Topics you've mastered and completed</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {knownTopics.map(topic => {
          const examResult = getTopicExamResult(topic.id);
          
          return (
            <div key={topic.id} className="border border-green-100 rounded-lg p-4 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{topic.name}</h4>
                {topic.status === 'mastered' && (
                  <Award className="w-5 h-5 text-yellow-500" />
                )}
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-green-600">{topic.progress}%</span>
                </div>
                
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                    style={{ width: `${topic.progress}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Problems: {topic.problemsSolved}/{topic.totalProblems}</span>
                  {examResult && (
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="font-medium text-green-600">{examResult.score}%</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex space-x-2">
                <button 
                  onClick={() => onTakeExam(topic.id)}
                  className="flex-1 border border-green-600 text-green-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors"
                >
                  Retake Exam
                </button>
                <button className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  Review
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {knownTopics.length === 0 && (
        <div className="text-center py-8">
          <CheckCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Complete your first topic to see it here!</p>
        </div>
      )}
    </div>
  );
};