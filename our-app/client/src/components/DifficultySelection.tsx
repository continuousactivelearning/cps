import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "../styles/card";
import { Button } from "../styles/button";

const difficulties = [
  { name: 'Easy', description: 'Basic concepts and simple problems', color: 'success' },
  { name: 'Intermediate', description: 'Moderate complexity problems', color: 'warning' },
  { name: 'Difficult', description: 'Advanced and challenging problems', color: 'danger' }
];

interface LocationState {
  knownTopics?: string[];
  targetTopic?: string;
}

const DifficultySelection: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useParams<{ language?: string }>();
  const location = useLocation();

  const state = location.state as LocationState | null;
  const isValidationFlow = !!state?.knownTopics && !!state?.targetTopic;

  const handleDifficultySelect = (difficulty: string) => {
    if (isValidationFlow && state) {
      navigate(`/validation-quiz/${state.targetTopic}/${difficulty.toLowerCase()}`, {
        state: {
          knownTopics: state.knownTopics,
          targetTopic: state.targetTopic,
          language,
        },
      });
    } else if (language) {
      navigate(`/questions/${language}/${difficulty.toLowerCase()}`);
    } else {
      alert("Invalid state. Please go back and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-light d-flex flex-column justify-content-center align-items-center p-4">
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary fw-bold mb-3">Select Difficulty Level</h1>
        <p className="lead text-muted">
          {isValidationFlow ? (
            <>Choose a challenge level for <strong>{state?.targetTopic}</strong></>
          ) : (
            <>Choose your preferred difficulty for <strong>{language}</strong> DSA questions</>
          )}
        </p>
      </div>

      <div className="row w-100 justify-content-center">
        {difficulties.map((difficulty) => (
          <div key={difficulty.name} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Card
              className="h-100 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              onClick={() => handleDifficultySelect(difficulty.name)}
            >
              <CardHeader className="text-center">
                <CardTitle className={`h3 text-${difficulty.color}`}>{difficulty.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted">{difficulty.description}</p>
                <Button variant="outline" className="mt-2">
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelection;