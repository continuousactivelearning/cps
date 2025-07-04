import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Two Pointers - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your understanding of the Two Pointers technique in JavaScript at the intermediate level.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "TwoPointers"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the two pointers technique used for?",
            options: [
                { optionText: "Solving problems involving sorted arrays", optionTag: "A" },
                { optionText: "Sorting an array", optionTag: "B" },
                { optionText: "Building trees", optionTag: "C" },
                { optionText: "Binary search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a typical use-case of two pointers?",
            options: [
                { optionText: "Finding if a pair with a given sum exists", optionTag: "A" },
                { optionText: "Finding the median", optionTag: "B" },
                { optionText: "Heapify a tree", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In two pointers approach, how are the pointers usually initialized?",
            options: [
                { optionText: "At the beginning and end of the array", optionTag: "A" },
                { optionText: "Both at the beginning", optionTag: "B" },
                { optionText: "Both at the end", optionTag: "C" },
                { optionText: "At random positions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the two pointers technique in most cases?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition is required for using two pointers efficiently?",
            options: [
                { optionText: "Sorted input", optionTag: "A" },
                { optionText: "Input as object", optionTag: "B" },
                { optionText: "Randomized input", optionTag: "C" },
                { optionText: "Sparse array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when the sum of elements at the two pointers is less than the target?",
            options: [
                { optionText: "Move the left pointer forward", optionTag: "A" },
                { optionText: "Move the right pointer backward", optionTag: "B" },
                { optionText: "Restart the pointers", optionTag: "C" },
                { optionText: "Switch to linear scan", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can two pointers be used to reverse an array?",
            options: [
                { optionText: "Swap values at both pointers and move inward", optionTag: "A" },
                { optionText: "Use a stack", optionTag: "B" },
                { optionText: "Sort the array", optionTag: "C" },
                { optionText: "Filter the array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When solving the container with most water problem, how is the two pointer approach helpful?",
            options: [
                { optionText: "It allows checking all width combinations in linear time", optionTag: "A" },
                { optionText: "It sorts the input", optionTag: "B" },
                { optionText: "It skips the widest container", optionTag: "C" },
                { optionText: "It ignores minimum height", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of two pointers?",
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
            questionText: "Which JavaScript array method helps simulate two pointers from left to right?",
            options: [
                { optionText: "for loop with two indexes", optionTag: "A" },
                { optionText: "reduce", optionTag: "B" },
                { optionText: "sort", optionTag: "C" },
                { optionText: "map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can two pointers be applied on linked lists?",
            options: [
                { optionText: "Yes, with slow and fast pointers", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only with doubly linked lists", optionTag: "C" },
                { optionText: "Only with sorted data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can two pointers be used to detect a palindrome?",
            options: [
                { optionText: "Compare characters from both ends moving toward the center", optionTag: "A" },
                { optionText: "Reverse the string and compare", optionTag: "B" },
                { optionText: "Hash characters", optionTag: "C" },
                { optionText: "Use a queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm does not use two pointers?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Palindrome Check", optionTag: "B" },
                { optionText: "Find Pair Sum", optionTag: "C" },
                { optionText: "Reverse Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What are the two pointers commonly called in problems?",
            options: [
                { optionText: "left and right", optionTag: "A" },
                { optionText: "i and sum", optionTag: "B" },
                { optionText: "fast and temp", optionTag: "C" },
                { optionText: "up and down", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the two pointer technique different from sliding window?",
            options: [
                { optionText: "Sliding window maintains a range with dynamic size", optionTag: "A" },
                { optionText: "Two pointers always move together", optionTag: "B" },
                { optionText: "Two pointers use extra memory", optionTag: "C" },
                { optionText: "Sliding window is slower", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem cannot be solved using two pointers?",
            options: [
                { optionText: "Finding element frequency", optionTag: "A" },
                { optionText: "Find pair with sum", optionTag: "B" },
                { optionText: "Palindrome check", optionTag: "C" },
                { optionText: "Move zeros to end", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can two pointers work on unsorted arrays?",
            options: [
                { optionText: "Yes, but problem-specific", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only for length check", optionTag: "C" },
                { optionText: "Only in recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following optimizations is common with two pointers?",
            options: [
                { optionText: "Early termination when condition met", optionTag: "A" },
                { optionText: "Recursion depth check", optionTag: "B" },
                { optionText: "Divide and conquer", optionTag: "C" },
                { optionText: "Random shuffling", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are duplicate elements handled in two pointers?",
            options: [
                { optionText: "Skip over duplicates using pointer adjustment", optionTag: "A" },
                { optionText: "Count them separately", optionTag: "B" },
                { optionText: "Use hashing", optionTag: "C" },
                { optionText: "Sort again", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does pointer convergence indicate?",
            options: [
                { optionText: "All elements are processed", optionTag: "A" },
                { optionText: "Midpoint found", optionTag: "B" },
                { optionText: "Array is sorted", optionTag: "C" },
                { optionText: "Sum equals zero", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
