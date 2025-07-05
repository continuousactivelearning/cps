import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Two Pointers - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Test your basic understanding of the Two Pointers technique in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "TwoPointers"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the Two Pointers technique used for?",
      options: [
        { optionText: "Searching in a binary tree", optionTag: "A" },
        { optionText: "Iterating with two indices", optionTag: "B" },
        { optionText: "Reversing a stack", optionTag: "C" },
        { optionText: "Calculating factorial", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Where are the two pointers typically initialized in a list?",
      options: [
        { optionText: "Middle and end", optionTag: "C" },
        { optionText: "End and end", optionTag: "D" },
        { optionText: "Start and end", optionTag: "A" },
        { optionText: "Start and middle", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is best solved using two pointers?",
      options: [
        { optionText: "Check if a number is prime", optionTag: "D" },
        { optionText: "Merge two sorted arrays", optionTag: "C" },
        { optionText: "Traverse a tree", optionTag: "B" },
        { optionText: "Calculate sum of array", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What condition ends a Two Pointers loop?",
      options: [
        { optionText: "Left < Right", optionTag: "B" },
        { optionText: "Left == 0", optionTag: "C" },
        { optionText: "Right > len(list)", optionTag: "D" },
        { optionText: "Left > Right", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is commonly solved using two pointers?",
      options: [
        { optionText: "Palindrome check", optionTag: "A" },
        { optionText: "Find LCM", optionTag: "B" },
        { optionText: "Calculate GCD", optionTag: "C" },
        { optionText: "Convert binary to decimal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the left pointer usually represent?",
      options: [
        { optionText: "Beginning of the list", optionTag: "C" },
        { optionText: "Middle element", optionTag: "B" },
        { optionText: "Last element", optionTag: "D" },
        { optionText: "Pivot element", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which situation benefits from two pointers technique?",
      options: [
        { optionText: "Counting nodes in a tree", optionTag: "D" },
        { optionText: "Rotating matrix", optionTag: "C" },
        { optionText: "Finding pair with sum in sorted list", optionTag: "B" },
        { optionText: "Reversing an integer", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which sorting approach uses two pointers?",
      options: [
        { optionText: "Insertion sort", optionTag: "A" },
        { optionText: "Bubble sort", optionTag: "B" },
        { optionText: "Merge sort", optionTag: "C" },
        { optionText: "Counting sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What’s the time complexity of a typical Two Pointers approach?",
      options: [
        { optionText: "O(n^2)", optionTag: "D" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What’s a limitation of the two pointers approach?",
      options: [
        { optionText: "Only works on sorted data in some problems", optionTag: "D" },
        { optionText: "Takes too much space", optionTag: "B" },
        { optionText: "Requires recursion", optionTag: "C" },
        { optionText: "Only works for strings", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does incrementing the left pointer achieve?",
      options: [
        { optionText: "Move toward center from left", optionTag: "C" },
        { optionText: "Start over", optionTag: "B" },
        { optionText: "Reverse list", optionTag: "A" },
        { optionText: "Sort the array", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which function is useful in Python for sorted array?",
      options: [
        { optionText: "reversed()", optionTag: "D" },
        { optionText: "sort()", optionTag: "C" },
        { optionText: "bisect()", optionTag: "A" },
        { optionText: "filter()", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a variation of Two Pointers?",
      options: [
        { optionText: "Sliding Window", optionTag: "B" },
        { optionText: "BFS", optionTag: "D" },
        { optionText: "DFS", optionTag: "A" },
        { optionText: "Dynamic Programming", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which loop is typically used in Two Pointers?",
      options: [
        { optionText: "for", optionTag: "A" },
        { optionText: "while left <= right", optionTag: "C" },
        { optionText: "do-while", optionTag: "D" },
        { optionText: "for-each", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Can Two Pointers be applied to string manipulation?",
      options: [
        { optionText: "Yes", optionTag: "D" },
        { optionText: "Only in lists", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only in sets", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How many pointers are used in Two Pointers?",
      options: [
        { optionText: "Three", optionTag: "C" },
        { optionText: "Two", optionTag: "B" },
        { optionText: "One", optionTag: "A" },
        { optionText: "Four", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does Two Pointers technique improve?",
      options: [
        { optionText: "Time complexity", optionTag: "A" },
        { optionText: "Space complexity", optionTag: "B" },
        { optionText: "Both time and space", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What do you do when the sum of elements at pointers is less than target?",
      options: [
        { optionText: "Move right pointer left", optionTag: "C" },
        { optionText: "Move left pointer right", optionTag: "A" },
        { optionText: "Stop", optionTag: "B" },
        { optionText: "Reset", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python structure is best suited for two pointer problems?",
      options: [
        { optionText: "List", optionTag: "A" },
        { optionText: "Set", optionTag: "C" },
        { optionText: "Dict", optionTag: "D" },
        { optionText: "Queue", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Is it possible to use Two Pointers with unsorted data?",
      options: [
        { optionText: "Yes, in some problems", optionTag: "B" },
        { optionText: "No", optionTag: "C" },
        { optionText: "Only in C++", optionTag: "A" },
        { optionText: "Only with dictionaries", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;