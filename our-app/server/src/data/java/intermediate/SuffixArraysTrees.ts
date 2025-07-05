import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Suffix Arrays and Suffix Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your knowledge on Suffix Arrays and Suffix Trees for string manipulation and pattern matching.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Suffix Arrays/Trees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a suffix array?",
      options: [
        { optionText: "An array of all suffixes of a string in lexicographical order", optionTag: "A" },
        { optionText: "An array of all prefixes of a string", optionTag: "B" },
        { optionText: "A 2D array of substrings", optionTag: "C" },
        { optionText: "A tree-based structure", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of building a suffix array using the naïve method?",
      options: [
        { optionText: "O(n^2 log n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is NOT true about suffix arrays?",
      options: [
        { optionText: "They are space-efficient compared to suffix trees", optionTag: "A" },
        { optionText: "They allow efficient pattern searching", optionTag: "C" },
        { optionText: "They can be built in linear time", optionTag: "B" },
        { optionText: "They require recursion for construction", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the primary application of suffix trees?",
      options: [
        { optionText: "Pattern matching", optionTag: "C" },
        { optionText: "Sorting integers", optionTag: "A" },
        { optionText: "Matrix multiplication", optionTag: "B" },
        { optionText: "Queue implementation", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following algorithms can construct suffix arrays efficiently?",
      options: [
        { optionText: "Manber and Myers algorithm", optionTag: "D" },
        { optionText: "BFS", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Bellman-Ford", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How much space does a suffix tree take compared to the string length n?",
      options: [
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What data structure is used in a suffix tree node?",
      options: [
        { optionText: "HashMap or array for children", optionTag: "A" },
        { optionText: "PriorityQueue", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" },
        { optionText: "Deque", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is more memory-efficient: suffix tree or suffix array?",
      options: [
        { optionText: "Suffix array", optionTag: "B" },
        { optionText: "Suffix tree", optionTag: "A" },
        { optionText: "Both are equal", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In which domain are suffix arrays widely used?",
      options: [
        { optionText: "Bioinformatics", optionTag: "C" },
        { optionText: "Game development", optionTag: "A" },
        { optionText: "Database indexing", optionTag: "B" },
        { optionText: "Web development", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operation is optimized by suffix arrays?",
      options: [
        { optionText: "Substring search", optionTag: "D" },
        { optionText: "Binary search", optionTag: "A" },
        { optionText: "Heap sort", optionTag: "B" },
        { optionText: "Tree traversal", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which algorithm builds a suffix tree in linear time?",
      options: [
        { optionText: "Ukkonen's algorithm", optionTag: "B" },
        { optionText: "Prim’s algorithm", optionTag: "A" },
        { optionText: "Kruskal’s algorithm", optionTag: "C" },
        { optionText: "Floyd-Warshall", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How do suffix arrays compare to tries?",
      options: [
        { optionText: "Suffix arrays are more space-efficient", optionTag: "C" },
        { optionText: "Suffix arrays are faster", optionTag: "A" },
        { optionText: "Tries use arrays for construction", optionTag: "B" },
        { optionText: "Suffix arrays are recursive", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is an advantage of suffix arrays?",
      options: [
        { optionText: "Easy to construct and search", optionTag: "D" },
        { optionText: "Supports random access", optionTag: "A" },
        { optionText: "More flexible than trees", optionTag: "B" },
        { optionText: "Avoids duplicate strings", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is a LCP (Longest Common Prefix) array?",
      options: [
        { optionText: "Stores longest prefix between adjacent suffixes", optionTag: "A" },
        { optionText: "Stores positions of prefix matches", optionTag: "B" },
        { optionText: "Used to store longest substring", optionTag: "C" },
        { optionText: "An index array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the best case time complexity to search in a suffix tree?",
      options: [
        { optionText: "O(m)", optionTag: "C" },
        { optionText: "O(log m)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the character limitation in suffix trees?",
      options: [
        { optionText: "Limited by alphabet size", optionTag: "B" },
        { optionText: "Only uppercase allowed", optionTag: "A" },
        { optionText: "Only numeric characters", optionTag: "D" },
        { optionText: "Only lowercase allowed", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which is true about suffix trees?",
      options: [
        { optionText: "Every suffix of the string is represented", optionTag: "A" },
        { optionText: "Only prefixes are stored", optionTag: "B" },
        { optionText: "It cannot be used for pattern matching", optionTag: "C" },
        { optionText: "It is a linear list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the leaf node in a suffix tree?",
      options: [
        { optionText: "It represents a suffix of the string", optionTag: "C" },
        { optionText: "It stores the root of the string", optionTag: "A" },
        { optionText: "It contains no children", optionTag: "B" },
        { optionText: "It is used for binary search", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which language feature aids in suffix tree implementation?",
      options: [
        { optionText: "Hash maps", optionTag: "A" },
        { optionText: "Threads", optionTag: "C" },
        { optionText: "Queues", optionTag: "B" },
        { optionText: "Semaphores", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure complements suffix arrays in full-text indexing?",
      options: [
        { optionText: "LCP array", optionTag: "D" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "TreeMap", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;