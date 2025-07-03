// COMMENTED OUT TO BYPASS BUILD ERRORS FOR QUIZ TESTING
// import mongoose from 'mongoose';
// import { Topic } from '../models/Topic';
// import { Quiz } from '../models/Quiz';
// import dotenv from 'dotenv';

// dotenv.config();

// interface Prerequisites {
//   [key: string]: string[];
// }

// const prerequisites: Prerequisites = {
//   "Arrays": [],
//   "Sorting": ["Arrays"],
//   "Searching": ["Arrays", "Sorting"],
//   "Hashing": ["Arrays", "Searching"],
//   "LinkedLists": ["Arrays"],
//   "Stacks": ["LinkedLists"],
//   "Queues": ["LinkedLists"],
//   "Recursion": ["Stacks"],
//   "Backtracking": ["Recursion"],
//   "Greedy": ["Sorting"],
//   "DP": ["Recursion", "Backtracking", "Greedy"],
//   "Trees": ["Recursion"],
//   "BinaryTree": ["Trees"],
//   "BST": ["BinaryTree"],
//   "AVLTree": ["BST"],
//   "RedBlackTree": ["BST"],
//   "BTree": ["BinaryTree"],
//   "BPlusTree": ["BTree"],
//   "SegmentTree": ["Arrays", "Recursion"],
//   "FenwickTree": ["Arrays"],
//   "Heaps": ["Arrays"],
//   "MinHeap": ["Heaps"],
//   "MaxHeap": ["Heaps"],
//   "Graphs": ["Trees", "DFS", "BFS", "DP"],
//   "DFS": ["Graphs"],
//   "BFS": ["Graphs"],
//   "Dijkstra": ["Graphs", "Heaps"],
//   "Kruskal": ["Graphs", "DisjointSet"],
//   "Prim": ["Graphs", "Heaps"],
//   "PriorityQueue": ["Heaps"],
//   "Trie": ["Strings", "Hashing"],
//   "Knapsack": ["DP"],
//   "LCS": ["DP"],
//   "SudokuSolver": ["Backtracking"],
//   "TopologicalSort": ["Graphs", "DFS"],
//   "BellmanFord": ["Graphs"],
//   "FloydWarshall": ["Graphs"],
//   "DisjointSet": ["Arrays"],
//   "SlidingWindow": ["Arrays"],
//   "TwoPointer": ["Arrays"],
//   "PrefixSum": ["Arrays"],
//   "NumberTheory": ["Math"],
//   "GCD": ["NumberTheory"],
//   "Sieve": ["NumberTheory"],
//   "ModularExponentiation": ["NumberTheory"],
//   "ChineseRemainderTheorem": ["NumberTheory"],
//   "EulerTotient": ["NumberTheory"],
//   "InclusionExclusion": ["NumberTheory"],
//   "FastExponentiation": ["ModularExponentiation"],
//   "BitManipulation": ["Arrays"],
//   "DivideAndConquer": ["Recursion"],
//   "MergeSort": ["DivideAndConquer"],
//   "QuickSort": ["DivideAndConquer"],
//   "BinarySearch": ["DivideAndConquer"],
//   "ClosestPair": ["DivideAndConquer"],
//   "StrassenMatrix": ["DivideAndConquer"],
//   "Karatsuba": ["DivideAndConquer"],
//   "BranchAndBound": ["Backtracking"],
//   "NQueens": ["BranchAndBound"],
//   "TSP": ["BranchAndBound"],
//   "JobAssignment": ["BranchAndBound"],
//   "Math": [],
//   "Strings": ["Arrays"]
// };

// const topics = Object.keys(prerequisites).map(name => {
//   // Determine difficulty level based on topic complexity
//   const advancedTopics = [
//     'DP', 'AVLTree', 'RedBlackTree', 'BTree', 'BPlusTree', 'Graphs', 'Dijkstra',
//     'Kruskal', 'Prim', 'BellmanFord', 'FloydWarshall', 'StrassenMatrix',
//     'ChineseRemainderTheorem', 'EulerTotient', 'TSP'
//   ];
  
//   const intermediateTopics = [
//     'Trees', 'BinaryTree', 'BST', 'Heaps', 'Backtracking', 'Greedy',
//     'SegmentTree', 'FenwickTree', 'TopologicalSort', 'NumberTheory',
//     'DivideAndConquer', 'BranchAndBound', 'BitManipulation'
//   ];
  
//   const isAdvanced = advancedTopics.includes(name);
//   const isIntermediate = intermediateTopics.includes(name);
  
//   // Determine category
//   const getCategory = (name: string) => {
//     if ([
//       'Arrays', 'LinkedLists', 'Stacks', 'Queues', 'Trees', 'BinaryTree', 'BST',
//       'AVLTree', 'RedBlackTree', 'BTree', 'BPlusTree', 'Heaps', 'MinHeap',
//       'MaxHeap', 'Trie', 'DisjointSet'
//     ].includes(name)) {
//       return 'Data Structures';
//     }
//     if ([
//       'Sorting', 'Searching', 'DFS', 'BFS', 'Dijkstra', 'Kruskal', 'Prim',
//       'BellmanFord', 'FloydWarshall', 'MergeSort', 'QuickSort', 'BinarySearch'
//     ].includes(name)) {
//       return 'Algorithms';
//     }
//     if ([
//       'DP', 'Backtracking', 'Greedy', 'NumberTheory', 'BitManipulation',
//       'DivideAndConquer', 'BranchAndBound'
//     ].includes(name)) {
//       return 'Advanced Concepts';
//     }
//     if (['Math', 'GCD', 'Sieve', 'ModularExponentiation', 'ChineseRemainderTheorem',
//          'EulerTotient', 'InclusionExclusion', 'FastExponentiation'].includes(name)) {
//       return 'Math';
//     }
//     return 'Algorithms';
//   };

