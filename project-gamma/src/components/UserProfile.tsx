import React from 'react';
import { User } from '../types';
import { Award, Calendar, Target, Zap, TrendingUp } from 'lucide-react';

interface UserProfileProps {
  user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const progressPercentage = (user.xp / user.nextLevelXP) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center space-x-4 mb-6">
        <img 
          src={user.avatar} 
          alt={user.name}
          className="w-16 h-16 rounded-full border-4 border-blue-100"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <div className="flex items-center space-x-2 mt-1">
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600">{user.level} Level</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <Zap className="w-6 h-6 text-blue-500 mx-auto mb-1" />
          <div className="text-2xl font-bold text-blue-600">{user.currentStreak}</div>
          <div className="text-xs text-gray-600">Day Streak</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <Target className="w-6 h-6 text-green-500 mx-auto mb-1" />
          <div className="text-2xl font-bold text-green-600">{user.totalProblems}</div>
          <div className="text-xs text-gray-600">Problems Solved</div>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <TrendingUp className="w-6 h-6 text-purple-500 mx-auto mb-1" />
          <div className="text-2xl font-bold text-purple-600">{user.xp}</div>
          <div className="text-xs text-gray-600">Total XP</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <Calendar className="w-6 h-6 text-orange-500 mx-auto mb-1" />
          <div className="text-2xl font-bold text-orange-600">
            {Math.floor((Date.now() - new Date(user.joinDate).getTime()) / (1000 * 60 * 60 * 24))}
          </div>
          <div className="text-xs text-gray-600">Days Active</div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Progress to {user.level === 'Beginner' ? 'Intermediate' : 'Advanced'}</span>
          <span className="font-medium">{user.xp}/{user.nextLevelXP} XP</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};