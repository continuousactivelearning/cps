import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Segment Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Segment Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SegmentTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary use of a Segment Tree?",
            options: [
                { optionText: "Range queries and updates", optionTag: "A" },
                { optionText: "Sorting arrays", optionTag: "B" },
                { optionText: "Graph traversal", optionTag: "C" },
                { optionText: "Memory allocation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of building a Segment Tree?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the time complexity for a range query in a Segment Tree?",
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
            questionText: "Which of the following operations can a Segment Tree support?",
            options: [
                { optionText: "Range Sum", optionTag: "A" },
                { optionText: "Range Minimum", optionTag: "B" },
                { optionText: "Range Maximum", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the size of a Segment Tree array for an array of size n?",
            options: [
                { optionText: "4 * n", optionTag: "A" },
                { optionText: "2 * n", optionTag: "B" },
                { optionText: "n", optionTag: "C" },
                { optionText: "n * n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of tree structure is a Segment Tree?",
            options: [
                { optionText: "Binary tree", optionTag: "A" },
                { optionText: "Ternary tree", optionTag: "B" },
                { optionText: "N-ary tree", optionTag: "C" },
                { optionText: "B-tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be the base case in a recursive Segment Tree build function?",
            options: [
                { optionText: "When start == end", optionTag: "A" },
                { optionText: "When start < end", optionTag: "B" },
                { optionText: "When mid == 0", optionTag: "C" },
                { optionText: "When array is empty", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of a point update in Segment Tree?",
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
            questionText: "Which traversal method is commonly used to build a Segment Tree?",
            options: [
                { optionText: "Post-order", optionTag: "A" },
                { optionText: "In-order", optionTag: "B" },
                { optionText: "Pre-order", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique is used to optimize lazy Segment Trees?",
            options: [
                { optionText: "Lazy propagation", optionTag: "A" },
                { optionText: "Memoization", optionTag: "B" },
                { optionText: "Dynamic programming", optionTag: "C" },
                { optionText: "Greedy method", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is best suited for Segment Trees?",
            options: [
                { optionText: "Range queries with frequent updates", optionTag: "A" },
                { optionText: "Single value retrieval", optionTag: "B" },
                { optionText: "Static maximum", optionTag: "C" },
                { optionText: "Sorting arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many child nodes does a Segment Tree node have?",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "3", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "4", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the leaf node of a Segment Tree represent?",
            options: [
                { optionText: "Single element from original array", optionTag: "A" },
                { optionText: "Maximum value", optionTag: "B" },
                { optionText: "Sum of all elements", optionTag: "C" },
                { optionText: "Parent node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Segment Tree, what does a parent node store?",
            options: [
                { optionText: "Aggregate of child values", optionTag: "A" },
                { optionText: "Minimum of the array", optionTag: "B" },
                { optionText: "Index of max element", optionTag: "C" },
                { optionText: "Nothing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the mid-point calculated while building Segment Tree?",
            options: [
                { optionText: "(start + end) / 2", optionTag: "A" },
                { optionText: "start * end", optionTag: "B" },
                { optionText: "start - end", optionTag: "C" },
                { optionText: "end / 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is true about a Segment Tree?",
            options: [
                { optionText: "It allows efficient range queries", optionTag: "A" },
                { optionText: "It uses more memory than an array", optionTag: "B" },
                { optionText: "It is suitable for dynamic updates", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What does lazy propagation help with in Segment Trees?",
            options: [
                { optionText: "Efficient range updates", optionTag: "A" },
                { optionText: "Efficient searching", optionTag: "B" },
                { optionText: "Efficient sorting", optionTag: "C" },
                { optionText: "Efficient memory management", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm paradigm does Segment Tree fall under?",
            options: [
                { optionText: "Divide and Conquer", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Brute Force", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Segment Trees be used for XOR queries?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only with even arrays", optionTag: "C" },
                { optionText: "Only with strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main disadvantage of Segment Tree?",
            options: [
                { optionText: "High memory usage", optionTag: "A" },
                { optionText: "Slow updates", optionTag: "B" },
                { optionText: "Can't be used with large arrays", optionTag: "C" },
                { optionText: "Not suitable for numeric operations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
