import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "../styles/card";
import { Button } from "../styles/button";

const difficulties = [
  { name: 'Easy', description: 'Basic concepts and simple problems', color: 'success' },
  { name: 'Intermediate', description: 'Moderate complexity problems', color: 'warning' },
  { name: 'Difficult', description: 'Advanced and challenging problems', color: 'danger' }
];

const DifficultySelection: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useParams<{ language: string }>();

  const handleDifficultySelect = (difficulty: string) => {
   navigate(`/questions/${language}/${difficulty.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-light d-flex flex-column justify-content-center align-items-center p-4">
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary fw-bold mb-3">Select Difficulty Level</h1>
        <p className="lead text-muted">Choose your preferred difficulty for {language} DSA questions</p>
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