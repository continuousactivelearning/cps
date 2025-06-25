// src/components/ProgressBar.tsx
import React from 'react';

type Props = {
  current: number;
  total: number;
};

const ProgressBar: React.FC<Props> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full mb-6">
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-500 h-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm mt-2 text-right text-gray-600">
        Question {current} of {total}
      </p>
    </div>
  );
};

export default ProgressBar;
