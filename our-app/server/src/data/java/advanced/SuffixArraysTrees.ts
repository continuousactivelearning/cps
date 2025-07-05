import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Suffix Arrays/Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Test your knowledge on suffix arrays and suffix trees used for advanced string processing.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "SuffixArraysTrees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a suffix array?",
      options: [
        { optionText: "Sorted array of all suffixes of a string", optionTag: "B" },
        { optionText: "Array of prefixes", optionTag: "A" },
        { optionText: "Array of reversed strings", optionTag: "C" },
        { optionText: "Array used for sorting", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of building a suffix array using the efficient method?",
      options: [
        { optionText: "O(n log n)", optionTag: "D" },
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which algorithm can be used to construct a suffix array?",
      options: [
        { optionText: "Manacher's Algorithm", optionTag: "C" },
        { optionText: "Kasai's Algorithm", optionTag: "B" },
        { optionText: "Suffix Link Method", optionTag: "D" },
        { optionText: "DFS", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is a suffix tree?",
      options: [
        { optionText: "A compressed trie of all suffixes", optionTag: "A" },
        { optionText: "Heap-like structure", optionTag: "C" },
        { optionText: "Balanced binary tree", optionTag: "B" },
        { optionText: "Segment tree variation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is optimized using suffix trees?",
      options: [
        { optionText: "Substring search", optionTag: "D" },
        { optionText: "Matrix multiplication", optionTag: "B" },
        { optionText: "Sorting", optionTag: "A" },
        { optionText: "Graph traversal", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the time complexity of building a suffix tree using Ukkonen's algorithm?",
      options: [
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "D" },
        { optionText: "O(n log n)", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which string algorithm uses suffix arrays for efficient search?",
      options: [
        { optionText: "Knuth-Morris-Pratt", optionTag: "C" },
        { optionText: "Rabin-Karp", optionTag: "A" },
        { optionText: "Burrows-Wheeler Transform", optionTag: "D" },
        { optionText: "Manacher's Algorithm", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which one stores less memory but is slower for query processing?",
      options: [
        { optionText: "Suffix Array", optionTag: "A" },
        { optionText: "Suffix Tree", optionTag: "B" },
        { optionText: "Hash Table", optionTag: "C" },
        { optionText: "Trie", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is LCP in the context of suffix arrays?",
      options: [
        { optionText: "Longest Common Prefix", optionTag: "C" },
        { optionText: "Lowest Common Path", optionTag: "B" },
        { optionText: "Least Common Pattern", optionTag: "A" },
        { optionText: "Last Checked Pointer", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the space complexity of a suffix tree?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" },
        { optionText: "O(log n)", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How many suffixes can a string of length n have?",
      options: [
        { optionText: "n", optionTag: "B" },
        { optionText: "n^2", optionTag: "A" },
        { optionText: "log n", optionTag: "C" },
        { optionText: "2n", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data structure is ideal for pattern matching?",
      options: [
        { optionText: "Suffix Tree", optionTag: "D" },
        { optionText: "Heap", optionTag: "A" },
        { optionText: "Linked List", optionTag: "B" },
        { optionText: "Array", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of these is a compressed form of a suffix trie?",
      options: [
        { optionText: "Suffix Tree", optionTag: "C" },
        { optionText: "Segment Tree", optionTag: "B" },
        { optionText: "Trie", optionTag: "A" },
        { optionText: "Suffix Array", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following improves the performance of LCP computation?",
      options: [
        { optionText: "Kasai's Algorithm", optionTag: "B" },
        { optionText: "Radix Sort", optionTag: "D" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "DFS traversal", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is a suffix link?",
      options: [
        { optionText: "Pointer from node to its suffix", optionTag: "A" },
        { optionText: "Node used in binary trees", optionTag: "D" },
        { optionText: "Link from one trie to another", optionTag: "C" },
        { optionText: "Special stack", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What character is appended to the string in suffix trees?",
      options: [
        { optionText: "$", optionTag: "B" },
        { optionText: "#", optionTag: "A" },
        { optionText: "!", optionTag: "D" },
        { optionText: "0", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What structure helps avoid repeated work in suffix trees?",
      options: [
        { optionText: "Suffix Link", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" },
        { optionText: "DFS Memo", optionTag: "B" },
        { optionText: "Binary Indexing", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In which field are suffix structures heavily used?",
      options: [
        { optionText: "Data mining", optionTag: "D" },
        { optionText: "Cryptography", optionTag: "C" },
        { optionText: "String processing", optionTag: "A" },
        { optionText: "Memory management", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which string algorithms are based on suffix arrays?",
      options: [
        { optionText: "Suffix Sort", optionTag: "A" },
        { optionText: "Longest Repeated Substring", optionTag: "C" },
        { optionText: "Min-Heap Sort", optionTag: "D" },
        { optionText: "Prim's Shortest Path", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What kind of tree traversal is required to build suffix trees?",
      options: [
        { optionText: "DFS", optionTag: "D" },
        { optionText: "BFS", optionTag: "C" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "No traversal", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;