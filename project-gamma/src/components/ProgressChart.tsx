import React from 'react';
import { ProgressData } from '../types';
import { TrendingUp, BarChart3, Calendar } from 'lucide-react';

interface ProgressChartProps {
  data: ProgressData[];
}

export const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  const maxProblems = Math.max(...data.map(d => d.problemsSolved));
  const avgAccuracy = Math.round(data.reduce((acc, d) => acc + d.accuracy, 0) / data.length);
  const totalProblems = data.reduce((acc, d) => acc + d.problemsSolved, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Learning Progress</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Last 7 days</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
          <BarChart3 className="w-6 h-6 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600">{totalProblems}</div>
          <div className="text-sm text-gray-600">Problems Solved</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
          <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600">{avgAccuracy}%</div>
          <div className="text-sm text-gray-600">Avg Accuracy</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
          <Calendar className="w-6 h-6 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-600">{data.length}</div>
          <div className="text-sm text-gray-600">Active Days</div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">Daily Activity</h4>
        <div className="space-y-3">
          {data.map((day, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-20 text-sm text-gray-600">
                {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              <div className="flex-1 flex items-center space-x-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(day.problemsSolved / maxProblems) * 100}%` }}
                  ></div>
                </div>
                <div className="text-sm font-medium text-gray-700 w-12">
                  {day.problemsSolved}
                </div>
                <div className="text-sm text-gray-500 w-12">
                  {day.accuracy}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};