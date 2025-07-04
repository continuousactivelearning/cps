import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Heaps - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your in-depth understanding of heaps in Python with this advanced quiz.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Heaps",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following operations is not efficiently supported by a binary heap?",
      options: [
        { optionText: "Insert", optionTag: "A" },
        { optionText: "Delete", optionTag: "B" },
        { optionText: "Search for an arbitrary element", optionTag: "C" },
        { optionText: "Extract Min/Max", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the time complexity of building a heap from an unsorted array?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which Python module provides a heap implementation?",
      options: [
        { optionText: "`heapify`", optionTag: "A" },
        { optionText: "`heap`", optionTag: "B" },
        { optionText: "`heapq`", optionTag: "C" },
        { optionText: "`binaryheap`", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "In a min heap, what property does each node satisfy?",
      options: [
        { optionText: "It has no children", optionTag: "A" },
        { optionText: "Its value is less than or equal to its children", optionTag: "B" },
        { optionText: "It is the root of the tree", optionTag: "C" },
        { optionText: "It is always at the leaf level", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the height of a binary heap with n elements?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is true about a max heap?",
      options: [
        { optionText: "The largest value is always at a leaf", optionTag: "A" },
        { optionText: "The root always contains the largest value", optionTag: "B" },
        { optionText: "All elements are sorted", optionTag: "C" },
        { optionText: "Children are always smaller than siblings", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the purpose of `heapify` in the `heapq` module?",
      options: [
        { optionText: "Sorts the list", optionTag: "A" },
        { optionText: "Transforms list into a heap", optionTag: "B" },
        { optionText: "Deletes the root", optionTag: "C" },
        { optionText: "Finds the median", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which operation can be done in O(log n) time in a heap?",
      options: [
        { optionText: "Insert", optionTag: "A" },
        { optionText: "Access by index", optionTag: "B" },
        { optionText: "Linear search", optionTag: "C" },
        { optionText: "Print all values", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What data structure is best for implementing a priority queue?",
      options: [
        { optionText: "Binary heap", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Linked list", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which type of heap supports both insert and extract in O(log n)?",
      options: [
        { optionText: "Min heap", optionTag: "A" },
        { optionText: "Max heap", optionTag: "B" },
        { optionText: "Binary heap", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which index is the parent of the node at index `i` in an array-based heap?",
      options: [
        { optionText: "(i - 1) // 2", optionTag: "A" },
        { optionText: "2 * i + 1", optionTag: "B" },
        { optionText: "i // 2", optionTag: "C" },
        { optionText: "i + 1", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the result of `heapq.heappop()`?",
      options: [
        { optionText: "Removes largest element", optionTag: "A" },
        { optionText: "Removes smallest element", optionTag: "B" },
        { optionText: "Removes root of max heap", optionTag: "C" },
        { optionText: "Does nothing", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What kind of binary tree is a heap?",
      options: [
        { optionText: "Full", optionTag: "A" },
        { optionText: "Complete", optionTag: "B" },
        { optionText: "Perfect", optionTag: "C" },
        { optionText: "Balanced", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In a binary max heap, which condition must always be true?",
      options: [
        { optionText: "Parent > children", optionTag: "A" },
        { optionText: "Left child > right child", optionTag: "B" },
        { optionText: "Right child > parent", optionTag: "C" },
        { optionText: "Parent == average of children", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What happens if you insert into a full heap array?",
      options: [
        { optionText: "Raises IndexError", optionTag: "A" },
        { optionText: "Appends and reorders", optionTag: "B" },
        { optionText: "Overwrites root", optionTag: "C" },
        { optionText: "Creates a new heap", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which method keeps a heap property after deletion?",
      options: [
        { optionText: "Sift up", optionTag: "A" },
        { optionText: "Bubble down", optionTag: "B" },
        { optionText: "Heapify", optionTag: "C" },
        { optionText: "Trickle down", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which Python heap operation pushes and pops atomically?",
      options: [
        { optionText: "heapq.pushpop()", optionTag: "A" },
        { optionText: "heapq.heappushpop()", optionTag: "B" },
        { optionText: "heapq.replace()", optionTag: "C" },
        { optionText: "heapq.popthenpush()", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Why are heaps not suitable for fast search?",
      options: [
        { optionText: "Not sorted by key", optionTag: "A" },
        { optionText: "Too many levels", optionTag: "B" },
        { optionText: "Space inefficient", optionTag: "C" },
        { optionText: "Binary tree has no index", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How do you implement a min heap from scratch?",
      options: [
        { optionText: "Always insert at the root", optionTag: "A" },
        { optionText: "Insert at leaf and bubble up", optionTag: "B" },
        { optionText: "Insert in-order and traverse", optionTag: "C" },
        { optionText: "Sort the array every time", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is an application of heaps?",
      options: [
        { optionText: "Median maintenance", optionTag: "A" },
        { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    }
  ],
};

export default quizData;