//developed by :@AnandJangid
/*import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, Trophy, RotateCcw, Timer, Shield, AlertTriangle, BookOpen, Eye } from 'lucide-react';
import api from '../services/api';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

interface QuizData {
  questions: Question[];
}

const QuizPage: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cheatingDetected, setCheatingDetected] = useState(false);
  const [warningCount, setWarningCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Anti-cheating measures
  useEffect(() => {
    if (!quizStarted) return;

    const handleVisibilityChange = () => {
      if (document.hidden && !showResults) {
        setWarningCount(prev => {
          const newCount = prev + 1;
          if (newCount >= 3) {
            setCheatingDetected(true);
            handleSubmitQuiz([], true); // Auto-submit with cheating flag
          }
          return newCount;
        });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent common cheating shortcuts
      if (
        e.key === 'F12' || // Dev tools
        (e.ctrlKey && e.shiftKey && e.key === 'I') || // Dev tools
        (e.ctrlKey && e.shiftKey && e.key === 'C') || // Dev tools
        (e.ctrlKey && e.key === 'u') || // View source
        (e.ctrlKey && e.key === 'c') || // Copy
        (e.ctrlKey && e.key === 'v') || // Paste
        (e.ctrlKey && e.key === 'a') || // Select all
        e.key === 'PrintScreen' || // Screenshot
        (e.altKey && e.key === 'Tab') // Alt+Tab
      ) {
        e.preventDefault();
        setWarningCount(prev => prev + 1);
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setWarningCount(prev => prev + 1);
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!showResults) {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your quiz progress will be lost.';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [quizStarted, showResults]);

  // Timer effect
  useEffect(() => {
    if (quizStarted && timeLeft > 0 && !showResults && !cheatingDetected) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResults) {
      handleSubmitQuiz();
    }
  }, [timeLeft, quizStarted, showResults, cheatingDetected]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const fetchQuizData = async () => {
    setLoading(true);
    setError('');
    
    try {
      const token = localStorage.getItem('token');
      const response = await api.get(`/api/question/generate/${encodeURIComponent(topic!)}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setQuizData(response.data);
    } catch (err: any) {
      console.error('Error fetching quiz:', err);
      setError('Failed to generate quiz. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null && quizData) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);
      setSelectedAnswer(null);

      if (currentQuestion < quizData.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        handleSubmitQuiz(newAnswers);
      }
    }
  };

  const handleSubmitQuiz = async (finalAnswers = answers, cheating = false) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('token');
      const response = await api.post(`/api/question/submit/${encodeURIComponent(topic!)}`, {
        answers: finalAnswers,
        cheatingDetected: cheating || cheatingDetected
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setScore(response.data.score);
      setPassed(response.data.passed);
      setShowResults(true);
    } catch (err) {
      console.error('Error submitting quiz:', err);
      setError('Failed to submit quiz. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStartQuiz = async () => {
    await fetchQuizData();
    if (quizData || !error) {
      setQuizStarted(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResults(false);
    setShowEvaluation(false);
    setScore(0);
    setPassed(false);
    setTimeLeft(300);
    setQuizStarted(false);
    setQuizData(null);
    setCheatingDetected(false);
    setWarningCount(0);
    setError('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Generating Quiz</h2>
          <p className="text-gray-600">Creating personalized questions for {topic}...</p>
        </div>
      </div>
    );
  }

  if (error && !quizData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Dashboard</span>
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-6">
              <XCircle className="h-12 w-12 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Quiz Generation Failed</h1>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={handleRetakeQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (cheatingDetected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-red-200">
            <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-6">
              <Shield className="h-12 w-12 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-red-900 mb-4">Quiz Terminated</h1>
            <p className="text-red-700 mb-6">
              Suspicious activity detected. The quiz has been automatically submitted.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-red-800 text-sm">
                Detected activities: Tab switching, keyboard shortcuts, or right-click attempts.
              </p>
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Dashboard</span>
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
              <Trophy className="h-12 w-12 text-blue-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {topic} Quiz
            </h1>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Quiz Instructions:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 10 AI-generated questions specific to {topic}</li>
                <li>• 5 minutes time limit</li>
                <li>• You need 7/10 correct answers to pass</li>
                <li>• Once started, you cannot pause the quiz</li>
                <li>• Tab switching or suspicious activity will terminate the quiz</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-2 text-amber-800">
                <Shield className="h-5 w-5" />
                <span className="font-semibold">Anti-Cheating Measures Active</span>
              </div>
              <p className="text-amber-700 text-sm mt-2">
                Screenshots, copying, and tab switching are monitored and will result in quiz termination.
              </p>
            </div>

            <button
              onClick={handleStartQuiz}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-lg"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showEvaluation && quizData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setShowEvaluation(false)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Results</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Quiz Evaluation</h1>
          </div>

          <div className="space-y-6">
            {quizData.questions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === question.correct;
              
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-2 rounded-full ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                      {isCorrect ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Question {index + 1}: {question.question}
                      </h3>
                      
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => {
                          const isUserAnswer = userAnswer === optionIndex;
                          const isCorrectAnswer = question.correct === optionIndex;
                          
                          let bgColor = 'bg-gray-50';
                          let textColor = 'text-gray-700';
                          let borderColor = 'border-gray-200';
                          
                          if (isCorrectAnswer) {
                            bgColor = 'bg-green-50';
                            textColor = 'text-green-800';
                            borderColor = 'border-green-300';
                          } else if (isUserAnswer && !isCorrect) {
                            bgColor = 'bg-red-50';
                            textColor = 'text-red-800';
                            borderColor = 'border-red-300';
                          }
                          
                          return (
                            <div
                              key={optionIndex}
                              className={`p-3 rounded-lg border-2 ${bgColor} ${borderColor}`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={`${textColor} font-medium`}>{option}</span>
                                <div className="flex items-center space-x-2">
                                  {isUserAnswer && (
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                      Your Answer
                                    </span>
                                  )}
                                  {isCorrectAnswer && (
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                      Correct Answer
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className={`p-4 rounded-full w-fit mx-auto mb-6 ${passed ? 'bg-green-100' : 'bg-red-100'}`}>
              {passed ? (
                <Trophy className="h-12 w-12 text-green-600" />
              ) : (
                <XCircle className="h-12 w-12 text-red-600" />
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Quiz Complete!
            </h1>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Your Score:</span>
                <span className="text-2xl font-bold text-gray-900">
                  {score}/10
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Percentage:</span>
                <span className="text-xl font-semibold text-gray-900">
                  {Math.round((score / 10) * 100)}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Status:</span>
                <span className={`font-semibold ${passed ? 'text-green-600' : 'text-red-600'}`}>
                  {passed ? 'PASSED' : 'FAILED'}
                </span>
              </div>
            </div>

            <div className={`p-4 rounded-xl mb-8 ${passed ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <p className={`${passed ? 'text-green-800' : 'text-red-800'}`}>
                {passed 
                  ? `Congratulations! You've mastered ${topic} and can now proceed with topics that depend on it.`
                  : `You need to score at least 7/10 to pass. Review the material and try again.`
                }
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={() => setShowEvaluation(true)}
                className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                <Eye className="h-5 w-5" />
                <span>Evaluate Submission</span>
              </button>
              <button
                onClick={handleRetakeQuiz}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                <RotateCcw className="h-5 w-5" />
                <span>Retake Quiz</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!passed && (
                <button
                  onClick={() => navigate(`/learn/${encodeURIComponent(topic!)}`)}
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Learn {topic}</span>
                </button>
              )}
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!quizData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        /*{/* Header with warnings */
/*
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Timer className="h-5 w-5 text-orange-500" />
              <span className={`font-mono font-semibold ${timeLeft < 60 ? 'text-red-600' : 'text-gray-900'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            
            {warningCount > 0 && (
              <div className="flex items-center space-x-2 bg-red-100 px-3 py-2 rounded-full">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <span className="text-red-600 text-sm font-medium">
                  Warnings: {warningCount}/3
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */
/*<div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {quizData.questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(((currentQuestion + 1) / quizData.questions.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizData.questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */
/*
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {quizData.questions[currentQuestion].question}
          </h2>

          <div className="space-y-4 mb-8">
            {quizData.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 border-2 rounded-xl transition-all duration-200 ${
                  selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedAnswer === index && (
                      <CheckCircle className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <span className="text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null || isSubmitting}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                currentQuestion === quizData.questions.length - 1 ? 'Submit Quiz' : 'Next Question'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
*/
import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Trophy,
  RotateCcw,
  Timer,
  Shield,
  AlertTriangle,
  BookOpen,
  Eye,
} from "lucide-react";
import api, { getAssessmentEvaluation } from "../services/api";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

