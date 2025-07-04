import React from 'react';
import { Flame, Trophy, CalendarCheck, Star, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

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
          className="bg-white rounded-2xl shadow-lg p-4 text-center flex flex-col items-center justify-center hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            {stat.icon}
            <span>{stat.label}</span>
          </div>
          <p className="text-xl font-bold text-gray-800">
            {dataMap[stat.key as keyof typeof dataMap] || 0} {stat.unit}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default TopStatsGrid;
