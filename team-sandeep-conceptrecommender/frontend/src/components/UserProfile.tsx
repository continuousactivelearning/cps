import React, { useRef, useState } from 'react';
import { User } from '../types';
import { Award, Calendar, Target, Zap, TrendingUp } from 'lucide-react';

interface UserProfileProps {
  user: User;
  onProfileImageChange?: (imageUrl: string) => void;
  completedCount?: number;
  currentCount?: number;
  recommendedCount?: number;
  lockedCount?: number;
  totalTopics?: number;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, onProfileImageChange, completedCount, currentCount, recommendedCount, lockedCount, totalTopics }) => {
  const progressPercentage = (user.xp / user.nextLevelXP) * 100;
  const [preview, setPreview] = useState<string | null>(user.profileImage || user.avatar || null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload to backend
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://dsa-lpr.onrender.com/api/users/upload-profile-image', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      } as any); // TS workaround for fetch + FormData
      const data = await response.json();
      if (data.imageUrl && onProfileImageChange) {
        onProfileImageChange(data.imageUrl);
      }
    } catch (err) {
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const completedPercent = totalTopics && totalTopics > 0 ? Math.round(((completedCount ?? 0) / totalTopics) * 100) : 0;

  // User level logic based on completedCount
  const getUserLevel = (completed: number) => {
    if (completed >= 50) return { label: 'Master', color: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' };
    if (completed >= 40) return { label: 'Expert', color: 'bg-gradient-to-r from-blue-500 to-green-500 text-white' };
    if (completed >= 30) return { label: 'Proficient', color: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' };
    if (completed >= 20) return { label: 'Intermediate', color: 'bg-gradient-to-r from-green-400 to-blue-400 text-white' };
    if (completed >= 10) return { label: 'Learning', color: 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white' };
    return { label: 'Beginner', color: 'bg-gradient-to-r from-gray-400 to-gray-600 text-white' };
  };
  const userLevel = getUserLevel(completedCount ?? 0);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <div className="flex items-center space-x-2 mt-1">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow ${userLevel.color}`}>{userLevel.label} Level</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <Award className="w-6 h-6 text-green-500 mx-auto mb-1" />
          <div className="text-2xl font-bold text-green-600">{completedCount ?? 0}</div>
          <div className="text-xs text-gray-600">Completed Topics</div>
        </div>
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <TrendingUp className="w-6 h-6 text-blue-500 mx-auto mb-1" />
          <div className="text-2xl font-bold text-blue-600">{currentCount ?? 0}</div>
          <div className="text-xs text-gray-600">Current Topics</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <Target className="w-6 h-6 text-orange-500 mx-auto mb-1" />
          <div className="text-2xl font-bold text-orange-600">{recommendedCount ?? 0}</div>
          <div className="text-xs text-gray-600">Recommended Topics</div>
        </div>
        <div className="text-center p-3 bg-red-50 rounded-lg">
          <Zap className="w-6 h-6 text-red-500 mx-auto mb-1" />
          <div className="text-2xl font-bold text-red-600">{lockedCount ?? 0}</div>
          <div className="text-xs text-gray-600">Locked Topics</div>
        </div>
      </div>

      {/* Progress bar for completed topics */}
      <div className="space-y-2 mb-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Completed Topics Progress</span>
          <span className="font-medium">{completedPercent}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${completedPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
