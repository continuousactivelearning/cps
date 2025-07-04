import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import Confetti from 'react-confetti';
import * as Tooltip from '@radix-ui/react-tooltip';

interface BadgeCardProps {
  badge: {
    name: string;
    description: string;
    imageUrl: string;
    isLocked: boolean;
    condition: {
      field: string;
      operator: string;
      value: number;
    };
  };
  isNew?: boolean;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ badge, isNew = false }) => {
  const [showConfetti, setShowConfetti] = useState(isNew);

  useEffect(() => {
    if (isNew) {
      const timeout = setTimeout(() => setShowConfetti(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [isNew]);

  const getConditionText = () => {
    const fieldMap: Record<string, string> = {
      loginStreak: 'Log in for',
      quizzesTaken: 'Complete',
      lessonsCompleted: 'Finish',
      studyTime: 'Study for'
    };
    const suffixMap: Record<string, string> = {
      loginStreak: 'consecutive days',
      quizzesTaken: 'quizzes',
      lessonsCompleted: 'lessons',
      studyTime: 'minutes'
    };

    return `${fieldMap[badge.condition.field] || 'Achieve'} ${badge.condition.value} ${
      suffixMap[badge.condition.field] || badge.condition.field
    }`;
  };

  return (
    <div className="relative w-full flex justify-center">
      {showConfetti && <Confetti numberOfPieces={100} recycle={false} className="absolute z-50" />}

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.div
            initial={{ scale: isNew ? 0.8 : 1 }}
            animate={{ scale: 1, rotate: isNew ? 360 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="group relative flex flex-col items-center"
          >
            <div className="relative">
              <img
                src={badge.imageUrl}
                alt={badge.name}
                className={`w-16 h-16 rounded-full shadow-lg transition-all duration-300 ${
                  badge.isLocked ? 'grayscale opacity-40' : ''
                }`}
              />
              {badge.isLocked && (
                <Lock className="absolute inset-0 m-auto w-6 h-6 text-gray-600" />
              )}
            </div>
            <p className="mt-2 text-center text-sm font-medium text-gray-700 group-hover:text-blue-600">
              {badge.name}
            </p>
          </motion.div>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            align="center"
            className="z-40 max-w-xs p-4 bg-white rounded-xl shadow-lg border border-gray-200 text-sm text-gray-800 animate-fade-in"
          >
            <div className="font-semibold text-blue-600 mb-1">{badge.name}</div>
            
            <div className="mt-1 text-xs text-gray-500 italic">How to Earn: {getConditionText()}</div>
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </div>
  );
};

export default BadgeCard;
