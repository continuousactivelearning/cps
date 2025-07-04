import { create } from 'zustand';
import type { StoreApi } from 'zustand';
import { getProgressSummary, getProgressStats, updateProgress } from '../../api/api';
import type { ProgressSummary, DailyProgress, ProgressUpdate } from '../../api/api';

// Types
export interface CourseProgress {
  completedVideos: number;
  totalVideos: number;
  totalWatchTime: number;
  progress: number; // 0-100
}

export interface UserStreak {
  currentStreak: number;
  longestStreak: number;
  streakHistory: Array<{ date: string; minutesWatched: number }>;
}

interface ProgressStore {
  // State
  userStreak: UserStreak;
  courseProgress: Record<string, CourseProgress>;
  progressSummary: ProgressSummary | null;
  dailyStats: DailyProgress[];
  loading: boolean;
  error: string | null;
  
  // Actions
  fetchProgressSummary: () => Promise<void>;
  fetchProgressStats: () => Promise<void>;
  updateUserProgress: (progressData: ProgressUpdate) => Promise<void>;
  getOverallProgress: () => number;
  getTotalWatchTime: () => number;
  getCourseProgress: (courseId: string) => CourseProgress | undefined;
  resetError: () => void;
}

// Mock data for fallback
const mockStreakHistory = Array.from({ length: 7 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - i);
  return {
    date: date.toISOString().split('T')[0],
    minutesWatched: Math.floor(Math.random() * 60),
  };
}).reverse();

const mockUserStreak: UserStreak = {
  currentStreak: 5,
  longestStreak: 10,
  streakHistory: mockStreakHistory,
};

const mockCourseProgress: Record<string, CourseProgress> = {
  '101': { completedVideos: 8, totalVideos: 10, totalWatchTime: 120, progress: 80 },
  '102': { completedVideos: 3, totalVideos: 5, totalWatchTime: 45, progress: 60 },
};

export const useProgressStore = create<ProgressStore>((set: StoreApi<ProgressStore>["setState"], get: StoreApi<ProgressStore>["getState"]) => ({
  // Initial state
  userStreak: mockUserStreak,
  courseProgress: mockCourseProgress,
  progressSummary: null,
  dailyStats: [],
  loading: false,
  error: null,

  // Actions
  fetchProgressSummary: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getProgressSummary();
      set({ 
        progressSummary: response.data.summary,
        loading: false 
      });
    } catch (error) {
      set({ 
        error: 'Failed to fetch progress summary',
        loading: false 
      });
      console.error('Error fetching progress summary:', error);
    }
  },

  fetchProgressStats: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getProgressStats();
      set({ 
        dailyStats: response.data.dailyStats,
        loading: false 
      });
    } catch (error) {
      set({ 
        error: 'Failed to fetch progress stats',
        loading: false 
      });
      console.error('Error fetching progress stats:', error);
    }
  },

  updateUserProgress: async (progressData: ProgressUpdate) => {
    set({ loading: true, error: null });
    try {
      await updateProgress(progressData);
      // Refresh the progress data after update
      await Promise.all([
        get().fetchProgressSummary(),
        get().fetchProgressStats()
      ]);
      set({ loading: false });
    } catch (error) {
      set({ 
        error: 'Failed to update progress',
        loading: false 
      });
      console.error('Error updating progress:', error);
    }
  },

  getOverallProgress: () => {
    const summary = get().progressSummary;
    if (summary) {
      const totalActivities = summary.totalLessonsCompleted + summary.totalQuizzesTaken;
      const maxActivities = 100; // Assuming 100 activities is 100% progress
      return Math.min((totalActivities / maxActivities) * 100, 100);
    }
    
    // Fallback to course progress calculation
    const courses = Object.values(get().courseProgress) as CourseProgress[];
    if (courses.length === 0) return 0;
    return (
      courses.reduce((sum, c) => sum + c.progress, 0) / courses.length
    );
  },

  getTotalWatchTime: () => {
    const summary = get().progressSummary;
    if (summary) {
      return summary.totalStudyTime;
    }
    
    // Fallback to course progress calculation
    return (Object.values(get().courseProgress) as CourseProgress[]).reduce(
      (sum, c) => sum + c.totalWatchTime,
      0
    );
  },

  getCourseProgress: (courseId: string) => get().courseProgress[courseId],

  resetError: () => set({ error: null }),
})); 