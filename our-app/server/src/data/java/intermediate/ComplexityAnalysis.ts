import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Complexity Analysis - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "java",
    description: "This quiz tests your understanding of time and space complexity concepts in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Complexity Analysis"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of accessing an element in an array by index?",
            options: [
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which of the following denotes quadratic time complexity?",
            options: [
                { optionText: "O(n^2)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If an algorithm has time complexity O(2^n), it is considered:",
            options: [
                { optionText: "Exponential", optionTag: "D" },
                { optionText: "Linear", optionTag: "A" },
                { optionText: "Constant", optionTag: "B" },
                { optionText: "Logarithmic", optionTag: "C" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of binary search?",
            options: [
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which sorting algorithm has the best average time complexity?",
            options: [
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Selection Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which complexity class is faster than linear time?",
            options: [
                { optionText: "O(log n)", optionTag: "D" },
                { optionText: "O(n^2)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the time complexity of nested loops where both run ‘n’ times?",
            options: [
                { optionText: "O(n^2)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure has O(1) time complexity for insertion and deletion from the end?",
            options: [
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Linked List", optionTag: "B" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "If you traverse an array of size n once, what is the time complexity?",
            options: [
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the best-case complexity of quicksort?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which complexity class grows the slowest?",
            options: [
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which case refers to the scenario where an algorithm performs the least work?",
            options: [
                { optionText: "Best Case", optionTag: "D" },
                { optionText: "Average Case", optionTag: "B" },
                { optionText: "Worst Case", optionTag: "C" },
                { optionText: "Expected Case", optionTag: "A" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the average-case time complexity of linear search?",
            options: [
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which function grows faster?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which notation describes the upper bound of an algorithm?",
            options: [
                { optionText: "Big O", optionTag: "A" },
                { optionText: "Omega", optionTag: "C" },
                { optionText: "Theta", optionTag: "B" },
                { optionText: "Sigma", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which notation describes the lower bound of an algorithm?",
            options: [
                { optionText: "Omega", optionTag: "C" },
                { optionText: "Big O", optionTag: "A" },
                { optionText: "Theta", optionTag: "B" },
                { optionText: "Delta", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the time complexity of inserting into a Java ArrayList at the end (amortized)?",
            options: [
                { optionText: "O(1)", optionTag: "D" },
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the space complexity of merge sort?",
            options: [
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following is NOT considered in space complexity?",
            options: [
                { optionText: "CPU speed", optionTag: "D" },
                { optionText: "Variables", optionTag: "A" },
                { optionText: "Function calls", optionTag: "B" },
                { optionText: "Temporary space", optionTag: "C" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What does O(n!) signify?",
            options: [
                { optionText: "Factorial time complexity", optionTag: "C" },
                { optionText: "Exponential", optionTag: "A" },
                { optionText: "Quadratic", optionTag: "B" },
                { optionText: "Linear exponential", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        }
    ]
};

export default quizData;