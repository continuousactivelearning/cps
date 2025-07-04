import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Hash Tables - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate knowledge of Hash Tables in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "HashTables"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary advantage of a hash table over an array?",
            options: [
                { optionText: "Constant time complexity for search, insert, and delete", optionTag: "A" },
                { optionText: "More memory usage", optionTag: "B" },
                { optionText: "Ordered storage", optionTag: "C" },
                { optionText: "Dynamic typing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript data structure closely resembles a hash table?",
            options: [
                { optionText: "Object", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to remove a key-value pair from a Map?",
            options: [
                { optionText: "map.delete(key)", optionTag: "A" },
                { optionText: "map.remove(key)", optionTag: "B" },
                { optionText: "map.pop(key)", optionTag: "C" },
                { optionText: "delete map.key", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a hash function do in a hash table?",
            options: [
                { optionText: "Converts key into an index", optionTag: "A" },
                { optionText: "Sorts the table", optionTag: "B" },
                { optionText: "Searches the key", optionTag: "C" },
                { optionText: "Converts value into a key", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is the correct way to check if a Map has a specific key?",
            options: [
                { optionText: "map.has(key)", optionTag: "A" },
                { optionText: "map.contains(key)", optionTag: "B" },
                { optionText: "map.exists(key)", optionTag: "C" },
                { optionText: "key in map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if two keys hash to the same index?",
            options: [
                { optionText: "A collision occurs", optionTag: "A" },
                { optionText: "An error is thrown", optionTag: "B" },
                { optionText: "The second key is ignored", optionTag: "C" },
                { optionText: "A warning is logged", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following handles collisions in hash tables?",
            options: [
                { optionText: "Chaining and open addressing", optionTag: "A" },
                { optionText: "Recursion and backtracking", optionTag: "B" },
                { optionText: "Memoization", optionTag: "C" },
                { optionText: "Stacking and Queuing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript method returns all keys of a Map?",
            options: [
                { optionText: "map.keys()", optionTag: "A" },
                { optionText: "map.getKeys()", optionTag: "B" },
                { optionText: "map.allKeys()", optionTag: "C" },
                { optionText: "map.fetchKeys()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property of a hash function is most important?",
            options: [
                { optionText: "Uniform distribution", optionTag: "A" },
                { optionText: "Slow speed", optionTag: "B" },
                { optionText: "Fixed value", optionTag: "C" },
                { optionText: "Reversibility", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the average time complexity for lookup in a well-designed hash table?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the `Map` object preserve in JavaScript?",
            options: [
                { optionText: "Insertion order of keys", optionTag: "A" },
                { optionText: "Sorted order", optionTag: "B" },
                { optionText: "Reverse order", optionTag: "C" },
                { optionText: "Randomized order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you iterate over a Map in JavaScript?",
            options: [
                { optionText: "for (const [key, value] of map)", optionTag: "A" },
                { optionText: "for (const key in map)", optionTag: "B" },
                { optionText: "map.each()", optionTag: "C" },
                { optionText: "map.iterate()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is more suitable for frequent addition/removal of key-value pairs?",
            options: [
                { optionText: "Map", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "String", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does `Set` in JavaScript relate to hash tables?",
            options: [
                { optionText: "It uses hash tables internally", optionTag: "A" },
                { optionText: "It uses stacks", optionTag: "B" },
                { optionText: "It uses queues", optionTag: "C" },
                { optionText: "It uses arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which built-in JavaScript object allows key-value storage with arbitrary key types?",
            options: [
                { optionText: "Map", optionTag: "A" },
                { optionText: "Object", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will `map.get(nonExistingKey)` return?",
            options: [
                { optionText: "undefined", optionTag: "A" },
                { optionText: "null", optionTag: "B" },
                { optionText: "false", optionTag: "C" },
                { optionText: "error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about JavaScript objects and prototype chain?",
            options: [
                { optionText: "They inherit methods that may affect hashing behavior", optionTag: "A" },
                { optionText: "They are always immutable", optionTag: "B" },
                { optionText: "They use only string keys", optionTag: "C" },
                { optionText: "They are never used as hash tables", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you retrieve all values from a Map?",
            options: [
                { optionText: "map.values()", optionTag: "A" },
                { optionText: "map.getAll()", optionTag: "B" },
                { optionText: "map.data()", optionTag: "C" },
                { optionText: "map.elements()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, which key type is not allowed in objects but allowed in Maps?",
            options: [
                { optionText: "Objects as keys", optionTag: "A" },
                { optionText: "Strings as keys", optionTag: "B" },
                { optionText: "Symbols as keys", optionTag: "C" },
                { optionText: "Numbers as keys", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following scenarios might cause hash collisions?",
            options: [
                { optionText: "Two different keys producing the same index", optionTag: "A" },
                { optionText: "No keys used", optionTag: "B" },
                { optionText: "Keys with undefined value", optionTag: "C" },
                { optionText: "Empty hash function", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
