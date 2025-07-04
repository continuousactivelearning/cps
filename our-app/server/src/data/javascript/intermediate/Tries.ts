import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Tries - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz evaluates your intermediate understanding of Tries in JavaScript, including construction, search, insertion, and common use cases.",
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
                { optionText: "A binary search tree", optionTag: "B" },
                { optionText: "A type of queue", optionTag: "C" },
                { optionText: "A graph-based algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of inserting a word of length `L` into a Trie?",
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
            questionText: "Which of the following is a common use case of Tries?",
            options: [
                { optionText: "Autocomplete", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Dijkstra’s algorithm", optionTag: "C" },
                { optionText: "Infix expression evaluation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Each node in a Trie typically contains:",
            options: [
                { optionText: "A map of children and a boolean for end of word", optionTag: "A" },
                { optionText: "Only a value", optionTag: "B" },
                { optionText: "An index to string", optionTag: "C" },
                { optionText: "Parent pointer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the root node of a Trie usually initialized?",
            options: [
                { optionText: "With an empty character and empty children", optionTag: "A" },
                { optionText: "With the first word", optionTag: "B" },
                { optionText: "With null", optionTag: "C" },
                { optionText: "With the longest prefix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript object is best suited for mapping characters in a Trie?",
            options: [
                { optionText: "Map", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Object", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a Trie, how is the end of a valid word marked?",
            options: [
                { optionText: "With a boolean flag", optionTag: "A" },
                { optionText: "By deleting the node", optionTag: "B" },
                { optionText: "Using null pointer", optionTag: "C" },
                { optionText: "With an index", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of a Trie in the worst case?",
            options: [
                { optionText: "O(n * L)", optionTag: "A" },
                { optionText: "O(n + L)", optionTag: "B" },
                { optionText: "O(L)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if two strings share a common prefix in a Trie?",
            options: [
                { optionText: "They share the same initial nodes", optionTag: "A" },
                { optionText: "They are stored in separate trees", optionTag: "B" },
                { optionText: "Second string overwrites first", optionTag: "C" },
                { optionText: "An error occurs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is not efficiently supported by Tries?",
            options: [
                { optionText: "Finding the longest prefix match", optionTag: "A" },
                { optionText: "String search", optionTag: "B" },
                { optionText: "Reversing a string", optionTag: "C" },
                { optionText: "Autocomplete", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "How does Trie improve search time compared to linear search in a list?",
            options: [
                { optionText: "Searches character-by-character with O(L) complexity", optionTag: "A" },
                { optionText: "Searches word-by-word with O(n) complexity", optionTag: "B" },
                { optionText: "Doesn't improve at all", optionTag: "C" },
                { optionText: "Uses binary search tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is one drawback of using Tries?",
            options: [
                { optionText: "High memory usage", optionTag: "A" },
                { optionText: "Slow insertion", optionTag: "B" },
                { optionText: "Can’t handle strings", optionTag: "C" },
                { optionText: "Unordered traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation on a Trie can return all words with a given prefix?",
            options: [
                { optionText: "Prefix search", optionTag: "A" },
                { optionText: "In-order traversal", optionTag: "B" },
                { optionText: "Postfix search", optionTag: "C" },
                { optionText: "Depth-first deletion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following can be implemented using a Trie?",
            options: [
                { optionText: "Spell checker", optionTag: "A" },
                { optionText: "Bubble sort", optionTag: "B" },
                { optionText: "Binary search", optionTag: "C" },
                { optionText: "Heap sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property is not true about Tries?",
            options: [
                { optionText: "They store characters as levels", optionTag: "A" },
                { optionText: "They can represent the whole dictionary", optionTag: "B" },
                { optionText: "They sort keys automatically", optionTag: "C" },
                { optionText: "They perform better with fewer keys", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Can Tries be used for pattern matching with wildcards?",
            options: [
                { optionText: "Yes, with modifications", optionTag: "A" },
                { optionText: "No, never", optionTag: "B" },
                { optionText: "Only for fixed length patterns", optionTag: "C" },
                { optionText: "Only for numeric data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is usually compared with Tries for storing strings?",
            options: [
                { optionText: "HashMap", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What would be the result of searching a non-existent word in a Trie?",
            options: [
                { optionText: "Traversal stops early", optionTag: "A" },
                { optionText: "Returns random result", optionTag: "B" },
                { optionText: "Deletes a node", optionTag: "C" },
                { optionText: "Inserts the word", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is usually used to collect all words from a Trie?",
            options: [
                { optionText: "Depth-first search", optionTag: "A" },
                { optionText: "Breadth-first search", optionTag: "B" },
                { optionText: "Level-order traversal", optionTag: "C" },
                { optionText: "Binary traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Tries support which kind of search better than HashMaps?",
            options: [
                { optionText: "Prefix search", optionTag: "A" },
                { optionText: "Exact search only", optionTag: "B" },
                { optionText: "Case-insensitive search", optionTag: "C" },
                { optionText: "Numeric range queries", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