//   // Generate description based on topic name
//   const getDescription = (name: string) => {
//     const descriptions: { [key: string]: string } = {
//       'Arrays': 'Fundamental data structure for storing sequential elements. Learn array operations, manipulation, and common patterns.',
//       'Sorting': 'Techniques to arrange data in a specific order. Master various sorting algorithms and their complexities.',
//       'Searching': 'Methods to find elements in data structures. Learn linear and binary search techniques.',
//       'LinkedLists': 'Sequential data structure with nodes. Understand singly and doubly linked lists implementations.',
//       'Stacks': 'LIFO data structure. Learn stack operations and applications in problem-solving.',
//       'Queues': 'FIFO data structure. Master queue implementations and their variations.',
//       'Trees': 'Hierarchical data structure. Learn tree traversals and basic operations.',
//       'BinaryTree': 'Tree with at most two children. Understand binary tree properties and operations.',
//       'BST': 'Binary tree with ordering property. Master BST operations and balancing.',
//       'Graphs': 'Non-linear data structure of vertices and edges. Learn graph representations and algorithms.',
//       'DP': 'Problem-solving technique using subproblems. Master dynamic programming patterns.',
//       'Backtracking': 'Algorithm technique to find all solutions. Learn constraint satisfaction problems.',
//       'Greedy': 'Algorithmic paradigm making locally optimal choices. Understand greedy strategy.',
//       'Math': 'Mathematical concepts in programming. Learn number theory and combinatorics.',
//       'BitManipulation': 'Bit-level operations. Master bitwise operators and their applications.'
//     };
    // return descriptions[name] || `Learn about ${name} and its applications in computer science.`;
//   };

//   return {
//     name,
//     description: getDescription(name),
//     difficulty: isAdvanced ? 'advanced' : (isIntermediate ? 'intermediate' : 'beginner'),
//     prerequisites: prerequisites[name],
//     estimatedTime: isAdvanced ? 120 : (isIntermediate ? 90 : 60), // minutes
//     totalProblems: isAdvanced ? 15 : (isIntermediate ? 12 : 8),
//     category: getCategory(name),
//     status: 'not-started',
//     progress: 0,
//     tutorials: [
//       {
//         id: `${name.toLowerCase()}-1`,
//         title: `Introduction to ${name}`,
//         description: `Learn the fundamentals of ${name}`,
//         content: `This tutorial covers the basic concepts of ${name}...`,
//         duration: isAdvanced ? 60 : (isIntermediate ? 45 : 30),
//         completed: false
//       },
//       {
//         id: `${name.toLowerCase()}-2`,
//         title: `Advanced ${name} Concepts`,
//         description: `Master advanced concepts and applications of ${name}`,
//         content: `This tutorial dives deep into advanced ${name} topics...`,
//         duration: isAdvanced ? 60 : (isIntermediate ? 45 : 30),
//         completed: false
//       }
//     ]
//   };
// });

// const generateQuizQuestions = (topicName: string, difficulty: 'beginner' | 'intermediate' | 'advanced') => {
//   return Array.from({ length: 50 }, (_, i) => ({
//     question: `${topicName}: MCQ Question ${i + 1}`,
//     options: [
//       `Option A for Q${i + 1}`,
//       `Option B for Q${i + 1}`,
//       `Option C for Q${i + 1}`,
//       `Option D for Q${i + 1}`
//     ],
//     correctAnswer: Math.floor(Math.random() * 4),
//     explanation: `Explanation for ${topicName} Q${i + 1}`,
//   }));
// };

// const seedTopics = async () => {
//   try {
//     // Connect to MongoDB
//     const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/learning-platform';
//     console.log('Attempting to connect to MongoDB at:', MONGODB_URI);
    
//     mongoose.set('debug', true); // Enable mongoose debug mode
//     await mongoose.connect(MONGODB_URI);
//     console.log('Successfully connected to MongoDB');

//     // Clear existing topics
//     console.log('Clearing existing topics...');
//     const deleteResult = await Topic.deleteMany({});
//     console.log('Cleared topics:', deleteResult);

//     // Insert new topics
//     console.log('Inserting topics...');
//     console.log('Number of topics to insert:', topics.length);
//     console.log('First topic sample:', JSON.stringify(topics[0], null, 2));
//     const insertedTopics = await Topic.insertMany(topics);
//     console.log('Successfully inserted topics:', insertedTopics.length);
//     console.log('First inserted topic:', JSON.stringify(insertedTopics[0], null, 2));

//     // Clear existing quizzes
//     console.log('Clearing existing quizzes...');
//     const deleteQuizResult = await Quiz.deleteMany({});
//     console.log('Cleared quizzes:', deleteQuizResult);

//     // Insert quizzes for each topic
//     for (const topic of insertedTopics) {
//       const questions = generateQuizQuestions(topic.name, topic.difficulty);
//       await Quiz.create({
//         topicId: topic._id,
//         questions,
//         passingScore: 70,
//         timeLimit: 30,
//         difficulty: topic.difficulty,
//       });
//       console.log(`Quiz seeded for topic: ${topic.name}`);
//     }

//     console.log('Database seeded successfully');
//     await mongoose.disconnect();
//     process.exit(0);
//   } catch (error) {
//     console.error('Error seeding database:', error);
//     console.error('Full error details:', JSON.stringify(error, null, 2));
//     await mongoose.disconnect();
//     process.exit(1);
//   }
// };

// // Add error handler for unhandled promise rejections
// process.on('unhandledRejection', (error) => {
//   console.error('Unhandled promise rejection:', error);
//   mongoose.disconnect().then(() => process.exit(1));
// });

// seedTopics();