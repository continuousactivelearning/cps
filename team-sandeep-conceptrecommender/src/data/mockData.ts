// created by Nabarupa Banik
import { User, Topic, ExamResult, ProgressData, AIRecommendation, Problem, ExamQuestion } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  level: 'Intermediate',
  xp: 2450,
  nextLevelXP: 3000,
  currentStreak: 7,
  totalProblems: 156,
  joinDate: '2024-01-15'
};

export const mockTopics: Topic[] = [
  {
    id: '1',
    name: 'Arrays & Strings',
    description: 'Master fundamental array operations, string manipulation, and common patterns like two pointers and sliding window.',
    difficulty: 'Beginner',
    status: 'completed',
    progress: 100,
    problemsSolved: 25,
    totalProblems: 25,
    estimatedTime: '2-3 weeks',
    examScore: 92,
    category: 'Data Structures',
    prerequisites: []
  },
  {
    id: '2',
    name: 'Linked Lists',
    description: 'Learn about singly and doubly linked lists, common operations, and advanced techniques like cycle detection.',
    difficulty: 'Beginner',
    status: 'in-progress',
    progress: 68,
    problemsSolved: 17,
    totalProblems: 25,
    estimatedTime: '2-3 weeks',
    category: 'Data Structures',
    prerequisites: []
  },
  {
    id: '3',
    name: 'Binary Trees',
    description: 'Understand tree traversals, binary search trees, and tree manipulation algorithms.',
    difficulty: 'Intermediate',
    status: 'not-started',
    progress: 0,
    problemsSolved: 0,
    totalProblems: 30,
    estimatedTime: '3-4 weeks',
    category: 'Data Structures',
    prerequisites: ['1']
  },
  {
    id: '4',
    name: 'Dynamic Programming',
    description: 'Master the art of breaking down complex problems using memoization and tabulation techniques.',
    difficulty: 'Advanced',
    status: 'not-started',
    progress: 0,
    problemsSolved: 0,
    totalProblems: 40,
    estimatedTime: '4-6 weeks',
    category: 'Algorithms',
    prerequisites: ['1', '2', '3']
  },
  {
    id: '5',
    name: 'Hash Tables',
    description: 'Learn about hash functions, collision resolution, and efficient lookup operations.',
    difficulty: 'Intermediate',
    status: 'mastered',
    progress: 100,
    problemsSolved: 20,
    totalProblems: 20,
    estimatedTime: '2-3 weeks',
    examScore: 96,
    category: 'Data Structures',
    prerequisites: ['1']
  },
  {
    id: '6',
    name: 'Graph Algorithms',
    description: 'Explore graph representations, traversals (BFS/DFS), and shortest path algorithms.',
    difficulty: 'Advanced',
    status: 'not-started',
    progress: 0,
    problemsSolved: 0,
    totalProblems: 35,
    estimatedTime: '4-5 weeks',
    category: 'Algorithms',
    prerequisites: ['1', '2', '3']
  }
];

export const mockExamResults: ExamResult[] = [
  {
    id: '1',
    topicId: '1',
    topicName: 'Arrays & Strings',
    score: 92,
    accuracy: 88,
    timeSpent: 45,
    date: '2024-12-15',
    questionsCorrect: 23,
    totalQuestions: 25
  },
  {
    id: '2',
    topicId: '5',
    topicName: 'Hash Tables',
    score: 96,
    accuracy: 94,
    timeSpent: 38,
    date: '2024-12-10',
    questionsCorrect: 24,
    totalQuestions: 25
  }
];

export const mockProgressData: ProgressData[] = [
  { date: '2024-12-20', problemsSolved: 8, accuracy: 85, timeSpent: 120 },
  { date: '2024-12-19', problemsSolved: 6, accuracy: 92, timeSpent: 90 },
  { date: '2024-12-18', problemsSolved: 10, accuracy: 78, timeSpent: 150 },
  { date: '2024-12-17', problemsSolved: 5, accuracy: 88, timeSpent: 75 },
  { date: '2024-12-16', problemsSolved: 7, accuracy: 91, timeSpent: 105 },
  { date: '2024-12-15', problemsSolved: 9, accuracy: 86, timeSpent: 135 },
  { date: '2024-12-14', problemsSolved: 4, accuracy: 95, timeSpent: 60 }
];

export const mockAIRecommendations: AIRecommendation[] = [
  {
    topicId: '3',
    reason: 'Based on your strong performance in Arrays & Hash Tables, you\'re ready to tackle tree structures. This will build upon your existing knowledge.',
    confidence: 89,
    estimatedDifficulty: 6,
    prereqsMet: true,
    priority: 'high'
  },
  {
    topicId: '6',
    reason: 'Graph algorithms will complement your tree knowledge and are essential for advanced problem solving.',
    confidence: 72,
    estimatedDifficulty: 8,
    prereqsMet: false,
    priority: 'medium'
  }
];

export const mockProblems: Problem[] = [
  {
    id: '1',
    title: 'Two Sum',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    difficulty: 'Easy',
    category: 'Arrays',
    tags: ['Array', 'Hash Table'],
    hints: [
      'Try using a hash table to store the complement of each number',
      'For each number, check if its complement exists in the hash table'
    ],
    testCases: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        expectedOutput: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      }
    ]
  },
  {
    id: '2',
    title: 'Reverse Linked List',
    description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
    difficulty: 'Easy',
    category: 'Linked Lists',
    tags: ['Linked List', 'Recursion'],
    hints: [
      'Keep track of the previous, current, and next nodes',
      'You can solve this iteratively or recursively'
    ],
    testCases: [
      {
        input: 'head = [1,2,3,4,5]',
        expectedOutput: '[5,4,3,2,1]'
      }
    ]
  }
];

export const mockExamQuestions: ExamQuestion[] = [
  {
    id: '1',
    question: 'What is the time complexity of accessing an element in an array by index?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 0,
    explanation: 'Array access by index is O(1) because arrays provide direct access to elements using their memory address.',
    difficulty: 'Easy'
  },
  {
    id: '2',
    question: 'Which data structure uses LIFO (Last In, First Out) principle?',
    options: ['Queue', 'Stack', 'Array', 'Linked List'],
    correctAnswer: 1,
    explanation: 'A stack follows the LIFO principle where the last element added is the first one to be removed.',
    difficulty: 'Easy'
  },
  {
    id: '3',
    question: 'What is the worst-case time complexity of binary search?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctAnswer: 1,
    explanation: 'Binary search has O(log n) time complexity as it eliminates half of the search space in each iteration.',
    difficulty: 'Medium'
  }
];