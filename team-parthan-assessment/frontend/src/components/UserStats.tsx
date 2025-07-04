import React from 'react';
import { Trophy, Target, Calendar, Award, Brain } from 'lucide-react';
import type { UserProfile, Topic } from '../interface/types';
import type { CustomContent } from '../interface/types';

interface UserStatsProps {
  userProfile: UserProfile;
  topics: Topic[];
  customContents: CustomContent[];
}

const UserStats: React.FC<UserStatsProps> = ({ userProfile, topics, customContents }) => {
  const completionRate = Math.round((userProfile.masteredTopics / topics.length) * 100);
  const inProgressTopics = topics.filter(t => t.status === 'in-progress').length;
  const averageScore = topics.reduce((acc, topic) => {
    if (topic.score && topic.totalQuestions) {
      return acc + (topic.score / topic.totalQuestions * 100);
    }
    return acc;
  }, 0) / topics.filter(t => t.score).length || 0;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
        <Trophy className="w-5 h-5 mr-2 text-indigo-600" />
        Your Statistics
      </h3>

      <div className="space-y-6">
        {/* Overall Progress */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Overall Progress</span>
            <span className="font-semibold">{completionRate}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-600">
              {userProfile.masteredTopics}
            </div>
            <div className="text-xs text-green-600 font-medium">Mastered</div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-yellow-600">{inProgressTopics}</div>
            <div className="text-xs text-yellow-600 font-medium">In Progress</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="flex items-center justify-center mb-2">
              <Brain className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-600">{customContents.filter(c => c.status === 'ready').length}</div>
            <div className="text-xs text-blue-600 font-medium">Custom Ready</div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Average Score</span>
            <span className="font-semibold text-indigo-600">
              {averageScore > 0 ? `${Math.round(averageScore)}%` : 'N/A'}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              Current Streak
            </span>
            <span className="font-semibold text-orange-600">{userProfile.streak} days</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Topics Available</span>
            <span className="font-semibold text-blue-600">
              {topics.filter(t => t.status === 'ready' || t.status === 'in-progress').length}
            </span>
          </div>
        </div>

        {/* Recent Achievements */}
        {userProfile.masteredTopics > 0 && (
          <div className="pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-600 mb-3 font-medium">Recent Achievements</div>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {topics.filter(t => t.status === 'mastered').slice(-3).map((topicName, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Mastered {topicName.name as string}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserStats;