import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Suffix Arrays/Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of Suffix Arrays and Suffix Trees in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "SuffixArraysTrees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a suffix array used for?",
      options: [
        { optionText: "Sorting integers", optionTag: "A" },
        { optionText: "Storing recursive calls", optionTag: "B" },
        { optionText: "Pattern matching in strings", optionTag: "C" },
        { optionText: "Compiling code", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is true about suffix trees?",
      options: [
        { optionText: "They are binary search trees", optionTag: "A" },
        { optionText: "They help with fast substring searching", optionTag: "B" },
        { optionText: "They store graphs", optionTag: "C" },
        { optionText: "They work with integers only", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm is commonly used to build suffix arrays?",
      options: [
        { optionText: "KMP Algorithm", optionTag: "A" },
        { optionText: "Manber-Myers Algorithm", optionTag: "B" },
        { optionText: "Bellman-Ford", optionTag: "C" },
        { optionText: "QuickSort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity to build a suffix array using Manber-Myers?",
      options: [
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following applications can use suffix arrays?",
      options: [
        { optionText: "Text compression", optionTag: "A" },
        { optionText: "Database indexing", optionTag: "B" },
        { optionText: "DNA sequence analysis", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the space complexity of a suffix array?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Suffix trees are commonly used in which string algorithm?",
      options: [
        { optionText: "Radix Sort", optionTag: "A" },
        { optionText: "Longest Common Substring", optionTag: "B" },
        { optionText: "Floyd-Warshall", optionTag: "C" },
        { optionText: "DFS", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which one is a property of a suffix tree?",
      options: [
        { optionText: "All edges are labeled with single characters", optionTag: "A" },
        { optionText: "Every suffix of the string is a leaf", optionTag: "B" },
        { optionText: "Only palindromes are stored", optionTag: "C" },
        { optionText: "Used only for sorting", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity to build a suffix tree?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these algorithms is used to construct a suffix tree in linear time?",
      options: [
        { optionText: "Ukkonen's Algorithm", optionTag: "A" },
        { optionText: "Kruskal's Algorithm", optionTag: "B" },
        { optionText: "Dijkstra's Algorithm", optionTag: "C" },
        { optionText: "Tarjan's Algorithm", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In suffix trees, internal nodes represent:",
      options: [
        { optionText: "Full strings", optionTag: "A" },
        { optionText: "Common prefixes", optionTag: "B" },
        { optionText: "Binary trees", optionTag: "C" },
        { optionText: "Random indexes", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does LCP array stand for?",
      options: [
        { optionText: "Longest Common Prefix", optionTag: "A" },
        { optionText: "Least Common Prime", optionTag: "B" },
        { optionText: "Length of Counted Positions", optionTag: "C" },
        { optionText: "Left Circular Position", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the use of the LCP array in conjunction with suffix arrays?",
      options: [
        { optionText: "To track parent nodes", optionTag: "A" },
        { optionText: "To find common prefixes", optionTag: "B" },
        { optionText: "To locate suffix roots", optionTag: "C" },
        { optionText: "To compress strings", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these is a limitation of suffix trees?",
      options: [
        { optionText: "Too fast for large strings", optionTag: "A" },
        { optionText: "High memory usage", optionTag: "B" },
        { optionText: "Cannot process DNA strings", optionTag: "C" },
        { optionText: "Cannot be implemented in Python", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is true about suffix arrays vs trees?",
      options: [
        { optionText: "Suffix arrays are more memory efficient", optionTag: "A" },
        { optionText: "Suffix trees are faster but use less memory", optionTag: "B" },
        { optionText: "Both have the same space complexity", optionTag: "C" },
        { optionText: "Suffix arrays cannot do substring search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is stored in a suffix array?",
      options: [
        { optionText: "Sorted characters", optionTag: "A" },
        { optionText: "Suffix positions", optionTag: "B" },
        { optionText: "Substrings", optionTag: "C" },
        { optionText: "Prefixes", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How can you perform binary search on a suffix array?",
      options: [
        { optionText: "Search substrings by comparing suffixes", optionTag: "A" },
        { optionText: "Only works with numbers", optionTag: "B" },
        { optionText: "Using BFS", optionTag: "C" },
        { optionText: "Using DFS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Suffix trees are typically built over what type of data?",
      options: [
        { optionText: "Integers", optionTag: "A" },
        { optionText: "Strings", optionTag: "B" },
        { optionText: "Lists", optionTag: "C" },
        { optionText: "Matrices", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In practical applications, why are suffix arrays preferred over trees?",
      options: [
        { optionText: "Easier to understand", optionTag: "A" },
        { optionText: "Lower memory usage", optionTag: "B" },
        { optionText: "Supports recursion", optionTag: "C" },
        { optionText: "Visual representation", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does a suffix tree node represent?",
      options: [
        { optionText: "One character", optionTag: "A" },
        { optionText: "Entire suffix", optionTag: "B" },
        { optionText: "Prefix of one or more suffixes", optionTag: "C" },
        { optionText: "A substring", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;