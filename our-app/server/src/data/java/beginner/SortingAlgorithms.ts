// src/data/java/beginner/sortingAlgorithms.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Sorting Algorithms - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your basic understanding of sorting algorithms in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Sorting Algorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which sorting algorithm is based on dividing the array and merging?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm repeatedly swaps adjacent elements if they are in the wrong order?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is the average case time complexity of Bubble Sort?",
            options: [
                { optionText: "O(n²)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is known for selecting the smallest element and placing it at the beginning?",
            options: [
                { optionText: "Selection Sort", optionTag: "A" },
                { optionText: "Insertion Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm builds the final sorted array one item at a time?",
            options: [
                { optionText: "Insertion Sort", optionTag: "A" },
                { optionText: "Heap Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm works best on small or nearly sorted data?",
            options: [
                { optionText: "Insertion Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm has the worst-case time complexity of O(n²)?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm uses the divide and conquer strategy?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is not stable?",
            options: [
                { optionText: "Selection Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is the best time complexity for any comparison-based sorting algorithm?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does 'in-place' mean in sorting algorithms?",
            options: [
                { optionText: "Uses constant extra memory", optionTag: "A" },
                { optionText: "Uses extra arrays", optionTag: "B" },
                { optionText: "Uses recursion", optionTag: "C" },
                { optionText: "Needs sorting library", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is the space complexity of Merge Sort?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n²)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main disadvantage of Bubble Sort?",
            options: [
                { optionText: "Inefficient for large data", optionTag: "A" },
                { optionText: "Too much memory", optionTag: "B" },
                { optionText: "Needs recursion", optionTag: "C" },
                { optionText: "Uses pointers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sort algorithm is most efficient for large data?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Selection Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a non-comparison sort?",
            options: [
                { optionText: "Counting Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sort uses a pivot element?",
            options: [
                { optionText: "Quick Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sort repeatedly inserts elements into the correct position?",
            options: [
                { optionText: "Insertion Sort", optionTag: "A" },
                { optionText: "Selection Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the average time complexity of Insertion Sort?",
            options: [
                { optionText: "O(n²)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sort algorithm sorts in-place and is stable?",
            options: [
                { optionText: "Insertion Sort", optionTag: "A" },
                { optionText: "Heap Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Quick Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sort is preferred for linked lists?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;