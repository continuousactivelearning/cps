import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Recursion - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "java",
    description: "This quiz evaluates your understanding of recursion concepts and techniques in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Recursion"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is recursion?",
            options: [
                { optionText: "A loop structure", optionTag: "A" },
                { optionText: "A method calling itself", optionTag: "B" },
                { optionText: "A class extending itself", optionTag: "C" },
                { optionText: "An infinite loop", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following is essential in a recursive function?",
            options: [
                { optionText: "Infinite loop", optionTag: "A" },
                { optionText: "Base case", optionTag: "B" },
                { optionText: "Constructor", optionTag: "C" },
                { optionText: "Loop condition", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What will happen if a recursive method lacks a base case?",
            options: [
                { optionText: "It executes once", optionTag: "A" },
                { optionText: "It will throw a syntax error", optionTag: "B" },
                { optionText: "StackOverflowError occurs", optionTag: "C" },
                { optionText: "It terminates automatically", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the base case in factorial recursion?",
            options: [
                { optionText: "n == 0", optionTag: "A" },
                { optionText: "n == 1", optionTag: "B" },
                { optionText: "n < 1", optionTag: "C" },
                { optionText: "Both A and B", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which data structure is used by recursion internally?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Heap", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is tail recursion?",
            options: [
                { optionText: "A recursive call followed by computation", optionTag: "A" },
                { optionText: "A recursive call as the last operation", optionTag: "B" },
                { optionText: "A recursion without a base case", optionTag: "C" },
                { optionText: "An infinite recursion", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of these problems is best solved using recursion?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Fibonacci Series", optionTag: "B" },
                { optionText: "Tree Traversals", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the return value of factorial(1) if defined recursively?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "undefined", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "In a recursive Fibonacci implementation, what is the time complexity?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(2^n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which is a better approach for large Fibonacci numbers?",
            options: [
                { optionText: "Recursive", optionTag: "A" },
                { optionText: "Iterative", optionTag: "B" },
                { optionText: "Constructor-based", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is mutual recursion?",
            options: [
                { optionText: "A function calling itself", optionTag: "A" },
                { optionText: "Functions calling each other", optionTag: "B" },
                { optionText: "Recursion with tail optimization", optionTag: "C" },
                { optionText: "Recursion with break statement", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of these helps avoid repeated calculations in recursion?",
            options: [
                { optionText: "Memoization", optionTag: "A" },
                { optionText: "Cloning", optionTag: "B" },
                { optionText: "Iteration", optionTag: "C" },
                { optionText: "Function overloading", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method call stack depth can cause a StackOverflowError in Java recursion?",
            options: [
                { optionText: "Unlimited", optionTag: "A" },
                { optionText: "Depends on system memory", optionTag: "B" },
                { optionText: "100 calls", optionTag: "C" },
                { optionText: "Java limits to 2000 calls", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Can you use recursion for string reversal?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only for numeric strings", optionTag: "C" },
                { optionText: "Only with arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many recursive calls are made in binary search (average case)?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is a drawback of using recursion excessively?",
            options: [
                { optionText: "More readable code", optionTag: "A" },
                { optionText: "More efficient in all cases", optionTag: "B" },
                { optionText: "Risk of StackOverflowError", optionTag: "C" },
                { optionText: "Fewer variables needed", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which traversal technique uses recursion?",
            options: [
                { optionText: "Level-order", optionTag: "A" },
                { optionText: "In-order", optionTag: "B" },
                { optionText: "Breadth-first", optionTag: "C" },
                { optionText: "Linear", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the base case for summing an array using recursion?",
            options: [
                { optionText: "When array length is 0", optionTag: "A" },
                { optionText: "When array length is 1", optionTag: "B" },
                { optionText: "When index is -1", optionTag: "C" },
                { optionText: "When sum is 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you stop infinite recursion?",
            options: [
                { optionText: "Using break statement", optionTag: "A" },
                { optionText: "By ensuring a base case", optionTag: "B" },
                { optionText: "Using continue", optionTag: "C" },
                { optionText: "Using return 0", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following is *not* a valid recursive use case?",
            options: [
                { optionText: "Tree traversal", optionTag: "A" },
                { optionText: "Tower of Hanoi", optionTag: "B" },
                { optionText: "Infinite loop", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        }
    ]
};

export default quizData;