import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Tries - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Test your knowledge on Tries (Prefix Trees) used in string processing and autocomplete algorithms.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Tries"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a Trie mainly used for?",
      options: [
        { optionText: "Graph traversal", optionTag: "A" },
        { optionText: "Sorting arrays", optionTag: "B" },
        { optionText: "Efficient prefix matching", optionTag: "C" },
        { optionText: "Hashing strings", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Each node in a Trie typically contains:",
      options: [
        { optionText: "Character array and count", optionTag: "D" },
        { optionText: "Pointers to child nodes", optionTag: "A" },
        { optionText: "Hash map only", optionTag: "C" },
        { optionText: "Only the end marker", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following applications is ideal for Tries?",
      options: [
        { optionText: "Binary search problems", optionTag: "A" },
        { optionText: "Database indexing", optionTag: "C" },
        { optionText: "Autocomplete system", optionTag: "B" },
        { optionText: "Sorting networks", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity of inserting a word of length L in a Trie?",
      options: [
        { optionText: "O(log L)", optionTag: "C" },
        { optionText: "O(L)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is NOT true for a Trie?",
      options: [
        { optionText: "Can search in O(L)", optionTag: "A" },
        { optionText: "Supports ordered data traversal", optionTag: "D" },
        { optionText: "Best for prefix queries", optionTag: "C" },
        { optionText: "More space-efficient than hash maps", optionTag: "B" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How do we mark the end of a word in Trie?",
      options: [
        { optionText: "Using null pointers", optionTag: "D" },
        { optionText: "Using boolean flag", optionTag: "A" },
        { optionText: "With an asterisk node", optionTag: "B" },
        { optionText: "Using frequency counters", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure can replace array in Trie for memory efficiency?",
      options: [
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" },
        { optionText: "HashMap", optionTag: "B" },
        { optionText: "List", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Trie is a type of:",
      options: [
        { optionText: "Graph", optionTag: "A" },
        { optionText: "Tree", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" },
        { optionText: "Stack", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these is most space-efficient for sparse keys?",
      options: [
        { optionText: "Binary Tree", optionTag: "A" },
        { optionText: "Trie with array children", optionTag: "B" },
        { optionText: "Trie with HashMap children", optionTag: "C" },
        { optionText: "AVL Tree", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these is not a Trie variant?",
      options: [
        { optionText: "Radix Trie", optionTag: "C" },
        { optionText: "Ternary Search Trie", optionTag: "D" },
        { optionText: "Binary Trie", optionTag: "A" },
        { optionText: "Segment Tree", optionTag: "B" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "A Trie node can have at most how many children (in lowercase English)?",
      options: [
        { optionText: "52", optionTag: "D" },
        { optionText: "26", optionTag: "A" },
        { optionText: "10", optionTag: "B" },
        { optionText: "36", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is a disadvantage of Tries?",
      options: [
        { optionText: "Poor search time", optionTag: "C" },
        { optionText: "Space inefficiency with sparse keys", optionTag: "B" },
        { optionText: "No support for prefix queries", optionTag: "A" },
        { optionText: "Slow traversal", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following uses Trie internally?",
      options: [
        { optionText: "Priority Queue", optionTag: "D" },
        { optionText: "Ternary Search Tree", optionTag: "A" },
        { optionText: "Spell Checkers", optionTag: "B" },
        { optionText: "Stacks", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Time complexity to search a string of length m in Trie is:",
      options: [
        { optionText: "O(m)", optionTag: "C" },
        { optionText: "O(log m)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "D" },
        { optionText: "O(n)", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm benefits from using a Trie?",
      options: [
        { optionText: "Dijkstra", optionTag: "B" },
        { optionText: "Aho-Corasick", optionTag: "A" },
        { optionText: "Kruskal", optionTag: "C" },
        { optionText: "Prim", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many levels in a Trie with 5-letter words?",
      options: [
        { optionText: "6", optionTag: "D" },
        { optionText: "5", optionTag: "C" },
        { optionText: "1", optionTag: "A" },
        { optionText: "2", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which node type ends a word in a Trie?",
      options: [
        { optionText: "Intermediate node", optionTag: "C" },
        { optionText: "Start node", optionTag: "A" },
        { optionText: "Terminal node", optionTag: "B" },
        { optionText: "Loop node", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Tries are useful when:",
      options: [
        { optionText: "Data is unordered", optionTag: "D" },
        { optionText: "Frequent prefix searches", optionTag: "C" },
        { optionText: "Low memory space is preferred", optionTag: "A" },
        { optionText: "Graphs are involved", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following supports wildcard searches?",
      options: [
        { optionText: "Trie with backtracking", optionTag: "B" },
        { optionText: "Red-Black Tree", optionTag: "C" },
        { optionText: "AVL Tree", optionTag: "D" },
        { optionText: "Queue", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the space complexity of a Trie storing n words of max length m?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n * m)", optionTag: "D" },
        { optionText: "O(m)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;