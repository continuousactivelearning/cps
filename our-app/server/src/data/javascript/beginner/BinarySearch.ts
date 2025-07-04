import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Binary Search - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your understanding of Binary Search in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinarySearch"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of Binary Search?",
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
            questionText: "What is a prerequisite for Binary Search to work?",
            options: [
                { optionText: "Array must be sorted", optionTag: "A" },
                { optionText: "Array must be of integers", optionTag: "B" },
                { optionText: "Array must have even length", optionTag: "C" },
                { optionText: "Array must be reversed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following best describes binary search?",
            options: [
                { optionText: "Divide and conquer", optionTag: "A" },
                { optionText: "Greedy approach", optionTag: "B" },
                { optionText: "Brute force", optionTag: "C" },
                { optionText: "Backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What value does `Math.floor((low + high) / 2)` give in Binary Search?",
            options: [
                { optionText: "Middle index", optionTag: "A" },
                { optionText: "Maximum value", optionTag: "B" },
                { optionText: "Minimum value", optionTag: "C" },
                { optionText: "Random index", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if the target is greater than the middle element?",
            options: [
                { optionText: "Search continues in the right half", optionTag: "A" },
                { optionText: "Search continues in the left half", optionTag: "B" },
                { optionText: "Search stops", optionTag: "C" },
                { optionText: "Middle element is returned", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be updated when target is less than mid value?",
            options: [
                { optionText: "high = mid - 1", optionTag: "A" },
                { optionText: "low = mid + 1", optionTag: "B" },
                { optionText: "mid = high + low", optionTag: "C" },
                { optionText: "Return mid", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is the element found in binary search?",
            options: [
                { optionText: "arr[mid] === target", optionTag: "A" },
                { optionText: "arr[low] === target", optionTag: "B" },
                { optionText: "arr[high] === target", optionTag: "C" },
                { optionText: "target is even", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which loop is commonly used for Binary Search?",
            options: [
                { optionText: "while loop", optionTag: "A" },
                { optionText: "for loop", optionTag: "B" },
                { optionText: "do-while loop", optionTag: "C" },
                { optionText: "foreach loop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does binary search return if the element is not found?",
            options: [
                { optionText: "-1", optionTag: "A" },
                { optionText: "undefined", optionTag: "B" },
                { optionText: "null", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary search is more efficient than linear search when:",
            options: [
                { optionText: "Array is sorted", optionTag: "A" },
                { optionText: "Array is small", optionTag: "B" },
                { optionText: "Array has duplicates", optionTag: "C" },
                { optionText: "Array is reversed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary search reduces the search space by:",
            options: [
                { optionText: "Half each time", optionTag: "A" },
                { optionText: "One each time", optionTag: "B" },
                { optionText: "Third each time", optionTag: "C" },
                { optionText: "Randomly", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can binary search be used for strings in JavaScript?",
            options: [
                { optionText: "Yes, if sorted", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only with numbers", optionTag: "C" },
                { optionText: "Only if length > 5", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case in recursive binary search?",
            options: [
                { optionText: "low > high", optionTag: "A" },
                { optionText: "low === high", optionTag: "B" },
                { optionText: "mid === high", optionTag: "C" },
                { optionText: "target === arr.length", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is NOT true about binary search?",
            options: [
                { optionText: "It works on sorted arrays", optionTag: "A" },
                { optionText: "It has O(log n) complexity", optionTag: "B" },
                { optionText: "It checks every element", optionTag: "C" },
                { optionText: "It uses mid index", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Binary search can be implemented using:",
            options: [
                { optionText: "Both recursion and iteration", optionTag: "A" },
                { optionText: "Only recursion", optionTag: "B" },
                { optionText: "Only iteration", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which index is returned when the target is found?",
            options: [
                { optionText: "Index of the target", optionTag: "A" },
                { optionText: "Middle of the array", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the binary search result on empty array?",
            options: [
                { optionText: "-1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "undefined", optionTag: "C" },
                { optionText: "error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these can cause infinite loop in binary search?",
            options: [
                { optionText: "Not updating low/high correctly", optionTag: "A" },
                { optionText: "Array is empty", optionTag: "B" },
                { optionText: "Target is negative", optionTag: "C" },
                { optionText: "Array is sorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does binarySearch([1,2,3], 2) return?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many comparisons in worst case for array of 16?",
            options: [
                { optionText: "4", optionTag: "A" },
                { optionText: "8", optionTag: "B" },
                { optionText: "16", optionTag: "C" },
                { optionText: "2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
