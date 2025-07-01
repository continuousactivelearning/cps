import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  dashboard: any;
}

const Step5_Summary: React.FC<Props> = ({ dashboard }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h4>Initial Setup Summary</h4>
      <ul>
        <li><strong>Basic Quiz Score:</strong> {dashboard.quizzes && dashboard.quizzes[0]?.userScore || 'Not Available'}</li>
        <li><strong>Known Concepts:</strong> {dashboard.courses && dashboard.courses.filter((c: any) => c.status === 'completed').map((c: any) => c.courseName).join(', ')}</li>
        <li><strong>Target Concept:</strong> {dashboard.courses && dashboard.courses.find((c: any) => c.status === 'target')?.courseName || 'Not set'}</li>
        <li><strong>Selected Path:</strong> {dashboard.courses && dashboard.courses.filter((c: any) => c.status === 'pending').map((c: any) => c.courseName).join(' → ')}</li>
      </ul>
      <button className="btn btn-success" onClick={() => navigate('/dashboard')}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default Step5_Summary;
