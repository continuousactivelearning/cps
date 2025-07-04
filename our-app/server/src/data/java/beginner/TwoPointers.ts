import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Two Pointers - Beginner Quiz",
  quizLevel: "beginner",
  lang: "java",
  description: "This quiz evaluates your understanding of the Two Pointers technique in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Two Pointers"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary goal of the two pointers technique?",
      options: [
        { optionText: "To reduce the time complexity by traversing from both ends", optionTag: "A" },
        { optionText: "To increase memory usage", optionTag: "B" },
        { optionText: "To sort arrays efficiently", optionTag: "C" },
        { optionText: "To check for null pointers", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following problems is commonly solved using the two pointers technique?",
      options: [
        { optionText: "Detecting loops in linked list", optionTag: "A" },
        { optionText: "Finding a pair with a given sum in a sorted array", optionTag: "B" },
        { optionText: "Implementing hash tables", optionTag: "C" },
        { optionText: "Finding maximum in an array", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What are the typical starting positions of the two pointers in the array?",
      options: [
        { optionText: "One at the start and one at the end", optionTag: "C" },
        { optionText: "Both at the middle", optionTag: "A" },
        { optionText: "Both at the start", optionTag: "B" },
        { optionText: "Random positions", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which condition is usually checked in the loop for two pointers?",
      options: [
        { optionText: "While left < right", optionTag: "D" },
        { optionText: "While left != right", optionTag: "B" },
        { optionText: "While left == right", optionTag: "A" },
        { optionText: "While left > right", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which problem is NOT typically solved using two pointers?",
      options: [
        { optionText: "Reversing a linked list", optionTag: "D" },
        { optionText: "Checking for a palindrome in a string", optionTag: "B" },
        { optionText: "Removing duplicates from a sorted array", optionTag: "A" },
        { optionText: "Merging two sorted arrays", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the time complexity of the two pointers approach in most cases?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can two pointers be used in string manipulation?",
      options: [
        { optionText: "To find substrings using window", optionTag: "D" },
        { optionText: "To build a trie", optionTag: "B" },
        { optionText: "To perform binary search", optionTag: "C" },
        { optionText: "To convert string to array", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In the problem of removing duplicates from a sorted array, what does one pointer usually do?",
      options: [
        { optionText: "Tracks last unique element", optionTag: "B" },
        { optionText: "Finds duplicates only", optionTag: "C" },
        { optionText: "Deletes elements", optionTag: "D" },
        { optionText: "Initializes the array", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What data structure is most associated with the two pointers technique?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Graph", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following best uses two pointers to check a palindrome?",
      options: [
        { optionText: "Compare start and end characters and move inward", optionTag: "C" },
        { optionText: "Check if characters are uppercase", optionTag: "A" },
        { optionText: "Count characters only", optionTag: "B" },
        { optionText: "Use recursion", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Two pointers is often paired with which other technique?",
      options: [
        { optionText: "Sorting", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Greedy", optionTag: "C" },
        { optionText: "Sliding Window", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is a necessary condition for applying two pointers on an array to find a pair with a given sum?",
      options: [
        { optionText: "Array must be sorted", optionTag: "A" },
        { optionText: "Array must be reversed", optionTag: "B" },
        { optionText: "Array must contain strings", optionTag: "C" },
        { optionText: "Array must be empty", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What should be done when the current sum is greater than target?",
      options: [
        { optionText: "Move the right pointer left", optionTag: "B" },
        { optionText: "Move the left pointer right", optionTag: "C" },
        { optionText: "Stop the loop", optionTag: "D" },
        { optionText: "Reset the array", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In which case would two pointers approach NOT be helpful?",
      options: [
        { optionText: "Finding all triplets that sum to 0", optionTag: "C" },
        { optionText: "Finding the median", optionTag: "B" },
        { optionText: "Finding the maximum subarray", optionTag: "A" },
        { optionText: "Detecting cycle in linked list", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In which situation would you move both pointers simultaneously?",
      options: [
        { optionText: "Finding common elements", optionTag: "C" },
        { optionText: "Searching sorted array", optionTag: "A" },
        { optionText: "Binary search", optionTag: "B" },
        { optionText: "String manipulation", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which method is preferred in Java for reversing an array using two pointers?",
      options: [
        { optionText: "Swap elements at left and right pointers", optionTag: "D" },
        { optionText: "Use sort function", optionTag: "A" },
        { optionText: "Reverse loop", optionTag: "B" },
        { optionText: "Nested loop", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Why is two pointers approach efficient?",
      options: [
        { optionText: "It avoids unnecessary nested loops", optionTag: "B" },
        { optionText: "It increases space usage", optionTag: "A" },
        { optionText: "It randomizes array", optionTag: "D" },
        { optionText: "It works only on strings", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the advantage of using two pointers in a sorted array over brute force?",
      options: [
        { optionText: "Linear time solution", optionTag: "A" },
        { optionText: "Random access", optionTag: "C" },
        { optionText: "Memory intensive", optionTag: "D" },
        { optionText: "None", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if left > right in a two pointer setup?",
      options: [
        { optionText: "Loop ends", optionTag: "C" },
        { optionText: "Pointers swap", optionTag: "A" },
        { optionText: "Values add", optionTag: "B" },
        { optionText: "Array sorts", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;