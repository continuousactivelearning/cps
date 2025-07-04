import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Sorting Algorithms - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced knowledge of Sorting Algorithms in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SortingAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which sorting algorithm has the best average-case time complexity among comparison-based sorts?",
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
            questionText: "Which sorting algorithm is NOT stable by default?",
            options: [
                { optionText: "Quick Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm uses a partitioning approach?",
            options: [
                { optionText: "Quick Sort", optionTag: "A" },
                { optionText: "Heap Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Counting Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of Heap Sort?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is the most efficient for small datasets?",
            options: [
                { optionText: "Insertion Sort", optionTag: "A" },
                { optionText: "Heap Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Radix Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following algorithms is non-comparison based?",
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
            questionText: "Which sorting algorithm is best suited for linked lists?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is not in-place?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Selection Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sort is preferred when auxiliary space is a constraint?",
            options: [
                { optionText: "Heap Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Radix Sort", optionTag: "C" },
                { optionText: "Counting Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm sorts using a binary heap?",
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
            questionText: "Which sorting algorithm has O(n log n) time complexity in both worst and average case?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sort is known for divide-and-conquer and uses recursion?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Counting Sort", optionTag: "B" },
                { optionText: "Selection Sort", optionTag: "C" },
                { optionText: "Bucket Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is fastest for almost sorted data?",
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
            questionText: "Which sorting method does not use recursion?",
            options: [
                { optionText: "Selection Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Radix Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these sorting algorithms is adaptive?",
            options: [
                { optionText: "Insertion Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Selection Sort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm performs poorly with large datasets?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following uses key-indexed counting?",
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
            questionText: "Which of the following is not comparison-based?",
            options: [
                { optionText: "Radix Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Selection Sort", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm sorts by distributing elements into buckets?",
            options: [
                { optionText: "Bucket Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best-case time complexity of Quick Sort?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
