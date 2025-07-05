import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Props {
  userId: string;
  onNext: () => void;
}

const targetConcepts = [
  // Beginner Level
  { 
    name: 'Arrays', 
    description: 'Core concept for storing elements in contiguous memory',
    icon: '📊',
    difficulty: 'Beginner',
    estimatedTime: '2-3 weeks'
  },
  { 
    name: 'Recursion', 
    description: 'Technique of solving problems by breaking them into subproblems',
    icon: '�',
    difficulty: 'Beginner',
    estimatedTime: '3-4 weeks'
  },
  { 
    name: 'Strings', 
    description: 'Text data and manipulations',
    icon: '📝',
    difficulty: 'Beginner',
    estimatedTime: '2-3 weeks'
  },
  { 
    name: 'Matrices', 
    description: '2D array structures',
    icon: '⬜',
    difficulty: 'Beginner',
    estimatedTime: '2-3 weeks'
  },
  
  // Intermediate Level - Data Structures
  { 
    name: 'Linked Lists', 
    description: 'Dynamic data structure made of nodes',
    icon: '🔗',
    difficulty: 'Intermediate',
    estimatedTime: '2-4 weeks'
  },
  { 
    name: 'Stacks', 
    description: 'LIFO data structure',
    icon: '📚',
    difficulty: 'Intermediate',
    estimatedTime: '1-2 weeks'
  },
  { 
    name: 'Queues', 
    description: 'FIFO data structure',
    icon: '🚶‍♂️',
    difficulty: 'Intermediate',
    estimatedTime: '1-2 weeks'
  },
  { 
    name: 'Hash Tables', 
    description: 'Key-value based lookup data structure',
    icon: '�️',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 weeks'
  },
  { 
    name: 'Trees', 
    description: 'Hierarchical data structure',
    icon: '🌳',
    difficulty: 'Intermediate',
    estimatedTime: '3-4 weeks'
  },
  { 
    name: 'Binary Search Trees', 
    description: 'Binary Tree with sorted properties',
    icon: '🌲',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 weeks'
  },
  { 
    name: 'Heaps', 
    description: 'Complete binary tree used in priority queues',
    icon: '⛰️',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 weeks'
  },
  { 
    name: 'Graphs', 
    description: 'Non-linear data structure of nodes and edges',
    icon: '🕸️',
    difficulty: 'Intermediate',
    estimatedTime: '4-5 weeks'
  },
  
  // Intermediate Level - Algorithms
  { 
    name: 'Sorting Algorithms', 
    description: 'Techniques for arranging elements',
    icon: '�',
    difficulty: 'Intermediate',
    estimatedTime: '3-4 weeks'
  },
  { 
    name: 'Binary Search', 
    description: 'Efficient searching algorithm for sorted arrays',
    icon: '🔍',
    difficulty: 'Intermediate',
    estimatedTime: '1-2 weeks'
  },
  { 
    name: 'Two Pointers', 
    description: 'Technique using two pointers to iterate through data',
    icon: '👆',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 weeks'
  },
  { 
    name: 'Breadth-First Search (BFS)', 
    description: 'Graph traversal technique using queue',
    icon: '🌊',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 weeks'
  },
  { 
    name: 'Depth-First Search (DFS)', 
    description: 'Graph traversal using stack or recursion',
    icon: '🏊‍♂️',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 weeks'
  },
  
  // Advanced Level - Algorithm Paradigms
  { 
    name: 'Dynamic Programming', 
    description: 'Optimizing overlapping subproblems',
    icon: '🧠',
    difficulty: 'Advanced',
    estimatedTime: '4-6 weeks'
  },
  { 
    name: 'Greedy Algorithms', 
    description: 'Algorithm design using local optimum',
    icon: '🎯',
    difficulty: 'Advanced',
    estimatedTime: '3-4 weeks'
  },
  { 
    name: 'Backtracking', 
    description: 'Exploration of all possibilities',
    icon: '🔙',
    difficulty: 'Advanced',
    estimatedTime: '3-4 weeks'
  },
  { 
    name: 'Divide and Conquer', 
    description: 'Algorithm design paradigm',
    icon: '⚔️',
    difficulty: 'Advanced',
    estimatedTime: '3-4 weeks'
  },
  
  // Advanced Level - Advanced Data Structures
  { 
    name: 'AVL Trees', 
    description: 'Self-balancing BST',
    icon: '⚖️',
    difficulty: 'Advanced',
    estimatedTime: '2-3 weeks'
  },
  { 
    name: 'Tries', 
    description: 'Prefix tree for strings',
    icon: '📊',
    difficulty: 'Advanced',
    estimatedTime: '2-3 weeks'
  },
  { 
    name: 'Segment Trees', 
    description: 'Range query tree',
    icon: '🌿',
    difficulty: 'Advanced',
    estimatedTime: '3-4 weeks'
  },
  { 
    name: 'Disjoint Set Union', 
    description: 'Union-Find data structure',
    icon: '🔗',
    difficulty: 'Advanced',
    estimatedTime: '2-3 weeks'
  },
  
  // Advanced Level - Graph Algorithms
  { 
    name: "Dijkstra's Algorithm", 
    description: 'Shortest path algorithm',
    icon: '🛣️',
    difficulty: 'Advanced',
    estimatedTime: '2-3 weeks'
  },
  { 
    name: "Prim's Algorithm", 
    description: 'MST using greedy and heap',
    icon: '�',
    difficulty: 'Advanced',
    estimatedTime: '2-3 weeks'
  }
];

