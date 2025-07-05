import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Binary Search - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate understanding of Binary Search in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinarySearch"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What condition must be true to apply binary search on an array?",
            options: [
                { optionText: "Array must be sorted", optionTag: "A" },
                { optionText: "Array must have even number of elements", optionTag: "B" },
                { optionText: "Array must have unique elements", optionTag: "C" },
                { optionText: "Array must be reversed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of binary search in the worst case?",
            options: [
                { optionText: "O(log N)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(N log N)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does binary search return if the element is not found?",
            options: [
                { optionText: "-1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "null", optionTag: "C" },
                { optionText: "false", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript method can be used to sort an array before binary search?",
            options: [
                { optionText: "Array.prototype.sort()", optionTag: "A" },
                { optionText: "Array.prototype.splice()", optionTag: "B" },
                { optionText: "Array.prototype.slice()", optionTag: "C" },
                { optionText: "Array.prototype.shift()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following correctly calculates the mid index in binary search?",
            options: [
                { optionText: "Math.floor((low + high) / 2)", optionTag: "A" },
                { optionText: "low + high / 2", optionTag: "B" },
                { optionText: "low + high", optionTag: "C" },
                { optionText: "Math.floor(low - high / 2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In binary search, what happens when the target is greater than mid element?",
            options: [
                { optionText: "Search continues in right half", optionTag: "A" },
                { optionText: "Search continues in left half", optionTag: "B" },
                { optionText: "Mid is returned", optionTag: "C" },
                { optionText: "Array is reversed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case for terminating a binary search?",
            options: [
                { optionText: "low > high", optionTag: "A" },
                { optionText: "low < high", optionTag: "B" },
                { optionText: "low === mid", optionTag: "C" },
                { optionText: "mid === high", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which scenario is NOT ideal for binary search?",
            options: [
                { optionText: "Unsorted arrays", optionTag: "A" },
                { optionText: "Large sorted arrays", optionTag: "B" },
                { optionText: "Static data", optionTag: "C" },
                { optionText: "Sorted strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does binary search do after each iteration?",
            options: [
                { optionText: "Halves the search space", optionTag: "A" },
                { optionText: "Doubles the search space", optionTag: "B" },
                { optionText: "Traverses linearly", optionTag: "C" },
                { optionText: "Sorts array again", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is binary search different from linear search?",
            options: [
                { optionText: "Binary search is faster on sorted arrays", optionTag: "A" },
                { optionText: "Binary search is slower", optionTag: "B" },
                { optionText: "Binary search does not return values", optionTag: "C" },
                { optionText: "Binary search works on unsorted arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you perform a recursive binary search in JavaScript?",
            options: [
                { optionText: "By calling the function with updated low and high", optionTag: "A" },
                { optionText: "By using a loop", optionTag: "B" },
                { optionText: "By reversing the array", optionTag: "C" },
                { optionText: "By adding elements dynamically", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting method is NOT suitable before binary search for performance?",
            options: [
                { optionText: "Bubble sort", optionTag: "A" },
                { optionText: "Merge sort", optionTag: "B" },
                { optionText: "Quick sort", optionTag: "C" },
                { optionText: "Tim sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which return value indicates success in binary search?",
            options: [
                { optionText: "Index of the element", optionTag: "A" },
                { optionText: "Length of the array", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "Boolean true", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens to the mid index if the array length is even?",
            options: [
                { optionText: "Lower middle is selected", optionTag: "A" },
                { optionText: "Upper middle is selected", optionTag: "B" },
                { optionText: "First element is used", optionTag: "C" },
                { optionText: "Last element is used", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initial value of 'low' in binary search?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "array.length - 1", optionTag: "C" },
                { optionText: "Math.floor(array.length / 2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is binary search most effective?",
            options: [
                { optionText: "On sorted data", optionTag: "A" },
                { optionText: "On unsorted strings", optionTag: "B" },
                { optionText: "On graphs", optionTag: "C" },
                { optionText: "On linked lists", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which keyword is commonly used in a loop to break binary search early?",
            options: [
                { optionText: "return", optionTag: "A" },
                { optionText: "break", optionTag: "B" },
                { optionText: "continue", optionTag: "C" },
                { optionText: "yield", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If binary search fails to find the key, what can be returned alternatively?",
            options: [
                { optionText: "Insertion point", optionTag: "A" },
                { optionText: "Max value", optionTag: "B" },
                { optionText: "Length of array", optionTag: "C" },
                { optionText: "Mid value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many comparisons are made in the worst case for array of size 64?",
            options: [
                { optionText: "6", optionTag: "A" },
                { optionText: "64", optionTag: "B" },
                { optionText: "32", optionTag: "C" },
                { optionText: "8", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which built-in JavaScript method could simulate binary search logic?",
            options: [
                { optionText: "None directly, must implement manually", optionTag: "A" },
                { optionText: "Array.includes()", optionTag: "B" },
                { optionText: "Array.indexOf()", optionTag: "C" },
                { optionText: "Array.findIndex()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
