import React, { useState, useEffect } from 'react';
import { ProgressData } from '../types';

interface ProgressProps {
  data: ProgressData[];
}

interface DifficultyProgress {
  beginner: {
    average: number;
    highest: number;
    least: number;
    count: number;
  };
  intermediate: {
    average: number;
    highest: number;
    least: number;
    count: number;
  };
  advanced: {
    average: number;
    highest: number;
    least: number;
    count: number;
  };
}

export const Progress: React.FC<ProgressProps> = ({ data }) => {
  const [difficultyProgress, setDifficultyProgress] = useState<DifficultyProgress>({
    beginner: { average: 0, highest: 0, least: 0, count: 0 },
    intermediate: { average: 0, highest: 0, least: 0, count: 0 },
    advanced: { average: 0, highest: 0, least: 0, count: 0 }
  });

  useEffect(() => {
    if (data.length > 0) {
      // Use actual difficulty levels from completed topics data
      const beginnerProgress = data.filter(item => 
        item.difficulty?.toLowerCase() === 'beginner'
      );
      
      const intermediateProgress = data.filter(item => 
        item.difficulty?.toLowerCase() === 'intermediate'
      );
      
      const advancedProgress = data.filter(item => 
        item.difficulty?.toLowerCase() === 'advanced'
      );

      // Calculate stats for each difficulty level using actual user scores
      const calculateStats = (progressData: ProgressData[]) => {
        if (progressData.length === 0) return { average: 0, highest: 0, least: 0, count: 0 };
        
        const scores = progressData.map(item => item.score || 0);
        return {
          average: Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length),
          highest: Math.max(...scores),
          least: Math.min(...scores),
          count: progressData.length
        };
      };

      setDifficultyProgress({
        beginner: calculateStats(beginnerProgress),
        intermediate: calculateStats(intermediateProgress),
        advanced: calculateStats(advancedProgress)
      });
    } else {
      // No completed topics yet
      setDifficultyProgress({
        beginner: { average: 0, highest: 0, least: 0, count: 0 },
        intermediate: { average: 0, highest: 0, least: 0, count: 0 },
        advanced: { average: 0, highest: 0, least: 0, count: 0 }
      });
    }
  }, [data]);

  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4">No progress yet</h3>
        <p className="mb-6 text-gray-600">You haven't started any topics yet. Start learning to see your progress here!</p>
        
      </div>
    );
  }

  // Enhanced ProgressBar with attractive gradients
  const ProgressBar = ({ value, max = 100, color = "blue", label }: { value: number; max?: number; color?: string; label: string }) => {
    let gradient = '';
    if (label === 'Average Score') {
      gradient = 'bg-gradient-to-r from-sky-400 via-sky-300 to-sky-600';
    } else {
      switch (color) {
        case 'green':
          gradient = 'bg-gradient-to-r from-green-400 via-green-300 to-green-500';
          break;
        case 'orange':
          gradient = 'bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500';
          break;
        case 'red':
          gradient = 'bg-gradient-to-r from-red-400 via-pink-400 to-red-600';
          break;
        case 'purple':
          gradient = 'bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600';
          break;
        default:
          gradient = 'bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600';
      }
    }
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-bold text-gray-900">{value}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className={`h-3 rounded-full transition-all duration-300 ${gradient}`}
            style={{ width: `${Math.min((value / max) * 100, 100)}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const DifficultySection = ({ 
    title, 
    stats, 
    color, 
    icon 
  }: { 
    title: string; 
    stats: { average: number; highest: number; least: number; count: number }; 
    color: string; 
    icon: string;
  }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <span className="ml-auto text-sm text-gray-500">{stats.count} topics</span>
      </div>
      
      {stats.count > 0 ? (
        <div className="space-y-3">
          <ProgressBar value={stats.highest} color="green" label="Highest Score" />
          <ProgressBar value={stats.average} color={color} label="Average Score" />
          <ProgressBar value={stats.least} color="orange" label="Least Score" />
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">No topics completed in this level yet</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Difficulty-based Progress */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-6">Progress by Difficulty Level</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <DifficultySection 
            title="Beginner" 
            stats={difficultyProgress.beginner} 
            color="green" 
            icon="🌱"
          />
          <DifficultySection 
            title="Intermediate" 
            stats={difficultyProgress.intermediate} 
            color="orange" 
            icon="🚀"
          />
          <DifficultySection 
            title="Advanced" 
            stats={difficultyProgress.advanced} 
            color="red" 
            icon="⚡"
          />
        </div>
      </div>
    </div>
  );
};
