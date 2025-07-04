import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Complexity Analysis - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz assesses your expertise in time and space complexity analysis in JavaScript, including Big-O, Big-Theta, and best/worst/average cases.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "ComplexityAnalysis"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of accessing an element in a JavaScript array by index?",
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
            questionText: "Which of the following best represents the worst-case time complexity of quicksort?",
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
            questionText: "What is the space complexity of merge sort?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following has the best average-case time complexity?",
            options: [
                { optionText: "Merge sort", optionTag: "A" },
                { optionText: "Bubble sort", optionTag: "B" },
                { optionText: "Selection sort", optionTag: "C" },
                { optionText: "Insertion sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the Big-O of a nested loop iterating n times each?",
            options: [
                { optionText: "O(n^2)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which growth rate dominates all others asymptotically?",
            options: [
                { optionText: "O(2^n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of searching a key in a balanced binary search tree?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the Big-O of a recursive Fibonacci algorithm?",
            options: [
                { optionText: "O(2^n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is faster in an object: insertion or deletion?",
            options: [
                { optionText: "Both are O(1)", optionTag: "A" },
                { optionText: "Insertion is O(n), deletion is O(1)", optionTag: "B" },
                { optionText: "Insertion is O(1), deletion is O(n)", optionTag: "C" },
                { optionText: "Both are O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function grows faster than O(n log n) but slower than O(n^2)?",
            options: [
                { optionText: "O(n^1.5)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the amortized complexity of push in a dynamic array?",
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
            questionText: "If a function halves n each step, what is its time complexity?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does Big-O notation describe?",
            options: [
                { optionText: "Upper bound of performance", optionTag: "A" },
                { optionText: "Exact performance", optionTag: "B" },
                { optionText: "Lower bound of performance", optionTag: "C" },
                { optionText: "Memory usage only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the Big-Theta of binary search?",
            options: [
                { optionText: "Θ(log n)", optionTag: "A" },
                { optionText: "Θ(n)", optionTag: "B" },
                { optionText: "Θ(n log n)", optionTag: "C" },
                { optionText: "Θ(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which case does Big-O ignore?",
            options: [
                { optionText: "Best case", optionTag: "A" },
                { optionText: "Worst case", optionTag: "B" },
                { optionText: "Average case", optionTag: "C" },
                { optionText: "All cases", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the complexity of checking if a string is a palindrome?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm always guarantees O(n log n)?",
            options: [
                { optionText: "Merge sort", optionTag: "A" },
                { optionText: "Quick sort", optionTag: "B" },
                { optionText: "Bubble sort", optionTag: "C" },
                { optionText: "Insertion sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of linear search?",
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
            questionText: "What does it mean if two algorithms are asymptotically equal?",
            options: [
                { optionText: "They have the same Big-Theta", optionTag: "A" },
                { optionText: "They have same best case", optionTag: "B" },
                { optionText: "They are equally efficient on all inputs", optionTag: "C" },
                { optionText: "They return the same output", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the best-case complexity of inserting at the end of an array?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
