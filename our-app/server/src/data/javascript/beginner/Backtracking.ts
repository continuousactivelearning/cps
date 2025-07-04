import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Backtracking - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your beginner knowledge of Backtracking in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Backtracking"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is backtracking mainly used for?",
            options: [
                { optionText: "Solving constraint satisfaction problems", optionTag: "A" },
                { optionText: "Sorting an array", optionTag: "B" },
                { optionText: "Searching in a tree", optionTag: "C" },
                { optionText: "Looping through arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems can be solved using backtracking?",
            options: [
                { optionText: "N-Queens problem", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Depth First Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Backtracking involves:",
            options: [
                { optionText: "Exploring all possibilities recursively", optionTag: "A" },
                { optionText: "Storing values linearly", optionTag: "B" },
                { optionText: "Greedy choices only", optionTag: "C" },
                { optionText: "Sorting inputs first", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In backtracking, what happens when a solution path fails?",
            options: [
                { optionText: "Go back to previous step and try another path", optionTag: "A" },
                { optionText: "Stop execution", optionTag: "B" },
                { optionText: "Restart algorithm", optionTag: "C" },
                { optionText: "Throw error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is heavily used in backtracking?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "LinkedList", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, which keyword is commonly used to define recursive functions for backtracking?",
            options: [
                { optionText: "function", optionTag: "A" },
                { optionText: "return", optionTag: "B" },
                { optionText: "var", optionTag: "C" },
                { optionText: "loop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case in backtracking?",
            options: [
                { optionText: "The condition when recursion stops", optionTag: "A" },
                { optionText: "When stack overflows", optionTag: "B" },
                { optionText: "A case that throws error", optionTag: "C" },
                { optionText: "The middle of recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which one is NOT a backtracking application?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Sudoku Solver", optionTag: "B" },
                { optionText: "Maze Problem", optionTag: "C" },
                { optionText: "N-Queens", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does backtracking handle dead ends?",
            options: [
                { optionText: "It backtracks to previous state", optionTag: "A" },
                { optionText: "It loops infinitely", optionTag: "B" },
                { optionText: "It sorts input again", optionTag: "C" },
                { optionText: "It stops program", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a common trait in problems solved by backtracking?",
            options: [
                { optionText: "Multiple candidate solutions to explore", optionTag: "A" },
                { optionText: "Guaranteed sorted input", optionTag: "B" },
                { optionText: "Greedy choice available", optionTag: "C" },
                { optionText: "Constant time complexity", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript feature helps represent recursive states?",
            options: [
                { optionText: "Call stack", optionTag: "A" },
                { optionText: "Local storage", optionTag: "B" },
                { optionText: "Closure", optionTag: "C" },
                { optionText: "Event loop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is essential for implementing backtracking?",
            options: [
                { optionText: "Recursive function", optionTag: "A" },
                { optionText: "If-else only", optionTag: "B" },
                { optionText: "Sorting function", optionTag: "C" },
                { optionText: "String manipulation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Backtracking is a type of:",
            options: [
                { optionText: "Brute-force search", optionTag: "A" },
                { optionText: "Greedy algorithm", optionTag: "B" },
                { optionText: "Dynamic programming", optionTag: "C" },
                { optionText: "Sorting algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique does backtracking often use?",
            options: [
                { optionText: "Recursive backtrace", optionTag: "A" },
                { optionText: "Hash maps", optionTag: "B" },
                { optionText: "Memoization", optionTag: "C" },
                { optionText: "Priority queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the 'return' statement do in backtracking recursion?",
            options: [
                { optionText: "Stops the current path and backtracks", optionTag: "A" },
                { optionText: "Continues searching", optionTag: "B" },
                { optionText: "Reverses the result", optionTag: "C" },
                { optionText: "Prints stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is backtracking not always the most efficient solution?",
            options: [
                { optionText: "It explores all possibilities", optionTag: "A" },
                { optionText: "It uses global variables", optionTag: "B" },
                { optionText: "It uses arrays", optionTag: "C" },
                { optionText: "It doesn't use functions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Sudoku solver, what role does backtracking play?",
            options: [
                { optionText: "Fills cell and undoes if not valid", optionTag: "A" },
                { optionText: "Shuffles values randomly", optionTag: "B" },
                { optionText: "Sorts cells by value", optionTag: "C" },
                { optionText: "Skips over empty cells", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you know a path is invalid in backtracking?",
            options: [
                { optionText: "Constraint is violated", optionTag: "A" },
                { optionText: "Input is sorted", optionTag: "B" },
                { optionText: "Function returns true", optionTag: "C" },
                { optionText: "Value is undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key difference between DFS and Backtracking?",
            options: [
                { optionText: "Backtracking undoes choices when needed", optionTag: "A" },
                { optionText: "Backtracking always finds shortest path", optionTag: "B" },
                { optionText: "DFS uses stacks", optionTag: "C" },
                { optionText: "Backtracking skips all recursive calls", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem-solving approach is closest to backtracking?",
            options: [
                { optionText: "Recursive exhaustive search", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Memoized recursion", optionTag: "C" },
                { optionText: "Greedy climbing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
