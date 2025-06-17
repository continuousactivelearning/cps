import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom' ;
import type { Question } from '../types/question';

interface LocationState {
  questions: Question[];
  answers: { [key: string]: string };
}

const ReviewPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions, answers } = location.state as LocationState;

  const getOptionStyle = (question: Question, option: string) => {
    const isCorrect = option === question.correctAnswer;
    const isSelected = option === answers[question.id];

    if (isCorrect) return 'bg-green-100 border border-green-600';
    if (isSelected && !isCorrect) return 'bg-red-100 border border-red-600';
    return 'bg-white border';
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Quiz Review</h1>
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6 p-4 border rounded-lg shadow">
          <h2 className="font-semibold mb-2">{index + 1}. {q.question}</h2>
          <div className="space-y-2">
            {q.options.map((opt) => (
              <div
                key={opt}
                className={`p-2 rounded ${getOptionStyle(q, opt)}`}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={() => navigate('/')}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Quiz
      </button>
    </div>
  );
};

export default ReviewPage;
