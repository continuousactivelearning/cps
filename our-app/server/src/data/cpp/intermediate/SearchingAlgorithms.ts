import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Searching Algorithms - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate knowledge of Searching Algorithms in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SearchingAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the average-case time complexity of Binary Search?",
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
            questionText: "Which condition must be met to apply Binary Search?",
            options: [
                { optionText: "Array must be sorted", optionTag: "A" },
                { optionText: "Array must have distinct elements", optionTag: "B" },
                { optionText: "Array must be unsorted", optionTag: "C" },
                { optionText: "Array must contain only integers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is not a comparison-based searching algorithm?",
            options: [
                { optionText: "Hashing", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Linear Search", optionTag: "C" },
                { optionText: "Interpolation Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best-case time complexity of Linear Search?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(log N)", optionTag: "C" },
                { optionText: "O(N log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which search algorithm works efficiently on uniformly distributed data?",
            options: [
                { optionText: "Interpolation Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Linear Search", optionTag: "C" },
                { optionText: "Ternary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of Ternary Search?",
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
            questionText: "Which search algorithm splits the array into three parts?",
            options: [
                { optionText: "Ternary Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Linear Search", optionTag: "C" },
                { optionText: "Jump Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Jump Search, what is the optimal block size for searching?",
            options: [
                { optionText: "√N", optionTag: "A" },
                { optionText: "log N", optionTag: "B" },
                { optionText: "N/2", optionTag: "C" },
                { optionText: "N", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is ideal for implementing Hashing?",
            options: [
                { optionText: "Hash Table", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these search algorithms does not require sorting?",
            options: [
                { optionText: "Linear Search", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Jump Search", optionTag: "C" },
                { optionText: "Ternary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which search algorithm has constant time complexity in the best case?",
            options: [
                { optionText: "Hashing", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Ternary Search", optionTag: "C" },
                { optionText: "Jump Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which factor affects the performance of Hashing?",
            options: [
                { optionText: "Load factor", optionTag: "A" },
                { optionText: "Sorting order", optionTag: "B" },
                { optionText: "Tree height", optionTag: "C" },
                { optionText: "Array size only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a disadvantage of Linear Search?",
            options: [
                { optionText: "Takes linear time for large arrays", optionTag: "A" },
                { optionText: "Needs sorted array", optionTag: "B" },
                { optionText: "Requires hashing", optionTag: "C" },
                { optionText: "Needs binary tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which search technique works on sorted and rotated arrays?",
            options: [
                { optionText: "Modified Binary Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Ternary Search", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the hash function responsible for?",
            options: [
                { optionText: "Mapping keys to indices", optionTag: "A" },
                { optionText: "Sorting the keys", optionTag: "B" },
                { optionText: "Inverting the keys", optionTag: "C" },
                { optionText: "Swapping values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which collision resolution technique uses probing?",
            options: [
                { optionText: "Open Addressing", optionTag: "A" },
                { optionText: "Chaining", optionTag: "B" },
                { optionText: "Double Hashing", optionTag: "C" },
                { optionText: "Rehashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which search algorithm divides the array in half in every iteration?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Jump Search", optionTag: "B" },
                { optionText: "Linear Search", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main drawback of Hashing?",
            options: [
                { optionText: "Collision handling", optionTag: "A" },
                { optionText: "Linear time complexity", optionTag: "B" },
                { optionText: "Requires sorting", optionTag: "C" },
                { optionText: "Needs recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the average time complexity for a successful search in hash table?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(log N)", optionTag: "C" },
                { optionText: "O(N log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if a key hashes to an already occupied index?",
            options: [
                { optionText: "Collision occurs", optionTag: "A" },
                { optionText: "Key is ignored", optionTag: "B" },
                { optionText: "Array is resized", optionTag: "C" },
                { optionText: "Key is deleted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
