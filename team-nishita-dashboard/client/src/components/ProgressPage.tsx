import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import ProgressBar from './ProgressBar';
import ProgressTracker from './ProgressTracker';
import CircularProgress from './CircularProgress';
import { useTheme } from '../contexts/ThemeContext';
import { useProgressStore } from '../store/zustand/progressStore';
import { BookOpen, Award, Clock, Medal, BarChart3 } from 'lucide-react';

const DUMMY_SUMMARY = {
  totalLessonsCompleted: 3,
  totalQuizzesTaken: 2,
  totalStudyTime: 90,
  totalPointsEarned: 50,
  totalCheckIns: 2,
  currentStreak: 1,
  totalPoints: 50,
  loginStreak: 1,
};

const DUMMY_STATS = [
  { _id: '2025-07-01', lessonsCompleted: 1, quizzesTaken: 1, studyTime: 30, pointsEarned: 10, checkIns: 1 },
  { _id: '2025-07-02', lessonsCompleted: 0, quizzesTaken: 0, studyTime: 20, pointsEarned: 5, checkIns: 0 },
  { _id: '2025-07-03', lessonsCompleted: 1, quizzesTaken: 1, studyTime: 25, pointsEarned: 15, checkIns: 1 },
  { _id: '2025-07-04', lessonsCompleted: 1, quizzesTaken: 0, studyTime: 15, pointsEarned: 10, checkIns: 0 },
  { _id: '2025-07-05', lessonsCompleted: 0, quizzesTaken: 0, studyTime: 0, pointsEarned: 0, checkIns: 0 },
  { _id: '2025-07-06', lessonsCompleted: 0, quizzesTaken: 0, studyTime: 0, pointsEarned: 0, checkIns: 0 },
  { _id: '2025-07-07', lessonsCompleted: 0, quizzesTaken: 0, studyTime: 0, pointsEarned: 0, checkIns: 0 },
];

const isEmptySummary = (summary: any) => {
  if (!summary) return true;
  // Consider empty if all values are 0
  return Object.values(summary).every((v) => v === 0);
};

const MILESTONES = [
  { label: 'First Quiz', achieved: (summary: any) => summary.totalQuizzesTaken > 0 },
  { label: '5 Lessons', achieved: (summary: any) => summary.totalLessonsCompleted >= 5 },
  { label: '7-Day Streak', achieved: (summary: any) => summary.loginStreak >= 7 },
  { label: '100 Points', achieved: (summary: any) => summary.totalPoints >= 100 },
];

