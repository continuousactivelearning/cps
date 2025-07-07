import React, { useState } from 'react';
// import ProgressBar from './ProgressBar';
import { useTheme } from '../contexts/ThemeContext';

interface ProgressTrackerProps {
  onProgressUpdate?: () => void;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ onProgressUpdate }) => {
  const { darkMode } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progressSummary, setProgressSummary] = useState({
    totalLessonsCompleted: 25,
    totalQuizzesTaken: 12,
    totalStudyTime: 180,
    totalPoints: 450
  });

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
    setLoading(true);

    setTimeout(() => {
      setProgressSummary(prev => ({
        ...prev,
        totalLessonsCompleted: prev.totalLessonsCompleted + formData.lessonsCompleted,
        totalQuizzesTaken: prev.totalQuizzesTaken + formData.quizzesTaken,
        totalStudyTime: prev.totalStudyTime + formData.studyTime,
        totalPoints: prev.totalPoints + formData.pointsEarned
      }));

      setFormData({
        lessonsCompleted: 0,
        quizzesTaken: 0,
        studyTime: 0,
        pointsEarned: 0,
        isCheckedIn: false
      });

      setLoading(false);
      onProgressUpdate?.();
    }, 1000);
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className={`rounded-lg shadow-lg p-6 transition-all duration-300 ${darkMode ? 'dark-theme bg-gray-800' : 'bg-white'}`}>
      <h3 className={`text-lg font-semibold mb-4 transition-all duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>

        📝 Update Your Progress
      </h3>

      {error && (
        <div className="flex justify-between items-center p-3 mb-6 text-red-700 bg-red-100 rounded border border-red-400 dark:text-red-300 dark:bg-red-900">
          <span>{error}</span>
          <button
            onClick={() => setError(null)}
            className="ml-4 font-bold text-red-500 hover:text-red-700"
          >
            ×
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>

            <label className={`block text-sm font-medium mb-1 transition-all duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

              Lessons Completed
            </label>
            <input
              type="number"
              name="lessonsCompleted"
              value={formData.lessonsCompleted}
              onChange={handleInputChange}
              min="0"

              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}

            />
          </div>

          <div>

            <label className={`block text-sm font-medium mb-1 transition-all duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

              Quizzes Taken
            </label>
            <input
              type="number"
              name="quizzesTaken"
              value={formData.quizzesTaken}
              onChange={handleInputChange}
              min="0"

              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}

            />
          </div>

          <div>

            <label className={`block text-sm font-medium mb-1 transition-all duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

              Study Time (minutes)
            </label>
            <input
              type="number"
              name="studyTime"
              value={formData.studyTime}
              onChange={handleInputChange}
              min="0"

              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}

            />
          </div>

          <div>

            <label className={`block text-sm font-medium mb-1 transition-all duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

              Points Earned
            </label>
            <input
              type="number"
              name="pointsEarned"
              value={formData.pointsEarned}
              onChange={handleInputChange}
              min="0"

              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}

            />
          </div>
        </div>

        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            name="isCheckedIn"
            checked={formData.isCheckedIn}
            onChange={handleInputChange}
            className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />

          <label className={`ml-2 block text-sm transition-all duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

            Daily Check-in
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="py-3 px-4 mt-2 w-full font-medium text-white bg-blue-600 rounded-md transition duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:bg-blue-400"
        >
          {loading ? 'Updating...' : 'Update Progress'}
        </button>
      </form>

      {/* Quick Stats Display */}
      {progressSummary && (

        <div className={`mt-6 pt-6 border-t transition-all duration-300 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h4 className={`text-sm font-medium mb-3 transition-all duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

            Today's Summary
          </h4>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>

              <div className={`text-lg font-bold transition-all duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>

                {progressSummary.totalLessonsCompleted}
              </div>
              <div className={`text-xs transition-all duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Lessons</div>
            </div>
            <div>

              <div className={`text-lg font-bold transition-all duration-300 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>

                {progressSummary.totalQuizzesTaken}
              </div>
              <div className={`text-xs transition-all duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Quizzes</div>
            </div>
            <div>

              <div className={`text-lg font-bold transition-all duration-300 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>

                {formatTime(progressSummary.totalStudyTime)}
              </div>
              <div className={`text-xs transition-all duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Study Time</div>
            </div>
            <div>

              <div className={`text-lg font-bold transition-all duration-300 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>

                {progressSummary.totalPoints}
              </div>
              <div className={`text-xs transition-all duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Points</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;
