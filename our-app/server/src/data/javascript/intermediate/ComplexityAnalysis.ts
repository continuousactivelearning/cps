import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Complexity Analysis - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate understanding of time and space complexity analysis in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "ComplexityAnalysis"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of accessing an element in an array by index?",
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
            questionText: "What is the time complexity of inserting an element at the beginning of an array?",
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
            questionText: "Which Big-O notation describes binary search?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of creating a copy of an array?",
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
            questionText: "Which of the following is an example of linear time complexity?",
            options: [
                { optionText: "Loop that runs through an array once", optionTag: "A" },
                { optionText: "Nested loop of size n", optionTag: "B" },
                { optionText: "Binary search", optionTag: "C" },
                { optionText: "Constant return statement", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of quicksort?",
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
            questionText: "What does Big-O notation describe?",
            options: [
                { optionText: "Upper bound of time or space complexity", optionTag: "A" },
                { optionText: "Exact runtime", optionTag: "B" },
                { optionText: "Memory usage only", optionTag: "C" },
                { optionText: "Lower bound of performance", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation has O(1) complexity on a JavaScript object?",
            options: [
                { optionText: "Accessing a property by key", optionTag: "A" },
                { optionText: "Iterating over all properties", optionTag: "B" },
                { optionText: "Sorting keys", optionTag: "C" },
                { optionText: "Deep copying", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Big-O best represents nested loops each running n times?",
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
            questionText: "What is the time complexity of merging two sorted arrays of size n?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which case does Big-O notation focus on?",
            options: [
                { optionText: "Worst-case", optionTag: "A" },
                { optionText: "Best-case", optionTag: "B" },
                { optionText: "Average-case", optionTag: "C" },
                { optionText: "Expected-case", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of recursive factorial function?",
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
            questionText: "Which complexity represents an algorithm whose performance doubles with each input?",
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
            questionText: "Which function grows faster asymptotically?",
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
            questionText: "How many comparisons are needed in worst case of linear search?",
            options: [
                { optionText: "n", optionTag: "A" },
                { optionText: "n/2", optionTag: "B" },
                { optionText: "log n", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the complexity of reversing a string of length n?",
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
            questionText: "Which function is the most efficient?",
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
            questionText: "Which best describes amortized time complexity?",
            options: [
                { optionText: "Average time per operation over sequence", optionTag: "A" },
                { optionText: "Worst-case per operation", optionTag: "B" },
                { optionText: "Randomized complexity", optionTag: "C" },
                { optionText: "Space usage average", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the complexity of finding maximum in an unsorted array?",
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
            questionText: "How do we compare two algorithms with different Big-O?",
            options: [
                { optionText: "Compare growth rate as n increases", optionTag: "A" },
                { optionText: "Compare runtime only", optionTag: "B" },
                { optionText: "Compare syntax", optionTag: "C" },
                { optionText: "Compare test cases", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
