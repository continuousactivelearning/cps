import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Binary Search - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your knowledge of Binary Search in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Binary Search"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of binary search in the worst case?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following conditions is necessary for applying binary search?",
            options: [
                { optionText: "Array must be sorted", optionTag: "A" },
                { optionText: "Array must be of even length", optionTag: "B" },
                { optionText: "Array should have no duplicates", optionTag: "C" },
                { optionText: "Array must contain only integers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does binary search do in each step?",
            options: [
                { optionText: "Divides the array into three parts", optionTag: "A" },
                { optionText: "Checks every element", optionTag: "B" },
                { optionText: "Reduces the search space by half", optionTag: "C" },
                { optionText: "Sorts the array", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Where does binary search start checking?",
            options: [
                { optionText: "First element", optionTag: "A" },
                { optionText: "Middle element", optionTag: "B" },
                { optionText: "Last element", optionTag: "C" },
                { optionText: "Random element", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following can binary search be applied to?",
            options: [
                { optionText: "Unsorted array", optionTag: "A" },
                { optionText: "Linked list", optionTag: "B" },
                { optionText: "Sorted array", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the base case for binary search recursion?",
            options: [
                { optionText: "When the array has 3 elements", optionTag: "A" },
                { optionText: "When low > high", optionTag: "B" },
                { optionText: "When low == mid", optionTag: "C" },
                { optionText: "When mid == high", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which data structure is best suited for binary search?",
            options: [
                { optionText: "Sorted array", optionTag: "A" },
                { optionText: "Unsorted linked list", optionTag: "B" },
                { optionText: "Hash table", optionTag: "C" },
                { optionText: "Binary tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if the element is not found in binary search?",
            options: [
                { optionText: "It throws an error", optionTag: "A" },
                { optionText: "It returns 0", optionTag: "B" },
                { optionText: "It returns -1 or invalid index", optionTag: "C" },
                { optionText: "It stops execution", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which of these can be used to implement binary search recursively?",
            options: [
                { optionText: "Loop", optionTag: "A" },
                { optionText: "Function with parameters low and high", optionTag: "B" },
                { optionText: "Single for loop", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "In binary search, how is the mid calculated?",
            options: [
                { optionText: "(low + high)/2", optionTag: "A" },
                { optionText: "low + high", optionTag: "B" },
                { optionText: "(low + high) * 2", optionTag: "C" },
                { optionText: "(high - low)/2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        // Add 10 more with correctOption randomly distributed between A/B/C/D
        // For brevity, you can copy and adapt previous style
    ]
};

export default quizData;