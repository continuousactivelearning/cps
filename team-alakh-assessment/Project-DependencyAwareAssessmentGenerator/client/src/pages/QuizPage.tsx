import React, { useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import sampleQuestions from '../data/questions';


const QuizPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = sampleQuestions[currentIndex];
  const isLast = currentIndex === sampleQuestions.length - 1;

  const handleNext = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
    setSelectedOption(null);
    setCurrentIndex(prev => prev + 1);
  };

  

  const handleSubmit = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
    setShowResult(true);
  };

  

  if (showResult) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
        <Header />
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl text-center">
          <h2 className="text-2xl font-semibold text-green-600">Quiz Completed!</h2>
          <p className="mt-4 text-xl font-medium">
            Your Score: <span className="text-blue-600">{score}</span> / {sampleQuestions.length}
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 px-4 py-6">
      <Header />
      <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6 m-17">
        <ProgressBar current={currentIndex + 1} total={sampleQuestions.length} />
        <QuestionCard
          question={currentQuestion}
          selectedOption={selectedOption}
          onSelect={setSelectedOption}
        />
        <div className="flex justify-end mt-6">
          {!isLast ? (
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`px-6 py-2 rounded-md text-white font-medium transition ${
                selectedOption
                  ? 'bg-blue-600 hover:bg-green-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className={`px-6 py-2 rounded-md text-white font-medium transition ${
                selectedOption
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Submit
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;
