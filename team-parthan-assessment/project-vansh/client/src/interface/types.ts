export interface Topic {
  id: string;
  name: string;
  prerequisites: string[];
  status: 'not-started' | 'in-progress' | 'mastered' | 'ready';
  score?: number;
  totalQuestions?: number;
  attempts?: number;
  bestScore?: number;
  lastAttempt?: Date;
}

export interface UserProfile {
  name: string;
  masteredTopics: number;
  totalScore: number;
  streak: number;
  role: 'student' | 'instructor';
  enrolledUnder?: string;
  instructorCode?: string;
}

export interface CustomContent {
  id: string;
  type: 'youtube' | 'pdf' | 'image';
  title: string;
  url?: string;
  fileName?: string;
  uploadDate: string;
  status: 'processing' | 'ready' | 'failed';
  quizGenerated?: boolean;
  extractedText?: string;
}

export interface Quiz {
  id: string;
  title: string;
  contentId: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic?: string;
}

export interface QuizState {
  topicId?: string;
  contentId?: string;
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  userAnswers: (number | undefined)[];
  score: number;
  isCompleted: boolean;
  timeStarted: Date;
  timeCompleted?: Date;
  timeLimit: number;
  timeRemaining: number;
  attempt?: number;
  scoreByTopic?: Record<string, { total: number; correct: number }>;
}