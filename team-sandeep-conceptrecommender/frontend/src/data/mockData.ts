import { User, Topic, ExamResult, ProgressData, AIRecommendation, ExamQuestion } from '../types';

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
    prerequisites: [],
    tutorials: [
      {
        id: '1-1',
        title: 'Introduction to Arrays',
        description: 'Learn the basics of arrays, their properties, and common operations.',
        duration: '30 mins',
        completed: true
      },
      {
        id: '1-2',
        title: 'String Manipulation',
        description: 'Master string operations, methods, and common string algorithms.',
        duration: '45 mins',
        completed: true
      },
      {
        id: '1-3',
        title: 'Two Pointers Technique',
        description: 'Understand and implement the two pointers pattern for efficient array traversal.',
        duration: '40 mins',
        completed: true
      }
    ]
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
    prerequisites: [],
    tutorials: [
      {
        id: '2-1',
        title: 'Singly Linked Lists',
        description: 'Learn about singly linked lists, their structure, and basic operations.',
        duration: '35 mins',
        completed: true
      },
      {
        id: '2-2',
        title: 'Doubly Linked Lists',
        description: 'Understand doubly linked lists and their advantages over singly linked lists.',
        duration: '40 mins',
        completed: true
      },
      {
        id: '2-3',
        title: 'Cycle Detection',
        description: 'Master algorithms for detecting cycles in linked lists.',
        duration: '45 mins',
        completed: false
      }
    ]
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
    prerequisites: ['1'],
    tutorials: [
      {
        id: '3-1',
        title: 'Tree Basics',
        description: 'Introduction to tree data structures and their properties.',
        duration: '40 mins',
        completed: false
      },
      {
        id: '3-2',
        title: 'Tree Traversals',
        description: 'Learn about inorder, preorder, and postorder traversals.',
        duration: '45 mins',
        completed: false
      },
      {
        id: '3-3',
        title: 'Binary Search Trees',
        description: 'Understand BST properties and operations.',
        duration: '50 mins',
        completed: false
      }
    ]
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
    prerequisites: ['1', '2', '3'],
    tutorials: [
      {
        id: '4-1',
        title: 'DP Fundamentals',
        description: 'Learn the core concepts of dynamic programming.',
        duration: '45 mins',
        completed: false
      },
      {
        id: '4-2',
        title: 'Memoization',
        description: 'Master the top-down approach with memoization.',
        duration: '50 mins',
        completed: false
      },
      {
        id: '4-3',
        title: 'Tabulation',
        description: 'Understand the bottom-up approach with tabulation.',
        duration: '55 mins',
        completed: false
      }
    ]
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
    prerequisites: ['1'],
    tutorials: [
      {
        id: '5-1',
        title: 'Hash Functions',
        description: 'Learn about hash functions and their properties.',
        duration: '35 mins',
        completed: true
      },
      {
        id: '5-2',
        title: 'Collision Resolution',
        description: 'Understand different collision resolution techniques.',
        duration: '40 mins',
        completed: true
      },
      {
        id: '5-3',
        title: 'Hash Table Operations',
        description: 'Master common hash table operations and their time complexity.',
        duration: '45 mins',
        completed: true
      }
    ]
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
    prerequisites: ['1', '2', '3'],
    tutorials: [
      {
        id: '6-1',
        title: 'Graph Basics',
        description: 'Introduction to graph data structures and representations.',
        duration: '40 mins',
        completed: false
      },
      {
        id: '6-2',
        title: 'BFS and DFS',
        description: 'Learn about breadth-first and depth-first search algorithms.',
        duration: '45 mins',
        completed: false
      },
      {
        id: '6-3',
        title: 'Shortest Paths',
        description: 'Master algorithms for finding shortest paths in graphs.',
        duration: '50 mins',
        completed: false
      }
    ]
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

// Example: 50 questions for topic 1 (Arrays & Strings)
export const topicQuestions: Record<string, ExamQuestion[]> = {
  '1': Array.from({ length: 50 }, (_, i) => ({
    id: `1-${i+1}`,
    question: `Arrays & Strings Question ${i+1}`,
    options: [
      `Option A for Q${i+1}`,
      `Option B for Q${i+1}`,
      `Option C for Q${i+1}`,
      `Option D for Q${i+1}`
    ],
    correctAnswer: Math.floor(Math.random() * 4),
    explanation: `Explanation for Arrays & Strings Q${i+1}`,
    difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random()*3)] as 'Easy' | 'Medium' | 'Hard',
  })),
  // Example: 50 questions for topic 2 (Linked Lists)
  '2': Array.from({ length: 50 }, (_, i) => ({
    id: `2-${i+1}`,
    question: `Linked Lists Question ${i+1}`,
    options: [
      `Option A for Q${i+1}`,
      `Option B for Q${i+1}`,
      `Option C for Q${i+1}`,
      `Option D for Q${i+1}`
    ],
    correctAnswer: Math.floor(Math.random() * 4),
    explanation: `Explanation for Linked Lists Q${i+1}`,
    difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random()*3)] as 'Easy' | 'Medium' | 'Hard',
  })),
  // Example: 50 questions for topic 3 (Binary Trees)
  '3': Array.from({ length: 50 }, (_, i) => ({
    id: `3-${i+1}`,
    question: `Binary Trees Question ${i+1}`,
    options: [
      `Option A for Q${i+1}`,
      `Option B for Q${i+1}`,
      `Option C for Q${i+1}`,
      `Option D for Q${i+1}`
    ],
    correctAnswer: Math.floor(Math.random() * 4),
    explanation: `Explanation for Binary Trees Q${i+1}`,
    difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random()*3)] as 'Easy' | 'Medium' | 'Hard',
  })),
  // Example: 50 questions for topic 4 (Dynamic Programming)
  '4': Array.from({ length: 50 }, (_, i) => ({
    id: `4-${i+1}`,
    question: `Dynamic Programming Question ${i+1}`,
    options: [
      `Option A for Q${i+1}`,
      `Option B for Q${i+1}`,
      `Option C for Q${i+1}`,
      `Option D for Q${i+1}`
    ],
    correctAnswer: Math.floor(Math.random() * 4),
    explanation: `Explanation for Dynamic Programming Q${i+1}`,
    difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random()*3)] as 'Easy' | 'Medium' | 'Hard',
  })),
  // Example: 50 questions for topic 5 (Hash Tables)
  '5': Array.from({ length: 50 }, (_, i) => ({
    id: `5-${i+1}`,
    question: `Hash Tables Question ${i+1}`,
    options: [
      `Option A for Q${i+1}`,
      `Option B for Q${i+1}`,
      `Option C for Q${i+1}`,
      `Option D for Q${i+1}`
    ],
    correctAnswer: Math.floor(Math.random() * 4),
    explanation: `Explanation for Hash Tables Q${i+1}`,
    difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random()*3)] as 'Easy' | 'Medium' | 'Hard',
  })),
  // Example: 50 questions for topic 6 (Graph Algorithms)
  '6': Array.from({ length: 50 }, (_, i) => ({
    id: `6-${i+1}`,
    question: `Graph Algorithms Question ${i+1}`,
    options: [
      `Option A for Q${i+1}`,
      `Option B for Q${i+1}`,
      `Option C for Q${i+1}`,
      `Option D for Q${i+1}`
    ],
    correctAnswer: Math.floor(Math.random() * 4),
    explanation: `Explanation for Graph Algorithms Q${i+1}`,
    difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random()*3)] as 'Easy' | 'Medium' | 'Hard',
  }))
};