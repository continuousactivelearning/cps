import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Divide and Conquer - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of Divide and Conquer paradigm in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DivideAndConquer",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the basic idea of Divide and Conquer?",
      options: [
        { optionText: "Divide the problem, solve subproblems, and combine results", optionTag: "A" },
        { optionText: "Merge all problems into one large task", optionTag: "B" },
        { optionText: "Use brute-force method only", optionTag: "C" },
        { optionText: "Solve without recursion", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of these algorithms follows Divide and Conquer?",
      options: [
        { optionText: "Merge Sort", optionTag: "D" },
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Hashing", optionTag: "B" },
        { optionText: "Greedy Algorithms", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the main benefit of Divide and Conquer?",
      options: [
        { optionText: "Reduces complexity by solving smaller problems", optionTag: "B" },
        { optionText: "Avoids recursion", optionTag: "A" },
        { optionText: "Requires more memory", optionTag: "D" },
        { optionText: "Slower than brute-force", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is a common step in Divide and Conquer?",
      options: [
        { optionText: "Combine the results", optionTag: "C" },
        { optionText: "Ignore subproblems", optionTag: "D" },
        { optionText: "Flatten the problem", optionTag: "B" },
        { optionText: "Solve sequentially", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is an example of Divide and Conquer algorithm?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Depth First Search", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" },
        { optionText: "Hash Table", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the worst-case time complexity of Merge Sort?",
      options: [
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What data structure is usually used in Divide and Conquer algorithms?",
      options: [
        { optionText: "Recursion", optionTag: "D" },
        { optionText: "ArrayList", optionTag: "B" },
        { optionText: "HashMap", optionTag: "C" },
        { optionText: "Queue", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which function is commonly used to apply Divide and Conquer recursively in Python?",
      options: [
        { optionText: "def function with recursive calls", optionTag: "C" },
        { optionText: "print()", optionTag: "B" },
        { optionText: "input()", optionTag: "A" },
        { optionText: "for loop only", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the merge step responsible for in Merge Sort?",
      options: [
        { optionText: "Combining sorted subarrays", optionTag: "A" },
        { optionText: "Splitting arrays", optionTag: "D" },
        { optionText: "Selecting pivot", optionTag: "B" },
        { optionText: "Swapping elements", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is a key challenge in Divide and Conquer algorithms?",
      options: [
        { optionText: "Merging partial results", optionTag: "C" },
        { optionText: "Input validation", optionTag: "B" },
        { optionText: "Using nested loops", optionTag: "A" },
        { optionText: "Memory allocation", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which algorithm is NOT Divide and Conquer based?",
      options: [
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Divide and Conquer usually improves which of the following?",
      options: [
        { optionText: "Time complexity", optionTag: "A" },
        { optionText: "Syntax readability", optionTag: "C" },
        { optionText: "Code debugging", optionTag: "B" },
        { optionText: "I/O speed", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How is array divided in Merge Sort?",
      options: [
        { optionText: "Into two halves", optionTag: "C" },
        { optionText: "Randomly", optionTag: "B" },
        { optionText: "Into single element chunks first", optionTag: "A" },
        { optionText: "Using odd/even indexes", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which keyword is used in Python to define a recursive function?",
      options: [
        { optionText: "def", optionTag: "A" },
        { optionText: "function", optionTag: "D" },
        { optionText: "return", optionTag: "C" },
        { optionText: "class", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the purpose of base case in Divide and Conquer recursion?",
      options: [
        { optionText: "To stop recursion", optionTag: "C" },
        { optionText: "To merge arrays", optionTag: "D" },
        { optionText: "To slow down execution", optionTag: "B" },
        { optionText: "To avoid loops", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which sorting algorithm is not purely Divide and Conquer?",
      options: [
        { optionText: "Insertion Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "D" },
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the pivot in Quick Sort used for?",
      options: [
        { optionText: "Partitioning the array", optionTag: "A" },
        { optionText: "Merging elements", optionTag: "C" },
        { optionText: "Adding recursion", optionTag: "D" },
        { optionText: "Sorting by index", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which condition helps end recursion in Merge Sort?",
      options: [
        { optionText: "Array size becomes 1", optionTag: "D" },
        { optionText: "All elements are same", optionTag: "A" },
        { optionText: "Array is full", optionTag: "C" },
        { optionText: "Array is empty", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Is Divide and Conquer always recursive?",
      options: [
        { optionText: "Usually yes, but not always", optionTag: "B" },
        { optionText: "Never", optionTag: "D" },
        { optionText: "Only in Python", optionTag: "C" },
        { optionText: "Only for sorting", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What helps optimize Divide and Conquer performance?",
      options: [
        { optionText: "Efficient combining of results", optionTag: "C" },
        { optionText: "Memory fragmentation", optionTag: "D" },
        { optionText: "Lengthy code", optionTag: "B" },
        { optionText: "Avoiding recursion", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;