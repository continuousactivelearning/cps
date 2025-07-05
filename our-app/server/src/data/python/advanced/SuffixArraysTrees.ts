import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Suffix Arrays/Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Assess your understanding of suffix arrays and suffix trees for string processing.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Suffix Arrays/Trees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main application of suffix arrays?",
      options: [
        { optionText: "Pattern matching", optionTag: "D" },
        { optionText: "Matrix multiplication", optionTag: "A" },
        { optionText: "Graph traversal", optionTag: "B" },
        { optionText: "Number sorting", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which data structure provides linear time construction for suffix trees?",
      options: [
        { optionText: "Ukkonen's algorithm", optionTag: "A" },
        { optionText: "Kruskal's algorithm", optionTag: "B" },
        { optionText: "Dijkstra's algorithm", optionTag: "C" },
        { optionText: "Aho-Corasick algorithm", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Suffix trees are mainly used for:",
      options: [
        { optionText: "Efficient string pattern matching", optionTag: "C" },
        { optionText: "Array sorting", optionTag: "B" },
        { optionText: "Hashing", optionTag: "A" },
        { optionText: "Encryption", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the space complexity of a suffix tree?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How are suffix arrays typically constructed?",
      options: [
        { optionText: "By sorting suffixes of the string", optionTag: "B" },
        { optionText: "By traversing the string in reverse", optionTag: "A" },
        { optionText: "Using stacks", optionTag: "C" },
        { optionText: "Using heaps", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which suffix array algorithm uses radix sort?",
      options: [
        { optionText: "DC3 Algorithm", optionTag: "C" },
        { optionText: "Merge Sort", optionTag: "D" },
        { optionText: "QuickSort", optionTag: "A" },
        { optionText: "Counting Sort", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Suffix arrays are generally more space-efficient than:",
      options: [
        { optionText: "Suffix Trees", optionTag: "D" },
        { optionText: "Tries", optionTag: "C" },
        { optionText: "Graphs", optionTag: "A" },
        { optionText: "Linked Lists", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is a limitation of suffix arrays compared to suffix trees?",
      options: [
        { optionText: "Slower substring search", optionTag: "A" },
        { optionText: "More memory usage", optionTag: "C" },
        { optionText: "Only works with numbers", optionTag: "D" },
        { optionText: "Requires dynamic resizing", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which algorithm is NOT typically associated with suffix structures?",
      options: [
        { optionText: "Bellman-Ford", optionTag: "C" },
        { optionText: "Kasai’s Algorithm", optionTag: "A" },
        { optionText: "Ukkonen’s Algorithm", optionTag: "B" },
        { optionText: "DC3", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What does the LCP array store?",
      options: [
        { optionText: "Length of longest common prefix between suffixes", optionTag: "D" },
        { optionText: "List of common paths", optionTag: "A" },
        { optionText: "Number of prefixes", optionTag: "B" },
        { optionText: "Pattern matches", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the time complexity for constructing a suffix array using the naive method?",
      options: [
        { optionText: "O(n^2 log n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n^3)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following uses suffix trees?",
      options: [
        { optionText: "Genome sequence analysis", optionTag: "C" },
        { optionText: "Image compression", optionTag: "D" },
        { optionText: "Matrix multiplication", optionTag: "A" },
        { optionText: "Heap operations", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is NOT true about suffix arrays?",
      options: [
        { optionText: "Can be used with LCP for pattern matching", optionTag: "D" },
        { optionText: "Requires suffix trees", optionTag: "A" },
        { optionText: "Are lexicographically sorted suffix indices", optionTag: "B" },
        { optionText: "Can be constructed in O(n log n)", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does Ukkonen's algorithm improve over naive construction?",
      options: [
        { optionText: "Time complexity", optionTag: "C" },
        { optionText: "Space usage", optionTag: "D" },
        { optionText: "Alphabet encoding", optionTag: "B" },
        { optionText: "Sorting speed", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Suffix trees are based on which tree structure?",
      options: [
        { optionText: "Compressed trie", optionTag: "A" },
        { optionText: "Binary tree", optionTag: "B" },
        { optionText: "Heap", optionTag: "D" },
        { optionText: "AVL tree", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the leaf node in a suffix tree?",
      options: [
        { optionText: "A suffix ending", optionTag: "C" },
        { optionText: "A root node", optionTag: "B" },
        { optionText: "A compressed prefix", optionTag: "A" },
        { optionText: "A pointer to a graph", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which suffix structure is more commonly used in bioinformatics?",
      options: [
        { optionText: "Suffix Trees", optionTag: "D" },
        { optionText: "Binary Trees", optionTag: "A" },
        { optionText: "Red Black Trees", optionTag: "B" },
        { optionText: "AVL Trees", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Suffix arrays avoid which drawback of suffix trees?",
      options: [
        { optionText: "High memory usage", optionTag: "C" },
        { optionText: "Slow indexing", optionTag: "D" },
        { optionText: "Bad accuracy", optionTag: "A" },
        { optionText: "Limited characters", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "In suffix arrays, how is the index of suffixes stored?",
      options: [
        { optionText: "As integer array", optionTag: "B" },
        { optionText: "As hash maps", optionTag: "C" },
        { optionText: "As strings", optionTag: "A" },
        { optionText: "As graphs", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which algorithm generates both suffix array and LCP together efficiently?",
      options: [
        { optionText: "Kasai’s algorithm", optionTag: "C" },
        { optionText: "Ford-Fulkerson", optionTag: "A" },
        { optionText: "KMP", optionTag: "D" },
        { optionText: "Aho-Corasick", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;