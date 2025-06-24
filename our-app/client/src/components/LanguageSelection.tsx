import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LanguageSelection.css';

const languages = ['C++', 'Java', 'Python', 'JavaScript'];

const LanguageSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (language: string) => {
  navigate(`/difficulty/${language}`);
};

  return (
    <div className="container-fluid min-vh-100 bg-light d-flex flex-column justify-content-center align-items-center">
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary fw-bold">Choose Your Programming Language</h1>
        <p className="lead text-muted">Select a language and start learning DSA.</p>
      </div>

      <div className="row w-100 justify-content-center">
        {languages.map((language) => (
          <div
            key={language}
            className="col-md-3 m-3 p-4 language-card bg-white shadow rounded text-center"
            onClick={() => handleClick(language)}
          >
            <h3>{language}</h3>
            <p>Click to start questions in {language}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;