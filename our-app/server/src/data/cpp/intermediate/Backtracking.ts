import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Backtracking - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate understanding of Backtracking techniques in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Backtracking"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is backtracking in computer science?",
            options: [
                { optionText: "A method for finding all solutions by trying all possible options", optionTag: "A" },
                { optionText: "A dynamic programming strategy", optionTag: "B" },
                { optionText: "A sorting technique", optionTag: "C" },
                { optionText: "A type of greedy algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used to implement backtracking algorithms?",
            options: [
                { optionText: "Recursion (implicit stack)", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of problems is backtracking best suited for?",
            options: [
                { optionText: "Constraint satisfaction problems", optionTag: "A" },
                { optionText: "Sorting arrays", optionTag: "B" },
                { optionText: "Binary search", optionTag: "C" },
                { optionText: "Linear search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a classic example of a backtracking problem?",
            options: [
                { optionText: "N-Queens Problem", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "DFS in graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main concept of backtracking?",
            options: [
                { optionText: "Try, fail, backtrack and try again", optionTag: "A" },
                { optionText: "Try once and finish", optionTag: "B" },
                { optionText: "Divide and merge", optionTag: "C" },
                { optionText: "Optimize on the go", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which one is NOT a typical use-case of backtracking?",
            options: [
                { optionText: "Finding shortest path in a graph", optionTag: "A" },
                { optionText: "Solving Sudoku", optionTag: "B" },
                { optionText: "N-Queens problem", optionTag: "C" },
                { optionText: "Generating all permutations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of generating all permutations of n elements?",
            options: [
                { optionText: "O(n!)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(2^n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Backtracking is most similar to which algorithmic technique?",
            options: [
                { optionText: "Depth-First Search", optionTag: "A" },
                { optionText: "Breadth-First Search", optionTag: "B" },
                { optionText: "Greedy", optionTag: "C" },
                { optionText: "Dynamic Programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main drawback of backtracking?",
            options: [
                { optionText: "High time complexity", optionTag: "A" },
                { optionText: "It doesn't work recursively", optionTag: "B" },
                { optionText: "It requires sorting", optionTag: "C" },
                { optionText: "It can’t be implemented in C++", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is pruning used in backtracking?",
            options: [
                { optionText: "To reduce the number of recursive calls", optionTag: "A" },
                { optionText: "To increase time complexity", optionTag: "B" },
                { optionText: "To find loops", optionTag: "C" },
                { optionText: "To remove duplicate values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is backtracking's behavior when the solution is found?",
            options: [
                { optionText: "It returns and stops recursion", optionTag: "A" },
                { optionText: "It continues execution forever", optionTag: "B" },
                { optionText: "It skips the solution", optionTag: "C" },
                { optionText: "It loops back", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a key part of a backtracking function?",
            options: [
                { optionText: "Base case and recursive exploration", optionTag: "A" },
                { optionText: "Only loops", optionTag: "B" },
                { optionText: "Only print statements", optionTag: "C" },
                { optionText: "No termination condition", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the term 'backtrack' mean?",
            options: [
                { optionText: "Undo the last move and try another path", optionTag: "A" },
                { optionText: "Start over", optionTag: "B" },
                { optionText: "Ignore recursion", optionTag: "C" },
                { optionText: "Break loop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a key optimization in backtracking?",
            options: [
                { optionText: "Bounding the search space", optionTag: "A" },
                { optionText: "Using BFS instead", optionTag: "B" },
                { optionText: "Sorting the input", optionTag: "C" },
                { optionText: "Using divide and conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique is used in solving Subset Sum problem?",
            options: [
                { optionText: "Backtracking", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "Sorting", optionTag: "C" },
                { optionText: "Dijkstra", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Backtracking algorithms can be enhanced using:",
            options: [
                { optionText: "Memoization", optionTag: "A" },
                { optionText: "Sorting", optionTag: "B" },
                { optionText: "Loop unrolling", optionTag: "C" },
                { optionText: "Depth limitation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these problems can be solved using backtracking?",
            options: [
                { optionText: "Word Search", optionTag: "A" },
                { optionText: "Finding square roots", optionTag: "B" },
                { optionText: "Matrix multiplication", optionTag: "C" },
                { optionText: "Minimum spanning tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the N-Queens problem, when do we backtrack?",
            options: [
                { optionText: "When a queen cannot be placed safely", optionTag: "A" },
                { optionText: "After placing all queens", optionTag: "B" },
                { optionText: "When board is full", optionTag: "C" },
                { optionText: "When a queen is captured", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which STL container is often used to track current path in backtracking?",
            options: [
                { optionText: "vector", optionTag: "A" },
                { optionText: "set", optionTag: "B" },
                { optionText: "map", optionTag: "C" },
                { optionText: "queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of recursion is usually present in backtracking solutions?",
            options: [
                { optionText: "Tree recursion", optionTag: "A" },
                { optionText: "Tail recursion", optionTag: "B" },
                { optionText: "Linear recursion", optionTag: "C" },
                { optionText: "Indirect recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
