import { CheckCircle } from 'lucide-react';
import type { QuizState, Topic } from '../interface/types';

interface QuizResultsProps {
  quiz: QuizState;
  title: string;
  onReview: () => void;
  onRetake: () => void;
  onClose: () => void;
  isTopicMastered?: boolean | "";
  topics: Topic[];
  startQuiz: (topicId: string) => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  quiz,
  title,
  onReview,
  onRetake,
  onClose,
  isTopicMastered,
  topics,
  startQuiz
}) => {
  const correctAnswers = quiz.questions.filter((q, i) => quiz.userAnswers[i] === q.correctAnswer).length;
  const timeUsed = quiz.timeCompleted 
    ? Math.round((quiz.timeCompleted.getTime() - quiz.timeStarted.getTime()) / 1000)
    : quiz.timeLimit - quiz.timeRemaining;

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className={`w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center ${
        quiz.score >= 80 ? 'bg-green-100' : quiz.score >= 60 ? 'bg-yellow-100' : 'bg-red-100'
      }`}>
        <div className={`text-4xl font-bold ${
          quiz.score >= 80 ? 'text-green-600' : quiz.score >= 60 ? 'text-yellow-600' : 'text-red-600'
        }`}>
          {quiz.score}%
        </div>
      </div>
      
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {quiz.score >= 80 ? 'Excellent!' : quiz.score >= 60 ? 'Good Job!' : 'Keep Practicing!'}
      </h3>
      
      <p className="text-xl text-gray-600 mb-4">
        You scored {quiz.score}% on {title}
      </p>
      
      {Array.isArray(topics) && isTopicMastered && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
          <div className="flex items-center justify-center space-x-2 text-green-700">
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold text-lg">🎉 Topic Mastered!</span>
          </div>
          <p className="text-green-600 mt-2">You've unlocked new topics and can now progress further!</p>
          {
          
          <div className="mt-4">
      <h4 className="text-center text-gray-800 font-semibold text-base mb-2">Try Next</h4>
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {topics
          .filter((t) => t.status === "ready")
          .slice(-3)
          .map((topic) => (
            <button
              key={topic.id}
              onClick={() => {
                startQuiz(topic.id);
                onClose();
                
              }}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium transition-colors"
            >
              {topic.name}
            </button>
          ))}
      </div>
    </div>
          }
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-green-50 p-6 rounded-xl">
          <div className="text-3xl font-bold text-green-600">{correctAnswers}</div>
          <div className="text-green-600 font-medium">Correct</div>
        </div>
        <div className="bg-red-50 p-6 rounded-xl">
          <div className="text-3xl font-bold text-red-600">
            {quiz.questions.length - correctAnswers}
          </div>
          <div className="text-red-600 font-medium">Incorrect</div>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="text-3xl font-bold text-blue-600">{timeUsed}s</div>
          <div className="text-blue-600 font-medium">Time Used</div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <button
          onClick={onReview}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-medium transition-colors text-lg"
        >
          Review Answers
        </button>
        <button
          onClick={onRetake}
          className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-4 rounded-xl font-medium transition-colors text-lg"
        >
          Retake Quiz
        </button>
        <button
          onClick={onClose}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-medium transition-colors text-lg"
        >
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default QuizResults;