export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  profileImage?: string;
  progress?: any[];
  createdAt?: string;
  updatedAt?: string;
  securityQuestion: string;
  securityAnswer: string;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  content: string;
  duration: number;
  completed: boolean;
}

export interface Topic {
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  status: 'not-started' | 'in-progress' | 'completed' | 'mastered';
  progress?: number;
  lastAttempted?: string;
  problemsSolved?: number;
  totalProblems?: number;
  estimatedTime?: number;
  examScore?: number;
  tutorials: Tutorial[];
  prerequisites: string[];
}

export interface ExamResult {
  topicName: string;
  score: number;
  completed: boolean;
  lastAttempted: string;
}

export interface ProgressData {
  topicName: string;
  score: number;
  completed: boolean;
  lastAttempted: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface AIRecommendation {
  topicName: string;
  reason: string;
  confidence: number;
  estimatedDifficulty: number;
  prereqsMet: boolean;
  priority: 'high' | 'medium' | 'low';
}

export interface ExamQuestion {
  // id removed, only use question text and topicName
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface ExamResultSubmission {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTaken: number;
}

export const SECURITY_QUESTIONS = [
  'What is your mother\'s maiden name?',
  'What was the name of your first pet?',
  'What was the name of your elementary school?',
  'What is your favorite book?',
  'What city were you born in?'
];