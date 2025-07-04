import React from 'react';
import { CheckCircle, Clock, Play, AlertCircle, Trophy, RotateCcw } from 'lucide-react';
import type { Topic } from '../interface/types';

interface TopicCardProps {
  topic: Topic;
  status: string;
  onStartQuiz: (topicId: string) => void;
  onReview: (topicId: string) => void;
  onRetake: (topicId: string) => void;
  hasQuizHistory: boolean;
  topics:Topic[]
}

const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  status,
  onStartQuiz,
  onReview,
  onRetake,
  hasQuizHistory,
  topics
}) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'mastered': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'ready': return <Play className="w-5 h-5 text-blue-500" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'mastered': return 'bg-green-50 border-green-200 hover:bg-green-100';
      case 'in-progress': return 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100';
      case 'ready': return 'bg-blue-50 border-blue-200 hover:bg-blue-100';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

   const getScorePercentage = () => {
    if (topic.score && topic.totalQuestions) {
      return Math.round((topic.score / topic.totalQuestions) * 100);
    }
    return 0;
  };

  const isDisabled = status === 'locked';

  return (
    <div
      className={`p-4 md:p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
        isDisabled
          ? 'bg-gray-50 border-gray-200 opacity-60 cursor-not-allowed'
          : getStatusColor(status)
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {getStatusIcon(status)}
          <div>
            <h4 className="font-semibold text-gray-900 text-sm md:text-base">{topic.name}</h4>
            <p className="text-xs md:text-sm text-gray-600 capitalize">{status.replace('-', ' ')}</p>
          </div>
        </div>
        {topic.score !== undefined && topic.totalQuestions && (
          <div className="text-right">
            <div className="font-bold text-sm md:text-lg flex items-center space-x-2">
              <span>{topic.score}/{topic.totalQuestions}</span>
              {status === 'mastered' && <Trophy className="w-4 h-4 text-yellow-500" />}
            </div>
            <div className="text-xs md:text-sm text-gray-600">{getScorePercentage()}%</div>
            {status === 'in-progress' || status === 'mastered' ? (
              <div className="w-12 bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    status === 'mastered' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                  style={{ width: `${getScorePercentage()}%` }}
                ></div>
              </div>
            ) : null}
          </div>
        )}
      </div>

      {topic.prerequisites && topic.prerequisites.length > 0 && (
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2">Prerequisites:</div>
          <div className="flex flex-wrap gap-2">
            {topic.prerequisites.map((prereq) => {
              const prereqTopic = topics.find(t => t.id === prereq);
              const prereqMastered = prereqTopic?.status === 'mastered';
              return (
                <span
                  key={prereq}
                  className={`px-2 py-1 rounded text-xs ${
                    prereqMastered
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {prereq}
                </span>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div className="text-xs md:text-sm text-gray-600">
          {status === 'ready' && 'Ready to start!'}
          {status === 'in-progress' && `Continue assessment • ${getScorePercentage()}% complete`}
          {status === 'mastered' && `Mastered with ${getScorePercentage()}% score`}
          {status === 'locked' && 'Complete prerequisites first'}
        </div>
        
        {!isDisabled && (
          <div className="flex space-x-2">
            {status === 'mastered' && hasQuizHistory && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onReview(topic.id);
                  }}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors"
                >
                  Review
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRetake(topic.id);
                  }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center space-x-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Retake</span>
                </button>
              </>
            )}
            {status === 'in-progress' && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onStartQuiz(topic.id);
                }}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors"
              >
                Continue
              </button>
            )}
            {status === 'ready' && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onStartQuiz(topic.id);
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors"
              >
                Start Quiz
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicCard;