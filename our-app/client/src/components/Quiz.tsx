
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "../styles/card";
import { Button } from "../styles/button";
import { getQuestionsByLanguageAndDifficulty } from '../data/questions';


interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  language: string;
  difficulty: string;
}

const Quiz: React.FC = () => {
  const { language, difficulty } = useParams<{ language: string; difficulty: string }>();
  const navigate = useNavigate();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (language && difficulty) {
      const quizQuestions = getQuestionsByLanguageAndDifficulty(language, difficulty);
      setQuestions(quizQuestions);
      setSelectedAnswers(new Array(quizQuestions.length).fill(-1));
    }
  }, [language, difficulty]);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers[currentQuestionIndex] = selectedOption;
      setSelectedAnswers(updatedAnswers);
      setSelectedOption(null);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const handleReviewTest = () => {
    navigate(`/review/${language}/${difficulty}`, { 
      state: { 
        questions, 
        selectedAnswers, 
        score: calculateScore() 
      } 
    });
  };

const handleTopicSelection = () => {
  navigate(`/topic-selection`, {
    state: { language }
  });
};


  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-light d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h3>No questions available for {language} - {difficulty}</h3>
          <Button onClick={() => navigate('/')} className="mt-3">
            Go Back to Language Selection
          </Button>
        </div>
      </div>
    );
  }

 if (showResult) {
  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="bg-light d-flex flex-column justify-content-center align-items-center min-vh-100 p-4">
      <div className="w-100" style={{ maxWidth: '600px' }}>
        <Card className="w-100 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="h2 text-primary">Quiz Completed!</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-4">
              <h3 className="display-4 text-success">{score}/{questions.length}</h3>
              <p className="lead">You scored {percentage}%</p>
              <p className="text-muted">
                Language: <strong>{language}</strong> | Difficulty: <strong>{difficulty}</strong>
              </p>
            </div>
           <div className="d-flex gap-3 justify-content-center flex-wrap">
  <Button onClick={handleReviewTest} variant="outline">
    Review Test
  </Button>
  <Button onClick={() => navigate('/')}>
    Take Another Quiz
  </Button>
  <Button variant="outline" onClick={handleTopicSelection}>
    Choose Topic
  </Button>
</div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}


  const currentQuestion = questions[currentQuestionIndex];

  return (
     <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light p-4">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-muted">
              Question {currentQuestionIndex + 1} of {questions.length}
            </h5>
            <span className="badge bg-primary">
              {language} - {difficulty}
            </span>
          </div>
          <div className="progress mt-2">
            <div 
              className="progress-bar" 
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="h4">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="d-grid gap-3">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className={`p-3 border rounded cursor-pointer ${
                    selectedOption === index 
                      ? 'border-primary bg-primary bg-opacity-10' 
                      : 'border-secondary'
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="d-flex align-items-center">
                    <div 
                      className={`rounded-circle me-3 d-flex align-items-center justify-content-center ${
                        selectedOption === index ? 'bg-primary text-white' : 'bg-light'
                      }`}
                      style={{ width: '30px', height: '30px', fontSize: '14px' }}
                    >
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span>{option}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-end">
              <Button 
                onClick={handleNext} 
                disabled={selectedOption === null}
              >
                {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;