const ProgressPage: React.FC = () => {
  const { darkMode } = useTheme();
  const { 
    progressSummary: summary, 
    dailyStats, 
    loading, 
    fetchProgressSummary, 
    fetchProgressStats 
  } = useProgressStore();

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        await Promise.all([
          fetchProgressSummary(),
          fetchProgressStats()
        ]);
      } catch (error) {
        console.error('Error fetching progress data:', error);
      }
    };
    fetchProgressData();
  }, [fetchProgressSummary, fetchProgressStats]);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  // Use dummy data if summary is empty
  const summaryToShow = isEmptySummary(summary) ? DUMMY_SUMMARY : (summary || DUMMY_SUMMARY);
  const statsToShow = (dailyStats && dailyStats.length > 0) ? dailyStats : DUMMY_STATS;

  const calculateOverallProgress = () => {
    if (!summaryToShow) return 0;
    const totalActivities = summaryToShow.totalLessonsCompleted + summaryToShow.totalQuizzesTaken;
    const maxActivities = 100; // Assuming 100 activities is 100% progress
    return Math.min((totalActivities / maxActivities) * 100, 100);
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24 bg-[#181A20] min-h-screen">
        <div className="mb-20 mt-8">
          <h1 className="text-3xl font-extrabold text-white mb-8 tracking-tight">
            Your Learning Progress
          </h1>
          <p className="text-gray-400 text-lg">
            Continue your learning journey and celebrate your achievements
          </p>
        </div>

        {/* Modern Stat Cards - horizontally scrollable on small screens */}
        <div className="flex gap-12 md:gap-20 mb-32 mt-16 px-4 md:px-20 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {/* Blue (primary) */}
          <div className="rounded-2xl shadow-lg p-10 flex flex-col items-center bg-gradient-to-br from-blue-700 to-blue-400 bg-opacity-90 min-w-[260px] max-w-[320px] mx-2">
            <BookOpen size={48} className="mb-4 text-blue-200" />
            <div className="text-3xl font-bold text-white mb-2">{summaryToShow.totalLessonsCompleted}</div>
            <div className="text-md font-medium text-blue-100">Lessons Completed</div>
          </div>
          {/* Teal (secondary) */}
          <div className="rounded-2xl shadow-lg p-10 flex flex-col items-center bg-gradient-to-br from-teal-700 to-teal-400 bg-opacity-90 min-w-[260px] max-w-[320px] mx-2">
            <Award size={48} className="mb-4 text-teal-200" />
            <div className="text-3xl font-bold text-white mb-2">{summaryToShow.totalQuizzesTaken}</div>
            <div className="text-md font-medium text-teal-100">Quizzes Taken</div>
          </div>
          {/* Purple (secondary) */}
          <div className="rounded-2xl shadow-lg p-10 flex flex-col items-center bg-gradient-to-br from-purple-700 to-purple-400 bg-opacity-90 min-w-[260px] max-w-[320px] mx-2">
            <Clock size={48} className="mb-4 text-purple-200" />
            <div className="text-3xl font-bold text-white mb-2">{formatTime(summaryToShow.totalStudyTime)}</div>
            <div className="text-md font-medium text-purple-100">Study Time</div>
          </div>
          {/* Orange/Yellow (secondary) */}
          <div className="rounded-2xl shadow-lg p-10 flex flex-col items-center bg-gradient-to-br from-orange-600 to-yellow-400 bg-opacity-90 min-w-[260px] max-w-[320px] mx-2">
            <Medal size={48} className="mb-4 text-yellow-200" />
            <div className="text-3xl font-bold text-white mb-2">{summaryToShow.totalPoints}</div>
            <div className="text-md font-medium text-yellow-100">Total Points</div>
          </div>
        </div>

        {/* Animated Circular Progress Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-32 mb-32 mt-24 px-4 md:px-20">
          <div className="flex flex-col items-center p-6">
            <CircularProgress progress={calculateOverallProgress()} size={200} strokeWidth={18} color="#60a5fa" label="Overall" />
            <span className="mt-10 text-blue-200 font-semibold text-xl">Overall Progress</span>
          </div>
          <div className="flex flex-col items-center p-6">
            <CircularProgress progress={(summaryToShow.currentStreak / Math.max(summaryToShow.loginStreak, 1)) * 100} size={200} strokeWidth={18} color="#f59e42" label="Streak" />
            <span className="mt-10 text-orange-200 font-semibold text-xl">Current Streak: {summaryToShow.currentStreak}</span>
          </div>
          <div className="flex flex-col items-center p-6">
            <CircularProgress progress={(summaryToShow.totalCheckIns / 30) * 100} size={200} strokeWidth={18} color="#38bdf8" label="Check-ins" />
            <span className="mt-10 text-cyan-200 font-semibold text-xl">Check-ins: {summaryToShow.totalCheckIns}</span>
          </div>
        </div>

        {/* Custom Bar Chart for Activity */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-20 mb-32 mt-24 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-purple-200 mb-12 flex items-center justify-center">
            <BarChart3 size={28} className="mr-4 text-purple-200" /> Daily Activity (Last 7 Days)
          </h3>
          <div className="relative w-full max-w-5xl mx-auto px-8">
            {/* Dynamic Y Axis */}
            {(() => {
              const studyTimes = statsToShow.slice(-7).map(day => day.studyTime);
              const maxMinutes = Math.max(...studyTimes, 60);
              let yTicks = [];
              let barMax = 400;
              let yLabels = [];
              let isHour = maxMinutes >= 60;
              if (isHour) {
                // Use hours
                const maxHours = Math.ceil(maxMinutes / 60);
                for (let h = maxHours; h >= 0; h--) {
                  yTicks.push(h);
                  yLabels.push(h + 'h');
                }
              } else {
                // Use minutes
                const step = 10;
                for (let m = Math.ceil(maxMinutes / step) * step; m >= 0; m -= step) {
                  yTicks.push(m);
                  yLabels.push(m + 'm');
                }
              }
              return (
                <>
                  <div className="absolute left-0 top-0 bottom-10 flex flex-col justify-between h-[28rem] z-10 pointer-events-none">
                    {yLabels.map((label, i) => (
                      <div key={label} className="text-blue-300 text-sm font-semibold" style={{height: '0'}}>
                        {label}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-end gap-24 h-[28rem] w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 justify-center pl-12">
                    {statsToShow.slice(-7).map((day, idx) => {
                      let value = isHour ? day.studyTime / 60 : day.studyTime;
                      let maxValue = isHour ? Math.max(...studyTimes, 60) / 60 : Math.max(...studyTimes, 60);
                      if (maxValue === 0) maxValue = 1;
                      const barHeight = (value / maxValue) * barMax;
                      return (
                        <div key={idx} className="flex flex-col items-center group">
                          <div
                            className="w-32 rounded-t-2xl bg-gradient-to-t from-blue-400 to-purple-400 transition-all duration-500 relative shadow-xl"
                            style={{ height: `${barHeight}px` }}
                          >
                            <div className="absolute bottom-full mb-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none text-base bg-gray-900 text-white px-8 py-4 rounded shadow-lg z-10">
                              {`${day.lessonsCompleted} lessons, ${day.quizzesTaken} quizzes, ${formatTime(day.studyTime)} study`}
                            </div>
                          </div>
                          {/* X Axis label */}
                          <span className="text-lg text-blue-200 mt-6 font-semibold">
                            {new Date(day._id).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  {/* X Axis line */}
                  <div className="absolute left-0 right-0 bottom-10 h-0.5 bg-blue-900 opacity-60 z-0" />
                </>
              );
            })()}
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="mb-32 mt-32 flex justify-center w-full">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-lg px-16 py-24 max-w-full w-full flex flex-col gap-12 items-center">
            <h2 className="text-2xl font-bold text-blue-200 mb-8">Your Latest Progress (Sample Data)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
              <div className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-8 w-full">
                <span className="text-4xl font-extrabold text-blue-300 mb-2">{DUMMY_SUMMARY.totalLessonsCompleted}</span>
                <span className="text-lg text-blue-100">Lessons Completed</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-8 w-full">
                <span className="text-4xl font-extrabold text-teal-300 mb-2">{DUMMY_SUMMARY.totalQuizzesTaken}</span>
                <span className="text-lg text-teal-100">Quizzes Taken</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-8 w-full">
                <span className="text-4xl font-extrabold text-purple-300 mb-2">{formatTime(DUMMY_SUMMARY.totalStudyTime)}</span>
                <span className="text-lg text-purple-100">Study Time</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-8 w-full">
                <span className="text-4xl font-extrabold text-yellow-300 mb-2">{DUMMY_SUMMARY.totalPoints}</span>
                <span className="text-lg text-yellow-100">Total Points</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-8 w-full">
                <span className="text-4xl font-extrabold text-orange-300 mb-2">{DUMMY_SUMMARY.currentStreak}</span>
                <span className="text-lg text-orange-100">Current Streak</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-8 w-full">
                <span className="text-4xl font-extrabold text-cyan-300 mb-2">{DUMMY_SUMMARY.totalCheckIns}</span>
                <span className="text-lg text-cyan-100">Check-ins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProgressPage;
