import React from 'react';
import { Topic } from '../types';
import { TopicCard } from './TopicCard';

interface CurrentTopicsProps {
  topics: Topic[];
  onStartTopic?: (topicName: string) => void;
  onTakeExam?: (topicName: string) => void;
}

export const CurrentTopics: React.FC<CurrentTopicsProps> = ({ topics, onStartTopic, onTakeExam }) => {
  // Accept topics as-is, do not filter by status here
  if (!topics || topics.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Current Topics</h3>
        <p className="text-gray-600">No topics in progress. Start learning a new topic!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Current Topics</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map(topic => (
          <TopicCard
            key={topic.name}
            topic={topic}
            isInProgress={true}
            onStartTopic={onStartTopic}
            onTakeExam={onTakeExam}
          />
        ))}
      </div>
    </div>
  );
};