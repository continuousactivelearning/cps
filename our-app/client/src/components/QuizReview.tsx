import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "../styles/card";
import { Button } from "../styles/button";
import { Check, X } from 'lucide-react';


interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  language: string;
  difficulty: string;
}

interface LocationState {
  questions: Question[];
  selectedAnswers: number[];
  score: number;
}

const QuizReview: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, difficulty } = useParams<{ language: string; difficulty: string }>();
  
  const state = location.state as LocationState;
  
  if (!state) {
    return (
      <div className="min-h-screen bg-light d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h3>No review data available</h3>
          <Button onClick={() => navigate('/')} className="mt-3">
            Go Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const { questions, selectedAnswers, score } = state;

  return (
   <div className="min-h-screen d-flex flex-column justify-content-center align-items-center p-4 bg-light">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="text-primary">Quiz Review</h2>
            <Button onClick={() => navigate('/')} variant="outline">
              Back to Home
            </Button>
          </div>
          
          <Card className="mb-4">
            <CardContent className="py-3">
              <div className="row text-center">
                <div className="col-md-3">
                  <h5 className="text-success">{score}</h5>
                  <small className="text-muted">Correct</small>
                </div>
                <div className="col-md-3">
                  <h5 className="text-danger">{questions.length - score}</h5>
                  <small className="text-muted">Incorrect</small>
                </div>
                <div className="col-md-3">
                  <h5 className="text-primary">{Math.round((score / questions.length) * 100)}%</h5>
                  <small className="text-muted">Score</small>
                </div>
                <div className="col-md-3">
                  <h5>{language}</h5>
                  <small className="text-muted">{difficulty}</small>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="d-grid gap-4">
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <Card key={question.id}>
                <CardHeader>
                  <div className="d-flex align-items-start justify-content-between">
                    <CardTitle className="h5 mb-0">
                      Question {index + 1}: {question.question}
                    </CardTitle>
                    {isCorrect ? (
                      <Check className="text-success flex-shrink-0 ms-2" size={24} />
                    ) : (
                      <X className="text-danger flex-shrink-0 ms-2" size={24} />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="d-grid gap-2 mb-3">
                    {question.options.map((option, optionIndex) => {
                      let className = "p-2 border rounded";
                      let iconElement:any = null;
                      
                      if (optionIndex === question.correctAnswer) {
                        className += " border-success bg-success bg-opacity-10";
                        iconElement = <Check className="text-success ms-2" size={16} />;
                      } else if (optionIndex === userAnswer && !isCorrect) {
                        className += " border-danger bg-danger bg-opacity-10";
                      }
                      
                      return (
                        <div key={optionIndex} className={className}>
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <span className="me-2 fw-bold">
                                {String.fromCharCode(65 + optionIndex)}.
                              </span>
                              <span>{option}</span>
                            </div>
                            {iconElement}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-3 p-3 bg-light rounded">
                    <h6 className="text-primary mb-2">Explanation:</h6>
                    <p className="mb-0 text-muted">{question.explanation}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-4">
          <Button onClick={() => navigate('/')}>
            Take Another Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizReview;