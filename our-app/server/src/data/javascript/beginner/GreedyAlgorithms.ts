import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Greedy Algorithms - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your understanding of basic greedy algorithm concepts and their implementation in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "GreedyAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main strategy of greedy algorithms?",
            options: [
                { optionText: "Making the locally optimal choice at each step", optionTag: "A" },
                { optionText: "Exploring all possibilities", optionTag: "B" },
                { optionText: "Backtracking to explore solutions", optionTag: "C" },
                { optionText: "Divide the problem into equal parts", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is commonly solved using greedy algorithms?",
            options: [
                { optionText: "Activity selection problem", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Merge sort", optionTag: "C" },
                { optionText: "Depth-first search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript method can be used to sort activities by end time?",
            options: [
                { optionText: "array.sort()", optionTag: "A" },
                { optionText: "array.push()", optionTag: "B" },
                { optionText: "array.pop()", optionTag: "C" },
                { optionText: "array.slice()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In greedy algorithms, decisions are made:",
            options: [
                { optionText: "Based on current information without revisiting choices", optionTag: "A" },
                { optionText: "After evaluating all possible outcomes", optionTag: "B" },
                { optionText: "By recursive exploration", optionTag: "C" },
                { optionText: "Using dynamic programming tables", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a disadvantage of greedy algorithms?",
            options: [
                { optionText: "May not produce globally optimal solution", optionTag: "A" },
                { optionText: "Too slow", optionTag: "B" },
                { optionText: "Too complex to implement", optionTag: "C" },
                { optionText: "Consumes too much memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a property required for greedy algorithms to work?",
            options: [
                { optionText: "Greedy-choice property", optionTag: "A" },
                { optionText: "Backtrack property", optionTag: "B" },
                { optionText: "Dynamic substructure", optionTag: "C" },
                { optionText: "Binary tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is often used with greedy algorithms?",
            options: [
                { optionText: "Priority Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the greedy algorithm do in the coin change problem?",
            options: [
                { optionText: "Chooses the largest denomination coin first", optionTag: "A" },
                { optionText: "Tries all combinations of coins", optionTag: "B" },
                { optionText: "Splits amount equally", optionTag: "C" },
                { optionText: "Uses backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following algorithms uses a greedy approach?",
            options: [
                { optionText: "Prim's algorithm", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Depth-first search", optionTag: "C" },
                { optionText: "Merge sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does greedy-choice property mean?",
            options: [
                { optionText: "A globally optimal solution can be arrived at by choosing local optimums", optionTag: "A" },
                { optionText: "Solutions are found using recursion", optionTag: "B" },
                { optionText: "All options must be evaluated", optionTag: "C" },
                { optionText: "Solutions must use stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, how can you select the shortest task from a list?",
            options: [
                { optionText: "Using Math.min with a custom comparator", optionTag: "A" },
                { optionText: "Using Math.max", optionTag: "B" },
                { optionText: "Using array.push", optionTag: "C" },
                { optionText: "Using reduce to max value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of sorting an array in JavaScript?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript function sorts an array in-place?",
            options: [
                { optionText: "sort()", optionTag: "A" },
                { optionText: "filter()", optionTag: "B" },
                { optionText: "map()", optionTag: "C" },
                { optionText: "slice()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is it guaranteed that greedy always finds optimal solution?",
            options: [
                { optionText: "No", optionTag: "A" },
                { optionText: "Yes", optionTag: "B" },
                { optionText: "Only for small input", optionTag: "C" },
                { optionText: "Only in C++", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of problems are best solved using greedy methods?",
            options: [
                { optionText: "Optimization problems", optionTag: "A" },
                { optionText: "Recursive problems", optionTag: "B" },
                { optionText: "Enumeration problems", optionTag: "C" },
                { optionText: "Sorting problems", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does greedy algorithm behave in terms of solution space?",
            options: [
                { optionText: "It chooses path without exploring all possibilities", optionTag: "A" },
                { optionText: "It explores all nodes", optionTag: "B" },
                { optionText: "It builds recursion tree", optionTag: "C" },
                { optionText: "It uses matrix representation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems can use greedy approach effectively?",
            options: [
                { optionText: "Fractional Knapsack", optionTag: "A" },
                { optionText: "0/1 Knapsack", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Quick Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which one is true for greedy and dynamic programming?",
            options: [
                { optionText: "Greedy solves subproblem optimally, DP solves all subproblems", optionTag: "A" },
                { optionText: "Greedy is slower than DP", optionTag: "B" },
                { optionText: "Greedy always better", optionTag: "C" },
                { optionText: "DP skips solutions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What JavaScript method is useful to pick smallest weight edge from array?",
            options: [
                { optionText: "reduce()", optionTag: "A" },
                { optionText: "map()", optionTag: "B" },
                { optionText: "filter()", optionTag: "C" },
                { optionText: "findIndex()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Greedy algorithms require which of the following for correctness?",
            options: [
                { optionText: "Greedy-choice property and optimal substructure", optionTag: "A" },
                { optionText: "Loop invariants", optionTag: "B" },
                { optionText: "Sorted input only", optionTag: "C" },
                { optionText: "Binary tree structure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
