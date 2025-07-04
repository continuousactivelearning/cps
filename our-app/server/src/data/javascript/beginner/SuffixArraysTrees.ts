import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Suffix Arrays and Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz assesses your understanding of Suffix Arrays and Suffix Trees using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SuffixArraysTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a suffix array?",
            options: [
                { optionText: "An array of all suffixes of a string sorted lexicographically", optionTag: "A" },
                { optionText: "An array containing string prefixes", optionTag: "B" },
                { optionText: "An array of characters in reverse", optionTag: "C" },
                { optionText: "A trie structure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript method helps extract suffixes of a string?",
            options: [
                { optionText: "slice()", optionTag: "A" },
                { optionText: "shift()", optionTag: "B" },
                { optionText: "pop()", optionTag: "C" },
                { optionText: "split()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the primary use of a suffix array?",
            options: [
                { optionText: "Efficient string matching", optionTag: "A" },
                { optionText: "Sorting numbers", optionTag: "B" },
                { optionText: "Memory allocation", optionTag: "C" },
                { optionText: "Rendering graphics", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you sort an array of suffixes in JavaScript?",
            options: [
                { optionText: "Using sort() method", optionTag: "A" },
                { optionText: "Using pop()", optionTag: "B" },
                { optionText: "Using concat()", optionTag: "C" },
                { optionText: "Using filter()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about suffix trees?",
            options: [
                { optionText: "They are compressed tries of all suffixes", optionTag: "A" },
                { optionText: "They are binary trees", optionTag: "B" },
                { optionText: "They contain only prefixes", optionTag: "C" },
                { optionText: "They sort numbers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `str.slice(i)` return?",
            options: [
                { optionText: "Suffix of the string starting at index i", optionTag: "A" },
                { optionText: "Prefix of the string", optionTag: "B" },
                { optionText: "Whole string", optionTag: "C" },
                { optionText: "Empty string", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Suffix trees are mostly used in?",
            options: [
                { optionText: "Bioinformatics and string matching", optionTag: "A" },
                { optionText: "Sorting integers", optionTag: "B" },
                { optionText: "Graphics", optionTag: "C" },
                { optionText: "Binary search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is the root of a suffix tree?",
            options: [
                { optionText: "Empty string node", optionTag: "A" },
                { optionText: "First character", optionTag: "B" },
                { optionText: "Last character", optionTag: "C" },
                { optionText: "Middle character", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many suffixes does a string of length n have?",
            options: [
                { optionText: "n", optionTag: "A" },
                { optionText: "n-1", optionTag: "B" },
                { optionText: "n+1", optionTag: "C" },
                { optionText: "n/2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the time complexity to build a suffix array using naive method?",
            options: [
                { optionText: "O(n^2 log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is true about suffix trees vs tries?",
            options: [
                { optionText: "Suffix tree is a compressed form of trie", optionTag: "A" },
                { optionText: "Suffix tree stores prefixes", optionTag: "B" },
                { optionText: "Trie is faster than suffix tree", optionTag: "C" },
                { optionText: "They are the same", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What can suffix arrays replace?",
            options: [
                { optionText: "Suffix trees for pattern matching", optionTag: "A" },
                { optionText: "Binary trees", optionTag: "B" },
                { optionText: "Graphs", optionTag: "C" },
                { optionText: "Queues", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method returns the index of a substring?",
            options: [
                { optionText: "indexOf()", optionTag: "A" },
                { optionText: "includes()", optionTag: "B" },
                { optionText: "match()", optionTag: "C" },
                { optionText: "slice()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the use of sentinel character in suffix trees?",
            options: [
                { optionText: "To mark end of string", optionTag: "A" },
                { optionText: "To add delay", optionTag: "B" },
                { optionText: "To shorten suffix", optionTag: "C" },
                { optionText: "To add prefix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Suffix array is typically stored as?",
            options: [
                { optionText: "Array of indices", optionTag: "A" },
                { optionText: "Array of strings", optionTag: "B" },
                { optionText: "Array of booleans", optionTag: "C" },
                { optionText: "Array of trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is required to construct suffix array in JS?",
            options: [
                { optionText: "Sort suffixes with original indices", optionTag: "A" },
                { optionText: "Reverse suffixes", optionTag: "B" },
                { optionText: "Randomize suffixes", optionTag: "C" },
                { optionText: "Encode suffixes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Does suffix tree support linear construction time?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only for binary strings", optionTag: "C" },
                { optionText: "Only for strings > 100", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can suffix arrays be used to find the longest repeated substring?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only with trie", optionTag: "C" },
                { optionText: "Only in sorted arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these helps reduce suffix tree memory usage?",
            options: [
                { optionText: "Ukkonen’s algorithm", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Heapification", optionTag: "C" },
                { optionText: "Array sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is suffix array faster than brute-force matching?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Same", optionTag: "C" },
                { optionText: "Only on long strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
