import React, { useState } from 'react';
import { useProgressStore } from '../store/zustand/progressStore';
import ProgressBar from './ProgressBar';
import { useTheme } from '../contexts/ThemeContext';

interface ProgressTrackerProps {
  onProgressUpdate?: () => void;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ onProgressUpdate }) => {
  const { darkMode } = useTheme();
  const { 
    progressSummary, 
    updateUserProgress, 
    loading, 
    error, 
    resetError 
  } = useProgressStore();

  const [formData, setFormData] = useState({
    lessonsCompleted: 0,
    quizzesTaken: 0,
    studyTime: 0,
    pointsEarned: 0,
    isCheckedIn: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : parseInt(value) || 0
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUserProgress(formData);
    setFormData({
      lessonsCompleted: 0,
      quizzesTaken: 0,
      studyTime: 0,
      pointsEarned: 0,
      isCheckedIn: false
    });
    onProgressUpdate?.();
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        📝 Update Your Progress
      </h3>

      {error && (
        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 rounded">
          {error}
          <button 
            onClick={resetError}
            className="ml-2 text-red-500 hover:text-red-700"
          >
            ×
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Lessons Completed
            </label>
            <input
              type="number"
              name="lessonsCompleted"
              value={formData.lessonsCompleted}
              onChange={handleInputChange}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Quizzes Taken
            </label>
            <input
              type="number"
              name="quizzesTaken"
              value={formData.quizzesTaken}
              onChange={handleInputChange}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Study Time (minutes)
            </label>
            <input
              type="number"
              name="studyTime"
              value={formData.studyTime}
              onChange={handleInputChange}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Points Earned
            </label>
            <input
              type="number"
              name="pointsEarned"
              value={formData.pointsEarned}
              onChange={handleInputChange}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="isCheckedIn"
            checked={formData.isCheckedIn}
            onChange={handleInputChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            Daily Check-in
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {loading ? 'Updating...' : 'Update Progress'}
        </button>
      </form>

      {/* Quick Stats Display */}
      {progressSummary && (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Today's Summary
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {progressSummary.totalLessonsCompleted}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Lessons</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                {progressSummary.totalQuizzesTaken}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Quizzes</div>
            </div>
            <div>
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {formatTime(progressSummary.totalStudyTime)}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Study Time</div>
            </div>
            <div>
              <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                {progressSummary.totalPoints}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Points</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker; 