import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Sorting Algorithms - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced understanding of Sorting Algorithms in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SortingAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the worst-case time complexity of Quick Sort?",
            options: [
                { optionText: "O(n^2)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
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
            questionText: "Which sorting algorithm performs the best on small datasets?",
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
            questionText: "Which of the following is not a comparison-based sorting algorithm?",
            options: [
                { optionText: "Counting Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is best suited for nearly sorted data?",
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
            questionText: "What is the average-case time complexity of Merge Sort?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is not in-place?",
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
            questionText: "Which sorting algorithm divides the array into buckets and then sorts them individually?",
            options: [
                { optionText: "Bucket Sort", optionTag: "A" },
                { optionText: "Counting Sort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Radix Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is not a divide-and-conquer algorithm?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Shell Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm uses the concept of a heap to sort elements?",
            options: [
                { optionText: "Heap Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Counting Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In C++, which function is used for sorting using STL?",
            options: [
                { optionText: "std::sort()", optionTag: "A" },
                { optionText: "std::order()", optionTag: "B" },
                { optionText: "std::heapify()", optionTag: "C" },
                { optionText: "std::sequence()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is most efficient for sorting linked lists?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of Quick Sort in its best implementation?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is adaptive?",
            options: [
                { optionText: "Insertion Sort", optionTag: "A" },
                { optionText: "Heap Sort", optionTag: "B" },
                { optionText: "Selection Sort", optionTag: "C" },
                { optionText: "Quick Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm has the same time complexity in all cases?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Shell Sort", optionTag: "C" },
                { optionText: "Radix Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sort algorithm does not use recursion?",
            options: [
                { optionText: "Selection Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Bucket Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is based on the concept of comparing and swapping adjacent elements?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Insertion Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Quick Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used in STL `stable_sort()`?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Counting Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm performs best on average when the pivot is chosen randomly?",
            options: [
                { optionText: "Quick Sort", optionTag: "A" },
                { optionText: "Selection Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Counting Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is most suitable when the input values are within a known range?",
            options: [
                { optionText: "Counting Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
