import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Stacks - Advanced Quiz",
  quizLevel: "advanced",
  lang: "cpp",
  description: "This quiz assesses advanced knowledge of stacks in C++, including expression evaluation, infix-postfix conversions, and stack-based algorithms.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Stacks"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following problems is efficiently solved using stacks?",
      options: [
        { optionText: "Balanced parentheses", optionTag: "A" },
        { optionText: "Binary search", optionTag: "B" },
        { optionText: "Bubble sort", optionTag: "C" },
        { optionText: "Counting sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of push and pop operations in a stack implemented using a linked list?",
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
      questionText: "Which algorithm uses two stacks for expression evaluation?",
      options: [
        { optionText: "Shunting Yard Algorithm", optionTag: "A" },
        { optionText: "Dijkstra's Algorithm", optionTag: "B" },
        { optionText: "BFS Traversal", optionTag: "C" },
        { optionText: "DFS Traversal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these can detect invalid postfix expressions?",
      options: [
        { optionText: "Stack underflow during evaluation", optionTag: "A" },
        { optionText: "Stack overflow", optionTag: "B" },
        { optionText: "Compile-time error", optionTag: "C" },
        { optionText: "Missing semicolon", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which C++ STL container best represents a stack?",
      options: [
        { optionText: "std::stack", optionTag: "A" },
        { optionText: "std::queue", optionTag: "B" },
        { optionText: "std::vector", optionTag: "C" },
        { optionText: "std::list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the postfix form of the expression (A + B) * (C - D)?",
      options: [
        { optionText: "A B + C D - *", optionTag: "A" },
        { optionText: "A B C D + - *", optionTag: "B" },
        { optionText: "A B C D - + *", optionTag: "C" },
        { optionText: "A B * C D - +", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation causes stack underflow?",
      options: [
        { optionText: "Popping from an empty stack", optionTag: "A" },
        { optionText: "Pushing into an empty stack", optionTag: "B" },
        { optionText: "Accessing the top element", optionTag: "C" },
        { optionText: "Clearing the stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is the correct postfix expression for A + B * C?",
      options: [
        { optionText: "A B C * +", optionTag: "A" },
        { optionText: "A B + C *", optionTag: "B" },
        { optionText: "A + B * C", optionTag: "C" },
        { optionText: "A * B + C", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the space complexity of a recursive algorithm using stack implicitly?",
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
      questionText: "How many stacks are needed to implement a queue?",
      options: [
        { optionText: "2", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "3", optionTag: "C" },
        { optionText: "0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of evaluating the postfix expression: 5 1 2 + 4 * + 3 -?",
      options: [
        { optionText: "14", optionTag: "A" },
        { optionText: "17", optionTag: "B" },
        { optionText: "18", optionTag: "C" },
        { optionText: "19", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which technique can be used to find the nearest greater element to the right?",
      options: [
        { optionText: "Stack with reverse traversal", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Linked list", optionTag: "C" },
        { optionText: "Hash table", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a valid stack operation?",
      options: [
        { optionText: "insert()", optionTag: "A" },
        { optionText: "push()", optionTag: "B" },
        { optionText: "pop()", optionTag: "C" },
        { optionText: "top()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which property makes stack a LIFO structure?",
      options: [
        { optionText: "Last In, First Out", optionTag: "A" },
        { optionText: "First In, First Out", optionTag: "B" },
        { optionText: "Random Access", optionTag: "C" },
        { optionText: "Sorted Access", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In expression parsing, which operator precedence is checked first?",
      options: [
        { optionText: "Parentheses", optionTag: "A" },
        { optionText: "Addition", optionTag: "B" },
        { optionText: "Subtraction", optionTag: "C" },
        { optionText: "Bitwise", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which stack application helps with undo functionality?",
      options: [
        { optionText: "Maintaining history stack", optionTag: "A" },
        { optionText: "Linked list implementation", optionTag: "B" },
        { optionText: "Database queue", optionTag: "C" },
        { optionText: "Binary tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm uses stacks to perform DFS traversal?",
      options: [
        { optionText: "Non-recursive DFS", optionTag: "A" },
        { optionText: "Recursive BFS", optionTag: "B" },
        { optionText: "Prim's algorithm", optionTag: "C" },
        { optionText: "Kruskal's algorithm", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the infix of the postfix expression: AB+CD-*?",
      options: [
        { optionText: "(A+B)*(C-D)", optionTag: "A" },
        { optionText: "A+(B*C-D)", optionTag: "B" },
        { optionText: "((A+B)*C)-D", optionTag: "C" },
        { optionText: "A+B*C-D", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output when stack is empty and we call top()?",
      options: [
        { optionText: "Undefined behavior or exception", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "NULL", optionTag: "C" },
        { optionText: "Program terminates", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;