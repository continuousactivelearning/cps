import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useDashboardData } from "../hooks/useDashboardData";
import QuizReview from "./QuizReview";
import { mongoIdToString } from "../utils/mongoIdHelper";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard: React.FC<{ userId: string }> = ({ userId }) => {
  // Mount debug effect
  useEffect(() => {
    console.log("[Dashboard] component mounted");
  }, []);

  const navigate = useNavigate();
  const [selectedTest, setSelectedTest] = useState<any>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  
  const {
    loading,
    error,
    user,
    averageScore,
    conceptCoveragePercent,
    conceptsCovered,
    totalConcepts,
    timeline,
    performanceData,
    testHistory,
    refreshData,
  } = useDashboardData(userId);

  console.log("[Dashboard] testHistory:", testHistory);
  
  // Check if we need to refresh dashboard data (set when completing a course)
  useEffect(() => {
    const needsRefresh = localStorage.getItem('dashboardNeedsRefresh');
    console.log('Dashboard mount/refresh check:', { needsRefresh });
    
    if (needsRefresh === 'true') {
      console.log('Dashboard needs refresh flag detected, refreshing data...');
      refreshData();
      localStorage.removeItem('dashboardNeedsRefresh');
      console.log('Dashboard refresh flag removed');
    }
  }, [refreshData]);

  const handleTestClick = (test: any) => {
    console.log('[Dashboard] handleTestClick - test object:', test);
    setSelectedTest(test);
    setShowReviewModal(true);
  };

  const handleCourseClick = (courseName: string, isLocked: boolean) => {
    console.log('Course clicked:', { courseName, isLocked });
    
    if (isLocked) {
      console.log('Course is locked! User must complete previous course first.');
      alert('Complete the previous course first!');
      return;
    }
    
    if (!courseName) {
      console.error('Course name is required');
      return;
    }
    
    // Get user language from user data (fallback to 'java')
    const userLang = user?.userInfo?.preferredLanguage || 'java';
    const targetUrl = `/users/${userId}/${userLang}/course/${encodeURIComponent(courseName)}`;
    
    console.log('Dashboard navigation:', { 
      userId, 
      userLang, 
      courseName,
      targetUrl,
      userInfo: user?.userInfo,
      courseProgress: user?.courseProgress?.courses?.find((c: any) => 
        c.courseName.toLowerCase() === courseName.toLowerCase()
      )
    });
    
    // Navigate to CourseQuiz component that handles Easy → Medium → Hard progression
    navigate(targetUrl);
  };

  const circumference = 120 * Math.PI;

  if (loading) return <div className="container py-5 text-center">Loading...</div>;
  if (error) return <div className="container py-5 text-danger">{error}</div>;
  if (!user) return null;

  return (
    <div className="bg-light min-vh-100 font-sans text-dark">
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2 fw-bold">Progress Dashboard</h1>
          <button 
            className="btn btn-outline-primary btn-sm" 
            onClick={refreshData}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Refreshing...
              </>
            ) : (
              <>
                <i className="bi bi-arrow-clockwise me-2"></i>
                Refresh
              </>
            )}
          </button>
        </div>
        <p className="fs-5 mb-4">Welcome back, {user.userInfo?.name || 'User'}! Track your DSA learning journey.</p>
        {/* Top summary cards */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6">
            <SummaryCard title="Average Score" value={`${averageScore}%`} subtitle="Learning Path Courses" color="text-primary" />
          </div>
          <div className="col-12 col-md-6">
            <SummaryCard title="Concept Coverage" value={`${conceptCoveragePercent}%`} subtitle={`Concepts: ${conceptsCovered}/${totalConcepts}`} color="text-success" />
          </div>
        </div>
        
        {/* Info Alert for Course Completion Logic */}
        <div className="alert alert-info mb-4 d-flex align-items-center">
          <i className="bi bi-info-circle-fill me-2 fs-4"></i>
          <div>
            <strong>About Course Scores:</strong> When you complete all three difficulty levels of a course, you'll earn at least a passing score of 70 regardless of your actual performance. This ensures your progress along the learning path.
          </div>
        </div>
        
        {/* Progress Timeline */}
        <div className="card shadow-sm rounded-4 p-4 mb-4">
          <h2 className="h5 fw-semibold mb-4">Progress Timeline</h2>
          {timeline && timeline.length > 0 ? (
            <>
              <div className="d-flex align-items-center justify-content-between mb-3 px-3 py-2">
                {timeline.map((concept, idx) => {
                  // Dynamically determine if the concept is locked based on the previous concept's coverage
                  const isLocked = idx > 0 ? !timeline[idx-1].covered : false;
                  
                  // Make sure a course is considered covered if it's explicitly marked as completed
                  const isCovered = concept.covered || concept.status === 'completed';
                  
                  // For debugging any issues with timeline item locking
                  console.log(`Timeline rendering item ${idx}: "${concept.name}"`, {
                    status: concept.status,
                    originalCovered: concept.covered,
                    finalCovered: isCovered,
                    score: concept.score, 
                    isLocked,
                    previousConcept: idx > 0 ? {
                      name: timeline[idx-1].name,
                      covered: timeline[idx-1].covered,
                      status: timeline[idx-1].status
                    } : 'None (first item)'
                  });
                  
                  // Special debug for Arrays course
                  if (concept.name.toLowerCase() === 'arrays') {
                    console.log('🔍 ARRAYS COURSE RENDERING:', {
                      ...concept,
                      isCovered,
                      isLocked,
                      shouldBeClickable: !isLocked
                    });
                  }
                  
                  return (
                    <React.Fragment key={`timeline-item-${idx}-${concept.name}`}>
                      <TimelineDot 
                        label={concept.name || 'Course'} 
                        date={""} 
                        score={concept.score || 0} 
                        covered={isCovered}
                        locked={isLocked}
                        onClick={() => handleCourseClick(concept.name, isLocked)}
                      />
                      {idx < timeline.length - 1 && <TimelineConnector covered={isCovered && timeline[idx + 1]?.covered} />}
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="d-flex align-items-center gap-3 mt-3">
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-success rounded-circle p-2">✓</span>
                  <span className="text-muted small">Completed</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-warning rounded-circle p-2">!</span>
                  <span className="text-muted small">In Progress</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-secondary rounded-circle p-2">○</span>
                  <span className="text-muted small">Not Started</span>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-muted">
              <p>No learning path available. Complete the basic assessment to get started.</p>
            </div>
          )}
        </div>
        {/* Concept Coverage & Performance by Concept */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6 d-flex">
            <div className="card shadow-sm rounded-4 p-4 flex-fill d-flex flex-column align-items-center">
              <h2 className="h5 fw-semibold mb-4">Concept Coverage</h2>
              <div className="position-relative" style={{ width: 144, height: 144 }}>
                <svg width="144" height="144" className="position-absolute top-0 start-0">
                  <circle
                    cx="72"
                    cy="72"
                    r="60"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="72"
                    cy="72"
                    r="60"
                    stroke="#3b82f6"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference * (1 - conceptCoveragePercent / 100)}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.6s" }}
                  />
                </svg>
                <span className="position-absolute top-50 start-50 translate-middle fs-2 fw-bold">{conceptCoveragePercent}%</span>
              </div>
              <div className="mt-2 text-secondary">Concepts Covered</div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex">
            <div className="card shadow-sm rounded-4 p-4 flex-fill d-flex flex-column">
              <h2 className="h5 fw-semibold mb-4">Performance by Concept</h2>
              {performanceData && performanceData.labels && performanceData.labels.length > 0 ? (
                <Bar data={performanceData} options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  scales: { x: { grid: { display: false } }, y: { beginAtZero: true, max: 100 } }
                }} />
              ) : (
                <div className="text-muted text-center">No performance data available</div>
              )}
            </div>
          </div>
        </div>
        {/* Overall Feedback */}
        <div className="card bg-gradient p-4 mb-4 border-0" style={{ background: "linear-gradient(90deg, #e0e7ff 0%, #f3e8ff 100%)" }}>
          <h2 className="h5 fw-semibold mb-2">Overall Feedback</h2>
          <p className="text-primary fw-medium fs-5">💪 Keep learning! Regular practice with fundamentals will build your confidence.</p>
        </div>
        {/* Test History */}
        <div className="card shadow-sm rounded-4 p-4">
          <h2 className="h5 fw-semibold mb-4">Test History</h2>
          {testHistory && testHistory.length > 0 ? (
            testHistory.map((test, idx) => (
              <TestItem 
                key={`test-${idx}-${test.date}-${test.userScore}`}  // Using index + date + score for uniqueness
                name={test.name || 'Quiz'} 
                date={test.date || ''} 
                score={test.userScore || 0} 
                feedback={test.feedback || ''} 
                onClick={() => handleTestClick(test)}
              />
            ))
          ) : (
            <p className="text-muted text-center">No test history available</p>
          )}
        </div>
        
        {/* Quiz Review Modal */}
        {(() => {
          // Only show the modal if a test is selected and the modal flag is true
          return showReviewModal && selectedTest && (
            <QuizReview
              attempt={selectedTest}
              onClose={() => setShowReviewModal(false)}
            />
          );
        })()}
      </div>
    </div>
  );
};

const SummaryCard = ({ title, value, subtitle, color }: { title: string; value: string; subtitle: string; color: string }) => (
  <div className="card shadow-sm rounded-4 p-4 d-flex flex-column align-items-center">
    <h3 className="text-secondary small mb-2">{title}</h3>
    <p className={`fs-2 fw-bold ${color}`}>{value}</p>
    <p className="small text-secondary">{subtitle}</p>
  </div>
);

const TimelineDot = ({ 
  label, 
  date, 
  score, 
  covered, 
  locked, 
  onClick 
}: { 
  label: string; 
  date: string; 
  score: number; 
  covered: boolean; 
  locked: boolean; 
  onClick: () => void 
}) => {
  // Determine if the score is likely a default minimum passing score
  const isLikelyDefaultScore = covered && (score === 70);
  
  // Create a more informative tooltip based on the score situation
  let tooltipText = '';
  if (covered) {
    if (isLikelyDefaultScore) {
      tooltipText = `${label} - Completed (Standard passing score shown)`;
    } else {
      tooltipText = `${label} - Completed with score: ${score}`;
    }
  } else if (locked) {
    tooltipText = `Complete previous concept first`;
  } else {
    tooltipText = `Click to start learning ${label}`;
  }
  
  return (
    <div 
      className="d-flex flex-column align-items-center position-relative" 
      style={{ width: 80, opacity: locked ? 0.5 : 1, cursor: locked ? 'not-allowed' : 'pointer' }}
      onClick={onClick}
      title={tooltipText}
    >
      <div
        className={`rounded-circle d-flex align-items-center justify-content-center mb-2 ${covered ? "bg-success bg-opacity-25 text-success" : "bg-secondary bg-opacity-25 text-secondary"}`}
        style={{ width: 40, height: 40, position: "relative", border: locked ? "2px dashed #adb5bd" : undefined }}
      >
        {covered ? (
          <span style={{ fontSize: 15, fontWeight: 600, lineHeight: 1 }}>
            {score > 0 ? score : '✓'}
          </span>
        ) : (
          <span style={{ fontSize: 15, fontWeight: 600, lineHeight: 1 }}>
            {score > 0 ? score : '-'}
          </span>
        )}
        {locked && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary" style={{ fontSize: 10 }}>
            Locked
          </span>
        )}
        {isLikelyDefaultScore && (
          <span className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill bg-warning" style={{ fontSize: 8 }}>
            Pass
          </span>
        )}
      </div>
      <div className="small fw-semibold text-truncate text-center">{label}</div>
      <div className="text-secondary" style={{ fontSize: 12 }}>{date}</div>
      <div className={`small mt-1 ${covered ? "text-success" : "text-secondary"}`}>
        {covered ? "Completed" : locked ? "Locked" : "Not Started"}
      </div>
    </div>
  );
};

