import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Binary Search - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced understanding of Binary Search and its variations in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinarySearch"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "In a sorted array with duplicates, how do you find the first occurrence of a target using binary search?",
            options: [
                { optionText: "Modify binary search to continue left if mid == target", optionTag: "A" },
                { optionText: "Break on first target match", optionTag: "B" },
                { optionText: "Use linear scan after binary search", optionTag: "C" },
                { optionText: "Sort again before searching", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of binary search on a sorted array?",
            options: [
                { optionText: "O(log N)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(N log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you use `mid = (low + high) / 2` on large values of low and high?",
            options: [
                { optionText: "It may cause integer overflow", optionTag: "A" },
                { optionText: "It improves performance", optionTag: "B" },
                { optionText: "It is always safe", optionTag: "C" },
                { optionText: "It halves space complexity", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the safe way to calculate mid in binary search?",
            options: [
                { optionText: "mid = low + (high - low) / 2", optionTag: "A" },
                { optionText: "mid = (low + high) * 2", optionTag: "B" },
                { optionText: "mid = sqrt(low + high)", optionTag: "C" },
                { optionText: "mid = low / 2 + high", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a rotated sorted array, binary search can still be used. Which condition detects the sorted half?",
            options: [
                { optionText: "arr[low] <= arr[mid]", optionTag: "A" },
                { optionText: "arr[mid] > arr[high]", optionTag: "B" },
                { optionText: "arr[mid] == target", optionTag: "C" },
                { optionText: "arr[low] >= arr[mid]", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the return value if the target is not found in C++ STL `lower_bound`?",
            options: [
                { optionText: "Iterator to first greater element", optionTag: "A" },
                { optionText: "NULL", optionTag: "B" },
                { optionText: "nullptr", optionTag: "C" },
                { optionText: "Negative index", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following binary search variants finds the last occurrence?",
            options: [
                { optionText: "Move left if mid == target but also update answer", optionTag: "A" },
                { optionText: "Break on first match", optionTag: "B" },
                { optionText: "Search from mid - 1", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In exponential search, what comes before binary search?",
            options: [
                { optionText: "Exponential jump to find range", optionTag: "A" },
                { optionText: "Sorting the array", optionTag: "B" },
                { optionText: "Random midpoint selection", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of problems can be solved using binary search on answer space?",
            options: [
                { optionText: "Monotonic property problems", optionTag: "A" },
                { optionText: "Only sorted array problems", optionTag: "B" },
                { optionText: "Dynamic programming", optionTag: "C" },
                { optionText: "Greedy optimization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following STL algorithms uses binary search?",
            options: [
                { optionText: "binary_search", optionTag: "A" },
                { optionText: "sort", optionTag: "B" },
                { optionText: "for_each", optionTag: "C" },
                { optionText: "accumulate", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is binary search preferred over linear search for large sorted data?",
            options: [
                { optionText: "Better time complexity", optionTag: "A" },
                { optionText: "More cache usage", optionTag: "B" },
                { optionText: "Less memory", optionTag: "C" },
                { optionText: "Simpler code", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary search on linked lists is not preferred because:",
            options: [
                { optionText: "Random access is not possible", optionTag: "A" },
                { optionText: "It causes segmentation faults", optionTag: "B" },
                { optionText: "Sorting is not allowed", optionTag: "C" },
                { optionText: "Linked lists are immutable", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of binary search on a sorted vector?",
            options: [
                { optionText: "O(log N)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(N log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will be the condition to move right in binary search?",
            options: [
                { optionText: "target > arr[mid]", optionTag: "A" },
                { optionText: "target == arr[mid]", optionTag: "B" },
                { optionText: "target < arr[mid]", optionTag: "C" },
                { optionText: "arr[mid] == high", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In C++, which function returns iterator to first element greater than the given key?",
            options: [
                { optionText: "upper_bound", optionTag: "A" },
                { optionText: "lower_bound", optionTag: "B" },
                { optionText: "find", optionTag: "C" },
                { optionText: "binary_search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `binary_search(v.begin(), v.end(), val)` return?",
            options: [
                { optionText: "true or false", optionTag: "A" },
                { optionText: "Iterator to val", optionTag: "B" },
                { optionText: "Index of val", optionTag: "C" },
                { optionText: "Pointer to val", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary search works on:",
            options: [
                { optionText: "Sorted data", optionTag: "A" },
                { optionText: "Unordered data", optionTag: "B" },
                { optionText: "Graphs", optionTag: "C" },
                { optionText: "Trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the stable time complexity of ternary search compared to binary search?",
            options: [
                { optionText: "O(log N)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(N log N)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which variant of binary search is used to find floor of a number?",
            options: [
                { optionText: "Track mid if <= target and move right", optionTag: "A" },
                { optionText: "Break at first target match", optionTag: "B" },
                { optionText: "Search in reverse", optionTag: "C" },
                { optionText: "Use linear scan", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary search is not useful when:",
            options: [
                { optionText: "Data is unsorted", optionTag: "A" },
                { optionText: "Data is large", optionTag: "B" },
                { optionText: "Array is sorted", optionTag: "C" },
                { optionText: "Target is middle", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
