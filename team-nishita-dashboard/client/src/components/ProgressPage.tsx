import React, { useEffect } from 'react';
import Layout from './Layout';
// import ProgressBar from './ProgressBar';
// import ProgressTracker from './ProgressTracker';
import CircularProgress from './CircularProgress';
import { useTheme } from '../contexts/ThemeContext';
import { BookOpen, Award, Clock, Medal, BarChart3 } from 'lucide-react';
import { useProgressStore } from '../store/zustand/progressStore';
import type { ProgressSummary } from '../api/api';

const DUMMY_SUMMARY: ProgressSummary = {
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

// const isEmptySummary = (summary: any) => {
//   if (!summary) return true;
//   return Object.values(summary).every((v) => v === 0);
// };

// const MILESTONES = [
//   { label: 'First Quiz', achieved: (summary: any) => summary.totalQuizzesTaken > 0 },
//   { label: '5 Lessons', achieved: (summary: any) => summary.totalLessonsCompleted >= 5 },
//   { label: '7-Day Streak', achieved: (summary: any) => summary.loginStreak >= 7 },
//   { label: '100 Points', achieved: (summary: any) => summary.totalPoints >= 100 },
// ];

const ProgressPage: React.FC = () => {
  const { darkMode } = useTheme();
  const {
    progressSummary: realSummary,
    dailyStats: realStats,
    loading,
    fetchProgressSummary,
    fetchProgressStats
  } = useProgressStore();

  useEffect(() => {
    fetchProgressSummary();
    fetchProgressStats();
  }, [fetchProgressSummary, fetchProgressStats]);

  const summaryToShow: ProgressSummary = (realSummary == null) ? DUMMY_SUMMARY : realSummary;
  const statsToShow = (realStats && realStats.length > 0 && realSummary != null) ? realStats : DUMMY_STATS;

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const calculateOverallProgress = () => {
    if (!summaryToShow) return 0;
    const totalActivities = summaryToShow.totalLessonsCompleted + summaryToShow.totalQuizzesTaken;
    const maxActivities = 100;
    return Math.min((totalActivities / maxActivities) * 100, 100);
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-12 h-12 rounded-full border-b-2 border-blue-500 animate-spin"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        className={`max-w-7xl mx-auto min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-[#181A20]' : 'bg-gradient-to-br from-white to-blue-50'
          }`}
        style={{
          paddingTop: 64,
          paddingLeft: 48,
          paddingRight: 48,
        }}
      >
        {/* Header Section */}
        <div className="flex flex-col items-center" style={{ marginTop: 48, marginBottom: 24 }}>
          <h1
            className="text-3xl font-extrabold tracking-tight text-center text-white"
            style={{ marginBottom: 16, paddingTop: 12, paddingBottom: 12 }}
          >
            Your Learning Progress
          </h1>
          <p
            className="text-lg text-center text-gray-400"
            style={{ marginBottom: 24, paddingLeft: 12, paddingRight: 12 }}
          >
            Continue your learning journey and celebrate your achievements
          </p>
        </div>

        {/* Stat Cards Section - Responsive grid, no horizontal scroll */}
        <div className="px-6 mt-24 mb-56 md:px-24">
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:gap-24 lg:grid-cols-4">
            {[
              {
                icon: <BookOpen size={32} className={`${darkMode ? 'text-pink-100' : 'text-blue-700'} mb-4`} />,
                value: summaryToShow.totalLessonsCompleted,
                label: 'Lessons Completed',
                bgLight: 'bg-gradient-to-br from-[#dbeafe] to-[#60a5fa]',
                textColorLight: 'text-blue-900',
                subTextColorLight: 'text-blue-700/80',
                gradientDark: 'from-[#d946ef] to-[#701a75]',
                textColorDark: 'text-pink-100',
                subTextColorDark: 'text-pink-200',
              },
              {
                icon: <Award size={32} className={`${darkMode ? 'text-teal-100' : 'text-teal-700'} mb-4`} />,
                value: summaryToShow.totalQuizzesTaken,
                label: 'Quizzes Taken',
                bgLight: 'bg-gradient-to-br from-[#ccfbf1] to-[#2dd4bf]',
                textColorLight: 'text-teal-900',
                subTextColorLight: 'text-teal-700/80',
                gradientDark: 'from-[#5eead4] to-[#134e4a]',
                textColorDark: 'text-teal-100',
                subTextColorDark: 'text-teal-200',
              },
              {
                icon: <Clock size={32} className={`${darkMode ? 'text-blue-100' : 'text-purple-700'} mb-4`} />,
                value: formatTime(summaryToShow.totalStudyTime),
                label: 'Study Time',
                bgLight: 'bg-gradient-to-br from-[#ede9fe] to-[#a78bfa]',
                textColorLight: 'text-purple-900',
                subTextColorLight: 'text-purple-700/80',
                gradientDark: 'from-[#60a5fa] to-[#1e3a8a]',
                textColorDark: 'text-blue-100',
                subTextColorDark: 'text-blue-200',
              },
              {
                icon: <Medal size={32} className={`${darkMode ? 'text-yellow-100' : 'text-yellow-700'} mb-4`} />,
                value: summaryToShow.totalPoints,
                label: 'Total Points',
                bgLight: 'bg-gradient-to-br from-[#fef9c3] to-[#fde68a]',
                textColorLight: 'text-yellow-900',
                subTextColorLight: 'text-yellow-700/80',
                gradientDark: 'from-[#fde68a] to-[#a16207]',
                textColorDark: 'text-yellow-100',
                subTextColorDark: 'text-yellow-200',
              },
            ].map((card) => (
              <div
                key={card.label}
                className={`rounded-lg shadow-2xl p-10 flex flex-col items-center transition-colors duration-300 animate-fade-in \
                  hover:scale-105 \
                  ${darkMode ? 'hover:shadow-[0_16px_64px_0_rgba(255,255,255,0.18)]' : 'hover:shadow-[0_16px_64px_0_rgba(80,80,160,0.18)]'} \
                  transition-transform transition-shadow duration-300 \
                  ${darkMode ? `bg-gradient-to-br ${card.gradientDark}` : card.bgLight}`}
              >
                {card.icon}
                <div className={`text-3xl font-bold mb-2 ${darkMode ? card.textColorDark : card.textColorLight}`}>
                  {card.value}
                </div>
                <div className={`text-md font-medium ${darkMode ? card.subTextColorDark : card.subTextColorLight}`}>
                  {card.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Circular Progress Section */}
        <div className="flex flex-col gap-24 justify-center items-center px-6 mt-40 mb-56 md:flex-row md:px-24 animate-fade-in">
          <div className="flex flex-col items-center p-6">
            <CircularProgress progress={calculateOverallProgress()} size={150} strokeWidth={28} color={darkMode ? "#1e3a8a" : "#60a5fa"} label="Overall" trackColor={!darkMode ? "#dbeafe" : undefined} />
            <span className="mt-10 text-xl font-semibold text-blue-200">Overall Progress</span>
          </div>
          <div className="flex flex-col items-center p-6">
            <CircularProgress
              progress={(summaryToShow.currentStreak / Math.max(summaryToShow.loginStreak, 1)) * 100}
              size={150}
              strokeWidth={28}
              color={darkMode ? "#a16207" : "#f59e42"}
              label="Streak"
              trackColor={!darkMode ? "#fef9c3" : undefined}
            />
            <span className="mt-10 text-xl font-semibold text-orange-200">
              Current Streak: {summaryToShow.currentStreak}
            </span>
          </div>
          <div className="flex flex-col items-center p-6">
            <CircularProgress
              progress={(summaryToShow.totalCheckIns / 30) * 100}
              size={150}
              strokeWidth={28}
              color={darkMode ? "#134e4a" : "#38bdf8"}
              label="Check-ins"
              trackColor={!darkMode ? "#ccfbf1" : undefined}
            />
            <span className="mt-10 text-xl font-semibold text-cyan-200">
              Check-ins: {summaryToShow.totalCheckIns}
            </span>
          </div>
        </div>

        {/* Bar Chart Section */}
        <div
          className={`rounded-2xl shadow-lg p-24 mb-48 mt-40 flex flex-col items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-white to-blue-50 border border-blue-100'
            }`}
        >
          <h3
            className={`text-5xl font-extrabold mb-16 mt-24 flex items-center justify-center ${darkMode ? 'text-purple-200' : 'text-purple-700'
              }`}
            style={{
              letterSpacing: '0.05em',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            <BarChart3 size={56} className={`mr-8 ${darkMode ? 'text-purple-200' : 'text-purple-400'}`} />
            Daily Activity (Last 7 Days)
          </h3>
          <div className="relative px-2 mx-auto w-full max-w-4xl">
            {/* Improved Bar Chart */}
            {(() => {
              const studyTimes = statsToShow.slice(-7).map(day => day.studyTime);
              const maxMinutes = Math.max(...studyTimes, 60);
              const yLabels = [];
              const yStep = 15;
              for (let m = Math.ceil(maxMinutes / yStep) * yStep; m >= 0; m -= yStep) {
                if (m % 60 === 0 && m !== 0) {
                  yLabels.push(`${m / 60}h`);
                } else if (m !== 0) {
                  yLabels.push(`${m}m`);
                } else {
                  yLabels.push('0m');
                }
              }
              return (
                <div className="flex w-full">
                  {/* Y Axis */}
                  <div className="flex flex-col justify-between mr-2 h-96">
                    {yLabels.map((label) => (
                      <div
                        key={label}
                        className={`font-semibold ${label.includes('h') ? (darkMode ? 'text-base text-purple-300' : 'text-base text-purple-400') : (darkMode ? 'text-xs text-blue-300' : 'text-xs text-blue-400')}`}
                        style={{ height: '0' }}
                      >
                        {label}
                      </div>
                    ))}
                  </div>

                  <div className="flex overflow-x-auto gap-24 justify-center items-end pl-32 w-full h-[28rem] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-blue-50">
                    {statsToShow.slice(-7).map((day, idx) => {
                      const value = day.studyTime;
                      let maxValue = Math.max(...studyTimes, 60);
                      if (maxValue === 0) maxValue = 1;
                      const barHeight = (value / maxValue) * 320;
                      return (
                        <div key={idx} className="flex flex-col items-center w-14 group">
                          <div
                            className={`w-32 rounded-t-2xl transition-all duration-500 relative shadow-xl bg-gradient-to-t ${darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-200 to-purple-100'
                              }`}
                            style={{ height: `${barHeight}px` }}
                          >
                            <div
                              className={`absolute bottom-full left-1/2 -translate-x-1/2 transform opacity-0 group-hover:opacity-100 pointer-events-none text-sm px-4 py-2 rounded shadow-lg z-10 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 border border-blue-100'
                                }`}
                              style={{ marginBottom: '1rem' }}
                            >
                              {`${day.lessonsCompleted} lessons, ${day.quizzesTaken} quizzes, ${formatTime(day.studyTime)} study`}
                            </div>
                          </div>

                          {/* X Axis label */}
                          <span className={`mt-4 font-semibold ${darkMode ? 'text-blue-200 text-sm' : 'text-blue-700 text-base'
                            }`}>
                            {new Date(day._id).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* X Axis line */}
                  <div className={`absolute left-0 right-0 bottom-10 h-0.5 z-0 ${darkMode ? 'bg-blue-900 opacity-60' : 'bg-blue-200 opacity-60'}`} />
                </div>
              );
            })()}
          </div>
        </div>

        {/* Space after graph for stats */}
        <div style={{ height: 32 }} />

        {/* Progress Tracker */}
        <div className="flex justify-center mt-24 mb-32 w-full">
          <div className={`rounded-2xl shadow-lg px-8 py-12 max-w-full w-full flex flex-col gap-10 items-center 
      ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700' : ''}`}>
            <h2 className={`text-3xl font-extrabold tracking-tight text-center mb-4 
              ${darkMode ? 'text-blue-200' : 'text-gray-900'}`}>
              Your Latest Progress (Sample Data)
            </h2>

            <div className="grid grid-cols-1 gap-8 w-full md:grid-cols-2">
              {/* Lessons Completed */}
              <div
                className={`flex flex-col items-center justify-center rounded-xl p-4 w-full transition-colors duration-300 ${darkMode ? '' : 'bg-blue-200/40'}`}
                style={
                  darkMode
                    ? {
                      color: '#e0e7ef',
                      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
                      borderRadius: 18,
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 80,
                      padding: '24px 16px',
                    }
                    : undefined
                }
              >
                <span className={`font-extrabold mt-1 ${darkMode ? 'text-2xl' : 'text-4xl text-blue-700'}`} style={darkMode ? { color: '#7dd3fc' } : undefined}>
                  {DUMMY_SUMMARY.totalLessonsCompleted}
                </span>
                <span className={`${darkMode ? 'text-md' : 'text-lg text-blue-900/80'} mt-1`} style={darkMode ? { color: '#d1d5db' } : undefined}>
                  Lessons Completed
                </span>
              </div>

              {/* Quizzes Taken */}
              <div
                className={`flex flex-col items-center justify-center rounded-xl p-4 w-full transition-colors duration-300 ${darkMode ? '' : 'bg-teal-200/40'}`}
                style={
                  darkMode
                    ? {
                      color: '#e0e7ef',
                      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
                      borderRadius: 18,
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 80,
                      padding: '24px 16px',
                    }
                    : undefined
                }
              >
                <span className={`font-extrabold mt-1 ${darkMode ? 'text-2xl' : 'text-4xl text-teal-700'}`} style={darkMode ? { color: '#6ee7b7' } : undefined}>
                  {DUMMY_SUMMARY.totalQuizzesTaken}
                </span>
                <span className={`${darkMode ? 'text-md' : 'text-lg text-teal-900/80'} mt-1`} style={darkMode ? { color: '#d1d5db' } : undefined}>
                  Quizzes Taken
                </span>
              </div>

              {/* Study Time */}
              <div
                className={`flex flex-col items-center justify-center rounded-xl p-4 w-full transition-colors duration-300 ${darkMode ? '' : 'bg-purple-200/40'}`}
                style={
                  darkMode
                    ? {
                      color: '#e0e7ef',
                      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
                      borderRadius: 18,
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 80,
                      padding: '24px 16px',
                    }
                    : undefined
                }
              >
                <span className={`font-extrabold mt-1 ${darkMode ? 'text-2xl' : 'text-4xl text-purple-700'}`} style={darkMode ? { color: '#c4b5fd' } : undefined}>
                  {formatTime(DUMMY_SUMMARY.totalStudyTime)}
                </span>
                <span className={`${darkMode ? 'text-md' : 'text-lg text-purple-900/80'} mt-1`} style={darkMode ? { color: '#d1d5db' } : undefined}>
                  Study Time
                </span>
              </div>

              {/* Total Points */}
              <div
                className={`flex flex-col items-center justify-center rounded-xl p-4 w-full transition-colors duration-300 ${darkMode ? '' : 'bg-yellow-200/40'}`}
                style={
                  darkMode
                    ? {
                      color: '#e0e7ef',
                      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
                      borderRadius: 18,
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 80,
                      padding: '24px 16px',
                    }
                    : undefined
                }
              >
                <span className={`font-extrabold mt-1 ${darkMode ? 'text-2xl' : 'text-4xl text-yellow-700'}`} style={darkMode ? { color: '#fde68a' } : undefined}>
                  {DUMMY_SUMMARY.totalPoints}
                </span>
                <span className={`${darkMode ? 'text-md' : 'text-lg text-yellow-900/80'} mt-1`} style={darkMode ? { color: '#d1d5db' } : undefined}>
                  Total Points
                </span>
              </div>

              {/* Current Streak */}
              <div
                className={`flex flex-col items-center justify-center rounded-xl p-4 w-full transition-colors duration-300 ${darkMode ? '' : 'bg-orange-200/40'}`}
                style={
                  darkMode
                    ? {
                      color: '#e0e7ef',
                      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
                      borderRadius: 18,
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 80,
                      padding: '24px 16px',
                    }
                    : undefined
                }
              >
                <span className={`font-extrabold mt-1 ${darkMode ? 'text-2xl' : 'text-4xl text-orange-700'}`} style={darkMode ? { color: '#fdba74' } : undefined}>
                  {DUMMY_SUMMARY.currentStreak}
                </span>
                <span className={`${darkMode ? 'text-md' : 'text-lg text-orange-900/80'} mt-1`} style={darkMode ? { color: '#d1d5db' } : undefined}>
                  Current Streak
                </span>
              </div>

              {/* Check-ins */}
              <div
                className={`flex flex-col items-center justify-center rounded-xl p-4 w-full transition-colors duration-300 ${darkMode ? '' : 'bg-cyan-200/40'}`}
                style={
                  darkMode
                    ? {
                      color: '#e0e7ef',
                      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
                      borderRadius: 18,
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 80,
                      padding: '24px 16px',
                    }
                    : undefined
                }
              >
                <span className={`font-extrabold mt-1 ${darkMode ? 'text-2xl' : 'text-4xl text-cyan-700'}`} style={darkMode ? { color: '#67e8f9' } : undefined}>
                  {DUMMY_SUMMARY.totalCheckIns}
                </span>
                <span className={`${darkMode ? 'text-md' : 'text-lg text-cyan-900/80'} mt-1`} style={darkMode ? { color: '#d1d5db' } : undefined}>
                  Check-ins
                </span>
              </div>
            </div>
          </div>
        </div >

        {/* Smaller Footer */}
        < footer
          className="mt-auto w-full text-center border-t border-gray-700"
          style={{
            background: 'linear-gradient(90deg, #23263a 0%, #1e2133 100%)',
            color: '#a0aec0',
            fontSize: 14,
            padding: '16px 0 12px 0',
            letterSpacing: '0.03em',
            fontWeight: 500,
            marginTop: 24,
          }}
        >
          <span style={{ fontWeight: 700, color: '#fff' }}>BluePrint</span> & nbsp;|& nbsp; Crafted for learners everywhere & nbsp; & copy; {new Date().getFullYear()} BluePrint Team 6
        </footer >
      </div >
    </Layout >
  );
};

export default ProgressPage;
