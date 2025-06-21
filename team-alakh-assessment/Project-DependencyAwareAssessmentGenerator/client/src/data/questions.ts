// src/data/sampleQuestions.ts
import type { Question } from '../types/question';

const sampleQuestions: Question[] = [
  {
    id: 'q1',
    question: 'What does HTTP stand for?',
    options: [
      'HyperText Transfer Protocol',
      'HighText Transfer Protocol',
      'HyperText Transmission Protocol',
      'HyperTool Transfer Protocol',
    ],
    correctAnswer: 'HyperText Transfer Protocol',
  },
  {
    id: 'q2',
    question: 'Which data structure uses LIFO (Last In First Out)?',
    options: ['Queue', 'Tree', 'Stack', 'Linked List'],
    correctAnswer: 'Stack',
  },
  {
    id: 'q3',
    question: 'Which language is primarily used for Artificial Intelligence?',
    options: ['Python', 'HTML', 'JavaScript', 'CSS'],
    correctAnswer: 'Python',
  },
  {
    id: 'q4',
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
    correctAnswer: 'O(log n)',
  },
  {
    id: 'q5',
    question: 'Which of the following is not a programming paradigm?',
    options: ['Object-Oriented', 'Functional', 'Procedural', 'Recursive'],
    correctAnswer: 'Recursive',
  },
  {
    id: 'q6',
    question: 'In a relational database, what does SQL stand for?',
    options: [
      'Structured Query Language',
      'Simple Query Language',
      'Standard Query Language',
      'Sequential Query Language',
    ],
    correctAnswer: 'Structured Query Language',
  },
  {
    id: 'q7',
    question: 'Which sorting algorithm is the fastest on average?',
    options: ['Bubble Sort', 'Merge Sort', 'Quick Sort', 'Insertion Sort'],
    correctAnswer: 'Quick Sort',
  },
  {
    id: 'q8',
    question: 'What does the OSI model stand for?',
    options: [
      'Open Systems Interconnection',
      'Operational System Integration',
      'Open Software Integration',
      'Operating System Interface',
    ],
    correctAnswer: 'Open Systems Interconnection',
  },
  {
    id: 'q9',
    question: 'Which keyword is used to define a constant in JavaScript?',
    options: ['let', 'const', 'var', 'define'],
    correctAnswer: 'const',
  },
  {
    id: 'q10',
    question: 'Which of the following is a NoSQL database?',
    options: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
    correctAnswer: 'MongoDB',
  },
];

export default sampleQuestions;
