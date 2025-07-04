import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Backtracking - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate knowledge of Backtracking in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Backtracking"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which problem is a classic example of backtracking?",
            options: [
                { optionText: "N-Queens Problem", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the purpose of the backtracking algorithm?",
            options: [
                { optionText: "To build solutions incrementally and abandon when constraints are violated", optionTag: "A" },
                { optionText: "To traverse a tree level by level", optionTag: "B" },
                { optionText: "To reduce memory usage", optionTag: "C" },
                { optionText: "To sort elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript feature supports recursion needed for backtracking?",
            options: [
                { optionText: "Function call stack", optionTag: "A" },
                { optionText: "setTimeout()", optionTag: "B" },
                { optionText: "Event loop", optionTag: "C" },
                { optionText: "Web APIs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Backtracking is generally implemented using:",
            options: [
                { optionText: "Recursion", optionTag: "A" },
                { optionText: "Iteration", optionTag: "B" },
                { optionText: "Promises", optionTag: "C" },
                { optionText: "Closures", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Sudoku solver, backtracking helps by:",
            options: [
                { optionText: "Trying values and reverting on conflict", optionTag: "A" },
                { optionText: "Sorting digits", optionTag: "B" },
                { optionText: "Using hash maps", optionTag: "C" },
                { optionText: "Building a heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of the N-Queens problem using backtracking?",
            options: [
                { optionText: "O(N!)", optionTag: "A" },
                { optionText: "O(N^2)", optionTag: "B" },
                { optionText: "O(N)", optionTag: "C" },
                { optionText: "O(log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition is essential in every backtracking algorithm?",
            options: [
                { optionText: "Base case", optionTag: "A" },
                { optionText: "Loop termination", optionTag: "B" },
                { optionText: "Promise resolution", optionTag: "C" },
                { optionText: "Callback function", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Backtracking is suitable when:",
            options: [
                { optionText: "Multiple possibilities must be explored", optionTag: "A" },
                { optionText: "Only one possibility exists", optionTag: "B" },
                { optionText: "Sorting is required", optionTag: "C" },
                { optionText: "Array operations are performed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does backtracking handle invalid paths?",
            options: [
                { optionText: "It backtracks and tries other possibilities", optionTag: "A" },
                { optionText: "It throws an error", optionTag: "B" },
                { optionText: "It halts immediately", optionTag: "C" },
                { optionText: "It ignores them", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is most closely associated with backtracking recursion?",
            options: [
                { optionText: "Call stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem can be solved using backtracking?",
            options: [
                { optionText: "Subset Sum", optionTag: "A" },
                { optionText: "Breadth First Search", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Backtracking is often used with which algorithm design technique?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "Dynamic Programming", optionTag: "C" },
                { optionText: "BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when backtracking reaches a dead-end in search space?",
            options: [
                { optionText: "It undoes the last step and tries a new path", optionTag: "A" },
                { optionText: "It terminates", optionTag: "B" },
                { optionText: "It returns undefined", optionTag: "C" },
                { optionText: "It jumps to the start", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Backtracking uses which traversal strategy?",
            options: [
                { optionText: "Depth First", optionTag: "A" },
                { optionText: "Breadth First", optionTag: "B" },
                { optionText: "Random Walk", optionTag: "C" },
                { optionText: "Linear Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is backtracking a brute force technique?",
            options: [
                { optionText: "Yes, with optimization via pruning", optionTag: "A" },
                { optionText: "No, it's greedy", optionTag: "B" },
                { optionText: "No, it's dynamic", optionTag: "C" },
                { optionText: "Yes, without any optimization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Backtracking algorithms are best when:",
            options: [
                { optionText: "All possible solutions must be tried", optionTag: "A" },
                { optionText: "Only a single solution exists", optionTag: "B" },
                { optionText: "Memory is not a concern", optionTag: "C" },
                { optionText: "Data is sorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Backtracking can be considered a refinement of:",
            options: [
                { optionText: "Brute-force search", optionTag: "A" },
                { optionText: "Divide and conquer", optionTag: "B" },
                { optionText: "Dynamic programming", optionTag: "C" },
                { optionText: "Sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which characteristic makes backtracking more efficient than brute-force?",
            options: [
                { optionText: "Pruning of search space", optionTag: "A" },
                { optionText: "Sorting before search", optionTag: "B" },
                { optionText: "Use of hash maps", optionTag: "C" },
                { optionText: "Greedy selection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which maze-solving approach is based on backtracking?",
            options: [
                { optionText: "Recursive backtracking using DFS", optionTag: "A" },
                { optionText: "BFS with queue", optionTag: "B" },
                { optionText: "Flood fill", optionTag: "C" },
                { optionText: "Greedy best first search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which constraint satisfaction problem is often solved with backtracking?",
            options: [
                { optionText: "8-Queens", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Binary Heap", optionTag: "C" },
                { optionText: "Sieve of Eratosthenes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
