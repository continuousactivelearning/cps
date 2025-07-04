import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Suffix Arrays & Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced understanding of Suffix Arrays and Suffix Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SuffixArraysTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of building a suffix array using the doubling algorithm?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is commonly used to build a suffix array in linear time?",
            options: [
                { optionText: "Skew Algorithm", optionTag: "A" },
                { optionText: "Z-Algorithm", optionTag: "B" },
                { optionText: "Manacher’s Algorithm", optionTag: "C" },
                { optionText: "Rabin-Karp", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a suffix array store?",
            options: [
                { optionText: "Starting indices of sorted suffixes", optionTag: "A" },
                { optionText: "End indices of sorted prefixes", optionTag: "B" },
                { optionText: "Substrings of the string", optionTag: "C" },
                { optionText: "Hash values of substrings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which structure stores all suffixes in a compressed trie form?",
            options: [
                { optionText: "Suffix Tree", optionTag: "A" },
                { optionText: "Suffix Array", optionTag: "B" },
                { optionText: "Trie", optionTag: "C" },
                { optionText: "LCP Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the auxiliary array used along with a suffix array to store LCP info?",
            options: [
                { optionText: "LCP Array", optionTag: "A" },
                { optionText: "RMQ Array", optionTag: "B" },
                { optionText: "Z Array", optionTag: "C" },
                { optionText: "KMP Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation can be efficiently done with suffix arrays and LCP arrays combined?",
            options: [
                { optionText: "Count distinct substrings", optionTag: "A" },
                { optionText: "Compute Z-values", optionTag: "B" },
                { optionText: "Find LPS", optionTag: "C" },
                { optionText: "Check palindrome", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm builds a suffix tree in linear time?",
            options: [
                { optionText: "Ukkonen's Algorithm", optionTag: "A" },
                { optionText: "Manacher’s Algorithm", optionTag: "B" },
                { optionText: "Z-Algorithm", optionTag: "C" },
                { optionText: "Rabin-Karp", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of a suffix tree for string of length n?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which suffix array construction uses radix sort for efficient sorting?",
            options: [
                { optionText: "Doubling + Radix Sort", optionTag: "A" },
                { optionText: "Z-Algorithm", optionTag: "B" },
                { optionText: "Manacher’s Algorithm", optionTag: "C" },
                { optionText: "DFS Traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is NOT efficiently supported by suffix trees?",
            options: [
                { optionText: "Insert/Delete characters", optionTag: "A" },
                { optionText: "Longest repeated substring", optionTag: "B" },
                { optionText: "Pattern matching", optionTag: "C" },
                { optionText: "Suffix search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure can be used to answer LCP queries in constant time?",
            options: [
                { optionText: "RMQ over LCP Array", optionTag: "A" },
                { optionText: "Trie", optionTag: "B" },
                { optionText: "Segment Tree", optionTag: "C" },
                { optionText: "Hash Table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main difference between a trie and a suffix tree?",
            options: [
                { optionText: "Suffix tree is compressed", optionTag: "A" },
                { optionText: "Trie uses more space", optionTag: "B" },
                { optionText: "Trie stores only prefixes", optionTag: "C" },
                { optionText: "Trie cannot store strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are suffix trees helpful in solving LCS (Longest Common Substring)?",
            options: [
                { optionText: "By building generalized suffix tree", optionTag: "A" },
                { optionText: "Using rolling hashes", optionTag: "B" },
                { optionText: "Binary search on strings", optionTag: "C" },
                { optionText: "Using prefix sum arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a suffix array, what does the position of the i-th element indicate?",
            options: [
                { optionText: "Starting index of i-th smallest suffix", optionTag: "A" },
                { optionText: "Index of the i-th character", optionTag: "B" },
                { optionText: "Ending index of prefix", optionTag: "C" },
                { optionText: "LCP value at i", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which application benefits from suffix trees the most?",
            options: [
                { optionText: "Fast pattern matching", optionTag: "A" },
                { optionText: "Sorting integers", optionTag: "B" },
                { optionText: "Prime generation", optionTag: "C" },
                { optionText: "Matrix multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique is often used with suffix arrays to solve substring problems?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Depth-First Search", optionTag: "B" },
                { optionText: "Breadth-First Search", optionTag: "C" },
                { optionText: "Topological Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a suffix tree, what do internal nodes represent?",
            options: [
                { optionText: "Common prefixes of suffixes", optionTag: "A" },
                { optionText: "Single characters", optionTag: "B" },
                { optionText: "Hash values", optionTag: "C" },
                { optionText: "Suffix array indices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is best for string matching in DNA sequences?",
            options: [
                { optionText: "Suffix Trees", optionTag: "A" },
                { optionText: "Rolling Hashes", optionTag: "B" },
                { optionText: "Hash Table", optionTag: "C" },
                { optionText: "Z Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT true for suffix trees?",
            options: [
                { optionText: "They require suffix links for efficiency", optionTag: "A" },
                { optionText: "They are compressed trie structures", optionTag: "B" },
                { optionText: "They use O(n log n) space", optionTag: "C" },
                { optionText: "They can find substring in O(m) time", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of searching for a pattern in a suffix tree?",
            options: [
                { optionText: "O(m)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(m log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
