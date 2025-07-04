import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Sorting Algorithms - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced knowledge of sorting algorithms in JavaScript, covering algorithm complexities, stability, in-place sorting, and optimizations.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SortingAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the average time complexity of QuickSort?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n²)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is stable?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "QuickSort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is NOT in-place?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "QuickSort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm uses a divide and conquer approach?",
            options: [
                { optionText: "QuickSort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of QuickSort?",
            options: [
                { optionText: "O(n²)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is considered the fastest on average for large arrays?",
            options: [
                { optionText: "QuickSort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Selection Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key characteristic of a stable sorting algorithm?",
            options: [
                { optionText: "Preserves the relative order of equal elements", optionTag: "A" },
                { optionText: "Always runs in O(n log n)", optionTag: "B" },
                { optionText: "Is always in-place", optionTag: "C" },
                { optionText: "Uses recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm uses a heap data structure?",
            options: [
                { optionText: "Heap Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "QuickSort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is most efficient for nearly sorted data?",
            options: [
                { optionText: "Insertion Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "QuickSort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of Merge Sort?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm repeatedly swaps adjacent elements if they are in wrong order?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Insertion Sort", optionTag: "B" },
                { optionText: "QuickSort", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm partitions the array around a pivot?",
            options: [
                { optionText: "QuickSort", optionTag: "A" },
                { optionText: "Heap Sort", optionTag: "B" },
                { optionText: "Selection Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm selects the minimum element and places it at the beginning?",
            options: [
                { optionText: "Selection Sort", optionTag: "A" },
                { optionText: "Insertion Sort", optionTag: "B" },
                { optionText: "QuickSort", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm has the best worst-case time complexity?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "QuickSort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is often used for external sorting due to its efficiency with large data?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "QuickSort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main disadvantage of Heap Sort compared to QuickSort?",
            options: [
                { optionText: "Less cache friendly", optionTag: "A" },
                { optionText: "Higher average time complexity", optionTag: "B" },
                { optionText: "Not in-place", optionTag: "C" },
                { optionText: "Not comparison-based", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm improves by using insertion sort on small subarrays?",
            options: [
                { optionText: "Hybrid sorts like TimSort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "QuickSort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main idea behind the 'Dutch National Flag' problem in sorting?",
            options: [
                { optionText: "Partitioning array into three parts", optionTag: "A" },
                { optionText: "Sorting colors by counting", optionTag: "B" },
                { optionText: "Using recursion to sort", optionTag: "C" },
                { optionText: "Using a heap to sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm can be implemented non-recursively using a stack?",
            options: [
                { optionText: "QuickSort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of pivot selection helps improve QuickSort's worst-case performance?",
            options: [
                { optionText: "Median-of-three", optionTag: "A" },
                { optionText: "First element always", optionTag: "B" },
                { optionText: "Random element always", optionTag: "C" },
                { optionText: "Last element always", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
