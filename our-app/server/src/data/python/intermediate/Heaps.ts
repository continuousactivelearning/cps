import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Heaps - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Assess your understanding of heap operations, implementations, and applications in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Heaps"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following is true for a min-heap?",
      options: [
        { optionText: "Root is the maximum element", optionTag: "A" },
        { optionText: "Each parent is greater than its children", optionTag: "B" },
        { optionText: "Each parent is smaller than or equal to its children", optionTag: "C" },
        { optionText: "Heap contains only integers", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Python module provides heap operations?",
      options: [
        { optionText: "collections", optionTag: "A" },
        { optionText: "heaplib", optionTag: "B" },
        { optionText: "heapq", optionTag: "C" },
        { optionText: "math", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of inserting an element into a heap?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the default heap type in Python's heapq?",
      options: [
        { optionText: "Max-heap", optionTag: "A" },
        { optionText: "Min-heap", optionTag: "B" },
        { optionText: "Binary Search Tree", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which operation maintains the heap property after removing the root?",
      options: [
        { optionText: "heapify", optionTag: "A" },
        { optionText: "sort", optionTag: "B" },
        { optionText: "push", optionTag: "C" },
        { optionText: "reverse", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is internally used to represent heaps in Python?",
      options: [
        { optionText: "Linked List", optionTag: "A" },
        { optionText: "Tree", optionTag: "B" },
        { optionText: "Array/List", optionTag: "C" },
        { optionText: "Graph", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How can a max-heap be simulated using Python’s heapq?",
      options: [
        { optionText: "By negating all elements", optionTag: "A" },
        { optionText: "By sorting the list", optionTag: "B" },
        { optionText: "By using maxheapq module", optionTag: "C" },
        { optionText: "It is not possible", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of building a heap from n elements?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n²)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these operations is not provided by heapq?",
      options: [
        { optionText: "heappush", optionTag: "A" },
        { optionText: "heappop", optionTag: "B" },
        { optionText: "heapsort", optionTag: "C" },
        { optionText: "heapify", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the index of left child for a node at index i in a heap (0-based indexing)?",
      options: [
        { optionText: "2 * i + 1", optionTag: "A" },
        { optionText: "i / 2", optionTag: "B" },
        { optionText: "i - 1", optionTag: "C" },
        { optionText: "2 * i", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the use of `heapreplace` in heapq?",
      options: [
        { optionText: "Removes largest element", optionTag: "A" },
        { optionText: "Pushes and pops in single call", optionTag: "B" },
        { optionText: "Reverses the heap", optionTag: "C" },
        { optionText: "Clears the heap", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a characteristic of heap?",
      options: [
        { optionText: "Complete binary tree", optionTag: "A" },
        { optionText: "Every node has at most two children", optionTag: "B" },
        { optionText: "Inorder traversal gives sorted order", optionTag: "C" },
        { optionText: "Root is min (min-heap)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm typically uses heaps?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Dijkstra’s Algorithm", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens if `heappop` is called on an empty list?",
      options: [
        { optionText: "Returns None", optionTag: "A" },
        { optionText: "Raises IndexError", optionTag: "B" },
        { optionText: "Returns 0", optionTag: "C" },
        { optionText: "Does nothing", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How is the max element accessed in a max-heap simulated using `heapq`?",
      options: [
        { optionText: "heap[0]", optionTag: "A" },
        { optionText: "-heap[0]", optionTag: "B" },
        { optionText: "heap[-1]", optionTag: "C" },
        { optionText: "heap.pop()", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which operation will convert any list into a heap in-place?",
      options: [
        { optionText: "heapify()", optionTag: "A" },
        { optionText: "buildheap()", optionTag: "B" },
        { optionText: "heapsort()", optionTag: "C" },
        { optionText: "sort()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following problems can be solved using heaps?",
      options: [
        { optionText: "Finding median in stream", optionTag: "A" },
        { optionText: "Graph coloring", optionTag: "B" },
        { optionText: "Tower of Hanoi", optionTag: "C" },
        { optionText: "Balanced BST operations", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the root index in a 0-indexed heap list in Python?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "n", optionTag: "C" },
        { optionText: "Depends on heap type", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the space complexity of a binary heap?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n²)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is used in Python to maintain the heap structure after insertion?",
      options: [
        { optionText: "bubble_down", optionTag: "A" },
        { optionText: "reheapify", optionTag: "B" },
        { optionText: "sift_up", optionTag: "C" },
        { optionText: "heappush", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;