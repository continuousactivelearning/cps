import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Complexity Analysis - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of time and space complexity in C++ programs.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "ComplexityAnalysis"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What does time complexity measure?",
            options: [
                { optionText: "Execution time relative to input size", optionTag: "A" },
                { optionText: "Memory used", optionTag: "B" },
                { optionText: "Number of variables", optionTag: "C" },
                { optionText: "Compilation time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of a linear search in an array?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is the best time complexity?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of binary search?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of nested loops: for(i=0;i<n;i++) for(j=0;j<n;j++)?",
            options: [
                { optionText: "O(n^2)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which notation represents the upper bound of an algorithm?",
            options: [
                { optionText: "Big-O", optionTag: "A" },
                { optionText: "Big-Theta", optionTag: "B" },
                { optionText: "Big-Omega", optionTag: "C" },
                { optionText: "Little-o", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does O(1) mean?",
            options: [
                { optionText: "Constant time", optionTag: "A" },
                { optionText: "Linear time", optionTag: "B" },
                { optionText: "Logarithmic time", optionTag: "C" },
                { optionText: "Quadratic time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm has the best average-case time complexity?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of an in-place algorithm?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following has time complexity O(n log n)?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Linear Search", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is Big-Theta (Θ) notation used for?",
            options: [
                { optionText: "Tight bound (exact)", optionTag: "A" },
                { optionText: "Upper bound only", optionTag: "B" },
                { optionText: "Lower bound only", optionTag: "C" },
                { optionText: "Worst-case only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is not a valid time complexity?",
            options: [
                { optionText: "O(n!)", optionTag: "A" },
                { optionText: "O(2^n)", optionTag: "B" },
                { optionText: "O(n^n)", optionTag: "C" },
                { optionText: "O(n+n)", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which complexity grows faster?",
            options: [
                { optionText: "O(n!)", optionTag: "A" },
                { optionText: "O(n^3)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If input size doubles, what happens to O(n^2) complexity?",
            options: [
                { optionText: "Time becomes 4 times", optionTag: "A" },
                { optionText: "Time becomes 2 times", optionTag: "B" },
                { optionText: "Time remains same", optionTag: "C" },
                { optionText: "Time becomes half", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm has O(n^2) worst-case complexity?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Quick Sort (avg case)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of accessing an element in an array?",
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
            questionText: "Which complexity is better: O(n log n) or O(n^2)?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "Both are same", optionTag: "C" },
                { optionText: "Depends on constants", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If a function runs in the same time regardless of input, it's:",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does space complexity measure?",
            options: [
                { optionText: "Memory required by algorithm", optionTag: "A" },
                { optionText: "Time to compile", optionTag: "B" },
                { optionText: "Speed of CPU", optionTag: "C" },
                { optionText: "Network usage", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which notation is used for best-case complexity?",
            options: [
                { optionText: "Ω (Big-Omega)", optionTag: "A" },
                { optionText: "O (Big-Oh)", optionTag: "B" },
                { optionText: "Θ (Big-Theta)", optionTag: "C" },
                { optionText: "π (Pi)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
