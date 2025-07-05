import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Binary Search - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your understanding of Binary Search in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinarySearch"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of binary search in the worst case?",
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
            questionText: "What is the necessary condition for binary search to work?",
            options: [
                { optionText: "The array must be sorted", optionTag: "A" },
                { optionText: "The array must have even number of elements", optionTag: "B" },
                { optionText: "The array must be circular", optionTag: "C" },
                { optionText: "The array must be in reverse order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which search technique is more efficient than binary search on an unsorted array?",
            options: [
                { optionText: "Linear search", optionTag: "A" },
                { optionText: "Jump search", optionTag: "B" },
                { optionText: "Exponential search", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In binary search, which part of the array is discarded if the middle element is greater than the target?",
            options: [
                { optionText: "Right half", optionTag: "A" },
                { optionText: "Left half", optionTag: "B" },
                { optionText: "Both halves", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case condition in recursive binary search?",
            options: [
                { optionText: "start > end", optionTag: "A" },
                { optionText: "start == end", optionTag: "B" },
                { optionText: "start < end", optionTag: "C" },
                { optionText: "end == 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the average time complexity of binary search?",
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
            questionText: "Which STL function in C++ can be used for binary search?",
            options: [
                { optionText: "binary_search()", optionTag: "A" },
                { optionText: "search()", optionTag: "B" },
                { optionText: "find()", optionTag: "C" },
                { optionText: "lookup()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is returned by STL binary_search() if the element is found?",
            options: [
                { optionText: "true", optionTag: "A" },
                { optionText: "false", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "index of element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ header file contains binary_search() function?",
            options: [
                { optionText: "<algorithm>", optionTag: "A" },
                { optionText: "<iostream>", optionTag: "B" },
                { optionText: "<cmath>", optionTag: "C" },
                { optionText: "<vector>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initial value of low and high in binary search?",
            options: [
                { optionText: "low = 0, high = n-1", optionTag: "A" },
                { optionText: "low = 1, high = n", optionTag: "B" },
                { optionText: "low = n/2, high = n", optionTag: "C" },
                { optionText: "low = -1, high = n+1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the purpose of 'mid = (low + high) / 2' in binary search?",
            options: [
                { optionText: "To find the middle element", optionTag: "A" },
                { optionText: "To skip the element", optionTag: "B" },
                { optionText: "To sort the array", optionTag: "C" },
                { optionText: "To reverse the array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a possible issue with (low + high)/2 in binary search?",
            options: [
                { optionText: "Integer overflow", optionTag: "A" },
                { optionText: "Memory leak", optionTag: "B" },
                { optionText: "Infinite loop", optionTag: "C" },
                { optionText: "Incorrect sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which formula avoids overflow when calculating mid?",
            options: [
                { optionText: "mid = low + (high - low) / 2", optionTag: "A" },
                { optionText: "mid = (low * high) / 2", optionTag: "B" },
                { optionText: "mid = high - low / 2", optionTag: "C" },
                { optionText: "mid = low / high", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary search is faster than linear search when:",
            options: [
                { optionText: "Data is sorted", optionTag: "A" },
                { optionText: "Data is large and unsorted", optionTag: "B" },
                { optionText: "Data is small", optionTag: "C" },
                { optionText: "We search from end", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which loop is commonly used in binary search?",
            options: [
                { optionText: "while loop", optionTag: "A" },
                { optionText: "for loop", optionTag: "B" },
                { optionText: "do-while loop", optionTag: "C" },
                { optionText: "goto loop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if the array is not sorted and binary search is applied?",
            options: [
                { optionText: "Incorrect results", optionTag: "A" },
                { optionText: "Correct results", optionTag: "B" },
                { optionText: "Compile time error", optionTag: "C" },
                { optionText: "Runtime crash", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which version of binary search avoids recursion?",
            options: [
                { optionText: "Iterative", optionTag: "A" },
                { optionText: "Recursive", optionTag: "B" },
                { optionText: "Tail-recursive", optionTag: "C" },
                { optionText: "Pointer-based", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many elements does binary search check at a time?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "All", optionTag: "C" },
                { optionText: "Half", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does binary_search(v.begin(), v.end(), x) return?",
            options: [
                { optionText: "true if x exists", optionTag: "A" },
                { optionText: "false if x exists", optionTag: "B" },
                { optionText: "index of x", optionTag: "C" },
                { optionText: "0 always", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
