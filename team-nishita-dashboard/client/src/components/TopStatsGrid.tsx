import React from 'react';
import { Flame, Trophy, CalendarCheck, Star, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

interface TopStatsProps {
  currentStreak: number;
  highestStreak: number;
  totalActiveDays: number;
  totalPoints: number;
  level: string;
}

const stats = [
  {
    label: 'Current Streak',
    icon: <Flame className="text-orange-500" size={20} />, // 🔥
    key: 'currentStreak',
    unit: 'days'
  },
  {
    label: 'Highest Streak',
    icon: <Trophy className="text-yellow-500" size={20} />, // 🏁
    key: 'highestStreak',
    unit: 'days'
  },
  {
    label: 'Days Active',
    icon: <CalendarCheck className="text-blue-500" size={20} />, // 📅
    key: 'totalActiveDays',
    unit: 'days'
  },
  {
    label: 'Total Points',
    icon: <Star className="text-green-500" size={20} />, // 🎯
    key: 'totalPoints',
    unit: 'pts'
  },
  {
    label: 'Level',
    icon: <BadgeCheck className="text-purple-500" size={20} />, // 🧩
    key: 'level',
    unit: ''
  }
];

const TopStatsGrid: React.FC<TopStatsProps> = ({
  currentStreak,
  highestStreak,
  totalActiveDays,
  totalPoints,
  level
}) => {
  const { darkMode } = useTheme();
  const dataMap = {
    currentStreak,
    highestStreak,
    totalActiveDays,
    totalPoints,
    level
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {stats.map((stat) => (
        <div
          key={stat.key}
          className={`soft-orange-card ${darkMode ? 'bg-gray-800 border-gray-700' : ''} p-6 m-2 text-center flex flex-col items-center justify-center transition-all duration-300`}
        >
          <div className="flex items-center gap-2 text-sm mb-1">
            {stat.icon}
            <span>{stat.label}</span>
          </div>
          <p className="text-2xl font-bold mt-2">
            {dataMap[stat.key as keyof typeof dataMap] || 0} {stat.unit}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default TopStatsGrid;
