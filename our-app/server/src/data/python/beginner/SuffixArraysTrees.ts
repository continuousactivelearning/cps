import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Suffix Arrays/Trees - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of Suffix Arrays and Suffix Trees in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Suffix Arrays/Trees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a suffix array?",
      options: [
        { optionText: "An array storing all prefixes of a string", optionTag: "B" },
        { optionText: "An array of all substrings", optionTag: "C" },
        { optionText: "An array of indices of sorted suffixes", optionTag: "A" },
        { optionText: "An array storing character frequencies", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the time complexity of constructing a suffix array using the naive method?",
      options: [
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(n^2 log n)", optionTag: "D" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What does a suffix tree represent?",
      options: [
        { optionText: "Only complete words in a string", optionTag: "B" },
        { optionText: "A tree of all substrings", optionTag: "D" },
        { optionText: "A compressed trie of all suffixes", optionTag: "A" },
        { optionText: "A decision tree", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which algorithm is commonly used to construct suffix arrays efficiently?",
      options: [
        { optionText: "Kadane’s Algorithm", optionTag: "D" },
        { optionText: "Rabin-Karp", optionTag: "A" },
        { optionText: "Manber-Myers", optionTag: "B" },
        { optionText: "Dijkstra", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Suffix trees allow for which operation in linear time?",
      options: [
        { optionText: "Longest common substring", optionTag: "A" },
        { optionText: "Subsequence search", optionTag: "D" },
        { optionText: "Pattern matching", optionTag: "C" },
        { optionText: "Sorting", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which symbol is often added to the end of a string for suffix tree construction?",
      options: [
        { optionText: "#", optionTag: "C" },
        { optionText: "$", optionTag: "B" },
        { optionText: "*", optionTag: "D" },
        { optionText: "!", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of these is a disadvantage of suffix trees?",
      options: [
        { optionText: "Cannot be implemented in Python", optionTag: "D" },
        { optionText: "Slow construction time", optionTag: "C" },
        { optionText: "Space inefficiency", optionTag: "A" },
        { optionText: "Cannot handle large text", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the typical space complexity of a suffix array?",
      options: [
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How many suffixes does a string of length n have?",
      options: [
        { optionText: "n", optionTag: "A" },
        { optionText: "2^n", optionTag: "D" },
        { optionText: "n-1", optionTag: "B" },
        { optionText: "n + 1", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which problem is efficiently solved using suffix arrays?",
      options: [
        { optionText: "Graph traversal", optionTag: "C" },
        { optionText: "String matching", optionTag: "A" },
        { optionText: "Cycle detection", optionTag: "D" },
        { optionText: "Matrix multiplication", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },

    // Next 10
    {
      questionText: "Which of the following is true about suffix trees?",
      options: [
        { optionText: "Each node represents a complete suffix", optionTag: "D" },
        { optionText: "Each edge is labeled with a single character", optionTag: "C" },
        { optionText: "They can be used to find repeats", optionTag: "A" },
        { optionText: "They are binary trees", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which traversal is commonly used in suffix trees?",
      options: [
        { optionText: "In-order", optionTag: "B" },
        { optionText: "Post-order", optionTag: "D" },
        { optionText: "DFS", optionTag: "C" },
        { optionText: "BFS", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which problem can suffix trees solve in O(n) time?",
      options: [
        { optionText: "Pattern existence", optionTag: "B" },
        { optionText: "Word frequency count", optionTag: "D" },
        { optionText: "Substring search", optionTag: "A" },
        { optionText: "Palindrome detection", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the edge label in a suffix tree?",
      options: [
        { optionText: "String or substring", optionTag: "A" },
        { optionText: "Character only", optionTag: "B" },
        { optionText: "Index", optionTag: "C" },
        { optionText: "None", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following has better space efficiency?",
      options: [
        { optionText: "Suffix Tree", optionTag: "D" },
        { optionText: "Prefix Tree", optionTag: "A" },
        { optionText: "Suffix Array", optionTag: "B" },
        { optionText: "Hash Table", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which tool is best for compressed suffix trees?",
      options: [
        { optionText: "FM-index", optionTag: "C" },
        { optionText: "KMP Table", optionTag: "D" },
        { optionText: "Z-array", optionTag: "A" },
        { optionText: "Trie compression", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the main goal of constructing a suffix structure?",
      options: [
        { optionText: "Sorting strings", optionTag: "C" },
        { optionText: "String indexing and pattern search", optionTag: "B" },
        { optionText: "Tokenizing", optionTag: "D" },
        { optionText: "Graph modeling", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is one challenge in building suffix trees?",
      options: [
        { optionText: "Alphabet constraint", optionTag: "C" },
        { optionText: "Too many substrings", optionTag: "A" },
        { optionText: "Long edge labels", optionTag: "D" },
        { optionText: "Efficient memory use", optionTag: "B" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which structure supports binary search on suffixes?",
      options: [
        { optionText: "Suffix Array", optionTag: "A" },
        { optionText: "Trie", optionTag: "D" },
        { optionText: "Suffix Tree", optionTag: "C" },
        { optionText: "Prefix Array", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which string operation benefits from suffix trees?",
      options: [
        { optionText: "Concatenation", optionTag: "D" },
        { optionText: "Subsequence extraction", optionTag: "C" },
        { optionText: "Pattern frequency counting", optionTag: "A" },
        { optionText: "Character replacement", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
  ],
};

export default quizData;
