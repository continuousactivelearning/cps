import React, { useState } from 'react';

const allConcepts = ["Arrays", "Strings", "Linked List", "Stack", "Trees", "Binary Search", "Dynamic Programming"];

interface Props {
  userId: string;
  language: string;
  onNext: () => void;
}

const Step2_Assessment: React.FC<Props> = ({ userId, language, onNext }) => {
  const [known, setKnown] = useState<string[]>([]);
  const [target, setTarget] = useState('');

  const toggleKnown = (concept: string) => {
    setKnown((prev) =>
      prev.includes(concept)
        ? prev.filter((c) => c !== concept)
        : [...prev, concept]
    );
  };

  const handleSubmit = async () => {
    // Prepare courses data from known and target concepts
    const coursesData: Array<{
      courseName: string;
      status: string;
      result: number;
    }> = [];
    
    // Add known concepts as completed courses
    known.forEach(concept => {
      coursesData.push({
        courseName: concept,
        status: "completed",
        result: 100 // Default score for known concepts
      });
    });
    
    // Add target concept as in-progress course (if not already in known)
    if (target && !known.includes(target)) {
      coursesData.push({
        courseName: target,
        status: "in-progress",
        result: 0
      });
    }
    
    console.log('Submitting assessment with courses:', coursesData);
    
    try {
      const res = await fetch(`/api/users/${userId}/assessment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          courses: coursesData
        }),
      });

      if (res.ok) {
        const result = await res.json();
        console.log('Assessment saved successfully:', result);
        onNext();
      } else {
        const error = await res.json();
        console.error('Assessment submission failed:', error);
        alert(`Failed to submit assessment: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">Assessment</h1>
        <p className="lead text-muted">Choose your topics to get started</p>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          {/* Known Concepts Section */}
          <div className="mb-5">
            <h3 className="h4 fw-bold mb-4">What topics do you already know?</h3>
            <div className="row g-3">
              {allConcepts.map((c) => (
                <div key={c} className="col-md-4 col-sm-6">
                  <div 
                    className={`card border-2 cursor-pointer h-100 ${known.includes(c) ? 'border-primary bg-primary bg-opacity-10' : 'border-light'}`}
                    style={{ 
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onClick={() => toggleKnown(c)}
                    onMouseEnter={(e) => {
                      if (!known.includes(c)) {
                        e.currentTarget.style.borderColor = '#0d6efd';
                        e.currentTarget.style.backgroundColor = '#f8f9ff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!known.includes(c)) {
                        e.currentTarget.style.borderColor = '#dee2e6';
                        e.currentTarget.style.backgroundColor = 'white';
                      }
                    }}
                  >
                    <div className="card-body py-4 text-center">
                      <h5 className="card-title mb-0 fw-semibold">{c}</h5>
                      {known.includes(c) && (
                        <div className="mt-2">
                          <span className="badge bg-primary">Selected</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Target Concept Section */}
          <div className="mb-5">
            <h3 className="h4 fw-bold mb-4">Select Target Topic</h3>
            <div className="card border-0 shadow-sm p-4">
              <select
                className="form-select form-select-lg"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                style={{ fontSize: '1.1rem' }}
              >
                <option value="">Choose a topic to focus on...</option>
                {allConcepts.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="d-flex gap-3 justify-content-end">
            <button
              className="btn btn-primary btn-lg px-4"
              disabled={!target || known.length === 0}
              onClick={handleSubmit}
              style={{
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(13, 110, 253, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2_Assessment;