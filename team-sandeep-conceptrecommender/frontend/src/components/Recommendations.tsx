import React, { useEffect, useState } from 'react';
import { getRecommendations, refreshRecommendations } from '../services/api';
import { Topic, User } from '../types';
import { Loader2, RefreshCw } from 'lucide-react';
import { TopicCard } from './TopicCard';

interface RecommendationsProps {
  user: User;
  knownTopics: string[];
  recommendedTopics?: Topic[]; // Now always Topic[]
  onStartTopic?: (topicName: string) => void;
}

export const Recommendations: React.FC<RecommendationsProps> = ({ 
  user, 
  knownTopics,
  recommendedTopics: propRecommendedTopics,
  onStartTopic 
}) => {
  const [recommendations, setRecommendations] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchRecommendations = async () => {
    try {
      console.log('Fetching recommendations for user:', user.email);
      console.log('Known topics:', knownTopics);
      const data = await getRecommendations(user.email, knownTopics);
      console.log('Recommendations API response:', data);
      setRecommendations(data.recommendations || []);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      console.log('Refreshing recommendations for user:', user.email);
      console.log('Known topics:', knownTopics);
      const data = await refreshRecommendations(user.email, knownTopics);
      console.log('Refresh recommendations API response:', data);
      setRecommendations(data.recommendations || []);
    } catch (error) {
      console.error('Error refreshing recommendations:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (!propRecommendedTopics) fetchRecommendations();
    else setLoading(false);
  }, [propRecommendedTopics, knownTopics, user.email]);

  if (!propRecommendedTopics && loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!propRecommendedTopics) {
    const filtered = recommendations.filter(topic => topic.status === 'not-started');
    if (filtered.length === 0) {
      return (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Topics</h3>
          <p className="text-gray-600">No new topics to recommend at the moment.</p>
        </div>
      );
    }
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Recommended Topics</h2>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {refreshing ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4 mr-2" />
            )}
            Refresh
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended Topics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(topic => (
              <TopicCard
                key={topic.name}
                topic={topic}
                onStartTopic={onStartTopic}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (propRecommendedTopics) {
    if (propRecommendedTopics.length === 0) {
      return (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Topics</h3>
          <p className="text-gray-600">No new topics to recommend at the moment.</p>
        </div>
      );
    }
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Recommended Topics</h2>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended Topics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propRecommendedTopics.map(topic => (
              <TopicCard
                key={topic.name}
                topic={topic}
                isRecommended={true}
                onStartTopic={onStartTopic}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Recommended Topics</h2>
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {refreshing ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4 mr-2" />
          )}
          Refresh
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended Topics</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.filter(topic => topic.status === 'not-started').map(topic => (
            <TopicCard
              key={topic.name}
              topic={topic}
              onStartTopic={onStartTopic}
            />
          ))}
        </div>
      </div>
    </div>
  );
};