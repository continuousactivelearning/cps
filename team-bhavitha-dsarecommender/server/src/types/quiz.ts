export interface MCQQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizSubmission {
  topic: string;
  username: string;
  answers: string[];
}
