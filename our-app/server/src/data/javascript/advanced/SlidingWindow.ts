import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Sliding Window - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced understanding of the sliding window technique in JavaScript, including fixed and variable window sizes, optimization, and common problems.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SlidingWindow"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary advantage of the sliding window technique?",
            options: [
                { optionText: "Reduces time complexity by avoiding redundant computations", optionTag: "A" },
                { optionText: "Uses more memory for faster results", optionTag: "B" },
                { optionText: "Sorts data efficiently", optionTag: "C" },
                { optionText: "Reverses arrays in place", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a fixed-size sliding window, how does the window move?",
            options: [
                { optionText: "It moves forward by one element each iteration", optionTag: "A" },
                { optionText: "It jumps by the window size each iteration", optionTag: "B" },
                { optionText: "It expands and never shrinks", optionTag: "C" },
                { optionText: "It shrinks and never expands", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used to optimize sliding window maximum/minimum problems?",
            options: [
                { optionText: "Deque (Double-ended queue)", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the optimized sliding window maximum algorithm using deque?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does a variable-size sliding window differ from a fixed-size sliding window?",
            options: [
                { optionText: "It expands or shrinks dynamically based on conditions", optionTag: "A" },
                { optionText: "It always stays the same size", optionTag: "B" },
                { optionText: "It only moves backward", optionTag: "C" },
                { optionText: "It requires sorting each time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is a classic example of variable-size sliding window?",
            options: [
                { optionText: "Longest substring without repeating characters", optionTag: "A" },
                { optionText: "Binary search on sorted array", optionTag: "B" },
                { optionText: "Merge sort", optionTag: "C" },
                { optionText: "Finding max in fixed array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What role does the 'start' pointer play in sliding window algorithms?",
            options: [
                { optionText: "Marks the beginning of the current window", optionTag: "A" },
                { optionText: "Marks the end of the window", optionTag: "B" },
                { optionText: "Counts total elements processed", optionTag: "C" },
                { optionText: "Stores intermediate results", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you update the window when the current window violates constraints?",
            options: [
                { optionText: "Move the start pointer forward to shrink the window", optionTag: "A" },
                { optionText: "Reset the window to empty", optionTag: "B" },
                { optionText: "Expand the window infinitely", optionTag: "C" },
                { optionText: "Stop the algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the sliding window technique, what is typically stored in the auxiliary data structures?",
            options: [
                { optionText: "Relevant data to quickly compute window results", optionTag: "A" },
                { optionText: "Entire array elements", optionTag: "B" },
                { optionText: "Temporary sorted arrays", optionTag: "C" },
                { optionText: "Global counters only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sliding window problem involves finding the minimum window substring containing all characters of a pattern?",
            options: [
                { optionText: "Minimum Window Substring problem", optionTag: "A" },
                { optionText: "Sliding Window Maximum", optionTag: "B" },
                { optionText: "Longest Increasing Subsequence", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical approach to solve the 'Longest Substring Without Repeating Characters' problem using sliding window?",
            options: [
                { optionText: "Use a hash map to track characters and adjust window accordingly", optionTag: "A" },
                { optionText: "Sort the string", optionTag: "B" },
                { optionText: "Use two stacks", optionTag: "C" },
                { optionText: "Recursively check all substrings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is sliding window preferred over brute force in substring problems?",
            options: [
                { optionText: "Reduces time complexity from O(n^2) to O(n)", optionTag: "A" },
                { optionText: "Uses less memory", optionTag: "B" },
                { optionText: "Simplifies code", optionTag: "C" },
                { optionText: "Avoids recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In sliding window, what does the 'end' pointer represent?",
            options: [
                { optionText: "Marks the current element being processed", optionTag: "A" },
                { optionText: "Marks the start of the window", optionTag: "B" },
                { optionText: "Stores results", optionTag: "C" },
                { optionText: "Counts elements removed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you handle sliding window problems involving counts of distinct elements?",
            options: [
                { optionText: "Use a frequency map to track element counts", optionTag: "A" },
                { optionText: "Sort the window elements", optionTag: "B" },
                { optionText: "Use a queue to store elements", optionTag: "C" },
                { optionText: "Use recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of problems typically benefit from the sliding window technique?",
            options: [
                { optionText: "Problems involving contiguous subarrays or substrings", optionTag: "A" },
                { optionText: "Sorting problems", optionTag: "B" },
                { optionText: "Graph traversal problems", optionTag: "C" },
                { optionText: "Tree-based problems", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is sliding window related to two-pointer technique?",
            options: [
                { optionText: "Sliding window is a special case of the two-pointer technique", optionTag: "A" },
                { optionText: "They are unrelated", optionTag: "B" },
                { optionText: "Two-pointer uses recursion", optionTag: "C" },
                { optionText: "Sliding window uses stacks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sliding window approach is more complex to implement?",
            options: [
                { optionText: "Variable-size sliding window", optionTag: "A" },
                { optionText: "Fixed-size sliding window", optionTag: "B" },
                { optionText: "Both are equally complex", optionTag: "C" },
                { optionText: "Neither uses pointers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a common use case for sliding window in networking?",
            options: [
                { optionText: "Flow control in TCP protocol", optionTag: "A" },
                { optionText: "IP address routing", optionTag: "B" },
                { optionText: "Packet encryption", optionTag: "C" },
                { optionText: "DNS lookup", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a main challenge when implementing sliding window in real-time streaming data?",
            options: [
                { optionText: "Handling dynamic data and memory constraints", optionTag: "A" },
                { optionText: "Sorting the stream", optionTag: "B" },
                { optionText: "Recursive calls", optionTag: "C" },
                { optionText: "Multithreading", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
