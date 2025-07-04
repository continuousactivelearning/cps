import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Complexity Analysis - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz evaluates your beginner-level understanding of time and space complexity analysis in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "ComplexityAnalysis"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What does Big-O notation describe?",
            options: [
                { optionText: "Worst-case performance of an algorithm", optionTag: "A" },
                { optionText: "The actual time taken by a program", optionTag: "B" },
                { optionText: "How fast the code runs on your computer", optionTag: "C" },
                { optionText: "Only best-case scenarios", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Big-O notation is the best (fastest) for time complexity?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of accessing an element in an array?",
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
            questionText: "Which of the following has O(n^2) complexity?",
            options: [
                { optionText: "Bubble sort", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Linear search", optionTag: "C" },
                { optionText: "Accessing array element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is space complexity?",
            options: [
                { optionText: "Memory used by an algorithm", optionTag: "A" },
                { optionText: "Time taken by an algorithm", optionTag: "B" },
                { optionText: "CPU usage", optionTag: "C" },
                { optionText: "Speed of internet", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm typically has O(log n) time complexity?",
            options: [
                { optionText: "Binary search", optionTag: "A" },
                { optionText: "Linear search", optionTag: "B" },
                { optionText: "Bubble sort", optionTag: "C" },
                { optionText: "Selection sort", optionTag: "D" }
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
            questionText: "Which is better in terms of performance?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(n^3)", optionTag: "C" },
                { optionText: "O(2^n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does O(n!) represent?",
            options: [
                { optionText: "Factorial time complexity", optionTag: "A" },
                { optionText: "Constant time", optionTag: "B" },
                { optionText: "Linear time", optionTag: "C" },
                { optionText: "Logarithmic time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is slowest in performance?",
            options: [
                { optionText: "O(2^n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If an algorithm has two nested loops over array of size n, what is the time complexity?",
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
            questionText: "What is the time complexity of a loop that runs from i = 1 to n doubling i each time?",
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
            questionText: "Which complexity class grows fastest?",
            options: [
                { optionText: "O(n!)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If functionA runs in O(n) and functionB runs in O(log n), what is overall complexity?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation has constant time complexity?",
            options: [
                { optionText: "Accessing an element by index in array", optionTag: "A" },
                { optionText: "Looping through an array", optionTag: "B" },
                { optionText: "Nested loop", optionTag: "C" },
                { optionText: "Sorting array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is average time complexity of linear search?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is time complexity important?",
            options: [
                { optionText: "Helps measure scalability of code", optionTag: "A" },
                { optionText: "Tells how many bugs exist", optionTag: "B" },
                { optionText: "Gives number of functions", optionTag: "C" },
                { optionText: "Shows error rate", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is best-case time complexity of linear search?",
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
            questionText: "If you double input size, what happens to O(n) time complexity?",
            options: [
                { optionText: "Doubles", optionTag: "A" },
                { optionText: "Quadruples", optionTag: "B" },
                { optionText: "Remains same", optionTag: "C" },
                { optionText: "Increases logarithmically", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which complexity is better for large input sizes?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(2^n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
