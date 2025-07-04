import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Complexity Analysis - Beginner Quiz",
  quizLevel: "beginner",
  lang: "java",
  description: "This quiz tests your fundamental understanding of time and space complexity in Java programs.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Complexity Analysis"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of accessing an element in an array?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of a simple loop that runs from 1 to n?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is an example of constant time complexity?",
      options: [
        { optionText: "Accessing an element in an array", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Nested loops", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which notation describes the best-case time complexity?",
      options: [
        { optionText: "Ω (Omega)", optionTag: "A" },
        { optionText: "O (Big O)", optionTag: "B" },
        { optionText: "Θ (Theta)", optionTag: "C" },
        { optionText: "π (Pi)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the space complexity of storing an array of n elements?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is the worst-case time complexity for linear search?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is Big O notation used for?",
      options: [
        { optionText: "Describing time/space complexity", optionTag: "A" },
        { optionText: "Measuring memory size", optionTag: "B" },
        { optionText: "Analyzing code syntax", optionTag: "C" },
        { optionText: "Counting variables", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation has logarithmic time complexity?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Matrix Multiplication", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these best describes Θ (Theta) notation?",
      options: [
        { optionText: "Tight bound for both best and worst case", optionTag: "A" },
        { optionText: "Only upper bound", optionTag: "B" },
        { optionText: "Only lower bound", optionTag: "C" },
        { optionText: "Average-case bound", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm has time complexity of O(n log n)?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does 'n' typically represent in Big O notation?",
      options: [
        { optionText: "Input size", optionTag: "A" },
        { optionText: "Number of operations", optionTag: "B" },
        { optionText: "Data type", optionTag: "C" },
        { optionText: "Function name", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of nested loops?",
      options: [
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following describes exponential time complexity?",
      options: [
        { optionText: "O(2^n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Is time complexity dependent on machine specifications?",
      options: [
        { optionText: "No", optionTag: "A" },
        { optionText: "Yes", optionTag: "B" },
        { optionText: "Depends on OS", optionTag: "C" },
        { optionText: "Depends on compiler", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which complexity grows the fastest?",
      options: [
        { optionText: "O(n!)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of inserting an element at the end of an ArrayList in Java?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the average-case time complexity of binary search?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the space complexity of a recursive function that calls itself n times?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is more efficient in terms of time complexity: O(n) or O(n log n)?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "Both are same", optionTag: "C" },
        { optionText: "Depends on 'n'", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;