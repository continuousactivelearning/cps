// components/QuestionCard.tsx
import React from 'react';
import type { Question } from '../types/question';

type Props = {
  question: Question;
  selectedOption: string | null;
  onSelect: (option: string) => void;
};

const QuestionCard: React.FC<Props> = ({ question, selectedOption, onSelect }) => {
  return (
    <div className=''>
      <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
      <div className="space-y-2">
        {question.options.map(option => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`block w-full text-left px-4 py-2 rounded-md border transition ${
              selectedOption === option
                ? 'bg-blue-100 border-blue-500'
                : 'bg-white border-gray-300 hover:bg-gray-100'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
