import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Divide and Conquer - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz evaluates your understanding of Divide and Conquer techniques in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DivideAndConquer"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the core idea of the Divide and Conquer approach?",
            options: [
                { optionText: "Divide the problem into subproblems, solve them independently, and combine results", optionTag: "A" },
                { optionText: "Use brute-force on the entire input", optionTag: "B" },
                { optionText: "Run all solutions in parallel", optionTag: "C" },
                { optionText: "Use recursion to avoid any division", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm uses the Divide and Conquer strategy?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Merge Sort?",
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
            questionText: "Which step comes after dividing the problem?",
            options: [
                { optionText: "Conquer", optionTag: "A" },
                { optionText: "Multiply", optionTag: "B" },
                { optionText: "Eliminate", optionTag: "C" },
                { optionText: "Swap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is typically used in the 'combine' step?",
            options: [
                { optionText: "Merge or sum of sub-results", optionTag: "A" },
                { optionText: "Break sub-results", optionTag: "B" },
                { optionText: "Ignore sub-results", optionTag: "C" },
                { optionText: "Call API", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of recursion is most common in divide and conquer?",
            options: [
                { optionText: "Multiple recursive calls", optionTag: "A" },
                { optionText: "Single recursive call", optionTag: "B" },
                { optionText: "No recursion", optionTag: "C" },
                { optionText: "Tail recursion only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case in divide and conquer?",
            options: [
                { optionText: "When the problem size is small enough to solve directly", optionTag: "A" },
                { optionText: "When the input is sorted", optionTag: "B" },
                { optionText: "When there is a loop", optionTag: "C" },
                { optionText: "When no variables are left", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What problem is commonly solved by divide and conquer?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Hashing", optionTag: "C" },
                { optionText: "Stack reversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Binary Search use divide and conquer?",
            options: [
                { optionText: "By reducing the problem size by half each time", optionTag: "A" },
                { optionText: "By checking each element sequentially", optionTag: "B" },
                { optionText: "By using hash tables", optionTag: "C" },
                { optionText: "By creating multiple arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is NOT a divide and conquer algorithm?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function typically represents divide and conquer?",
            options: [
                { optionText: "A recursive function", optionTag: "A" },
                { optionText: "A loop only", optionTag: "B" },
                { optionText: "An arrow function", optionTag: "C" },
                { optionText: "A string method", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Divide and conquer is effective when:",
            options: [
                { optionText: "The problem can be broken into similar sub-problems", optionTag: "A" },
                { optionText: "The input is very small", optionTag: "B" },
                { optionText: "There is only one solution", optionTag: "C" },
                { optionText: "Recursion is not allowed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the combine step ensure?",
            options: [
                { optionText: "The final result is built from sub-results", optionTag: "A" },
                { optionText: "All recursion ends", optionTag: "B" },
                { optionText: "Base case is reached", optionTag: "C" },
                { optionText: "Input is sorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the advantage of divide and conquer?",
            options: [
                { optionText: "It reduces problem size and improves performance", optionTag: "A" },
                { optionText: "It increases time complexity", optionTag: "B" },
                { optionText: "It avoids recursion", optionTag: "C" },
                { optionText: "It solves only string problems", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of structure is usually used in divide and conquer?",
            options: [
                { optionText: "Tree-like recursive structure", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following uses divide and conquer?",
            options: [
                { optionText: "Quick Sort", optionTag: "A" },
                { optionText: "Insertion Sort", optionTag: "B" },
                { optionText: "Bucket Sort", optionTag: "C" },
                { optionText: "Linear Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Divide and Conquer splits problems into how many subproblems usually?",
            options: [
                { optionText: "2 or more", optionTag: "A" },
                { optionText: "Always 1", optionTag: "B" },
                { optionText: "Zero", optionTag: "C" },
                { optionText: "5 or more", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which keyword is used for recursion in JavaScript?",
            options: [
                { optionText: "function calling itself", optionTag: "A" },
                { optionText: "for loop", optionTag: "B" },
                { optionText: "const call", optionTag: "C" },
                { optionText: "switch", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Divide and conquer works best for problems with:",
            options: [
                { optionText: "Overlapping subproblems", optionTag: "A" },
                { optionText: "Linear behavior", optionTag: "B" },
                { optionText: "Only numerical inputs", optionTag: "C" },
                { optionText: "Single result without steps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a key characteristic of divide and conquer problems?",
            options: [
                { optionText: "Recursive divide and merge", optionTag: "A" },
                { optionText: "Stack usage only", optionTag: "B" },
                { optionText: "Linear execution", optionTag: "C" },
                { optionText: "Sequential scanning", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
