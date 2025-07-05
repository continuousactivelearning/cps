import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
  userId: string;
  onNext: () => void;
}

// Available target courses from coursesData
const targetCourses = [
  // Beginner Level
  'Arrays',
  'Recursion',
  'Strings',
  'Matrices',
  'Complexity Analysis',
  
  // Intermediate Level - Data Structures
  'Linked Lists',
  'Stacks', 
  'Queues',
  'Hash Tables',
  'Trees',
  'Binary Trees',
  'Binary Search Trees',
  'Heaps',
  'Graphs',
  
  // Intermediate Level - Algorithms
  'Sorting Algorithms',
  'Searching Algorithms',
  'Binary Search',
  'Two Pointers',
  'Sliding Window',
  'Breadth-First Search (BFS)',
  'Depth-First Search (DFS)',
  
  // Advanced Level - Algorithm Paradigms
  'Dynamic Programming',
  'Greedy Algorithms',
  'Backtracking', 
  'Divide and Conquer',
  
  // Advanced Level - Advanced Data Structures
  'AVL Trees',
  'Red-Black Trees',
  'B-Trees',
  'Tries',
  'Segment Trees',
  'Fenwick Trees',
  'Disjoint Set Union',
  'Suffix Arrays/Trees',
  
  // Advanced Level - Graph Algorithms
  "Dijkstra's Algorithm",
  "Bellman-Ford Algorithm", 
  "Floyd-Warshall Algorithm",
  "Prim's Algorithm",
  "Kruskal's Algorithm",
  'Topological Sort'
];

const Step4_TargetSelector: React.FC<Props> = ({ userId, onNext }) => {
  const [selectedTarget, setSelectedTarget] = useState<string>('');
  const [recommendedPath, setRecommendedPath] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [checkingExisting, setCheckingExisting] = useState(true);

  // Check if user already has a recommended path on component mount
  useEffect(() => {
    const checkExistingPath = async () => {
      try {
        const userRes = await axios.get(`/api/users/${userId}/dashboard`);
        const userData = userRes.data;
        
        if (userData.recommendations?.path?.target && userData.recommendations?.path?.path) {
          // User already has a recommended path, skip to dashboard
          setSelectedTarget(userData.recommendations.path.target);
          setRecommendedPath(userData.recommendations.path.path);
          setMessage(`You already have a learning path set for "${userData.recommendations.path.target}". Continue to dashboard or choose a new target.`);
          setCheckingExisting(false);
        } else {
          // No existing path, show target selection
          setCheckingExisting(false);
        }
      } catch (error) {
        console.error('Error checking existing path:', error);
        // If there's an error, just proceed to target selection
        setCheckingExisting(false);
      }
    };

    if (userId) {
      checkExistingPath();
    }
  }, [userId]);

  const handleTargetSelect = async (targetCourse: string) => {
    setSelectedTarget(targetCourse);
    setLoading(true);

    try {
      // Get the recommended path - this will automatically store both target and path in user document
      const pathRes = await axios.get(`/api/users/${userId}/recommend-path?target=${encodeURIComponent(targetCourse)}`);
      
      setRecommendedPath(pathRes.data.recommendedPath || []);
      setMessage(`Great! Your learning path to reach "${targetCourse}" has been generated and saved.`);
    } catch (error) {
      console.error('Error getting recommended path:', error);
      setMessage('Failed to generate learning path. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = () => {
    if (selectedTarget && recommendedPath.length > 0) {
      onNext();
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">Choose Your Target Concept</h1>
        <p className="lead text-muted">
          Select the <span className="fw-bold text-primary">advanced concept</span> you want to master.
          <br />We'll create a personalized learning path and save it to your profile!
        </p>
      </div>

      {checkingExisting ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Checking existing path...</span>
          </div>
          <p className="mt-3 text-muted">Checking if you already have a learning path...</p>
        </div>
      ) : !selectedTarget ? (
        <div className="row g-3">
          {targetCourses.map((course) => (
            <div key={course} className="col-lg-4 col-md-6">
              <div 
                className="card h-100 border-0 shadow-sm cursor-pointer"
                style={{ 
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onClick={() => handleTargetSelect(course)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <i className="fas fa-brain fa-2x text-primary"></i>
                  </div>
                  <h5 className="fw-bold mb-2">{course}</h5>
                  <p className="text-muted small">Click to select this as your target</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="mb-3">
                    <i className="fas fa-bullseye fa-3x text-success"></i>
                  </div>
                  <h3 className="fw-bold text-success">Target Selected!</h3>
                  <h4 className="text-primary">{selectedTarget}</h4>
                  {loading && (
                    <div className="d-flex justify-content-center align-items-center my-4">
                      <div className="spinner-border text-primary me-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <span>Generating your learning path...</span>
                    </div>
                  )}
                  {message && (
                    <div className={`alert ${message.includes('Failed') ? 'alert-danger' : 'alert-success'} mt-3`}>
                      {message}
                    </div>
                  )}
                </div>

                {recommendedPath.length > 0 && (
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3 text-center">Your Recommended Learning Path</h5>
                    <div className="row g-2">
                      {recommendedPath.map((course, index) => (
                        <div key={index} className="col-12">
                          <div className="d-flex align-items-center p-3 bg-light rounded">
                            <div 
                              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                              style={{ width: '30px', height: '30px', fontSize: '14px', fontWeight: 'bold' }}
                            >
                              {index + 1}
                            </div>
                            <span className="fw-medium">{course}</span>
                            {index === recommendedPath.length - 1 && (
                              <span className="badge bg-success ms-auto">Target</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <button 
                    className="btn btn-outline-secondary me-3"
                    onClick={() => {
                      setSelectedTarget('');
                      setRecommendedPath([]);
                      setMessage('');
                    }}
                  >
                    Choose Different Target
                  </button>
                  <button 
                    className="btn btn-success px-4"
                    onClick={handleComplete}
                    disabled={!selectedTarget || recommendedPath.length === 0 || loading}
                  >
                    Finish Setup & Go to Dashboard
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

export default Step4_TargetSelector;
