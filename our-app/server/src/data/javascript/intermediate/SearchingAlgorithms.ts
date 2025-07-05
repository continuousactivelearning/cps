import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Searching Algorithms - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz assesses your knowledge of searching algorithms implemented in JavaScript at an intermediate level.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SearchingAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the average time complexity of Binary Search on a sorted array?",
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
            questionText: "Which searching algorithm does not require the array to be sorted?",
            options: [
                { optionText: "Linear Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Interpolation Search", optionTag: "C" },
                { optionText: "Ternary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm divides the search space into three parts?",
            options: [
                { optionText: "Ternary Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Linear Search", optionTag: "C" },
                { optionText: "Jump Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best-case time complexity of Binary Search?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which condition does Interpolation Search perform better than Binary Search?",
            options: [
                { optionText: "When the data is uniformly distributed", optionTag: "A" },
                { optionText: "When the array is reversed", optionTag: "B" },
                { optionText: "When the array has duplicates", optionTag: "C" },
                { optionText: "When the data is unsorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Jump Search is a compromise between:",
            options: [
                { optionText: "Linear and Binary Search", optionTag: "A" },
                { optionText: "DFS and BFS", optionTag: "B" },
                { optionText: "Bubble and Merge Sort", optionTag: "C" },
                { optionText: "Quick and Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the optimal block size for Jump Search?",
            options: [
                { optionText: "√n", optionTag: "A" },
                { optionText: "n/2", optionTag: "B" },
                { optionText: "log n", optionTag: "C" },
                { optionText: "n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition must be satisfied to apply Binary Search?",
            options: [
                { optionText: "Array must be sorted", optionTag: "A" },
                { optionText: "Array must be reversed", optionTag: "B" },
                { optionText: "Array must be a heap", optionTag: "C" },
                { optionText: "Array must be a tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of Linear Search?",
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
            questionText: "How does Binary Search determine the next search space?",
            options: [
                { optionText: "By comparing the middle element", optionTag: "A" },
                { optionText: "By checking the first element", optionTag: "B" },
                { optionText: "By scanning sequentially", optionTag: "C" },
                { optionText: "By splitting the array into thirds", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Ternary Search is most efficient when:",
            options: [
                { optionText: "The function is unimodal", optionTag: "A" },
                { optionText: "The array is duplicated", optionTag: "B" },
                { optionText: "The array is random", optionTag: "C" },
                { optionText: "The array is reversed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which searching technique is best for small arrays?",
            options: [
                { optionText: "Linear Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Ternary Search", optionTag: "C" },
                { optionText: "Interpolation Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following searching algorithms is recursive by nature?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "Fibonacci Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these does NOT require sorted array?",
            options: [
                { optionText: "Linear Search", optionTag: "A" },
                { optionText: "Jump Search", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Interpolation Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which statement is true about Linear Search?",
            options: [
                { optionText: "Performs equally on sorted and unsorted arrays", optionTag: "A" },
                { optionText: "Only works on sorted arrays", optionTag: "B" },
                { optionText: "Is faster than Binary Search", optionTag: "C" },
                { optionText: "Requires preprocessing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of Linear Search?",
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
            questionText: "Fibonacci Search is similar to:",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Ternary Search", optionTag: "C" },
                { optionText: "Jump Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does Binary Search return if the key is not found?",
            options: [
                { optionText: "-1 or null", optionTag: "A" },
                { optionText: "The length of array", optionTag: "B" },
                { optionText: "A random index", optionTag: "C" },
                { optionText: "First element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function implements Binary Search in JS?",
            options: [
                { optionText: "Custom written using recursion/iteration", optionTag: "A" },
                { optionText: "JavaScript built-in binarySearch()", optionTag: "B" },
                { optionText: "Array.prototype.find()", optionTag: "C" },
                { optionText: "Array.prototype.filter()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary Search can be applied on:",
            options: [
                { optionText: "Sorted array only", optionTag: "A" },
                { optionText: "Any list", optionTag: "B" },
                { optionText: "Graph", optionTag: "C" },
                { optionText: "Hash Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
