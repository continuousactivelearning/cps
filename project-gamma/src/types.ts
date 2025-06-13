export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  xp: number;
  nextLevelXP: number;
  currentStreak: number;
  totalProblems: number;
  joinDate: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'not-started' | 'in-progress' | 'completed' | 'mastered';
  progress: number;
  problemsSolved: number;
  totalProblems: number;
  estimatedTime: string;
  examScore?: number;
  category: string;
  prerequisites: string[];
}

export interface ExamResult {
  id: string;
  topicId: string;
  topicName: string;
  score: number;
  accuracy: number;
  timeSpent: number;
  date: string;
  questionsCorrect: number;
  totalQuestions: number;
}

export interface ProgressData {
  date: string;
  problemsSolved: number;
  accuracy: number;
  timeSpent: number;
}

export interface AIRecommendation {
  topicId: string;
  reason: string;
  confidence: number;
  estimatedDifficulty: number;
  prereqsMet: boolean;
  priority: 'high' | 'medium' | 'low';
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  tags: string[];
  solution?: string;
  hints: string[];
  testCases: TestCase[];
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  explanation?: string;
}

export interface ExamQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}