import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Searching Algorithms - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz evaluates your basic understanding of Searching Algorithms using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SearchingAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of linear search in the worst case?",
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
            questionText: "Which search algorithm divides the list in half each time?",
            options: [
                { optionText: "Binary search", optionTag: "A" },
                { optionText: "Linear search", optionTag: "B" },
                { optionText: "Jump search", optionTag: "C" },
                { optionText: "Ternary search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is required for binary search to work correctly?",
            options: [
                { optionText: "Sorted array", optionTag: "A" },
                { optionText: "Unsorted array", optionTag: "B" },
                { optionText: "All elements equal", optionTag: "C" },
                { optionText: "Large data only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will be the output of binary search if the element is not found?",
            options: [
                { optionText: "-1 (commonly used)", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "null", optionTag: "C" },
                { optionText: "undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method performs a search sequentially?",
            options: [
                { optionText: "Linear search", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Hash search", optionTag: "C" },
                { optionText: "Depth First Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a searching algorithm?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function is commonly used for linear search in JavaScript?",
            options: [
                { optionText: "indexOf()", optionTag: "A" },
                { optionText: "sort()", optionTag: "B" },
                { optionText: "map()", optionTag: "C" },
                { optionText: "filter()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the JavaScript method `find()` return?",
            options: [
                { optionText: "The first element that satisfies the condition", optionTag: "A" },
                { optionText: "The index of the element", optionTag: "B" },
                { optionText: "All matching elements", optionTag: "C" },
                { optionText: "True/False", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is faster on average for large, sorted arrays?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Recursive Traversal", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case in recursive binary search?",
            options: [
                { optionText: "Low > high", optionTag: "A" },
                { optionText: "Mid == target", optionTag: "B" },
                { optionText: "Array length == 1", optionTag: "C" },
                { optionText: "Target is not a number", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a key disadvantage of binary search?",
            options: [
                { optionText: "Requires sorted array", optionTag: "A" },
                { optionText: "Takes linear time", optionTag: "B" },
                { optionText: "Cannot be recursive", optionTag: "C" },
                { optionText: "Doesn't work in JavaScript", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript method returns the index of the first matching element?",
            options: [
                { optionText: "findIndex()", optionTag: "A" },
                { optionText: "find()", optionTag: "B" },
                { optionText: "filter()", optionTag: "C" },
                { optionText: "map()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of `[1,2,3].indexOf(4)`?",
            options: [
                { optionText: "-1", optionTag: "A" },
                { optionText: "4", optionTag: "B" },
                { optionText: "undefined", optionTag: "C" },
                { optionText: "null", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method can be used to check if an element exists?",
            options: [
                { optionText: "includes()", optionTag: "A" },
                { optionText: "map()", optionTag: "B" },
                { optionText: "reduce()", optionTag: "C" },
                { optionText: "join()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of searching in a hash table?",
            options: [
                { optionText: "O(1) on average", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript structure allows for fast key-based searching?",
            options: [
                { optionText: "Object", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "String", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is the best searching method for a small unsorted array?",
            options: [
                { optionText: "Linear Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "Exponential Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a benefit of linear search?",
            options: [
                { optionText: "Works on unsorted arrays", optionTag: "A" },
                { optionText: "Very fast", optionTag: "B" },
                { optionText: "Requires sorted array", optionTag: "C" },
                { optionText: "Requires index", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary search is not useful when...",
            options: [
                { optionText: "Array is not sorted", optionTag: "A" },
                { optionText: "Array is large", optionTag: "B" },
                { optionText: "Array is empty", optionTag: "C" },
                { optionText: "Array has duplicates", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method checks if any element satisfies the given condition?",
            options: [
                { optionText: "some()", optionTag: "A" },
                { optionText: "every()", optionTag: "B" },
                { optionText: "indexOf()", optionTag: "C" },
                { optionText: "slice()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
