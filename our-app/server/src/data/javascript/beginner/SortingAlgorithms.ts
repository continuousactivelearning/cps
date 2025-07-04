import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Sorting Algorithms - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic understanding of sorting algorithms in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SortingAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following is a sorting algorithm?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Depth First Search", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript method can be used to sort arrays?",
            options: [
                { optionText: "sort()", optionTag: "A" },
                { optionText: "map()", optionTag: "B" },
                { optionText: "filter()", optionTag: "C" },
                { optionText: "reduce()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Bubble Sort in the worst case?",
            options: [
                { optionText: "O(n^2)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is considered stable?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm uses a divide and conquer approach?",
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
            questionText: "Which is the best-case time complexity of Insertion Sort?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a comparison-based sorting algorithm?",
            options: [
                { optionText: "Counting Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm performs the least number of swaps?",
            options: [
                { optionText: "Selection Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm has O(n log n) average-case time complexity?",
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
            questionText: "Which sorting algorithm selects the smallest element and places it at the beginning?",
            options: [
                { optionText: "Selection Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sort is preferred when the array is almost sorted?",
            options: [
                { optionText: "Insertion Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sort uses a pivot element?",
            options: [
                { optionText: "Quick Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is NOT an in-place sorting algorithm?",
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
            questionText: "What is the worst-case time complexity of Quick Sort?",
            options: [
                { optionText: "O(n^2)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm uses a heap data structure?",
            options: [
                { optionText: "Heap Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following sorts is not recursive?",
            options: [
                { optionText: "Selection Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does sort() do in JavaScript by default?",
            options: [
                { optionText: "Sorts elements as strings", optionTag: "A" },
                { optionText: "Sorts numbers in ascending order", optionTag: "B" },
                { optionText: "Sorts based on length", optionTag: "C" },
                { optionText: "Sorts using bubble sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sort is NOT suitable for large datasets?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is the fastest for sorting in average case?",
            options: [
                { optionText: "Quick Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following sorting algorithms has O(n) best-case time complexity?",
            options: [
                { optionText: "Insertion Sort", optionTag: "A" },
                { optionText: "Selection Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
