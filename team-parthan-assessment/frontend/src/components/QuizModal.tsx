import React from 'react';
import { X, Timer } from 'lucide-react';
import type { QuizState } from '../interface/types';

interface QuizModalProps {
  quiz: QuizState;
  onAnswer: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onClose: () => void;
  title: string;
}

const QuizModal: React.FC<QuizModalProps> = ({
  quiz,
  onAnswer,
  onNext,
  onPrevious,
  onClose,
  title
}) => {
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const currentQuestion = quiz.questions[quiz.currentQuestionIndex];
  if (!currentQuestion) return null;
  

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Quiz Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg md:text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-600 mt-1">
              Question {quiz.currentQuestionIndex + 1} of {quiz.questions.length}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Timer */}
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              quiz.timeRemaining <= 60 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
            }`}>
              <Timer className="w-5 h-5" />
              <span className="font-mono font-semibold text-lg">
                {formatTime(quiz.timeRemaining)}
              </span>
            </div>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${((quiz.currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Progress</span>
              <span>{Math.round(((quiz.currentQuestionIndex + 1) / quiz.questions.length) * 100)}% Complete</span>
            </div>
          </div>

          {/* Question */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 leading-relaxed">
              {currentQuestion.question}
            </h3>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onAnswer(index)}
                  className={`w-full p-6 text-left rounded-xl border-2 transition-all duration-200 text-lg transform hover:scale-[1.01] ${
                    quiz.userAnswers[quiz.currentQuestionIndex] === index
                      ? 'border-indigo-500 bg-indigo-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      quiz.userAnswers[quiz.currentQuestionIndex] === index
                        ? 'border-indigo-500 bg-indigo-500'
                        : 'border-gray-300'
                    }`}>
                      {quiz.userAnswers[quiz.currentQuestionIndex] === index && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="flex-1">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 md:px-8 py-6">
        <div className="max-w-4xl mx-auto flex justify-between">
          <button
            onClick={onPrevious}
            disabled={quiz.currentQuestionIndex === 0}
            className="bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 px-8 py-3 rounded-xl font-medium transition-colors text-lg"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            disabled={quiz.userAnswers[quiz.currentQuestionIndex] === undefined}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white px-8 py-3 rounded-xl font-medium transition-colors text-lg"
          >
            {quiz.currentQuestionIndex === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;