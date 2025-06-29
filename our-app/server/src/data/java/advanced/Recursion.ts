import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Recursion - Advanced Quiz",
    quizLevel: "advanced",
    lang: "java",
    description: "This quiz covers advanced concepts of Recursion in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Recursion"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is tail recursion?",
            options: [
                { optionText: "A recursive call that happens at the end of a method", optionTag: "A" },
                { optionText: "A recursive call that occurs at the start of a method", optionTag: "B" },
                { optionText: "A recursive call with no base case", optionTag: "C" },
                { optionText: "A recursive call that calls two functions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique is used to optimize tail recursion?",
            options: [
                { optionText: "Tail Call Optimization", optionTag: "A" },
                { optionText: "Memoization", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Dynamic Programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of a non-tail recursive factorial function?",
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
            questionText: "What is a characteristic of mutual recursion?",
            options: [
                { optionText: "Two or more functions call each other", optionTag: "A" },
                { optionText: "Recursion without a base case", optionTag: "B" },
                { optionText: "Only one recursive function", optionTag: "C" },
                { optionText: "Tail recursive functions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is efficiently solved using divide and conquer recursion?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What happens if a recursive function does not have a base case?",
            options: [
                { optionText: "It causes StackOverflowError", optionTag: "A" },
                { optionText: "It terminates normally", optionTag: "B" },
                { optionText: "It runs in constant time", optionTag: "C" },
                { optionText: "It optimizes automatically", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the recursive Fibonacci sequence without optimization?",
            options: [
                { optionText: "O(2^n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is mainly used for recursive function calls?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the role of the base case in recursion?",
            options: [
                { optionText: "To terminate the recursion", optionTag: "A" },
                { optionText: "To cause infinite recursion", optionTag: "B" },
                { optionText: "To avoid function calls", optionTag: "C" },
                { optionText: "To optimize memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which approach helps in reducing time complexity in recursive problems?",
            options: [
                { optionText: "Memoization", optionTag: "A" },
                { optionText: "Tail recursion", optionTag: "B" },
                { optionText: "Iterative conversion", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        }
    ]
};

export default quizData;