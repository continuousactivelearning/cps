// src/data/java/beginner/tries.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Tries - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz assesses your foundational knowledge of Tries (Prefix Trees) in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Tries"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a Trie used for?",
            options: [
                { optionText: "Efficient string prefix searching", optionTag: "A" },
                { optionText: "Sorting integers", optionTag: "B" },
                { optionText: "Binary arithmetic", optionTag: "C" },
                { optionText: "Dynamic programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Each edge in a Trie represents:",
            options: [
                { optionText: "A character", optionTag: "A" },
                { optionText: "A string", optionTag: "B" },
                { optionText: "A word", optionTag: "C" },
                { optionText: "A node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a node in a Trie typically store?",
            options: [
                { optionText: "Character and children", optionTag: "A" },
                { optionText: "Word frequency", optionTag: "B" },
                { optionText: "Entire word", optionTag: "C" },
                { optionText: "Only index", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of inserting a word of length n in a Trie?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the end-of-word marker represent in a Trie?",
            options: [
                { optionText: "Word termination", optionTag: "A" },
                { optionText: "Branch end", optionTag: "B" },
                { optionText: "Unused space", optionTag: "C" },
                { optionText: "Node deletion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case space complexity of a Trie storing n words of length m?",
            options: [
                { optionText: "O(n*m)", optionTag: "A" },
                { optionText: "O(log m)", optionTag: "B" },
                { optionText: "O(m)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Tries are most useful in which application?",
            options: [
                { optionText: "Autocomplete", optionTag: "A" },
                { optionText: "Heap sorting", optionTag: "B" },
                { optionText: "Graph traversal", optionTag: "C" },
                { optionText: "Matrix multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a Trie, how many children can each node have (assuming lowercase English)?",
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
            questionText: "What type of tree is a Trie?",
            options: [
                { optionText: "Prefix tree", optionTag: "A" },
                { optionText: "Binary tree", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Segment tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java class is best suited for Trie node children?",
            options: [
                { optionText: "HashMap<Character, TrieNode>", optionTag: "A" },
                { optionText: "ArrayList<Integer>", optionTag: "B" },
                { optionText: "LinkedList<TrieNode>", optionTag: "C" },
                { optionText: "Stack<TrieNode>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main drawback of Tries?",
            options: [
                { optionText: "High memory usage", optionTag: "A" },
                { optionText: "Slow search", optionTag: "B" },
                { optionText: "Unbalanced structure", optionTag: "C" },
                { optionText: "Does not support prefixes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can a Trie support deletion of a word?",
            options: [
                { optionText: "Yes, with backtracking", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if it's a prefix", optionTag: "C" },
                { optionText: "Only if it’s the last word", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true for a Trie storing 'cat' and 'car'?",
            options: [
                { optionText: "'ca' will share the same path", optionTag: "A" },
                { optionText: "Each word uses separate nodes", optionTag: "B" },
                { optionText: "'c' will have two children", optionTag: "C" },
                { optionText: "Only one of them can be stored", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the advantage of Trie over HashMap for prefix search?",
            options: [
                { optionText: "Prefix search is faster", optionTag: "A" },
                { optionText: "Less memory", optionTag: "B" },
                { optionText: "Simpler to implement", optionTag: "C" },
                { optionText: "Supports deletion easily", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the depth of Trie for a string of length n?",
            options: [
                { optionText: "n", optionTag: "A" },
                { optionText: "log n", optionTag: "B" },
                { optionText: "n^2", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to mark the end of a word in a Trie?",
            options: [
                { optionText: "Use a boolean flag", optionTag: "A" },
                { optionText: "Set node value to null", optionTag: "B" },
                { optionText: "Remove node", optionTag: "C" },
                { optionText: "Use count = 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data type helps reduce memory in Tries?",
            options: [
                { optionText: "HashMap", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "List", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method finds if a prefix exists in Trie?",
            options: [
                { optionText: "startsWith()", optionTag: "A" },
                { optionText: "findPrefix()", optionTag: "B" },
                { optionText: "hasWord()", optionTag: "C" },
                { optionText: "prefixOf()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Tries are best suited for:",
            options: [
                { optionText: "Dictionary and autocomplete apps", optionTag: "A" },
                { optionText: "Heap sort", optionTag: "B" },
                { optionText: "Priority queues", optionTag: "C" },
                { optionText: "Stack operations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node in Trie has no children?",
            options: [
                { optionText: "Leaf node", optionTag: "A" },
                { optionText: "Root node", optionTag: "B" },
                { optionText: "Internal node", optionTag: "C" },
                { optionText: "Middle node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;