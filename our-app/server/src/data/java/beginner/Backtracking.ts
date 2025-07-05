// src/data/java/beginner/backtracking.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Backtracking - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your foundational understanding of the backtracking algorithm in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Backtracking"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is backtracking in programming?",
            options: [
                { optionText: "A method to explore all possibilities and undo steps", optionTag: "A" },
                { optionText: "A sorting technique", optionTag: "B" },
                { optionText: "A way to search graphs", optionTag: "C" },
                { optionText: "An encryption method", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems is commonly solved using backtracking?",
            options: [
                { optionText: "N-Queens Problem", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does backtracking do when a solution fails?",
            options: [
                { optionText: "Goes back to the previous step", optionTag: "A" },
                { optionText: "Tries the next test case", optionTag: "B" },
                { optionText: "Stops immediately", optionTag: "C" },
                { optionText: "Prints error message", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Backtracking is most closely related to which technique?",
            options: [
                { optionText: "Recursion", optionTag: "A" },
                { optionText: "Iteration", optionTag: "B" },
                { optionText: "Memoization", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java keyword is used to exit from a method early in backtracking?",
            options: [
                { optionText: "return", optionTag: "A" },
                { optionText: "break", optionTag: "B" },
                { optionText: "exit", optionTag: "C" },
                { optionText: "continue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In backtracking, what is a constraint?",
            options: [
                { optionText: "A rule that must be satisfied", optionTag: "A" },
                { optionText: "An error in code", optionTag: "B" },
                { optionText: "A loop", optionTag: "C" },
                { optionText: "A database field", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case in backtracking?",
            options: [
                { optionText: "Condition when recursion ends", optionTag: "A" },
                { optionText: "Start of loop", optionTag: "B" },
                { optionText: "An infinite loop", optionTag: "C" },
                { optionText: "Condition to break method", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is an example of backtracking usage?",
            options: [
                { optionText: "Sudoku Solver", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Breadth First Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition is important for backtracking to succeed?",
            options: [
                { optionText: "Well-defined constraints", optionTag: "A" },
                { optionText: "Randomness", optionTag: "B" },
                { optionText: "Global variables", optionTag: "C" },
                { optionText: "No base case", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is often used to track steps in backtracking?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Hash Map", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is backtracking always optimal?",
            options: [
                { optionText: "No, it explores all options", optionTag: "A" },
                { optionText: "Yes, always optimal", optionTag: "B" },
                { optionText: "Only in dynamic programming", optionTag: "C" },
                { optionText: "Yes, with greedy algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What helps in pruning in backtracking?",
            options: [
                { optionText: "Constraints", optionTag: "A" },
                { optionText: "Loops", optionTag: "B" },
                { optionText: "Multiple return statements", optionTag: "C" },
                { optionText: "Memory size", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is backtracking used for?",
            options: [
                { optionText: "Exploring all potential solutions", optionTag: "A" },
                { optionText: "Single-path traversal", optionTag: "B" },
                { optionText: "Sorting arrays", optionTag: "C" },
                { optionText: "Fetching APIs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of algorithm is backtracking?",
            options: [
                { optionText: "Brute-force with optimization", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "Linear", optionTag: "C" },
                { optionText: "Binary", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which keyword is commonly used in recursive backtracking methods?",
            options: [
                { optionText: "return", optionTag: "A" },
                { optionText: "goto", optionTag: "B" },
                { optionText: "switch", optionTag: "C" },
                { optionText: "continue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In backtracking, what do you do if a path is invalid?",
            options: [
                { optionText: "Backtrack to previous decision", optionTag: "A" },
                { optionText: "Restart program", optionTag: "B" },
                { optionText: "Skip to next test case", optionTag: "C" },
                { optionText: "Ignore and proceed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition helps in early pruning?",
            options: [
                { optionText: "Feasibility check", optionTag: "A" },
                { optionText: "Recursion", optionTag: "B" },
                { optionText: "Iteration", optionTag: "C" },
                { optionText: "Loop counter", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is backtracking recursive?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Sometimes", optionTag: "C" },
                { optionText: "Never", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What helps in recovering from a failed solution path in backtracking?",
            options: [
                { optionText: "Undoing the last move", optionTag: "A" },
                { optionText: "Restarting loop", optionTag: "B" },
                { optionText: "Incrementing counter", optionTag: "C" },
                { optionText: "Adding more memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;