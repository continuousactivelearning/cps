import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Complexity Analysis - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz evaluates your advanced skills in time and space complexity analysis in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "ComplexityAnalysis"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the tightest upper bound (Big-O) for the recurrence: T(n) = 2T(n/2) + n?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which complexity class denotes exponential time algorithms?",
            options: [
                { optionText: "O(2^n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If an algorithm runs in O(log n) time, doubling the input size increases the work by:",
            options: [
                { optionText: "1 unit", optionTag: "A" },
                { optionText: "2 units", optionTag: "B" },
                { optionText: "n units", optionTag: "C" },
                { optionText: "n^2 units", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm has a worst-case time complexity of O(n^2)?",
            options: [
                { optionText: "Selection Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of recursive Fibonacci implementation?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(2^n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which notation provides a lower bound for algorithm complexity?",
            options: [
                { optionText: "Ω (Omega)", optionTag: "A" },
                { optionText: "O (Big-O)", optionTag: "B" },
                { optionText: "θ (Theta)", optionTag: "C" },
                { optionText: "α (Alpha)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "For the recurrence T(n) = T(n - 1) + O(1), what is the time complexity?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many times does the inner loop execute?\nfor (int i = 0; i < n; i++)\n   for (int j = 0; j < i; j++)",
            options: [
                { optionText: "n(n-1)/2 times", optionTag: "A" },
                { optionText: "n^2 times", optionTag: "B" },
                { optionText: "n times", optionTag: "C" },
                { optionText: "log n times", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following grows fastest asymptotically?",
            options: [
                { optionText: "2^n", optionTag: "A" },
                { optionText: "n!", optionTag: "B" },
                { optionText: "n^3", optionTag: "C" },
                { optionText: "log n", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the average case time complexity of QuickSort?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which has better worst-case time complexity?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does amortized analysis refer to?",
            options: [
                { optionText: "Average cost over sequence of operations", optionTag: "A" },
                { optionText: "Worst case for single operation", optionTag: "B" },
                { optionText: "Best case time only", optionTag: "C" },
                { optionText: "Ignoring constant factors", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Master Theorem, T(n) = aT(n/b) + f(n), if f(n) = Θ(n^log_b a), then:",
            options: [
                { optionText: "T(n) = Θ(n^log_b a * log n)", optionTag: "A" },
                { optionText: "T(n) = Θ(n^log_b a)", optionTag: "B" },
                { optionText: "T(n) = Θ(f(n))", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the best complexity for searching in a sorted array?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true for time complexity O(n!)?",
            options: [
                { optionText: "It grows faster than O(2^n)", optionTag: "A" },
                { optionText: "It grows slower than O(n^2)", optionTag: "B" },
                { optionText: "It is same as O(n log n)", optionTag: "C" },
                { optionText: "It is polynomial", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is ideal to optimize O(n^2) to O(n log n)?",
            options: [
                { optionText: "Segment Tree", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If an algorithm has O(1) complexity, what does it imply?",
            options: [
                { optionText: "Execution time is independent of input size", optionTag: "A" },
                { optionText: "Execution time increases linearly", optionTag: "B" },
                { optionText: "Only works for constant inputs", optionTag: "C" },
                { optionText: "Takes infinite time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of binary search tree insertion in worst case?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which complexity class is not decidable in polynomial time?",
            options: [
                { optionText: "NP-Hard", optionTag: "A" },
                { optionText: "P", optionTag: "B" },
                { optionText: "NP", optionTag: "C" },
                { optionText: "LOGSPACE", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is the tightest bound for bubble sort in best case?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
