import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Tries - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced understanding of Trie data structures in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Tries"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the typical use case of a Trie data structure?",
            options: [
                { optionText: "Efficient string matching and prefix searching", optionTag: "A" },
                { optionText: "Binary search operations", optionTag: "B" },
                { optionText: "Dynamic memory allocation", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of inserting a string of length L into a Trie?",
            options: [
                { optionText: "O(L)", optionTag: "A" },
                { optionText: "O(log L)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(L^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node in a Trie represents the end of a word?",
            options: [
                { optionText: "Node with isEndOfWord = true", optionTag: "A" },
                { optionText: "Root node", optionTag: "B" },
                { optionText: "First inserted node", optionTag: "C" },
                { optionText: "Leaf node always", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many children can a node in a standard Trie for lowercase English letters have?",
            options: [
                { optionText: "26", optionTag: "A" },
                { optionText: "10", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "Infinite", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is more efficient in a Trie than in a Hash Table?",
            options: [
                { optionText: "Prefix search", optionTag: "A" },
                { optionText: "Key insertion", optionTag: "B" },
                { optionText: "Exact match search", optionTag: "C" },
                { optionText: "Deletion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of a Trie storing N strings with average length L?",
            options: [
                { optionText: "O(N * L)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(L)", optionTag: "C" },
                { optionText: "O(N log L)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the advantage of a compressed Trie (Radix Tree)?",
            options: [
                { optionText: "Reduces space by merging common paths", optionTag: "A" },
                { optionText: "Faster than standard Trie for all cases", optionTag: "B" },
                { optionText: "Uses no pointers", optionTag: "C" },
                { optionText: "Does not store any strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is typically used for printing all words in a Trie?",
            options: [
                { optionText: "Depth-first traversal", optionTag: "A" },
                { optionText: "Breadth-first traversal", optionTag: "B" },
                { optionText: "Level order traversal", optionTag: "C" },
                { optionText: "Postorder traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a Trie node usually implemented in C++?",
            options: [
                { optionText: "As a class with a map/array of child nodes and a flag", optionTag: "A" },
                { optionText: "As a struct with pointers to all parents", optionTag: "B" },
                { optionText: "Using only arrays of characters", optionTag: "C" },
                { optionText: "Using STL queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is not a Trie variant?",
            options: [
                { optionText: "Skip List", optionTag: "A" },
                { optionText: "Ternary Search Tree", optionTag: "B" },
                { optionText: "Compressed Trie", optionTag: "C" },
                { optionText: "Suffix Trie", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can Trie be optimized for memory usage?",
            options: [
                { optionText: "Using unordered_map instead of fixed array for children", optionTag: "A" },
                { optionText: "Storing all strings in a vector", optionTag: "B" },
                { optionText: "Using linked list for children", optionTag: "C" },
                { optionText: "Converting Trie to stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a major drawback of Tries?",
            options: [
                { optionText: "High memory usage", optionTag: "A" },
                { optionText: "High time complexity", optionTag: "B" },
                { optionText: "Slow insertion", optionTag: "C" },
                { optionText: "Lack of support for characters", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of search does Trie perform for matching prefixes?",
            options: [
                { optionText: "Character-by-character traversal", optionTag: "A" },
                { optionText: "Hash lookup", optionTag: "B" },
                { optionText: "Binary search", optionTag: "C" },
                { optionText: "Jump table indexing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which application commonly uses Tries?",
            options: [
                { optionText: "Auto-complete feature", optionTag: "A" },
                { optionText: "Sorting numbers", optionTag: "B" },
                { optionText: "Counting sort", optionTag: "C" },
                { optionText: "Matrix multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which variant of Trie is useful for IP routing?",
            options: [
                { optionText: "Patricia Trie", optionTag: "A" },
                { optionText: "Suffix Trie", optionTag: "B" },
                { optionText: "Binary Trie", optionTag: "C" },
                { optionText: "Balanced BST", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is deletion handled in a Trie?",
            options: [
                { optionText: "Unmark end flag and delete node if no children", optionTag: "A" },
                { optionText: "Only remove the characters", optionTag: "B" },
                { optionText: "Set node value to null", optionTag: "C" },
                { optionText: "Assign -1 to node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Trie improve over HashMap for word-based prefix problems?",
            options: [
                { optionText: "Supports prefix matching efficiently", optionTag: "A" },
                { optionText: "Faster insertions", optionTag: "B" },
                { optionText: "Less memory", optionTag: "C" },
                { optionText: "Supports random access", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which structure helps in solving Longest Prefix Match problems?",
            options: [
                { optionText: "Trie", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Min Heap", optionTag: "C" },
                { optionText: "HashSet", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Trie variant allows faster string matching using suffixes?",
            options: [
                { optionText: "Suffix Trie", optionTag: "A" },
                { optionText: "Binary Trie", optionTag: "B" },
                { optionText: "Prefix Tree", optionTag: "C" },
                { optionText: "Map Trie", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is best solved using Trie?",
            options: [
                { optionText: "Word Search with Prefixes", optionTag: "A" },
                { optionText: "Prim’s MST", optionTag: "B" },
                { optionText: "Bellman-Ford Shortest Path", optionTag: "C" },
                { optionText: "Floyd-Warshall All-Pairs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
