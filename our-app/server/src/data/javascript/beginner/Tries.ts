import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Tries - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic understanding of Trie (Prefix Tree) data structures in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Tries"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a Trie primarily used for?",
            options: [
                { optionText: "Efficient retrieval of strings", optionTag: "A" },
                { optionText: "Sorting numbers", optionTag: "B" },
                { optionText: "Implementing stacks", optionTag: "C" },
                { optionText: "Reversing arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does each node in a Trie typically represent?",
            options: [
                { optionText: "A character", optionTag: "A" },
                { optionText: "A word", optionTag: "B" },
                { optionText: "A number", optionTag: "C" },
                { optionText: "A sentence", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the root node of a Trie?",
            options: [
                { optionText: "An empty character or special marker", optionTag: "A" },
                { optionText: "The first word inserted", optionTag: "B" },
                { optionText: "The longest word", optionTag: "C" },
                { optionText: "The most frequent word", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are children of each node in a Trie usually stored?",
            options: [
                { optionText: "Using an object or a map", optionTag: "A" },
                { optionText: "Using a single string", optionTag: "B" },
                { optionText: "Using a stack", optionTag: "C" },
                { optionText: "Using a queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity to search a word in a Trie?",
            options: [
                { optionText: "O(L), where L is the length of the word", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What symbol is commonly used to mark the end of a word in a Trie?",
            options: [
                { optionText: "A boolean flag", optionTag: "A" },
                { optionText: "#", optionTag: "B" },
                { optionText: "$", optionTag: "C" },
                { optionText: "*", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about Tries?",
            options: [
                { optionText: "They do not store duplicate strings", optionTag: "A" },
                { optionText: "They are used to store numbers", optionTag: "B" },
                { optionText: "They are used to implement arrays", optionTag: "C" },
                { optionText: "They are implemented using stacks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is an application of Trie?",
            options: [
                { optionText: "Autocomplete", optionTag: "A" },
                { optionText: "Bubble sort", optionTag: "B" },
                { optionText: "Queue simulation", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is the advantage of Trie over HashMap?",
            options: [
                { optionText: "Faster prefix-based search", optionTag: "A" },
                { optionText: "Faster random access", optionTag: "B" },
                { optionText: "Lower memory usage", optionTag: "C" },
                { optionText: "Supports numeric data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a Trie, how many children can each node have in a lowercase English alphabet Trie?",
            options: [
                { optionText: "26", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "10", optionTag: "C" },
                { optionText: "Unlimited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to insert a word in a Trie?",
            options: [
                { optionText: "insert()", optionTag: "A" },
                { optionText: "push()", optionTag: "B" },
                { optionText: "append()", optionTag: "C" },
                { optionText: "addWord()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to check if a word exists in a Trie?",
            options: [
                { optionText: "search()", optionTag: "A" },
                { optionText: "contains()", optionTag: "B" },
                { optionText: "find()", optionTag: "C" },
                { optionText: "exists()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you delete a word from a Trie?",
            options: [
                { optionText: "By removing nodes if no longer needed", optionTag: "A" },
                { optionText: "Using pop()", optionTag: "B" },
                { optionText: "Clearing all nodes", optionTag: "C" },
                { optionText: "Setting root to null", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Tries are also known as:",
            options: [
                { optionText: "Prefix Trees", optionTag: "A" },
                { optionText: "Binary Trees", optionTag: "B" },
                { optionText: "Suffix Trees", optionTag: "C" },
                { optionText: "Heap Trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a Trie node contain besides children?",
            options: [
                { optionText: "A flag for end of word", optionTag: "A" },
                { optionText: "Node depth", optionTag: "B" },
                { optionText: "Parent pointer", optionTag: "C" },
                { optionText: "A unique ID", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a use case of Trie?",
            options: [
                { optionText: "Sorting arrays", optionTag: "A" },
                { optionText: "Spell checker", optionTag: "B" },
                { optionText: "Autocomplete", optionTag: "C" },
                { optionText: "Prefix matching", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript data type is ideal for implementing Trie children?",
            options: [
                { optionText: "Object or Map", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "String", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Trie improve search compared to a list of strings?",
            options: [
                { optionText: "Search time is proportional to string length", optionTag: "A" },
                { optionText: "Search is constant time", optionTag: "B" },
                { optionText: "Search is not possible", optionTag: "C" },
                { optionText: "Only works with numbers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition is checked while inserting a word?",
            options: [
                { optionText: "If current character node exists", optionTag: "A" },
                { optionText: "If word ends with a vowel", optionTag: "B" },
                { optionText: "If all characters are uppercase", optionTag: "C" },
                { optionText: "If word length > 5", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which company uses Trie for search optimization?",
            options: [
                { optionText: "Google", optionTag: "A" },
                { optionText: "Netflix", optionTag: "B" },
                { optionText: "Spotify", optionTag: "C" },
                { optionText: "Instagram", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
