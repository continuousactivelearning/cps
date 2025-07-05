import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface CircularProgressProps {
  progress: number; // 0-100
  size?: number;
  strokeWidth?: number;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | string;
  showPercentage?: boolean;
  animated?: boolean;
  label?: string;
  trackColor?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  size = 120,
  strokeWidth = 8,
  color = 'blue',
  showPercentage = true,
  // animated = true,
  label,
  trackColor
}) => {
  const { darkMode } = useTheme();

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const getProgressColor = () => {
    if (progress >= 80) return '#10B981'; // Green
    if (progress >= 60) return '#F59E0B'; // Yellow
    if (progress >= 40) return '#F97316'; // Orange
    return '#EF4444'; // Red
  };

  const finalColor = typeof color === 'string' && !['blue', 'green', 'purple', 'orange', 'red'].includes(color) ? color : getProgressColor();
  const finalTrackColor = trackColor || (darkMode ? '#374151' : '#e5e7eb');

  return (
    <div className="inline-flex relative justify-center items-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={finalTrackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={finalColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
          }}
        />
      </svg>

      {/* Center content */}
      <div className="flex absolute inset-0 flex-col justify-center items-center">
        {showPercentage && (
          <div className="text-center">
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {Math.round(progress)}%
            </div>
            {label && (
              <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {label}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CircularProgress; 
