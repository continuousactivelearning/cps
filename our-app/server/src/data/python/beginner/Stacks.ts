// beginner/python/stacks.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Stacks - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "This quiz tests your basic understanding of stack operations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Stacks"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main principle of stack data structure?",
      options: [
        { optionText: "Last In First Out", optionTag: "A" },
        { optionText: "First In First Out", optionTag: "B" },
        { optionText: "Random Access", optionTag: "C" },
        { optionText: "Top Down Access", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to add an element to the stack in Python (using list)?",
      options: [
        { optionText: "append()", optionTag: "A" },
        { optionText: "push()", optionTag: "B" },
        { optionText: "insert()", optionTag: "C" },
        { optionText: "add()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method removes the top element from a Python stack (list)?",
      options: [
        { optionText: "pop()", optionTag: "A" },
        { optionText: "remove()", optionTag: "B" },
        { optionText: "delete()", optionTag: "C" },
        { optionText: "cut()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which module in Python provides a built-in stack implementation?",
      options: [
        { optionText: "collections.deque", optionTag: "A" },
        { optionText: "stacklib", optionTag: "B" },
        { optionText: "queue", optionTag: "C" },
        { optionText: "heapq", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you pop from an empty list used as a stack?",
      options: [
        { optionText: "IndexError", optionTag: "A" },
        { optionText: "ValueError", optionTag: "B" },
        { optionText: "None", optionTag: "C" },
        { optionText: "Returns 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is best suited for stack implementation?",
      options: [
        { optionText: "deque", optionTag: "A" },
        { optionText: "set", optionTag: "B" },
        { optionText: "tuple", optionTag: "C" },
        { optionText: "string", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you check if a stack is empty?",
      options: [
        { optionText: "len(stack) == 0", optionTag: "A" },
        { optionText: "stack.empty()", optionTag: "B" },
        { optionText: "stack.isEmpty()", optionTag: "C" },
        { optionText: "stack.size == 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the top element of stack [2, 4, 6]?",
      options: [
        { optionText: "6", optionTag: "A" },
        { optionText: "2", optionTag: "B" },
        { optionText: "4", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is NOT allowed in stack?",
      options: [
        { optionText: "Insert at bottom", optionTag: "A" },
        { optionText: "Push", optionTag: "B" },
        { optionText: "Pop", optionTag: "C" },
        { optionText: "Peek", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does peek() mean in stack?",
      options: [
        { optionText: "Return top element without removing it", optionTag: "A" },
        { optionText: "Return last element", optionTag: "B" },
        { optionText: "Delete top element", optionTag: "C" },
        { optionText: "Remove entire stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // 10 more
    {
      questionText: "Which of the following is NOT an application of stacks?",
      options: [
        { optionText: "Undo feature in editors", optionTag: "A" },
        { optionText: "Expression evaluation", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Function call management", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of push() and pop() in stacks?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function is used to implement undo in stacks?",
      options: [
        { optionText: "pop()", optionTag: "A" },
        { optionText: "append()", optionTag: "B" },
        { optionText: "extend()", optionTag: "C" },
        { optionText: "insert()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python object type can be directly used as a stack?",
      options: [
        { optionText: "list", optionTag: "A" },
        { optionText: "dict", optionTag: "B" },
        { optionText: "set", optionTag: "C" },
        { optionText: "str", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be output of:\n```python\ns = [1, 2, 3]\ns.pop()\nprint(s)\n```",
      options: [
        { optionText: "[1, 2]", optionTag: "A" },
        { optionText: "[2, 3]", optionTag: "B" },
        { optionText: "[3]", optionTag: "C" },
        { optionText: "[1, 3]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is not a stack operation?",
      options: [
        { optionText: "enqueue()", optionTag: "A" },
        { optionText: "push()", optionTag: "B" },
        { optionText: "pop()", optionTag: "C" },
        { optionText: "peek()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these follows LIFO order?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Deque", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function removes last item in a list?",
      options: [
        { optionText: "pop()", optionTag: "A" },
        { optionText: "delete()", optionTag: "B" },
        { optionText: "clear()", optionTag: "C" },
        { optionText: "remove()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the default behavior of pop() in list?",
      options: [
        { optionText: "Removes last element", optionTag: "A" },
        { optionText: "Removes first element", optionTag: "B" },
        { optionText: "Removes middle element", optionTag: "C" },
        { optionText: "Removes all elements", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is better for stack in production?",
      options: [
        { optionText: "collections.deque", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "tuple", optionTag: "C" },
        { optionText: "array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;