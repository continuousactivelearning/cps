import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Searching Algorithms - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your fundamental knowledge of searching algorithms in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SearchingAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following is a linear search algorithm?",
            options: [
                { optionText: "Sequential Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Interpolation Search", optionTag: "C" },
                { optionText: "Jump Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which search algorithm works only on sorted arrays?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of linear search in the worst case?",
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
            questionText: "Binary search divides the array in how many parts during each step?",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "3", optionTag: "B" },
                { optionText: "4", optionTag: "C" },
                { optionText: "Depends on data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true for binary search?",
            options: [
                { optionText: "Works on sorted arrays only", optionTag: "A" },
                { optionText: "Can be used on unsorted data", optionTag: "B" },
                { optionText: "Takes linear time", optionTag: "C" },
                { optionText: "Requires recursion always", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these C++ STL functions performs binary search?",
            options: [
                { optionText: "binary_search()", optionTag: "A" },
                { optionText: "find()", optionTag: "B" },
                { optionText: "search()", optionTag: "C" },
                { optionText: "search_n()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best case time complexity of binary search?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n/2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm performs search by jumping ahead by fixed steps?",
            options: [
                { optionText: "Jump Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Ternary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which search algorithm estimates the position based on value?",
            options: [
                { optionText: "Interpolation Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ header file contains binary_search function?",
            options: [
                { optionText: "<algorithm>", optionTag: "A" },
                { optionText: "<iostream>", optionTag: "B" },
                { optionText: "<vector>", optionTag: "C" },
                { optionText: "<map>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In binary search, if the middle element is greater than target:",
            options: [
                { optionText: "Search left half", optionTag: "A" },
                { optionText: "Search right half", optionTag: "B" },
                { optionText: "Return middle element", optionTag: "C" },
                { optionText: "Exit search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many comparisons are needed for binary search in a list of 32 elements?",
            options: [
                { optionText: "At most 6", optionTag: "A" },
                { optionText: "At most 5", optionTag: "B" },
                { optionText: "At most 32", optionTag: "C" },
                { optionText: "At most 16", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these searching algorithms has O(log n) complexity?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm does NOT require sorted data?",
            options: [
                { optionText: "Linear Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "Ternary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In binary search, when is the element found?",
            options: [
                { optionText: "When middle == target", optionTag: "A" },
                { optionText: "When low == high", optionTag: "B" },
                { optionText: "When array is sorted", optionTag: "C" },
                { optionText: "Always at start", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary search on unsorted data will give:",
            options: [
                { optionText: "Incorrect results", optionTag: "A" },
                { optionText: "Always works", optionTag: "B" },
                { optionText: "Runtime error", optionTag: "C" },
                { optionText: "Slow performance", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these can use recursion for implementation?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which of the following is a drawback of linear search?",
            options: [
                { optionText: "Slow for large datasets", optionTag: "A" },
                { optionText: "Only works on sorted arrays", optionTag: "B" },
                { optionText: "Complex implementation", optionTag: "C" },
                { optionText: "Needs hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following searching methods is best for small unsorted arrays?",
            options: [
                { optionText: "Linear Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is middle index calculated in binary search?",
            options: [
                { optionText: "mid = low + (high - low) / 2", optionTag: "A" },
                { optionText: "mid = (low + high) * 2", optionTag: "B" },
                { optionText: "mid = (high - low) / 2", optionTag: "C" },
                { optionText: "mid = low * high", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
