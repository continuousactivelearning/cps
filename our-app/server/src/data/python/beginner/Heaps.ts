import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Heaps - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Assess your basic understanding of Heaps in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Heaps"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a Heap in Python?",
      options: [
        { optionText: "A binary tree with all elements sorted", optionTag: "D" },
        { optionText: "A binary tree with the heap property", optionTag: "A" },
        { optionText: "A linear array used in recursion", optionTag: "C" },
        { optionText: "A tree with only left children", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What module provides heap functionality in Python?",
      options: [
        { optionText: "heaptools", optionTag: "D" },
        { optionText: "heappq", optionTag: "C" },
        { optionText: "heapify", optionTag: "A" },
        { optionText: "heapq", optionTag: "B" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of inserting into a heap?",
      options: [
        { optionText: "O(n log n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which type of heap always keeps the smallest element at the root?",
      options: [
        { optionText: "Max Heap", optionTag: "C" },
        { optionText: "Min Heap", optionTag: "D" },
        { optionText: "Priority Queue", optionTag: "A" },
        { optionText: "Balanced Binary Tree", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which function adds an item to the heap?",
      options: [
        { optionText: "heapadd()", optionTag: "A" },
        { optionText: "heappush()", optionTag: "C" },
        { optionText: "pushheap()", optionTag: "D" },
        { optionText: "insertheap()", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which function returns the smallest item from the heap?",
      options: [
        { optionText: "heappop()", optionTag: "A" },
        { optionText: "popheap()", optionTag: "B" },
        { optionText: "minheap()", optionTag: "D" },
        { optionText: "getmin()", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the root of a max heap?",
      options: [
        { optionText: "Maximum element", optionTag: "A" },
        { optionText: "Minimum element", optionTag: "B" },
        { optionText: "Random element", optionTag: "D" },
        { optionText: "Null", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which heap operation is useful for sorting?",
      options: [
        { optionText: "heapsort()", optionTag: "C" },
        { optionText: "heapify()", optionTag: "B" },
        { optionText: "heapclear()", optionTag: "D" },
        { optionText: "heapsearch()", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does heapify() do?",
      options: [
        { optionText: "Deletes root node", optionTag: "C" },
        { optionText: "Sorts the heap", optionTag: "D" },
        { optionText: "Converts a list into a heap", optionTag: "A" },
        { optionText: "Flattens a heap", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which structure underlies Python’s heapq?",
      options: [
        { optionText: "List", optionTag: "C" },
        { optionText: "Binary tree", optionTag: "D" },
        { optionText: "Dictionary", optionTag: "A" },
        { optionText: "Tuple", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which method pops and returns smallest element in heap?",
      options: [
        { optionText: "heappop()", optionTag: "D" },
        { optionText: "pop()", optionTag: "C" },
        { optionText: "minpop()", optionTag: "A" },
        { optionText: "extractmin()", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which heap property is true for a min heap?",
      options: [
        { optionText: "Every node is greater than its children", optionTag: "A" },
        { optionText: "Every node is less than or equal to its children", optionTag: "C" },
        { optionText: "Children are equal to parent", optionTag: "B" },
        { optionText: "Every node is randomly placed", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In a binary heap, where is the parent of element at index i located?",
      options: [
        { optionText: "(i-1)//2", optionTag: "C" },
        { optionText: "(i+1)//2", optionTag: "D" },
        { optionText: "i//2", optionTag: "B" },
        { optionText: "2*i", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Is Python heapq a max heap?",
      options: [
        { optionText: "Yes, always", optionTag: "A" },
        { optionText: "No, it is min heap", optionTag: "B" },
        { optionText: "It depends on data", optionTag: "C" },
        { optionText: "It can be both", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How to implement max heap using heapq?",
      options: [
        { optionText: "Insert negative values", optionTag: "D" },
        { optionText: "Use maxheapq module", optionTag: "C" },
        { optionText: "Set reverse=True", optionTag: "A" },
        { optionText: "Sort before heapifying", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which heap function pushes and pops in one call?",
      options: [
        { optionText: "heapreplace()", optionTag: "B" },
        { optionText: "heappushpop()", optionTag: "C" },
        { optionText: "heapaddpop()", optionTag: "D" },
        { optionText: "heapcycle()", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which is not a valid heap operation?",
      options: [
        { optionText: "heappush()", optionTag: "A" },
        { optionText: "heappushpop()", optionTag: "B" },
        { optionText: "heapmerge()", optionTag: "D" },
        { optionText: "heapify()", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Heap is mainly used in which application?",
      options: [
        { optionText: "Priority Queues", optionTag: "C" },
        { optionText: "File systems", optionTag: "D" },
        { optionText: "Sorting", optionTag: "B" },
        { optionText: "Recursion", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm uses heaps for sorting?",
      options: [
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Merge Sort", optionTag: "D" },
        { optionText: "Quick Sort", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which heap function pushes a new item and removes the smallest?",
      options: [
        { optionText: "heapreplace()", optionTag: "A" },
        { optionText: "heappush()", optionTag: "B" },
        { optionText: "heappop()", optionTag: "C" },
        { optionText: "heapmerge()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;