import React from 'react';
import BadgeCard from './BadgeCard';

interface BadgeGridProps {
  unlocked: {
    name: string;
    description: string;
    imageUrl: string;
    condition: {
      field: string;
      operator: string;
      value: number;
    };
  }[];
  locked: {
    name: string;
    description: string;
    imageUrl: string;
    condition: {
      field: string;
      operator: string;
      value: number;
    };
  }[];
}

const BadgesGrid: React.FC<BadgeGridProps> = ({ unlocked, locked }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {unlocked.map((badge, index) => (
        <BadgeCard
          key={`unlocked-${index}`}
          badge={{ ...badge, isLocked: false }}
          isNew={false}
        />
      ))}
      {locked.map((badge, index) => (
        <BadgeCard
          key={`locked-${index}`}
          badge={{ ...badge, isLocked: true }}
          isNew={false}
        />
      ))}
    </div>
  );
};

export default BadgesGrid;
