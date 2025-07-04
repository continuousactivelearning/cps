// src/data/java/beginner/searchingAlgorithms.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Searching Algorithms - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your basic understanding of searching algorithms in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Searching Algorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which algorithm checks each element of the list until a match is found?",
            options: [
                { optionText: "Linear Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "Interpolation Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which searching algorithm only works on sorted arrays?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "Depth First Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of Binary Search?",
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
            questionText: "What is the worst-case time complexity of Linear Search?",
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
            questionText: "In Binary Search, where do we look for the target value?",
            options: [
                { optionText: "Middle of the array", optionTag: "A" },
                { optionText: "Start of the array", optionTag: "B" },
                { optionText: "End of the array", optionTag: "C" },
                { optionText: "Every third element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which searching algorithm divides the list into blocks and searches?",
            options: [
                { optionText: "Jump Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Linear Search", optionTag: "C" },
                { optionText: "Hash Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which search algorithm assumes a uniform distribution of data?",
            options: [
                { optionText: "Interpolation Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Jump Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is best when the data is not sorted?",
            options: [
                { optionText: "Linear Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "Interpolation Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What value does Binary Search return if the element is not found?",
            options: [
                { optionText: "-1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "null", optionTag: "C" },
                { optionText: "Index of last element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java class method can be used to perform binary search?",
            options: [
                { optionText: "Arrays.binarySearch()", optionTag: "A" },
                { optionText: "Collections.find()", optionTag: "B" },
                { optionText: "Search.binary()", optionTag: "C" },
                { optionText: "Array.search()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In binary search, if the middle element is smaller than the target, where do you search next?",
            options: [
                { optionText: "Right half", optionTag: "A" },
                { optionText: "Left half", optionTag: "B" },
                { optionText: "Whole array", optionTag: "C" },
                { optionText: "Random element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which searching technique is generally faster in sorted arrays?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "Hash Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which searching algorithm does not require sorted input?",
            options: [
                { optionText: "Linear Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Interpolation Search", optionTag: "C" },
                { optionText: "Jump Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary Search is a _____ algorithm.",
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
            questionText: "Which search algorithm is best for small datasets?",
            options: [
                { optionText: "Linear Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "Hash Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a search algorithm?",
            options: [
                { optionText: "Quick Sort", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Interpolation Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Java, where is Arrays.binarySearch() defined?",
            options: [
                { optionText: "java.util.Arrays", optionTag: "A" },
                { optionText: "java.lang.Math", optionTag: "B" },
                { optionText: "java.util.Collections", optionTag: "C" },
                { optionText: "java.util.Scanner", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following has average case O(log n) time?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique searches by halving the search space?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following does NOT require data to be sorted?",
            options: [
                { optionText: "Linear Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "Interpolation Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;