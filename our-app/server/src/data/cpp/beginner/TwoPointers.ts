import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Two Pointers - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of the Two Pointers technique in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "TwoPointers"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the two pointers technique commonly used for?",
            options: [
                { optionText: "Solving problems on sorted arrays or linked lists", optionTag: "A" },
                { optionText: "Binary Tree traversal", optionTag: "B" },
                { optionText: "Matrix multiplication", optionTag: "C" },
                { optionText: "Stack implementation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What are the usual directions of two pointers in a sorted array?",
            options: [
                { optionText: "One from start, one from end", optionTag: "A" },
                { optionText: "Both from the middle", optionTag: "B" },
                { optionText: "Both from the end", optionTag: "C" },
                { optionText: "Only one pointer is used", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a typical problem solved using two pointers?",
            options: [
                { optionText: "Finding pair with a given sum in a sorted array", optionTag: "A" },
                { optionText: "Depth First Search", optionTag: "B" },
                { optionText: "Finding max element", optionTag: "C" },
                { optionText: "Printing even numbers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be the time complexity of a standard two pointers approach?",
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
            questionText: "Which condition causes the left pointer to move in two pointers?",
            options: [
                { optionText: "If current sum is less than target", optionTag: "A" },
                { optionText: "If current sum is greater than target", optionTag: "B" },
                { optionText: "Always", optionTag: "C" },
                { optionText: "Never", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition causes the right pointer to move in two pointers?",
            options: [
                { optionText: "If current sum is greater than target", optionTag: "A" },
                { optionText: "If current sum is less than target", optionTag: "B" },
                { optionText: "Always", optionTag: "C" },
                { optionText: "Never", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Two pointers are usually not applicable in which case?",
            options: [
                { optionText: "Unsorted arrays without sorting", optionTag: "A" },
                { optionText: "Sorted arrays", optionTag: "B" },
                { optionText: "Strings with index-based access", optionTag: "C" },
                { optionText: "Palindrome checks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In two pointers, when do we usually stop the loop?",
            options: [
                { optionText: "When left > right", optionTag: "A" },
                { optionText: "When left < right", optionTag: "B" },
                { optionText: "When left == right", optionTag: "C" },
                { optionText: "When sum is found", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can two pointers be used to remove duplicates in a sorted array?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only with hash set", optionTag: "C" },
                { optionText: "Only in O(n^2) time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the benefit of two pointers compared to brute force?",
            options: [
                { optionText: "Reduces time complexity", optionTag: "A" },
                { optionText: "Uses more memory", optionTag: "B" },
                { optionText: "Reduces code size", optionTag: "C" },
                { optionText: "Always gives approximate results", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can two pointers be used with strings?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only for numeric strings", optionTag: "C" },
                { optionText: "Only in recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these problems is suitable for two pointers?",
            options: [
                { optionText: "Merging two sorted arrays", optionTag: "A" },
                { optionText: "Finding LCA in tree", optionTag: "B" },
                { optionText: "Heap sort", optionTag: "C" },
                { optionText: "Fibonacci computation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which direction do the two pointers typically move?",
            options: [
                { optionText: "Towards each other", optionTag: "A" },
                { optionText: "Away from each other", optionTag: "B" },
                { optionText: "Only right pointer moves", optionTag: "C" },
                { optionText: "They don’t move", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the output of applying two pointers to [1, 2, 3, 4, 5] for sum=6?",
            options: [
                { optionText: "(1,5) or (2,4)", optionTag: "A" },
                { optionText: "(3,3)", optionTag: "B" },
                { optionText: "(1,2)", optionTag: "C" },
                { optionText: "No output", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be done before using two pointers in unsorted array?",
            options: [
                { optionText: "Sort the array", optionTag: "A" },
                { optionText: "Use stack", optionTag: "B" },
                { optionText: "Reverse the array", optionTag: "C" },
                { optionText: "Create a copy", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of two pointer approach?",
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
            questionText: "Which technique is often combined with two pointers?",
            options: [
                { optionText: "Sorting", optionTag: "A" },
                { optionText: "Backtracking", optionTag: "B" },
                { optionText: "Hashing", optionTag: "C" },
                { optionText: "Dynamic programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if array is not sorted before using two pointers?",
            options: [
                { optionText: "Incorrect results", optionTag: "A" },
                { optionText: "Slower runtime", optionTag: "B" },
                { optionText: "Faster solution", optionTag: "C" },
                { optionText: "Still works fine", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which situation is the fast-slow pointer variant used?",
            options: [
                { optionText: "Detecting cycles in linked list", optionTag: "A" },
                { optionText: "Searching in array", optionTag: "B" },
                { optionText: "Printing even numbers", optionTag: "C" },
                { optionText: "Matrix multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems can be efficiently solved using two pointers?",
            options: [
                { optionText: "Finding if a pair exists with a given difference", optionTag: "A" },
                { optionText: "Finding the maximum of an array", optionTag: "B" },
                { optionText: "Depth-first traversal", optionTag: "C" },
                { optionText: "Evaluating a postfix expression", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