const Step4_TargetConcept: React.FC<Props> = ({ userId, onNext }) => {
  const navigate = useNavigate();
  const [selectedConcept, setSelectedConcept] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [learningPath, setLearningPath] = useState<string[]>([]);
  const [showPath, setShowPath] = useState(false);

  const handleConceptSelect = async (conceptName: string) => {
    setSelectedConcept(conceptName);
    setLoading(true);
    setShowPath(false);

    try {
      // Set the target concept as in-progress
      await axios.post(`/api/users/${userId}/update-user-courses?status=in-progress`, {
        completedCourses: [conceptName]
      });

      // Get the recommended learning path
      const pathRes = await axios.get(`/api/users/${userId}/recommend-path?target=${encodeURIComponent(conceptName)}`);
      setLearningPath(pathRes.data.recommendedPath || []);
      setShowPath(true);
    } catch (error) {
      console.error('Error setting target concept:', error);
      alert('Failed to set target concept. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = async () => {
    if (!selectedConcept) {
      alert('Please select a target concept first.');
      return;
    }

    try {
      // Enroll user in the learning path courses
      if (learningPath.length > 0) {
        await axios.post(`/api/users/${userId}/update-user-courses?status=enrolled`, {
          completedCourses: learningPath
        });
      }
      
      onNext();
    } catch (error) {
      console.error('Error enrolling in courses:', error);
      alert('Failed to enroll in courses. Please try again.');
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">Choose Your Target Concept</h1>
        <p className="lead text-muted">Select the concept you want to master, and we'll create a personalized learning path for you</p>
      </div>

      {!showPath ? (
        <div className="row g-4">
          {targetConcepts.map(concept => (
            <div key={concept.name} className="col-lg-3 col-md-4 col-sm-6">
              <div 
                className={`card h-100 border-0 text-center cursor-pointer ${
                  selectedConcept === concept.name ? 'border-primary border-3 bg-primary bg-opacity-10' : 'shadow-sm'
                }`}
                style={{ 
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: loading ? 0.7 : 1
                }}
                onClick={() => !loading && handleConceptSelect(concept.name)}
                onMouseEnter={(e) => {
                  if (!loading && selectedConcept !== concept.name) {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = selectedConcept === concept.name ? 'none' : '0 2px 10px rgba(0,0,0,0.1)';
                  }
                }}
              >
                <div className="card-body p-4">
                  <div className="mb-3">
                    <div style={{ fontSize: '3rem' }}>{concept.icon}</div>
                  </div>
                  <h5 className="fw-bold mb-2">{concept.name}</h5>
                  <p className="text-muted mb-3 small">{concept.description}</p>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className={`badge ${
                      concept.difficulty === 'Beginner' ? 'bg-success' :
                      concept.difficulty === 'Intermediate' ? 'bg-warning' : 'bg-danger'
                    }`}>
                      {concept.difficulty}
                    </span>
                    <small className="text-muted">{concept.estimatedTime}</small>
                  </div>
                  {selectedConcept === concept.name && (
                    <div className="mt-2">
                      {loading ? (
                        <div className="spinner-border spinner-border-sm text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        <i className="fas fa-check-circle text-primary"></i>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div style={{ fontSize: '4rem' }}>
                    {targetConcepts.find(c => c.name === selectedConcept)?.icon}
                  </div>
                  <h2 className="fw-bold text-primary mb-2">{selectedConcept}</h2>
                  <p className="text-muted">Your Personalized Learning Path</p>
                </div>

                {learningPath.length > 0 ? (
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3">Recommended Learning Steps:</h5>
                    <div className="d-flex flex-column gap-3">
                      {learningPath.map((step, index) => (
                        <div key={index} className="d-flex align-items-center p-3 bg-light rounded">
                          <div 
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                            style={{ width: '40px', height: '40px', fontSize: '16px', fontWeight: 'bold' }}
                          >
                            {index + 1}
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1 fw-bold">{step}</h6>
                            <small className="text-muted">
                              {index === 0 ? 'Start here' : 
                               index === learningPath.length - 1 ? 'Final step' : 
                               'Continue learning'}
                            </small>
                          </div>
                          <i className="fas fa-arrow-right text-primary"></i>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center mb-4">
                    <div className="alert alert-info">
                      <i className="fas fa-info-circle me-2"></i>
                      You're ready to start with {selectedConcept}! No prerequisites needed.
                    </div>
                  </div>
                )}

                <div className="d-flex justify-content-center gap-3">
                  <button 
                    className="btn btn-outline-secondary px-4"
                    onClick={() => {
                      setShowPath(false);
                      setSelectedConcept('');
                      setLearningPath([]);
                    }}
                  >
                    Choose Different Concept
                  </button>
                  <button 
                    className="btn btn-primary btn-lg px-5"
                    onClick={handleContinue}
                  >
                    Start Learning Journey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step4_TargetConcept;