const TimelineConnector = ({ covered }: { covered: boolean }) => (
  <div className="d-flex align-items-center justify-content-center" style={{ width: 16 }}>
    <div style={{ height: 4, width: 12, background: covered ? "#198754" : "#dee2e6", borderRadius: 2 }} />
  </div>
);

const TestItem = ({ name, date, score, feedback, onClick }: { name: string; date: string; score: number; feedback: string; onClick?: () => void }) => (
  <div 
    className={`border-top py-3 d-flex justify-content-between align-items-center ${onClick ? 'cursor-pointer' : ''}`}
    onClick={onClick}
    style={{ cursor: onClick ? 'pointer' : 'default' }}
  >
    <div>
      <p className="fw-semibold mb-1">{typeof name === 'string' ? name : 'Quiz'}</p>
      <p className="small text-secondary mb-0">{date ? new Date(date).toLocaleDateString() : 'No date'}</p>
    </div>
    <div className="text-end">
      <p className={`fw-bold fs-5 mb-1 ${score >= 80 ? "text-success" : score >= 50 ? "text-warning" : "text-danger"}`}>{typeof score === 'number' ? score : 0}</p>
      <p className="small text-secondary mb-0">{typeof feedback === 'string' ? feedback : 'No feedback'}</p>
    </div>
  </div>
);

// Removed ReviewModal component as QuizReview is now used for quiz review modals

export default Dashboard;