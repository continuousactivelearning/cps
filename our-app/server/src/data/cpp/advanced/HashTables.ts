import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Hash Tables - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced understanding of Hash Tables in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "HashTables"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following is a good hash function property?",
            options: [
                { optionText: "Uniform distribution of keys", optionTag: "A" },
                { optionText: "Clustered values", optionTag: "B" },
                { optionText: "Same output for all inputs", optionTag: "C" },
                { optionText: "Predictable collisions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique resolves collisions using a secondary hash function?",
            options: [
                { optionText: "Double hashing", optionTag: "A" },
                { optionText: "Chaining", optionTag: "B" },
                { optionText: "Open addressing", optionTag: "C" },
                { optionText: "Linear probing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which STL container in C++ is implemented using hash tables?",
            options: [
                { optionText: "unordered_map", optionTag: "A" },
                { optionText: "map", optionTag: "B" },
                { optionText: "vector", optionTag: "C" },
                { optionText: "set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In linear probing, what happens when a collision occurs?",
            options: [
                { optionText: "Next sequential slot is tried", optionTag: "A" },
                { optionText: "A linked list is used", optionTag: "B" },
                { optionText: "Rehashing is done", optionTag: "C" },
                { optionText: "Search is aborted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a collision resolution technique?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Linear Probing", optionTag: "B" },
                { optionText: "Chaining", optionTag: "C" },
                { optionText: "Double Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the average-case time complexity of searching in a hash table?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which load factor indicates the table is about to be resized?",
            options: [
                { optionText: "> 0.75", optionTag: "A" },
                { optionText: "< 0.5", optionTag: "B" },
                { optionText: "0.2", optionTag: "C" },
                { optionText: "1.5", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the primary advantage of chaining over open addressing?",
            options: [
                { optionText: "Handles collisions better with less clustering", optionTag: "A" },
                { optionText: "Faster insertion", optionTag: "B" },
                { optionText: "Lower memory usage", optionTag: "C" },
                { optionText: "Constant time deletion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a drawback of open addressing?",
            options: [
                { optionText: "Primary clustering", optionTag: "A" },
                { optionText: "Space overhead", optionTag: "B" },
                { optionText: "Slow iteration", optionTag: "C" },
                { optionText: "Requires extra structures", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which hashing technique is ideal for integer keys?",
            options: [
                { optionText: "Modulo division", optionTag: "A" },
                { optionText: "Folding method", optionTag: "B" },
                { optionText: "Multiplicative hashing", optionTag: "C" },
                { optionText: "Mid-square", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which hashing method can lead to primary clustering?",
            options: [
                { optionText: "Linear probing", optionTag: "A" },
                { optionText: "Chaining", optionTag: "B" },
                { optionText: "Double hashing", optionTag: "C" },
                { optionText: "Quadratic probing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which STL container ensures unique keys and uses a hash table?",
            options: [
                { optionText: "unordered_set", optionTag: "A" },
                { optionText: "unordered_multiset", optionTag: "B" },
                { optionText: "unordered_multimap", optionTag: "C" },
                { optionText: "set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main disadvantage of using a poor hash function?",
            options: [
                { optionText: "Increased collisions", optionTag: "A" },
                { optionText: "High memory usage", optionTag: "B" },
                { optionText: "Slower compilation", optionTag: "C" },
                { optionText: "Bad syntax", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens during rehashing?",
            options: [
                { optionText: "Table is resized and all elements are reinserted", optionTag: "A" },
                { optionText: "New elements are ignored", optionTag: "B" },
                { optionText: "Keys are sorted", optionTag: "C" },
                { optionText: "All elements are deleted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which collision resolution method uses secondary hash function?",
            options: [
                { optionText: "Double hashing", optionTag: "A" },
                { optionText: "Separate chaining", optionTag: "B" },
                { optionText: "Quadratic probing", optionTag: "C" },
                { optionText: "Rehashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a hash collision?",
            options: [
                { optionText: "Two keys hashed to same index", optionTag: "A" },
                { optionText: "Key not found in table", optionTag: "B" },
                { optionText: "Invalid hash value", optionTag: "C" },
                { optionText: "Duplicate value in array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation in hash table is not O(1) in worst case?",
            options: [
                { optionText: "Search", optionTag: "A" },
                { optionText: "Insertion", optionTag: "B" },
                { optionText: "Deletion", optionTag: "C" },
                { optionText: "Traversal", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the amortized time complexity of rehashing?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is NOT a characteristic of a good hash function?",
            options: [
                { optionText: "Many collisions", optionTag: "A" },
                { optionText: "Uniform distribution", optionTag: "B" },
                { optionText: "Efficiency", optionTag: "C" },
                { optionText: "Determinism", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In open addressing, what does clustering lead to?",
            options: [
                { optionText: "Longer search time", optionTag: "A" },
                { optionText: "Hash value loss", optionTag: "B" },
                { optionText: "Random indexing", optionTag: "C" },
                { optionText: "Faster lookup", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
