import React, { useState } from 'react';
import { Topic } from '../types';
import { 
  CheckCircle, 
  Clock, 
  Play, 
  BookOpen, 
  Award,
  TrendingUp,
} from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  onStartTopic?: (topicName: string) => void;
  onTakeExam?: (topicName: string) => void;
  isCompleted?: boolean;
  isInProgress?: boolean;
  isReview?: boolean;
  isRecommended?: boolean;
  isLocked?: boolean;
}

export const TopicCard: React.FC<TopicCardProps> = ({ 
  topic, 
  onStartTopic, 
  onTakeExam, 
  isCompleted = false,
  isInProgress = false,
  isReview = false,
  isRecommended = false,
  isLocked = false
}) => {
  const [showPrereqs, setShowPrereqs] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = () => {
    switch (topic.status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Play className="w-5 h-5 text-blue-500" />;
      case 'mastered':
        return <Award className="w-5 h-5 text-purple-500" />;
      default:
        return <BookOpen className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusText = () => {
    switch (topic.status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'mastered': return 'Mastered';
      default: return 'Not Started';
    }
  };

  // Badge and motivational quote logic
  const getBadgeAndQuote = (progress: number) => {
    if (progress === 100) {
      return { badge: '💎 Diamond', quote: 'You are a DSA Diamond! Perfection achieved!' };
    } else if (progress >= 90) {
      return { badge: '🏆 Platinum', quote: 'Platinum level! Just a step away from perfection!' };
    } else if (progress >= 80) {
      return { badge: '🥇 Gold', quote: 'Gold achieved! Keep pushing for the top!' };
    } else if (progress >= 70) {
      return { badge: '🥈 Silver', quote: 'Silver star! Great job, keep going!' };
    } else if (progress >= 60) {
      return { badge: '🥉 Copper', quote: 'Copper badge! Solid effort, aim higher!' };
    } else {
      return { badge: '🏅 Brass', quote: 'Brass badge! Every step counts, keep learning!' };
    }
  };

  return (
    <div
      className={`${isCompleted ? 'bg-green-50' : isLocked ? 'bg-red-50' : isRecommended ? 'bg-orange-50' : isInProgress ? 'bg-white' : 'bg-white'} rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
      onClick={isLocked ? () => setShowPrereqs(true) : undefined}
      style={isLocked ? { cursor: 'pointer' } : {}}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          {/* No completed status icon */}
          <h3 className="text-lg font-bold text-gray-900">{topic.name}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(topic.difficulty)}`}>
          {topic.difficulty}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{topic.description}</p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium">{topic.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${topic.progress}%` }}
          ></div>
        </div>
        {/* Badge and Motivational Quote */}
        {typeof topic.progress === 'number' && topic.progress > 0 && (
          <div className="flex flex-col items-center mt-2">
            <span className="text-lg font-bold">{getBadgeAndQuote(topic.progress).badge}</span>
            <span className="text-xs text-gray-500 italic text-center mt-1">{getBadgeAndQuote(topic.progress).quote}</span>
          </div>
        )}
        {/* End Badge and Motivational Quote */}
        {topic.examScore && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Last exam score</span>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="font-medium text-green-600">{topic.examScore}%</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex space-x-2">
        {isLocked ? (
          <button
            className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
            onClick={e => { e.stopPropagation(); setShowPrereqs(true); }}
          >
            <span>View Prerequisites</span>
          </button>
        ) : isCompleted ? (
          <>
            <button 
              onClick={() => onStartTopic?.(topic.name)}
              className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Review
            </button>
            <button 
              onClick={() => { console.log('Retake Exam clicked for:', topic.name); onTakeExam?.(topic.name); }}
              className="flex-1 border-2 border-green-600 text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors"
            >
              Retake Exam
            </button>
          </>
        ) : isRecommended ? (
          <button 
            onClick={() => onStartTopic?.(topic.name)}
            className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Play className="w-4 h-4" />
            <span>Start Learning</span>
          </button>
        ) : isInProgress ? (
          <>
            <button 
              onClick={() => onStartTopic?.(topic.name)}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
            <button 
              onClick={() => { console.log('Take Exam clicked for:', topic.name); onTakeExam?.(topic.name); }}
              className="flex-1 border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Take Exam
            </button>
          </>
        ) : (
          <button 
            onClick={() => onStartTopic?.(topic.name)}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Play className="w-4 h-4" />
            <span>Start Learning</span>
          </button>
        )}
      </div>

      {showPrereqs && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" onClick={() => setShowPrereqs(false)}>
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              onClick={e => { e.stopPropagation(); setShowPrereqs(false); }}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Prerequisites for {topic.name}</h2>
            {topic.prerequisites && topic.prerequisites.length > 0 ? (
              <ul className="list-disc pl-6 text-gray-700">
                {topic.prerequisites.map(prereq => (
                  <li key={prereq}>{prereq}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No prerequisites listed.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};