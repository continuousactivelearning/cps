import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Tries - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Trie data structures in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Tries"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a Trie?",
            options: [
                { optionText: "A tree-like data structure for storing strings", optionTag: "A" },
                { optionText: "A sorting algorithm", optionTag: "B" },
                { optionText: "A binary heap", optionTag: "C" },
                { optionText: "A dynamic array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main use of a Trie?",
            options: [
                { optionText: "Efficient prefix-based search", optionTag: "A" },
                { optionText: "Sorting integers", optionTag: "B" },
                { optionText: "Reversing strings", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following operations is fast in a Trie?",
            options: [
                { optionText: "Search", optionTag: "A" },
                { optionText: "Insert", optionTag: "B" },
                { optionText: "Prefix matching", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the time complexity of inserting a word of length L into a Trie?",
            options: [
                { optionText: "O(L)", optionTag: "A" },
                { optionText: "O(log L)", optionTag: "B" },
                { optionText: "O(L^2)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many children can a node in a standard Trie have (assuming lowercase a-z)?",
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
            questionText: "What does each node in a Trie typically store?",
            options: [
                { optionText: "Character and pointer to children", optionTag: "A" },
                { optionText: "Only a character", optionTag: "B" },
                { optionText: "Only a pointer", optionTag: "C" },
                { optionText: "Complete word", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is used to indicate the end of a word in a Trie?",
            options: [
                { optionText: "Boolean flag", optionTag: "A" },
                { optionText: "Special character", optionTag: "B" },
                { optionText: "NULL pointer", optionTag: "C" },
                { optionText: "Leaf node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a Trie, which case is more space-efficient?",
            options: [
                { optionText: "Many words with common prefixes", optionTag: "A" },
                { optionText: "Words with no common prefix", optionTag: "B" },
                { optionText: "Single character words", optionTag: "C" },
                { optionText: "Long unique words", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is easiest to perform using a Trie?",
            options: [
                { optionText: "Prefix search", optionTag: "A" },
                { optionText: "Delete in O(1)", optionTag: "B" },
                { optionText: "Find max element", optionTag: "C" },
                { optionText: "Sort array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main disadvantage of a Trie?",
            options: [
                { optionText: "High memory usage", optionTag: "A" },
                { optionText: "Slow search", optionTag: "B" },
                { optionText: "Not dynamic", optionTag: "C" },
                { optionText: "Limited to integers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which standard library container can be used to represent Trie children?",
            options: [
                { optionText: "unordered_map", optionTag: "A" },
                { optionText: "vector", optionTag: "B" },
                { optionText: "list", optionTag: "C" },
                { optionText: "queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the root node of a Trie typically initialized with?",
            options: [
                { optionText: "Empty character or dummy node", optionTag: "A" },
                { optionText: "First letter of first word", optionTag: "B" },
                { optionText: "NULL", optionTag: "C" },
                { optionText: "Space character", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a real-life application of Tries?",
            options: [
                { optionText: "Autocomplete systems", optionTag: "A" },
                { optionText: "Dijkstra’s algorithm", optionTag: "B" },
                { optionText: "Graph coloring", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Trie be used to implement a dictionary?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only with hash tables", optionTag: "C" },
                { optionText: "Only with BST", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you delete a word from a Trie?",
            options: [
                { optionText: "Mark end node's flag as false and remove unused nodes", optionTag: "A" },
                { optionText: "Set all children to NULL", optionTag: "B" },
                { optionText: "Delete entire branch", optionTag: "C" },
                { optionText: "Cannot delete from Trie", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is typically used to print all words in a Trie?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Level order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition should be checked before inserting a word into a Trie?",
            options: [
                { optionText: "If it already exists", optionTag: "A" },
                { optionText: "If it’s the longest", optionTag: "B" },
                { optionText: "If it's sorted", optionTag: "C" },
                { optionText: "If it’s a number", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following best describes a compressed Trie?",
            options: [
                { optionText: "A Trie where chains of single children are merged", optionTag: "A" },
                { optionText: "A Trie using a hash table", optionTag: "B" },
                { optionText: "A Trie where only vowels are stored", optionTag: "C" },
                { optionText: "A Trie where only prefixes are stored", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does a Trie differ from a Binary Search Tree?",
            options: [
                { optionText: "Tries use characters, BSTs use comparisons", optionTag: "A" },
                { optionText: "BSTs are faster in prefix search", optionTag: "B" },
                { optionText: "Tries use stacks", optionTag: "C" },
                { optionText: "BSTs cannot be recursive", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT an advantage of using a Trie?",
            options: [
                { optionText: "Efficient prefix search", optionTag: "A" },
                { optionText: "Fast insertion", optionTag: "B" },
                { optionText: "Space-efficient for large sets of strings", optionTag: "C" },
                { optionText: "Can store non-string data directly", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        }
    ]
};

export default quizData;
