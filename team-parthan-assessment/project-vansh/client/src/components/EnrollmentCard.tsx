import React, { use, useState } from 'react';
import { User, CheckCircle, AlertCircle, UserPlus, Code, BookOpen, Sparkles } from 'lucide-react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

interface Props {
  user: {
    role: string;
    enrolledUnder?: string;
  } | null;
  setUser: (user: any) => void;
}


const InstructorEnrollmentCard: React.FC<Props> = ({ user, setUser }) => {
  const [instructorCode, setInstructorCode] = useState('');
  const [enrolling, setEnrolling] = useState(false);
  const [enrollmentStatus, setEnrollmentStatus] = useState<null | { type: 'success' | 'error'; message: string }>(null);

  const handleEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnrolling(true);
    setEnrollmentStatus(null);
    try {
      await api.post('/student/enroll', { instructorCode });
      setEnrollmentStatus({ type: 'success', message: 'Enrolled successfully! You can now access your instructor\'s courses.' });
      setUser((prev: any) => ({
  ...prev,
  enrolledUnder: instructorCode.toUpperCase() ,
}));
    } catch (err: any) {
      setEnrollmentStatus({ type: 'error', message: err.response?.data?.error || 'Enrollment failed. Please check your instructor code.' });
    } finally {
      setEnrolling(false);
    }
  };

  if (user?.role !== 'student') return null;

  function unenroll(): void {
    const confirmation = window.confirm('Are you sure you want to unenroll? This action cannot be undone.');
    if (confirmation) {
      api.put('/student/unenroll')
        .then(() => {
          setEnrollmentStatus({ type: 'success', message: 'You have successfully unenrolled from your instructor.' });
          setUser((prev: any) => ({
  ...prev,
  enrolledUnder: undefined ,
}));
        })
        .catch((err: any) => {
          setEnrollmentStatus({ type: 'error', message: err.response?.data?.error || 'Unenrollment failed. Please try again.' });
        });
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 transition-all duration-300 hover:shadow-xl">
      {/* Header with gradient background */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-xl -z-10"></div>
        <div className="flex items-center space-x-4 p-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
            <UserPlus className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Instructor Enrollment</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Connect with your instructor</p>
          </div>
        </div>
      </div>

      {user?.enrolledUnder ? (
        /* Success State - Already Enrolled */
        <div className="relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-100 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
          
          <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border border-green-200 dark:border-green-800 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-semibold text-green-800 dark:text-green-200">Successfully Enrolled!</h4>
                  <Sparkles className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-green-700 dark:text-green-300 mb-3">
                  You are now connected to your instructor's learning system.
                </p>
                
                {/* Instructor Code Display */}
                <div className="bg-white dark:bg-gray-800/50 rounded-lg p-4 border border-green-200 dark:border-green-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Instructor Code:</span>
                    </div>
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-lg font-mono font-bold text-sm">
                      {user.enrolledUnder}
                    </div>
                  </div>
                </div>

                <button
                  onClick={unenroll}
                  className="mt-4 flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 md:px-4 py-2 rounded-lg transition-colors"
                >
                  Unenrol
                </button>


                {/* Features Available */}
                <div className="mt-4">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">You can now:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-300">
                      <BookOpen className="h-3 w-3" />
                      <span>Access course materials</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-300">
                      <AlertCircle className="h-3 w-3" />
                      <span>Submit quiz concerns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Enrollment Form */
        <div className="space-y-6">
          {/* Description with better styling */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
                <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-blue-900 dark:text-blue-100 font-medium mb-1">Ready to get started?</p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Enter your instructor's unique code to join their course and unlock access to personalized learning materials.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleEnrollment} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="instructor-code" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Instructor Code
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Code className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="instructor-code"
                  type="text"
                  value={instructorCode}
                  onChange={(e) => setInstructorCode(e.target.value.toUpperCase())}
                  placeholder="INST2024"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-lg tracking-wider transition-all duration-200"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                Code will be automatically converted to uppercase
              </p>
            </div>

            {/* Status Messages */}
            {enrollmentStatus && (
              <div className={`p-4 rounded-xl border transition-all duration-300 ${
                enrollmentStatus.type === 'success'
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
              }`}>
                <div className="flex items-start space-x-3">
                  <div className={`p-1 rounded-full ${
                    enrollmentStatus.type === 'success' 
                      ? 'bg-green-100 dark:bg-green-900/50' 
                      : 'bg-red-100 dark:bg-red-900/50'
                  }`}>
                    {enrollmentStatus.type === 'success' ? (
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${
                      enrollmentStatus.type === 'success' 
                        ? 'text-green-800 dark:text-green-200' 
                        : 'text-red-800 dark:text-red-200'
                    }`}>
                      {enrollmentStatus.message}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={enrolling || !instructorCode.trim()}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100"
            >
              {enrolling ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Enrolling...</span>
                </>
              ) : (
                <>
                  <UserPlus className="h-4 w-4" />
                  <span>Enroll Now</span>
                </>
              )}
            </button>

            {/* Helper Text */}
            <div className="text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Don't have an instructor code? Contact your instructor to get started.
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default InstructorEnrollmentCard;