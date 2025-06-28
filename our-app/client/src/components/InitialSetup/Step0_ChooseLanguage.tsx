import React, { useState } from 'react';

interface Props {
  onSelect: (language: string) => void;
}

const Step0_ChooseLanguage: React.FC<Props> = ({ onSelect }) => {
  const [language, setLanguage] = useState('');

  // Save language to localStorage and backend when selected
  const handleContinue = () => {
    if (!language) return; // Prevent continue if not selected
    localStorage.setItem('language', language);
    onSelect(language);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">Choose Your Programming Language</h1>
        <p className="lead text-muted">Select a language and start learning DSA.</p>
      </div>
      
      <div className="row g-4 justify-content-center">
        <div className="col-md-4 col-sm-6">
          <div 
            className={`card h-100 shadow-sm border-0 text-center cursor-pointer ${language === 'cpp' ? 'border-primary border-3' : ''}`}
            onClick={() => setLanguage('cpp')}
            style={{ 
              cursor: 'pointer', 
              backgroundColor: language === 'cpp' ? '#f8f9ff' : 'white',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
            }}
          >
            <div className="card-body py-5">
              <h3 className="card-title fw-bold mb-3">C++</h3>
              <p className="card-text text-muted">Click to start questions in C++</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 col-sm-6">
          <div 
            className={`card h-100 shadow-sm border-0 text-center cursor-pointer ${language === 'java' ? 'border-primary border-3' : ''}`}
            onClick={() => setLanguage('java')}
            style={{ 
              cursor: 'pointer', 
              backgroundColor: language === 'java' ? '#f8f9ff' : 'white',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
            }}
          >
            <div className="card-body py-5">
              <h3 className="card-title fw-bold mb-3">Java</h3>
              <p className="card-text text-muted">Click to start questions in Java</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 col-sm-6">
          <div 
            className={`card h-100 shadow-sm border-0 text-center cursor-pointer ${language === 'python' ? 'border-primary border-3' : ''}`}
            onClick={() => setLanguage('python')}
            style={{ 
              cursor: 'pointer', 
              backgroundColor: language === 'python' ? '#f8f9ff' : 'white',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
            }}
          >
            <div className="card-body py-5">
              <h3 className="card-title fw-bold mb-3">Python</h3>
              <p className="card-text text-muted">Click to start questions in Python</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 col-sm-6 offset-md-2">
          <div 
            className={`card h-100 shadow-sm border-0 text-center cursor-pointer ${language === 'javascript' ? 'border-primary border-3' : ''}`}
            onClick={() => setLanguage('javascript')}
            style={{ 
              cursor: 'pointer', 
              backgroundColor: language === 'javascript' ? '#f8f9ff' : 'white',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
            }}
          >
            <div className="card-body py-5">
              <h3 className="card-title fw-bold mb-3">JavaScript</h3>
              <p className="card-text text-muted">Click to start questions in JavaScript</p>
            </div>
          </div>
        </div>
      </div>
      

      
      {language && (
        <div className="text-center mt-5">
          <button
            className="btn btn-primary btn-lg px-5"
            onClick={handleContinue}
          >
            Continue with {language === 'cpp' ? 'C++' : language === 'javascript' ? 'JavaScript' : language.charAt(0).toUpperCase() + language.slice(1)} →
          </button>
        </div>
      )}
    </div>
    
  );

};

export default Step0_ChooseLanguage;