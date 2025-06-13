import React, { useState, useEffect } from 'react';
import { Topic, ExamQuestion } from '../types';
import { mockExamQuestions } from '../data/mockData';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Award,
  TrendingUp,
  RotateCcw
} from 'lucide-react';

interface ExamPageProps {
  topic: Topic;
  onBack: () => void;
  onComplete: (score: number) => void;
}

export const ExamPage: React.FC<ExamPageProps> = ({ 
  topic, 
  onBack, 
  onComplete 
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = mockExamQuestions; // In real app, filter by topic

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleSubmitExam();
    }
  }, [timeLeft, showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitExam = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    setScore(finalScore);
    setShowResults(true);
    onComplete(finalScore);
  };

  const handleRetakeExam = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setTimeLeft(1800);
    setShowResults(false);
    setScore(0);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </button>
              <h1 className="text-xl font-bold text-gray-900">Exam Results - {topic.name}</h1>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 text-center">
            <div className="mb-6">
              {score >= 80 ? (
                <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              ) : score >= 60 ? (
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              ) : (
                <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              )}
              
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {score >= 80 ? 'Excellent!' : score >= 60 ? 'Good Job!' : 'Keep Practicing!'}
              </h2>
              <p className="text-gray-600">
                You scored {score}% on the {topic.name} exam
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">{score}%</div>
                <div className="text-sm text-gray-600">Final Score</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">
                  {selectedAnswers.filter((answer, index) => answer === questions[index]?.correctAnswer).length}
                </div>
                <div className="text-sm text-gray-600">Correct Answers</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Clock className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">
                  {formatTime(1800 - timeLeft)}
                </div>
                <div className="text-sm text-gray-600">Time Taken</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Question Review</h3>
              <div className="space-y-3">
                {questions.map((question, index) => {
                  const isCorrect = selectedAnswers[index] === question.correctAnswer;
                  const wasAnswered = selectedAnswers[index] !== undefined;
                  
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">Question {index + 1}</span>
                      <div className="flex items-center space-x-2">
                        {!wasAnswered ? (
                          <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">Not Answered</span>
                        ) : isCorrect ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-8">
              <button 
                onClick={handleRetakeExam}
                className="flex items-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Exam</span>
              </button>
              <button 
                onClick={onBack}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Exit Exam</span>
            </button>
            <h1 className="text-xl font-bold text-gray-900">{topic.name} Exam</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-orange-600">
              <Clock className="w-5 h-5" />
              <span className="font-medium">{formatTime(timeLeft)}</span>
            </div>
            <div className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          {/* Progress Bar */}
          <div className="p-6 border-b border-gray-200">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="p-8">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-gray-500">Question {currentQuestion + 1}</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  currentQ.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                  currentQ.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {currentQ.difficulty}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{currentQ.question}</h2>
            </div>

            <div className="space-y-3 mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswers[currentQuestion] === index && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-gray-900">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button 
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <div className="flex space-x-3">
                {currentQuestion === questions.length - 1 ? (
                  <button 
                    onClick={handleSubmitExam}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Submit Exam
                  </button>
                ) : (
                  <button 
                    onClick={handleNextQuestion}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Question Navigator */}
        <div className="mt-6 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Question Navigator</h3>
          <div className="grid grid-cols-10 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                  index === currentQuestion
                    ? 'bg-blue-600 text-white'
                    : selectedAnswers[index] !== undefined
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};