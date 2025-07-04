import axios from "axios";

const APP_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export interface Credentials {
  username: string;
  password: string;
  role: 'user' | 'admin';
  loginStreak?: number;
  lastLogin?: string;
}

export interface User {
  username: string;
  role: 'user' | 'admin';
  loginStreak?: number;
  lastLogin?: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface Course {
  _id: string;
  courseId: number;
  courseName: string;
  slug: string;
  syllabusPDF: string;
  materialPDF: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProgressSummary {
  totalLessonsCompleted: number;
  totalQuizzesTaken: number;
  totalStudyTime: number;
  totalPointsEarned: number;
  totalCheckIns: number;
  currentStreak: number;
  totalPoints: number;
  loginStreak: number;
}

export interface DailyProgress {
  _id: string;
  lessonsCompleted: number;
  quizzesTaken: number;
  studyTime: number;
  pointsEarned: number;
  checkIns: number;
}

export interface ProgressUpdate {
  lessonsCompleted?: number;
  quizzesTaken?: number;
  studyTime?: number;
  pointsEarned?: number;
  isCheckedIn?: boolean;
}

export interface CourseResponse {
  message: string;
  course: Course;
}

export interface CoursesResponse {
  courses: Course[];
}

// Auth API functions
export const login = (credentials: Credentials): Promise<{ data: AuthResponse }> =>
  api.post('/auth/login', credentials);

export const signup = (credentials: Credentials): Promise<{ data: AuthResponse }> =>
  api.post('/auth/register', credentials);

// Calendar API functions
export const getCurrentMonthCalendar = () =>
  api.get('/calendar/current-month');

// Course API functions
export const addCourse = (courseData: {
  courseId: number;
  courseName: string;
  slug: string;
  syllabusPDF: string;
  materialPDF: string;
}): Promise<{ data: CourseResponse }> =>
  api.post('/courses/add-course', courseData);

export const getAllCourses = (): Promise<{ data: CoursesResponse }> =>
  api.get('/courses/all');

export const getCourseBySlug = (slug: string): Promise<{ data: { course: Course } }> =>
  api.get(`/courses/slug/${slug}`);

export const getCourseById = (courseId: number): Promise<{ data: { course: Course } }> =>
  api.get(`/courses/${courseId}`);

export const deleteCourse = (courseId: number): Promise<{ data: { message: string } }> =>
  api.delete(`/courses/${courseId}`);

// Progress API functions
export const getProgressSummary = (): Promise<{ data: { summary: ProgressSummary } }> =>
  api.get('/progress/summary');

export const getWeeklyProgress = (): Promise<{ data: { weeklyProgress: any[] } }> =>
  api.get('/progress/weekly');

export const getMonthlyProgress = (): Promise<{ data: { monthlyProgress: any[] } }> =>
  api.get('/progress/monthly');

export const getProgressStats = (): Promise<{ data: { dailyStats: DailyProgress[] } }> =>
  api.get('/progress/stats');

export const updateProgress = (progressData: ProgressUpdate): Promise<{ data: { message: string; progress: any } }> =>
  api.post('/progress/update', progressData);

// Utility functions
export const getCurrentUser = (): User | null => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded = JSON.parse(atob(token.split('.')[1]));
    return {
      username: decoded.username,
      role: decoded.role
    };
  } catch {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
};

export default api;
