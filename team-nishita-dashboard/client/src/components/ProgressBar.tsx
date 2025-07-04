import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ProgressBarProps {
  progress: number; // 0-100
  size?: 'sm' | 'md' | 'lg';
  showPercentage?: boolean;
  animated?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'gradient';
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  size = 'md', 
  showPercentage = false, 
  animated = true,
  color = 'blue'
}) => {
  const { darkMode } = useTheme();
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayProgress(progress);
    }
  }, [progress, animated]);

  // Size configurations
  const sizeConfig = {
    sm: { height: '8px', fontSize: '12px' },
    md: { height: '18px', fontSize: '14px' },
    lg: { height: '24px', fontSize: '16px' }
  };

  const config = sizeConfig[size];

  // Color configurations
  const getColors = () => {
    const colors = {
      blue: {
        light: { bg: '#e3f0ff', fill: '#4f8cff', border: '#b3d1ff' },
        dark: { bg: '#1e3a8a', fill: '#7f9cf5', border: '#2d3748' }
      },
      green: {
        light: { bg: '#ecfdf5', fill: '#10b981', border: '#a7f3d0' },
        dark: { bg: '#064e3b', fill: '#34d399', border: '#065f46' }
      },
      purple: {
        light: { bg: '#f3f4f6', fill: '#8b5cf6', border: '#c4b5fd' },
        dark: { bg: '#4c1d95', fill: '#a78bfa', border: '#5b21b6' }
      },
      orange: {
        light: { bg: '#fff7ed', fill: '#f97316', border: '#fed7aa' },
        dark: { bg: '#7c2d12', fill: '#fb923c', border: '#9a3412' }
      },
      red: {
        light: { bg: '#fef2f2', fill: '#ef4444', border: '#fca5a5' },
        dark: { bg: '#7f1d1d', fill: '#f87171', border: '#991b1b' }
      },
      gradient: {
        light: { bg: '#e3f0ff', fill: 'linear-gradient(90deg, #4f8cff 0%, #7f9cf5 100%)', border: '#b3d1ff' },
        dark: { bg: '#1e3a8a', fill: 'linear-gradient(90deg, #7f9cf5 0%, #a78bfa 100%)', border: '#2d3748' }
      }
    };

    return darkMode ? colors[color].dark : colors[color].light;
  };

  const colors = getColors();

  // Progress color logic for dynamic colors
  const getProgressColor = () => {
    if (color !== 'gradient') {
      if (progress >= 100) return '#10b981'; // Green for completion
      if (progress >= 80) return '#10b981'; // Green
      if (progress >= 60) return '#f59e0b'; // Yellow
      if (progress >= 40) return '#f97316'; // Orange
      return '#ef4444'; // Red
    }
    return colors.fill;
  };

  const finalFillColor = color === 'gradient' ? colors.fill : getProgressColor();

  return (
    <div className="relative">
      <div
        style={{
          width: '100%',
          height: config.height,
          background: colors.bg,
          borderRadius: '9px',
          overflow: 'hidden',
          boxShadow: darkMode
            ? '0 1px 4px rgba(0,0,0,0.4)'
            : '0 1px 4px rgba(79,140,255,0.08)',
          border: `1px solid ${colors.border}`,
          position: 'relative'
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${Math.min(displayProgress, 100)}%`,
            background: finalFillColor,
            transition: animated ? 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            borderRadius: '9px 0 0 9px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated shine effect */}
          {animated && displayProgress > 0 && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                animation: 'shine 2s infinite'
              }}
            />
          )}
          
          {/* Progress pattern overlay */}
          {displayProgress > 0 && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
                opacity: 0.3
              }}
            />
          )}
        </div>
      </div>
      
      {/* Percentage display */}
      {showPercentage && (
        <div
          style={{
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: config.fontSize,
            fontWeight: '600',
            color: darkMode ? '#e5e7eb' : '#374151',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}
        >
          {Math.round(progress)}%
        </div>
      )}

      {/* CSS for shine animation */}
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default ProgressBar; 