import React from 'react';
import { ProgressData } from '../types';
import { TrendingUp, BarChart3, ArrowDown } from 'lucide-react';

interface ProgressChartProps {
  data: ProgressData[];
}

export const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  // Only consider completed topics
  const completed = data.filter(d => d.completed);
  const highest = completed.length > 0 ? Math.max(...completed.map(d => d.score)) : 0;
  const average = completed.length > 0 ? Math.round(completed.reduce((acc, d) => acc + d.score, 0) / completed.length) : 0;
  const lowest = completed.length > 0 ? Math.min(...completed.map(d => d.score)) : 0;

  // Badge counting logic
  const badgeCounts = {
    diamond: 0,
    platinum: 0,
    gold: 0,
    silver: 0,
    copper: 0,
    brass: 0,
  };
  data.forEach(item => {
    const score = item.score || 0;
    if (score === 0) return; // No badge for zero score
    if (score === 100) badgeCounts.diamond++;
    else if (score >= 90) badgeCounts.platinum++;
    else if (score >= 80) badgeCounts.gold++;
    else if (score >= 70) badgeCounts.silver++;
    else if (score >= 60) badgeCounts.copper++;
    else badgeCounts.brass++;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Learning Progress</h3>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
          <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600">{highest}%</div>
          <div className="text-sm text-gray-600">Highest Score</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
          <BarChart3 className="w-6 h-6 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600">{average}%</div>
          <div className="text-sm text-gray-600">Average Score</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
          <ArrowDown className="w-6 h-6 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-600">{lowest}%</div>
          <div className="text-sm text-gray-600">Least Score</div>
        </div>
      </div>
      {/* Badge Count Summary */}
      <div className="flex flex-wrap items-center justify-center gap-4 bg-white rounded-xl shadow-sm p-4 border border-gray-100 mb-4">
        <div className="flex flex-col items-center mx-2">
          <span className="text-2xl">💎</span>
          <span className="font-bold">{badgeCounts.diamond}</span>
          <span className="text-xs text-gray-500">Diamond</span>
        </div>
        <div className="flex flex-col items-center mx-2">
          <span className="text-2xl">🏆</span>
          <span className="font-bold">{badgeCounts.platinum}</span>
          <span className="text-xs text-gray-500">Platinum</span>
        </div>
        <div className="flex flex-col items-center mx-2">
          <span className="text-2xl">🥇</span>
          <span className="font-bold">{badgeCounts.gold}</span>
          <span className="text-xs text-gray-500">Gold</span>
        </div>
        <div className="flex flex-col items-center mx-2">
          <span className="text-2xl">🥈</span>
          <span className="font-bold">{badgeCounts.silver}</span>
          <span className="text-xs text-gray-500">Silver</span>
        </div>
        <div className="flex flex-col items-center mx-2">
          <span className="text-2xl">🥉</span>
          <span className="font-bold">{badgeCounts.copper}</span>
          <span className="text-xs text-gray-500">Copper</span>
        </div>
        <div className="flex flex-col items-center mx-2">
          <span className="text-2xl">🏅</span>
          <span className="font-bold">{badgeCounts.brass}</span>
          <span className="text-xs text-gray-500">Brass</span>
        </div>
      </div>
      {/* End Badge Count Summary */}
    </div>
  );
};
