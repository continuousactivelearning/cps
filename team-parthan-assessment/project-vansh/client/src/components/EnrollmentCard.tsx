import React, { useState } from 'react';
import { User, CheckCircle, AlertCircle } from 'lucide-react';
import Loading from './Loading'; 
import api from '../services/api';

interface Props {
  user: {
    role: string;
    enrolledUnder?: string;
  } | null;
}

const InstructorEnrollmentCard: React.FC<Props> = ({ user }) => {
  const [instructorCode, setInstructorCode] = useState('');
  const [enrolling, setEnrolling] = useState(false);
  const [enrollmentStatus, setEnrollmentStatus] = useState<null | { type: 'success' | 'error'; message: string }>(null);

  const handleEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnrolling(true);
    setEnrollmentStatus(null);
    try {
      await api.post('/student/enroll', { instructorCode });
      setEnrollmentStatus({ type: 'success', message: 'Enrolled successfully' });
    } catch (err: any) {
      setEnrollmentStatus({ type: 'error', message: err.response?.data?.error || 'Enrollment failed' });
    } finally {
      setEnrolling(false);
    }
  };

  if (user?.role !== 'student') return null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-4">
        <User className="h-6 w-6 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Instructor Enrollment</h3>
      </div>

      {user?.enrolledUnder ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-green-800">Enrolled Successfully</p>
              <p className="text-sm text-green-700 mt-1">
                You are enrolled under instructor code:
                <span className="font-mono font-bold ml-1">{user.enrolledUnder}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-4">
            Enter your instructor's code to enroll in their courses and submit concerns.
          </p>
          <form onSubmit={handleEnrollment} className="space-y-4">
            <div>
              <label htmlFor="instructor-code" className="block text-sm font-medium text-gray-700 mb-2">
                Instructor Code
              </label>
              <input
                id="instructor-code"
                type="text"
                value={instructorCode}
                onChange={(e) => setInstructorCode(e.target.value.toUpperCase())}
                placeholder="Enter instructor code (e.g., INST2024)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                required
              />
            </div>

            {enrollmentStatus && (
              <div className={`p-3 rounded-lg ${
                enrollmentStatus.type === 'success'
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-start space-x-2">
                  {enrollmentStatus.type === 'success' ? (
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <p className={`text-sm ${
                    enrollmentStatus.type === 'success' ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {enrollmentStatus.message}
                  </p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={enrolling}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
            >
              {enrolling ? (
                <>
                  <Loading isVisible={false} />
                  <span>Enrolling...</span>
                </>
              ) : (
                <span>Enroll Now</span>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default InstructorEnrollmentCard;
