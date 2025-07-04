import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Recursion - Beginner Quiz",
  quizLevel: "beginner",
  lang: "cpp",
  description: "This quiz tests your understanding of basic recursion concepts in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Recursion"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is recursion?",
      options: [
        { optionText: "A function calling itself", optionTag: "A" },
        { optionText: "A loop calling itself", optionTag: "B" },
        { optionText: "A class calling a function", optionTag: "C" },
        { optionText: "A program restarting itself", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which statement is essential in a recursive function?",
      options: [
        { optionText: "Base condition", optionTag: "A" },
        { optionText: "While loop", optionTag: "B" },
        { optionText: "If-else", optionTag: "C" },
        { optionText: "Goto statement", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if a recursive function has no base case?",
      options: [
        { optionText: "It leads to infinite recursion", optionTag: "A" },
        { optionText: "It executes once", optionTag: "B" },
        { optionText: "It gives a compile-time error", optionTag: "C" },
        { optionText: "It executes normally", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which keyword is used to define a function in C++?",
      options: [
        { optionText: "void", optionTag: "A" },
        { optionText: "function", optionTag: "B" },
        { optionText: "define", optionTag: "C" },
        { optionText: "func", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of a recursive factorial function called with n = 3?",
      options: [
        { optionText: "6", optionTag: "A" },
        { optionText: "3", optionTag: "B" },
        { optionText: "9", optionTag: "C" },
        { optionText: "0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure supports recursive calls?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "Linked List", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a recursive function, what happens before each recursive call returns?",
      options: [
        { optionText: "All recursive calls must complete", optionTag: "A" },
        { optionText: "Only the last call returns", optionTag: "B" },
        { optionText: "Nothing happens", optionTag: "C" },
        { optionText: "The function exits", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function demonstrates recursion?",
      options: [
        { optionText: "int fact(int n) { return n == 0 ? 1 : n * fact(n - 1); }", optionTag: "A" },
        { optionText: "int fact(int n) { return n * n; }", optionTag: "B" },
        { optionText: "int fact(int n) { return n + 1; }", optionTag: "C" },
        { optionText: "int fact(int n) { while(n--) cout << n; }", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function would best demonstrate tail recursion?",
      options: [
        { optionText: "void print(int n) { if(n==0) return; cout << n; print(n-1); }", optionTag: "A" },
        { optionText: "void print(int n) { print(n-1); cout << n; }", optionTag: "B" },
        { optionText: "void print(int n) { cout << n; }", optionTag: "C" },
        { optionText: "void print(int n) { while(n--) cout << n; }", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these problems is best solved with recursion?",
      options: [
        { optionText: "Tower of Hanoi", optionTag: "A" },
        { optionText: "Searching in array", optionTag: "B" },
        { optionText: "Looping", optionTag: "C" },
        { optionText: "Assigning variables", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the base case in a factorial recursion?",
      options: [
        { optionText: "n == 0", optionTag: "A" },
        { optionText: "n == 2", optionTag: "B" },
        { optionText: "n < 100", optionTag: "C" },
        { optionText: "n > 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is stack overflow?",
      options: [
        { optionText: "When too many recursive calls exhaust memory", optionTag: "A" },
        { optionText: "When too many loops are used", optionTag: "B" },
        { optionText: "When stack is empty", optionTag: "C" },
        { optionText: "When heap overflows", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if the recursive base case is incorrect?",
      options: [
        { optionText: "It may lead to infinite recursion", optionTag: "A" },
        { optionText: "It works faster", optionTag: "B" },
        { optionText: "It runs once", optionTag: "C" },
        { optionText: "It gives a warning", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem uses divide and conquer recursion?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Loop Sum", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can recursion be replaced with iteration?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only in C++", optionTag: "C" },
        { optionText: "Only for sorting", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which recursive algorithm solves mazes?",
      options: [
        { optionText: "Backtracking", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "DFS", optionTag: "C" },
        { optionText: "Both A and C", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which is more memory-efficient in C++?",
      options: [
        { optionText: "Tail recursion", optionTag: "A" },
        { optionText: "Head recursion", optionTag: "B" },
        { optionText: "Any recursion", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these shows head recursion?",
      options: [
        { optionText: "void f(int n) { if(n == 0) return; f(n-1); cout << n; }", optionTag: "A" },
        { optionText: "void f(int n) { cout << n; f(n-1); }", optionTag: "B" },
        { optionText: "void f(int n) { while(n) cout << n--; }", optionTag: "C" },
        { optionText: "void f(int n) { cout << ++n; }", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of fib(0) where fib is a recursive Fibonacci function?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "Undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;