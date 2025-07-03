import React, { useEffect, useState } from 'react';
import { Topic } from '../types';

interface SelectKnownTopicsProps {
  onContinue: (selectedTopicNames: string[]) => void;
}

const SelectKnownTopics: React.FC<SelectKnownTopicsProps> = ({ onContinue }) => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('https://dsa-lpr.onrender.com/api/topics', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        setTopics(data);
      } catch {
        setError('Failed to load topics');
      } finally {
        setLoading(false);
      }
    };
    fetchTopics();
  }, []);

  const handleToggle = (topicName: string) => {
    setSelected(new Set([topicName])); // Only allow one selection at a time
  };

  const handleContinue = () => {
    if (selected.size === 0) return;
    onContinue(Array.from(selected));
  };

  if (loading) return <div className="p-8 text-center">Loading topics...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Select Topics You Already Know</h1>
        <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
          {topics.map(topic => (
            <div key={topic.name} className="flex items-center space-x-3">
              <input
                type="radio"
                name="known-topic"
                id={`topic-${topic.name}`}
                checked={selected.has(topic.name)}
                onChange={() => handleToggle(topic.name)}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <label htmlFor={`topic-${topic.name}`} className="cursor-pointer flex-grow">
                <span className="text-gray-800 font-medium">{topic.name}</span>
                <span className="ml-2 text-xs text-gray-500">({topic.difficulty})</span>
              </label>
            </div>
          ))}
        </div>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
          onClick={handleContinue}
          disabled={selected.size === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectKnownTopics;
