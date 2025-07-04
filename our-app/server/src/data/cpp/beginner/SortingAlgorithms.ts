import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Sorting Algorithms - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Sorting Algorithms in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SortingAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which sorting algorithm repeatedly swaps adjacent elements if they are in the wrong order?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Selection Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is best suited for nearly sorted data?",
            options: [
                { optionText: "Insertion Sort", optionTag: "A" },
                { optionText: "Heap Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Radix Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of Merge Sort?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is NOT comparison based?",
            options: [
                { optionText: "Counting Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sort algorithm works on divide and conquer principle?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Selection Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following has the best average case time complexity?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Bubble Sort in the worst case?",
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
            questionText: "Which of the following sorts is not stable?",
            options: [
                { optionText: "Heap Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm selects the smallest element and puts it in its correct position?",
            options: [
                { optionText: "Selection Sort", optionTag: "A" },
                { optionText: "Insertion Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Quick Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is typically used in STL's sort()?",
            options: [
                { optionText: "IntroSort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
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
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm works by partitioning the array into subarrays?",
            options: [
                { optionText: "Quick Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Selection Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is easiest to implement?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Radix Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sort algorithm uses binary heap internally?",
            options: [
                { optionText: "Heap Sort", optionTag: "A" },
                { optionText: "Selection Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Counting Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which case does Insertion Sort perform best?",
            options: [
                { optionText: "When the array is already sorted", optionTag: "A" },
                { optionText: "When the array is in reverse order", optionTag: "B" },
                { optionText: "When the array is random", optionTag: "C" },
                { optionText: "It always performs the same", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT an in-place sorting algorithm?",
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
            questionText: "Which sorting algorithm is adaptive?",
            options: [
                { optionText: "Insertion Sort", optionTag: "A" },
                { optionText: "Selection Sort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Counting Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm divides the array and then merges?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Selection Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is generally fastest for large datasets?",
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
            questionText: "Which of the following is a non-comparison-based sort?",
            options: [
                { optionText: "Counting Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
