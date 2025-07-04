// src/data/java/beginner/divideAndConquer.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Divide and Conquer - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your understanding of the Divide and Conquer paradigm in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Divide and Conquer"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the basic idea behind Divide and Conquer?",
            options: [
                { optionText: "Divide the problem, solve sub-problems, and combine solutions", optionTag: "A" },
                { optionText: "Use brute force", optionTag: "B" },
                { optionText: "Optimize locally", optionTag: "C" },
                { optionText: "Iterate repeatedly", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following algorithms uses Divide and Conquer?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Greedy Algorithms", optionTag: "C" },
                { optionText: "Depth-First Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Divide and Conquer, the sub-problems must be:",
            options: [
                { optionText: "Smaller instances of the same problem", optionTag: "A" },
                { optionText: "Completely different problems", optionTag: "B" },
                { optionText: "Bigger instances", optionTag: "C" },
                { optionText: "Unrelated tasks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Merge Sort?",
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
            questionText: "Which step comes first in Divide and Conquer?",
            options: [
                { optionText: "Divide", optionTag: "A" },
                { optionText: "Combine", optionTag: "B" },
                { optionText: "Conquer", optionTag: "C" },
                { optionText: "Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the recursion base case in Divide and Conquer?",
            options: [
                { optionText: "When problem size is small enough to solve directly", optionTag: "A" },
                { optionText: "When no more memory is available", optionTag: "B" },
                { optionText: "When stack overflows", optionTag: "C" },
                { optionText: "When loop ends", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm does not use Divide and Conquer?",
            options: [
                { optionText: "Insertion Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary Search is a classic example of which paradigm?",
            options: [
                { optionText: "Divide and Conquer", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Dynamic Programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Divide and Conquer algorithms are typically implemented using:",
            options: [
                { optionText: "Recursion", optionTag: "A" },
                { optionText: "Iteration", optionTag: "B" },
                { optionText: "Switch case", optionTag: "C" },
                { optionText: "Loop unrolling", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key advantage of Divide and Conquer?",
            options: [
                { optionText: "Reduces problem size quickly", optionTag: "A" },
                { optionText: "Increases memory usage", optionTag: "B" },
                { optionText: "Always fastest", optionTag: "C" },
                { optionText: "More readable code", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is not a step in Divide and Conquer?",
            options: [
                { optionText: "Merge", optionTag: "A" },
                { optionText: "Sort", optionTag: "B" },
                { optionText: "Divide", optionTag: "C" },
                { optionText: "Conquer", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What does 'conquer' mean in this paradigm?",
            options: [
                { optionText: "Solve each sub-problem", optionTag: "A" },
                { optionText: "Break into more sub-problems", optionTag: "B" },
                { optionText: "Merge everything", optionTag: "C" },
                { optionText: "Sort elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Divide and Conquer can improve performance using:",
            options: [
                { optionText: "Parallelism", optionTag: "A" },
                { optionText: "Disk caching", optionTag: "B" },
                { optionText: "Compression", optionTag: "C" },
                { optionText: "Garbage collection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Quick Sort, what is the dividing point called?",
            options: [
                { optionText: "Pivot", optionTag: "A" },
                { optionText: "Midpoint", optionTag: "B" },
                { optionText: "Divider", optionTag: "C" },
                { optionText: "Breaker", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of Quick Sort?",
            options: [
                { optionText: "O(n^2)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Merge Sort, merging takes:",
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
            questionText: "Which condition ends recursion in Divide and Conquer?",
            options: [
                { optionText: "Base Case", optionTag: "A" },
                { optionText: "Pivot selection", optionTag: "B" },
                { optionText: "Infinite loop", optionTag: "C" },
                { optionText: "Memory limit", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Merge sort requires additional:",
            options: [
                { optionText: "Space", optionTag: "A" },
                { optionText: "Recursion depth", optionTag: "B" },
                { optionText: "Threads", optionTag: "C" },
                { optionText: "Pointers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of Merge Sort?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;