import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Tries - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate understanding of Trie data structures in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Tries"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary use of a Trie data structure?",
            options: [
                { optionText: "Storing strings for efficient search", optionTag: "A" },
                { optionText: "Sorting integers", optionTag: "B" },
                { optionText: "Heap operations", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity to search for a key in a Trie with k characters?",
            options: [
                { optionText: "O(k)", optionTag: "A" },
                { optionText: "O(log k)", optionTag: "B" },
                { optionText: "O(k log k)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does each node in a Trie typically represent?",
            options: [
                { optionText: "A character of a string", optionTag: "A" },
                { optionText: "An entire string", optionTag: "B" },
                { optionText: "An integer", optionTag: "C" },
                { optionText: "A word index", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition is used to mark the end of a word in Trie?",
            options: [
                { optionText: "A boolean endOfWord flag", optionTag: "A" },
                { optionText: "A null pointer", optionTag: "B" },
                { optionText: "An integer counter", optionTag: "C" },
                { optionText: "Parent node link", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many children can each Trie node have for lowercase English alphabets?",
            options: [
                { optionText: "26", optionTag: "A" },
                { optionText: "10", optionTag: "B" },
                { optionText: "52", optionTag: "C" },
                { optionText: "2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is best suited for auto-complete features?",
            options: [
                { optionText: "Trie", optionTag: "A" },
                { optionText: "BST", optionTag: "B" },
                { optionText: "Hash table", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of a Trie storing n strings each of length m?",
            options: [
                { optionText: "O(n * m)", optionTag: "A" },
                { optionText: "O(n + m)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(m)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when you insert duplicate strings in a Trie?",
            options: [
                { optionText: "Only the end node is reused", optionTag: "A" },
                { optionText: "Duplicates are overwritten", optionTag: "B" },
                { optionText: "Memory error occurs", optionTag: "C" },
                { optionText: "Tree is rebalanced", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is true about a compressed Trie (Patricia Trie)?",
            options: [
                { optionText: "It compresses paths with a single child", optionTag: "A" },
                { optionText: "It duplicates every string", optionTag: "B" },
                { optionText: "It replaces Trie with array", optionTag: "C" },
                { optionText: "It stores integers only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used to print all words in a Trie?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition indicates a prefix match in Trie?",
            options: [
                { optionText: "All prefix characters are found in a path", optionTag: "A" },
                { optionText: "End of word is found", optionTag: "B" },
                { optionText: "All children are null", optionTag: "C" },
                { optionText: "Path is from root to leaf", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL structure is best suited to store Trie children?",
            options: [
                { optionText: "unordered_map<char, TrieNode*>", optionTag: "A" },
                { optionText: "vector<int>", optionTag: "B" },
                { optionText: "deque<char>", optionTag: "C" },
                { optionText: "set<char>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is Trie better than hashing for prefix matching?",
            options: [
                { optionText: "Supports ordered traversal and prefix search", optionTag: "A" },
                { optionText: "Faster than hash in all cases", optionTag: "B" },
                { optionText: "Needs no memory", optionTag: "C" },
                { optionText: "Supports dynamic programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a major disadvantage of Trie?",
            options: [
                { optionText: "High memory usage", optionTag: "A" },
                { optionText: "Slow insertions", optionTag: "B" },
                { optionText: "Limited to integers", optionTag: "C" },
                { optionText: "No prefix search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many strings of length L can exist in a Trie with only lowercase English letters?",
            options: [
                { optionText: "26^L", optionTag: "A" },
                { optionText: "L!", optionTag: "B" },
                { optionText: "L^26", optionTag: "C" },
                { optionText: "26L", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens during deletion of a word in Trie?",
            options: [
                { optionText: "Remove endOfWord flag and prune nodes", optionTag: "A" },
                { optionText: "Delete entire tree", optionTag: "B" },
                { optionText: "Clear memory", optionTag: "C" },
                { optionText: "Insert null character", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which field in TrieNode is used for storing multiple characters?",
            options: [
                { optionText: "Children array or map", optionTag: "A" },
                { optionText: "Single char pointer", optionTag: "B" },
                { optionText: "Parent reference", optionTag: "C" },
                { optionText: "Prefix count", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm often uses Trie for dictionary lookups?",
            options: [
                { optionText: "Autocomplete and Spell Checker", optionTag: "A" },
                { optionText: "Kruskal's MST", optionTag: "B" },
                { optionText: "Dijkstra's", optionTag: "C" },
                { optionText: "Topological Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does Trie support efficiently apart from insertion and search?",
            options: [
                { optionText: "Prefix search", optionTag: "A" },
                { optionText: "Sorting", optionTag: "B" },
                { optionText: "Hashing", optionTag: "C" },
                { optionText: "Heapify", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Trie avoid duplicate storage of common prefixes?",
            options: [
                { optionText: "Shares common prefix nodes", optionTag: "A" },
                { optionText: "Stores prefixes separately", optionTag: "B" },
                { optionText: "Overwrites them", optionTag: "C" },
                { optionText: "Ignores prefix reuse", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
