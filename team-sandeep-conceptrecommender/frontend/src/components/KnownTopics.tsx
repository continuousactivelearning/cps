import React from 'react';
import { Topic } from '../types';
import { TopicCard } from './TopicCard';

interface KnownTopicsProps {
  topics: Topic[];
  onReview?: (topicName: string) => void;
  onAddKnownTopics?: () => void;
  onTakeExam?: (topicName: string) => void;
}

export const KnownTopics: React.FC<KnownTopicsProps> = ({
  topics,
  onReview,
  onAddKnownTopics,
  onTakeExam,
}) => {
  const completedTopics = topics.filter(topic => topic.status === 'completed');

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Completed Topics</h3>
        {onAddKnownTopics && (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            onClick={onAddKnownTopics}
          >
            Add Known Topics
          </button>
        )}
      </div>
      {completedTopics.length === 0 ? (
        <p className="text-gray-600">No topics completed yet. Keep learning!</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedTopics.map(topic => (
            <TopicCard
              key={topic.name}
              topic={topic}
              onStartTopic={() => onReview && onReview(topic.name)}
              onTakeExam={onTakeExam}
              isCompleted
              isReview
            />
          ))}
        </div>
      )}
    </div>
  );
};