interface QuizData {
  questions: Question[];
}

const QuizPage: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  
  interface EvaluationData {
    questions: Question[];
    userAnswers: number[];
  }
  
  const [evaluationData, setEvaluationData] = useState<EvaluationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cheatingDetected, setCheatingDetected] = useState(false);
  const [warningCount, setWarningCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cleanup function to remove incomplete quiz sessions
  const cleanupQuizSession = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      await api.delete(`/api/question/cleanup/${encodeURIComponent(topic!)}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.error("Error cleaning up quiz session:", err);
    }
  }, [topic]);

  // Anti-cheating measures
  useEffect(() => {
    if (!quizStarted) return;

    const handleVisibilityChange = () => {
      if (document.hidden && !showResults) {
        setWarningCount((prev) => {
          const newCount = prev + 1;
          if (newCount >= 3) {
            setCheatingDetected(true);
            handleSubmitQuiz([], true); // Auto-submit with cheating flag
          }
          return newCount;
        });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent common cheating shortcuts
      if (
        e.key === "F12" || // Dev tools
        (e.ctrlKey && e.shiftKey && e.key === "I") || // Dev tools
        (e.ctrlKey && e.shiftKey && e.key === "C") || // Dev tools
        (e.ctrlKey && e.key === "u") || // View source
        (e.ctrlKey && e.key === "c") || // Copy
        (e.ctrlKey && e.key === "v") || // Paste
        (e.ctrlKey && e.key === "a") || // Select all
        e.key === "PrintScreen" || // Screenshot
        (e.altKey && e.key === "Tab") // Alt+Tab
      ) {
        e.preventDefault();
        setWarningCount((prev) => prev + 1);
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setWarningCount((prev) => prev + 1);
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!showResults) {
        e.preventDefault();
        e.returnValue =
          "Are you sure you want to leave? Your quiz progress will be lost.";
        cleanupQuizSession(); // Clean up on page unload
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [quizStarted, showResults, cleanupQuizSession]);

  // Timer effect
  useEffect(() => {
    if (quizStarted && timeLeft > 0 && !showResults && !cheatingDetected) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResults) {
      handleSubmitQuiz();
    }
  }, [timeLeft, quizStarted, showResults, cheatingDetected]);

  // Cleanup on component unmount or navigation
  useEffect(() => {
    return () => {
      if (!showResults) {
        cleanupQuizSession();
      }
    };
  }, [cleanupQuizSession, showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const fetchQuizData = async () => {
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      const response = await api.get(
        `/api/question/generate/${encodeURIComponent(topic!)}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setQuizData(response.data);
    } catch (err) {
      console.error("Error fetching quiz:", err);
      setError("Failed to generate quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchEvaluationData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await getAssessmentEvaluation(token!, topic!);
      setEvaluationData(response.data);
    } catch (err) {
      console.error('Error fetching evaluation data:', err);
      setError('Failed to load evaluation data.');
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null && quizData) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);
      setSelectedAnswer(null);

      if (currentQuestion < quizData.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        handleSubmitQuiz(newAnswers);
      }
    }
  };

  const handleSubmitQuiz = async (finalAnswers = answers, cheating = false) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("token");
      const response = await api.post(
        `/api/question/submit/${encodeURIComponent(topic!)}`,
        {
          answers: finalAnswers,
          cheatingDetected: cheating || cheatingDetected,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setScore(response.data.score);
      setPassed(response.data.passed);
      setShowResults(true);
    } catch (err) {
      console.error("Error submitting quiz:", err);
      setError("Failed to submit quiz. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStartQuiz = async () => {
    await fetchQuizData();
    if (quizData || !error) {
      setQuizStarted(true);
    }
  };

  const handleRetakeQuiz = async () => {
    // Clean up current session before starting new one
    await cleanupQuizSession();

    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResults(false);
    setShowEvaluation(false);
    setScore(0);
    setPassed(false);
    setTimeLeft(300);
    setQuizStarted(false);
    setQuizData(null);
    setEvaluationData(null);
    setCheatingDetected(false);
    setWarningCount(0);
    setError("");
  };

  const handleShowEvaluation = async () => {
    await fetchEvaluationData();
    setShowEvaluation(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center transition-colors duration-500">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent dark:border-blue-400 dark:border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-500">
            Generating Quiz
          </h2>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-500">
            Creating personalized questions for {topic}...
          </p>
        </div>
      </div>
    );
  }

  if (error && !quizData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-8 transition-colors duration-500">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors duration-500"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Dashboard</span>
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center animate-fadeInScale transition-all duration-500">
            <div className="bg-red-100 dark:bg-red-900 p-4 rounded-full w-fit mx-auto mb-6 transition-colors duration-500">
              <XCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
              Quiz Generation Failed
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-500">
              {error}
            </p>
            <button
              onClick={handleRetakeQuiz}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-500"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (cheatingDetected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-8 transition-colors duration-500">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center border-2 border-red-200 dark:border-red-500 animate-fadeInScale transition-all duration-500">
            <div className="bg-red-100 dark:bg-red-900 p-4 rounded-full w-fit mx-auto mb-6 transition-colors duration-500">
              <Shield className="h-12 w-12 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-3xl font-bold text-red-900 dark:text-red-300 mb-4 transition-colors duration-500">
              Quiz Terminated
            </h1>
            <p className="text-red-700 dark:text-red-400 mb-6 transition-colors duration-500">
              Suspicious activity detected. The quiz has been automatically
              submitted.
            </p>
            <div className="bg-red-50 dark:bg-red-800 border border-red-200 dark:border-red-600 rounded-xl p-4 mb-6 transition-colors duration-500">
              <p className="text-red-800 dark:text-red-200 text-sm transition-colors duration-500">
                Detected activities: Tab switching, keyboard shortcuts, or
                right-click attempts.
              </p>
            </div>
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-500"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 px-2 md:px-4 py-8 transition-colors duration-500">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors duration-500"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Dashboard</span>
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 md:p-8 text-center animate-fadeInScale transition-all duration-500">
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full w-fit mx-auto mb-6 transition-colors duration-500">
              <Trophy className="h-8 md:h-12 w-8 md:w-12 text-blue-600 dark:text-blue-400" />
            </div>

            <h1 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
              {topic} Quiz
            </h1>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-6 text-left transition-colors duration-500">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
                Quiz Instructions:
              </h3>
              <ul className="text-sm md:text-base space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-500">
                <li>• 10 AI-generated questions specific to {topic}</li>
                <li>• 5 minutes time limit</li>
                <li>• You need 7/10 correct answers to pass</li>
                <li>• Once started, you cannot pause the quiz</li>
                <li>
                  • Tab switching or suspicious activity will terminate the quiz
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-yellow-900 border border-amber-200 dark:border-yellow-700 rounded-xl p-4 mb-6 transition-colors duration-500">
              <div className="flex items-center space-x-2 text-amber-800 dark:text-yellow-300 transition-colors duration-500">
                <Shield className="h-5 w-5" />
                <span className="font-semibold">
                  Anti-Cheating Measures Active
                </span>
              </div>
              <p className="text-amber-700 dark:text-yellow-200 text-sm mt-2 transition-colors duration-500">
                Screenshots, copying, and tab switching are monitored and will
                result in quiz termination.
              </p>
            </div>

            <button
              onClick={handleStartQuiz}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 md:py-6 px-4 md:px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text:sm md:text-lg"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showEvaluation && evaluationData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-2 md:p-4 py-4 md:p-8 transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setShowEvaluation(false)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden md:inline">Back to Results</span>
            </button>
            <h1 className="w-full md:w-1/4 text-center md:text-right text-lg md:text-2xl font-bold text-gray-900 dark:text-white transition-colors">
              Quiz Evaluation
            </h1>
          </div>

          <div className="space-y-6 animate-fadeInScale">
            {evaluationData.questions.map(
              (question: Question, index: number) => {
                const userAnswer = evaluationData.userAnswers[index];
                const isCorrect = userAnswer === question.correct;

                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-3 md:p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                  >
                    <div className="flex items-start space-x-2 md:space-x-4 mb-4">
                      <div
                        className={`p-2 rounded-full ${
                          isCorrect
                            ? "bg-green-100 dark:bg-green-900"
                            : "bg-red-100 dark:bg-red-900"
                        } transition-colors`}
                      >
                        {isCorrect ? (
                          <CheckCircle className="h-3 md:h-6 w-3 md:w-6 text-green-600 dark:text-green-400" />
                        ) : (
                          <XCircle className="h-3 md:h-6 w-3 md:w-6 text-red-600 dark:text-red-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors">
                          <span className="hidden md:inline">Question </span><span className="md:hidden">Q.</span>{index + 1}: {question.question}
                        </h3>

                        <div className="space-y-2 text-xs md:text-base">
                          {question.options.map((option, optionIndex) => {
                            const isUserAnswer = userAnswer === optionIndex;
                            const isCorrectAnswer =
                              question.correct === optionIndex;

                            let bgColor = "bg-gray-50 dark:bg-gray-700";
                            let textColor = "text-gray-700 dark:text-gray-200";
                            let borderColor =
                              "border-gray-200 dark:border-gray-600";

                            if (isCorrectAnswer) {
                              bgColor = "bg-green-50 dark:bg-green-900";
                              textColor = "text-green-800 dark:text-green-300";
                              borderColor =
                                "border-green-300 dark:border-green-600";
                            } else if (isUserAnswer && !isCorrect) {
                              bgColor = "bg-red-50 dark:bg-red-900";
                              textColor = "text-red-800 dark:text-red-300";
                              borderColor =
                                "border-red-300 dark:border-red-600";
                            }

                            return (
                              <div
                                key={optionIndex}
                                className={`p-3 rounded-lg border-2 ${bgColor} ${borderColor} transition-colors`}
                              >
                                <div className="flex items-center justify-between">
                                  <span
                                    className={`${textColor} font-medium transition-colors`}
                                  >
                                    {option}
                                  </span>
                                  <div className="flex items-center space-x-2">
                                    {isUserAnswer && (
                                      <span className="hidden md:inline text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                                        Your Answer
                                      </span>
                                    )}
                                    {isCorrectAnswer && (
                                      <span className="hidden md:inline text-xs bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                                        Correct Answer
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-4 md:py-8 transition-colors duration-500">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 md:p-8 text-center animate-fadeInScale">
            <div
              className={`p-4 rounded-full w-fit mx-auto mb-4 md:mb-6 ${
                passed
                  ? "bg-green-100 dark:bg-green-900"
                  : "bg-red-100 dark:bg-red-900"
              }`}
            >
              {passed ? (
                <Trophy className="h-8 md:h-12 w-8 md:w-12 text-green-600 dark:text-green-400" />
              ) : (
                <XCircle className="h-8 md:h-12 w-8 md:w-12 text-red-600 dark:text-red-400" />
              )}
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
              Quiz Completed!
            </h1>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-6 md:mb-8 transition-colors">
              <div className="flex items-center justify-between mb-2 md:mb-4">
                <span className="text-gray-600 dark:text-gray-300">
                  Your Score:
                </span>
                <span className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                  {score}/10
                </span>
              </div>
              <div className="flex items-center justify-between mb-2 md:mb-4">
                <span className="text-gray-600 dark:text-gray-300">
                  Percentage:
                </span>
                <span className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                  {Math.round((score / 10) * 100)}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">
                  Status:
                </span>
                <span
                  className={`font-semibold ${
                    passed
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {passed ? "PASSED" : "FAILED"}
                </span>
              </div>
            </div>

            <div
              className={`p-2 md:p-4 rounded-xl mb-6 md:mb-8 ${
                passed
                  ? "bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-700"
                  : "bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-700"
              }`}
            >
              <p
                className={`${
                  passed
                    ? "text-green-800 dark:text-green-300"
                    : "text-red-800 dark:text-red-300"
                } text-sm md:text-base transition-colors`}
              >
                {passed
                  ? `Congratulations! You've mastered ${topic} and can now proceed with topics that depend on it.`
                  : `You need to score at least 7/10 to pass. Review the material and try again.`}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 md:mb-6">
              <button
                onClick={handleShowEvaluation}
                className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                <Eye className="h-5 w-5" />
                <span className="text-sm md:text-base">Evaluate Submission</span>
              </button>
              <button
                onClick={handleRetakeQuiz}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                <RotateCcw className="h-5 w-5" />
                <span className="text-sm md:text-base">Retake Quiz</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!passed && (
                <button
                  onClick={() =>
                    navigate(`/learn/${encodeURIComponent(topic!)}`)
                  }
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  <BookOpen className="h-5 w-5" />
                  <span className="text-sm md:text-base">Learn {topic}</span>
                </button>
              )}
              <button
                onClick={() => navigate("/dashboard")}
                className="text-sm md:text-base bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!quizData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-8 transition-colors duration-500">
      <div className="max-w-2xl mx-auto">
        {/* Header with warnings */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
              <Timer className="h-5 w-5 text-orange-500" />
              <span
                className={`font-mono font-semibold ${
                  timeLeft < 60
                    ? "text-red-600 dark:text-red-400"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {formatTime(timeLeft)}
              </span>
            </div>

            {warningCount > 0 && (
              <div className="flex items-center space-x-2 bg-red-100 dark:bg-red-900 px-3 py-2 rounded-full">
                <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
                <span className="text-red-600 dark:text-red-300 text-sm font-medium">
                  Warnings: {warningCount}/3
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Question {currentQuestion + 1} of {quizData.questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {Math.round(
                ((currentQuestion + 1) / quizData.questions.length) * 100
              )}
              % Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${
                  ((currentQuestion + 1) / quizData.questions.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 md:p-8 animate-fadeInScale transition-colors duration-300">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-6">
            {quizData.questions[currentQuestion].question}
          </h2>

          <div className="space-y-4 mb-8">
            {quizData.questions[currentQuestion].options.map(
              (option, index) => {
                const isSelected = selectedAnswer === index;
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 border-2 rounded-xl transition-all duration-200 ${
                      isSelected
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-950 dark:border-blue-400 shadow-md"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 md:w-6 h-4 md:h-6 rounded-full border-2 flex items-center justify-center ${
                          isSelected
                            ? "border-blue-500 bg-blue-500"
                            : "border-gray-300 dark:border-gray-600"
                        }`}
                      >
                        {isSelected && (
                          <CheckCircle className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className="text-sm md:text-lg text-gray-900 dark:text-gray-100">
                        {option}
                      </span>
                    </div>
                  </button>
                );
              }
            )}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null || isSubmitting}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </div> 
              ) : currentQuestion === quizData.questions.length - 1 ? (
                <div>Submit<span className="hidden md:inline">Quiz</span></div>
              ) : (
                <div>Next <span className="hidden md:inline">Question</span></div> 
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
