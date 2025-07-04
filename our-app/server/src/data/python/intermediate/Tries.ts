import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Tries - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "This quiz assesses your knowledge on Tries (Prefix Trees) in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Tries",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a Trie primarily used for?",
      options: [
        { optionText: "Storing integers", optionTag: "A" },
        { optionText: "Prefix matching of strings", optionTag: "B" },
        { optionText: "Matrix manipulation", optionTag: "C" },
        { optionText: "Graph traversal", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of searching a key in a Trie of k length?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(k)", optionTag: "B" },
        { optionText: "O(log k)", optionTag: "C" },
        { optionText: "O(k^2)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which character is typically used to mark the end of a word in a Trie?",
      options: [
        { optionText: "*", optionTag: "A" },
        { optionText: "#", optionTag: "B" },
        { optionText: "$", optionTag: "C" },
        { optionText: "None; a boolean flag is used", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which data structure is commonly used to implement a Trie node?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "List", optionTag: "B" },
        { optionText: "Dictionary or HashMap", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the main advantage of a Trie over a HashMap?",
      options: [
        { optionText: "Faster lookups", optionTag: "A" },
        { optionText: "Can handle prefix queries efficiently", optionTag: "B" },
        { optionText: "More compact memory usage", optionTag: "C" },
        { optionText: "No collisions", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In a Trie, how many children does each node typically have (English lowercase letters)?",
      options: [
        { optionText: "26", optionTag: "A" },
        { optionText: "10", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "Unlimited", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following applications commonly use Tries?",
      options: [
        { optionText: "Network routing", optionTag: "A" },
        { optionText: "Autocomplete", optionTag: "B" },
        { optionText: "Image compression", optionTag: "C" },
        { optionText: "OS scheduling", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens if a word is already present when inserting into a Trie?",
      options: [
        { optionText: "Duplicates are added", optionTag: "A" },
        { optionText: "It overwrites the old word", optionTag: "B" },
        { optionText: "It marks end flag again", optionTag: "C" },
        { optionText: "It throws an error", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which is NOT a valid Trie use case?",
      options: [
        { optionText: "Spell checking", optionTag: "A" },
        { optionText: "Substring matching", optionTag: "B" },
        { optionText: "Prefix search", optionTag: "C" },
        { optionText: "Data compression", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What would be the height of a Trie storing only the word 'apple'?",
      options: [
        { optionText: "4", optionTag: "A" },
        { optionText: "5", optionTag: "B" },
        { optionText: "6", optionTag: "C" },
        { optionText: "Undefined", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity to insert a word of length n?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the typical space complexity of a Trie?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n * m)", optionTag: "B" },
        { optionText: "O(m)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which property makes Trie a non-binary tree?",
      options: [
        { optionText: "Each node can have more than 2 children", optionTag: "A" },
        { optionText: "It uses recursion", optionTag: "B" },
        { optionText: "It stores booleans", optionTag: "C" },
        { optionText: "It allows loops", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does Trie stand for?",
      options: [
        { optionText: "Tree of Recursion in Elements", optionTag: "A" },
        { optionText: "Retrieval Tree", optionTag: "B" },
        { optionText: "Try In Encoding", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is a disadvantage of a Trie?",
      options: [
        { optionText: "Slow insertions", optionTag: "A" },
        { optionText: "Increased memory usage", optionTag: "B" },
        { optionText: "Unordered elements", optionTag: "C" },
        { optionText: "High disk access", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How is a node’s children typically stored in Python implementation?",
      options: [
        { optionText: "As a dictionary", optionTag: "A" },
        { optionText: "As a string", optionTag: "B" },
        { optionText: "As a tuple", optionTag: "C" },
        { optionText: "As a stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to check if a word exists in a Trie?",
      options: [
        { optionText: "Traverse and check end flag", optionTag: "A" },
        { optionText: "Do a binary search", optionTag: "B" },
        { optionText: "Use recursion over all nodes", optionTag: "C" },
        { optionText: "Look into the heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following would be a correct way to initialize a Trie node in Python?",
      options: [
        { optionText: `self.children = {}`, optionTag: "A" },
        { optionText: `self.children = []`, optionTag: "B" },
        { optionText: `self.children = None`, optionTag: "C" },
        { optionText: `self.children = 0`, optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which case is best solved with Trie?",
      options: [
        { optionText: "Range queries", optionTag: "A" },
        { optionText: "Prefix search", optionTag: "B" },
        { optionText: "Array sorting", optionTag: "C" },
        { optionText: "Cycle detection", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Tries are most effective when:",
      options: [
        { optionText: "Data is numeric", optionTag: "A" },
        { optionText: "Data has common prefixes", optionTag: "B" },
        { optionText: "Data is disjoint", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;