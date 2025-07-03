import React from 'react';
import { Topic } from '../types';

interface ChartProps {
  data: Topic[];
}

export const BarChart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div className="h-64 flex items-end space-x-2">
      {data.map(topic => (
        <div key={topic.name} className="flex-1 flex flex-col items-center">
          <div 
            className="w-full bg-blue-500 rounded-t"
            style={{ height: `${topic.progress || 0}%` }}
          ></div>
          <div className="mt-2 text-xs text-gray-600 text-center">
            {topic.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export const LineChart: React.FC<ChartProps> = ({ data }) => {
  const points = data.map((topic, index) => ({
    x: index,
    y: topic.progress || 0
  }));

  return (
    <div className="h-64 relative">
      <svg className="w-full h-full">
        <polyline
          points={points.map(p => `${(p.x / (points.length - 1)) * 100},${100 - p.y}`).join(' ')}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        {points.map((point, index) => (
          <circle
            key={index}
            cx={`${(point.x / (points.length - 1)) * 100}%`}
            cy={`${100 - point.y}%`}
            r="4"
            fill="#3B82F6"
          />
        ))}
      </svg>
    </div>
  );
};

export const PieChart: React.FC<ChartProps> = ({ data }) => {
  const total = data.reduce((sum, topic) => sum + (topic.progress || 0), 0);
  let currentAngle = 0;

  return (
    <div className="h-64 relative">
      <svg className="w-full h-full" viewBox="-1 -1 2 2">
        {data.map((topic, index) => {
          const percentage = ((topic.progress || 0) / total) * 100;
          const angle = (percentage / 100) * 360;
          const startAngle = currentAngle;
          currentAngle += angle;

          const startX = Math.cos((startAngle - 90) * Math.PI / 180);
          const startY = Math.sin((startAngle - 90) * Math.PI / 180);
          const endX = Math.cos((currentAngle - 90) * Math.PI / 180);
          const endY = Math.sin((currentAngle - 90) * Math.PI / 180);

          const largeArcFlag = angle > 180 ? 1 : 0;

          const pathData = [
            `M ${startX} ${startY}`,
            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
            'L 0 0'
          ].join(' ');

          return (
            <path
              key={topic.name}
              d={pathData}
              fill={`hsl(${(index * 360) / data.length}, 70%, 50%)`}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {Math.round((data.reduce((sum, topic) => sum + (topic.progress || 0), 0) / data.length))}%
          </div>
          <div className="text-sm text-gray-600">Average Progress</div>
        </div>
      </div>
    </div>
  );
}; 