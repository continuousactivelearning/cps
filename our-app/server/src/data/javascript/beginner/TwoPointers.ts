import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Two Pointers - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your understanding of the Two Pointers technique in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "TwoPointers"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main idea of the Two Pointers technique?",
            options: [
                { optionText: "Using two variables to scan a data structure from different ends", optionTag: "A" },
                { optionText: "Using two functions to sort an array", optionTag: "B" },
                { optionText: "Using a loop inside a loop", optionTag: "C" },
                { optionText: "Using recursion with two parameters", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is best solved using the Two Pointers approach?",
            options: [
                { optionText: "Finding a pair that sums to a target in a sorted array", optionTag: "A" },
                { optionText: "Calculating factorial", optionTag: "B" },
                { optionText: "Depth-first search", optionTag: "C" },
                { optionText: "Sorting numbers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What are typical starting positions for the two pointers?",
            options: [
                { optionText: "Start and end of the array", optionTag: "A" },
                { optionText: "Both at the end", optionTag: "B" },
                { optionText: "Both in the middle", optionTag: "C" },
                { optionText: "Start and middle", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the Two Pointers technique, when do you move the left pointer?",
            options: [
                { optionText: "When the sum is less than target", optionTag: "A" },
                { optionText: "When the sum is greater than target", optionTag: "B" },
                { optionText: "When both pointers meet", optionTag: "C" },
                { optionText: "Always together with right pointer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the Two Pointers technique on a sorted array?",
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
            questionText: "Which problem does not usually use Two Pointers?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Two Sum in sorted array", optionTag: "B" },
                { optionText: "Moving Zeroes", optionTag: "C" },
                { optionText: "Trapping Rain Water", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do pointers move when current sum is greater than target?",
            options: [
                { optionText: "Right pointer moves left", optionTag: "A" },
                { optionText: "Left pointer moves right", optionTag: "B" },
                { optionText: "Both pointers reset", optionTag: "C" },
                { optionText: "No pointer moves", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, how do you swap two values?",
            options: [
                { optionText: "[a, b] = [b, a]", optionTag: "A" },
                { optionText: "a = b", optionTag: "B" },
                { optionText: "b = a", optionTag: "C" },
                { optionText: "a + b", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of array should be used with Two Pointers for sum problems?",
            options: [
                { optionText: "Sorted array", optionTag: "A" },
                { optionText: "Unsorted array", optionTag: "B" },
                { optionText: "Reverse sorted", optionTag: "C" },
                { optionText: "Empty array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is an important condition to avoid in Two Pointers?",
            options: [
                { optionText: "Pointers crossing each other", optionTag: "A" },
                { optionText: "Pointers starting at the same index", optionTag: "B" },
                { optionText: "Infinite recursion", optionTag: "C" },
                { optionText: "Negative indexes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique is similar to Two Pointers?",
            options: [
                { optionText: "Sliding Window", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you detect a palindrome using Two Pointers?",
            options: [
                { optionText: "Compare characters from both ends", optionTag: "A" },
                { optionText: "Reverse the string", optionTag: "B" },
                { optionText: "Use a loop", optionTag: "C" },
                { optionText: "Use a hash map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Two Pointers can be used on which data structure?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Tree", optionTag: "B" },
                { optionText: "Graph", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a correct use of Two Pointers?",
            options: [
                { optionText: "Finding duplicates in a sorted array", optionTag: "A" },
                { optionText: "Calculating power of a number", optionTag: "B" },
                { optionText: "Parsing a JSON string", optionTag: "C" },
                { optionText: "Traversing a binary tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if both pointers start at the same end?",
            options: [
                { optionText: "It may miss combinations", optionTag: "A" },
                { optionText: "It is always optimal", optionTag: "B" },
                { optionText: "It sorts the array", optionTag: "C" },
                { optionText: "It performs better", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you initialize two pointers?",
            options: [
                { optionText: "let left = 0, right = arr.length - 1;", optionTag: "A" },
                { optionText: "let left = 1, right = 1;", optionTag: "B" },
                { optionText: "let left = -1, right = 0;", optionTag: "C" },
                { optionText: "let left = null, right = null;", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does arr.sort() do before applying Two Pointers?",
            options: [
                { optionText: "Sorts the array in lexicographical order", optionTag: "A" },
                { optionText: "Sorts in descending order", optionTag: "B" },
                { optionText: "Removes duplicates", optionTag: "C" },
                { optionText: "Reverses the array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Two Pointers be used for removing duplicates in-place?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only on strings", optionTag: "C" },
                { optionText: "Only in recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm does not use Two Pointers?",
            options: [
                { optionText: "Selection Sort", optionTag: "A" },
                { optionText: "Palindrome check", optionTag: "B" },
                { optionText: "Sorted Two Sum", optionTag: "C" },
                { optionText: "Merge Intervals", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is Two Pointers an in-place technique?",
            options: [
                { optionText: "Yes, it usually modifies the array in-place", optionTag: "A" },
                { optionText: "No, it always creates new arrays", optionTag: "B" },
                { optionText: "It requires recursion", optionTag: "C" },
                { optionText: "It needs extra space always", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
