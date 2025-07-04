import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Two Pointers - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz evaluates your advanced understanding of the Two Pointers technique in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "TwoPointers"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main advantage of the two-pointer technique?",
            options: [
                { optionText: "It reduces time complexity by avoiding nested loops", optionTag: "A" },
                { optionText: "It simplifies recursion", optionTag: "B" },
                { optionText: "It improves memory usage", optionTag: "C" },
                { optionText: "It avoids hash tables", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of problems is most suited for the two-pointer technique?",
            options: [
                { optionText: "Sorted array problems", optionTag: "A" },
                { optionText: "Graph traversal problems", optionTag: "B" },
                { optionText: "Matrix multiplication", optionTag: "C" },
                { optionText: "Heap construction", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical time complexity of a two-pointer approach on a sorted array?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which two-pointer problem is best known for checking pair sums?",
            options: [
                { optionText: "Two Sum II - Input array is sorted", optionTag: "A" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
                { optionText: "Knapsack problem", optionTag: "C" },
                { optionText: "Fibonacci sequence", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In two pointers, when do we move the left pointer?",
            options: [
                { optionText: "When current sum is too small", optionTag: "A" },
                { optionText: "When current sum is too large", optionTag: "B" },
                { optionText: "When sum is exact", optionTag: "C" },
                { optionText: "Never", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be the initial position of the two pointers for a sorted array?",
            options: [
                { optionText: "Start and end of the array", optionTag: "A" },
                { optionText: "Both in the middle", optionTag: "B" },
                { optionText: "Both at the beginning", optionTag: "C" },
                { optionText: "Both at the end", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you handle duplicates in a two-pointer problem for unique pairs?",
            options: [
                { optionText: "Skip duplicate elements after processing one", optionTag: "A" },
                { optionText: "Use recursion", optionTag: "B" },
                { optionText: "Use unordered_set", optionTag: "C" },
                { optionText: "Sort again", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which pointer is moved when the sum exceeds the target?",
            options: [
                { optionText: "Right pointer is moved left", optionTag: "A" },
                { optionText: "Left pointer is moved right", optionTag: "B" },
                { optionText: "Both are moved", optionTag: "C" },
                { optionText: "Neither", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which case does the two-pointer method not work optimally?",
            options: [
                { optionText: "On unsorted arrays without preprocessing", optionTag: "A" },
                { optionText: "On sorted arrays", optionTag: "B" },
                { optionText: "On arrays with unique elements", optionTag: "C" },
                { optionText: "On arrays with duplicates", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a variant of the two-pointer method?",
            options: [
                { optionText: "Sliding window", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Floyd’s cycle", optionTag: "C" },
                { optionText: "BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is typically solved using two-pointer and sorting?",
            options: [
                { optionText: "3Sum", optionTag: "A" },
                { optionText: "Kruskal’s Algorithm", optionTag: "B" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "C" },
                { optionText: "Bellman-Ford", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key difference between two pointers and binary search?",
            options: [
                { optionText: "Two pointers scan from both ends; binary search halves the search space", optionTag: "A" },
                { optionText: "Binary search needs sorted data, two pointers don’t", optionTag: "B" },
                { optionText: "Two pointers use recursion only", optionTag: "C" },
                { optionText: "Binary search is always faster", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if left and right pointers cross each other?",
            options: [
                { optionText: "Search ends", optionTag: "A" },
                { optionText: "New iteration starts", optionTag: "B" },
                { optionText: "We reset the pointers", optionTag: "C" },
                { optionText: "Left pointer becomes right", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can two-pointer technique work with strings?",
            options: [
                { optionText: "Yes, especially for palindromes and substrings", optionTag: "A" },
                { optionText: "No, only arrays", optionTag: "B" },
                { optionText: "Only with recursion", optionTag: "C" },
                { optionText: "Only with dynamic programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is NOT a two-pointer application?",
            options: [
                { optionText: "Fibonacci number generation", optionTag: "A" },
                { optionText: "Container with most water", optionTag: "B" },
                { optionText: "Longest substring without repeating characters", optionTag: "C" },
                { optionText: "Trapping rain water", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ container is most suitable for two-pointer technique?",
            options: [
                { optionText: "Vector", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of two-pointer approach?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is the best case condition for two-pointer use?",
            options: [
                { optionText: "Sorted input and linear relation between values", optionTag: "A" },
                { optionText: "Graph input", optionTag: "B" },
                { optionText: "Unsorted strings", optionTag: "C" },
                { optionText: "Recursion based problems", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which standard library algorithm is similar to two-pointer?",
            options: [
                { optionText: "std::partition", optionTag: "A" },
                { optionText: "std::sort", optionTag: "B" },
                { optionText: "std::accumulate", optionTag: "C" },
                { optionText: "std::find", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the usual direction of two pointers?",
            options: [
                { optionText: "One from left, one from right", optionTag: "A" },
                { optionText: "Both from right", optionTag: "B" },
                { optionText: "Both from middle", optionTag: "C" },
                { optionText: "From any random point", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
