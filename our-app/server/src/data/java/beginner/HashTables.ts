// src/data/java/beginner/hashTables.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Hash Tables - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your basic knowledge of Hash Tables in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Hash Tables"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a hash table used for?",
            options: [
                { optionText: "Storing data in a hierarchical structure", optionTag: "A" },
                { optionText: "Mapping keys to values for quick lookup", optionTag: "B" },
                { optionText: "Sorting large datasets", optionTag: "C" },
                { optionText: "Performing arithmetic operations", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What class is commonly used to implement a hash table in Java?",
            options: [
                { optionText: "ArrayList", optionTag: "A" },
                { optionText: "HashMap", optionTag: "B" },
                { optionText: "TreeSet", optionTag: "C" },
                { optionText: "LinkedList", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What happens when two keys hash to the same index?",
            options: [
                { optionText: "Java throws an exception", optionTag: "A" },
                { optionText: "The older key is deleted", optionTag: "B" },
                { optionText: "A collision occurs", optionTag: "C" },
                { optionText: "The key is rehashed", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which method is used to insert data into a HashMap?",
            options: [
                { optionText: "add()", optionTag: "A" },
                { optionText: "put()", optionTag: "B" },
                { optionText: "insert()", optionTag: "C" },
                { optionText: "append()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method is used to retrieve a value from a HashMap?",
            options: [
                { optionText: "get()", optionTag: "A" },
                { optionText: "retrieve()", optionTag: "B" },
                { optionText: "fetch()", optionTag: "C" },
                { optionText: "find()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the default initial capacity of Java’s HashMap?",
            options: [
                { optionText: "8", optionTag: "A" },
                { optionText: "16", optionTag: "B" },
                { optionText: "32", optionTag: "C" },
                { optionText: "10", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of these is NOT a valid collision resolution method?",
            options: [
                { optionText: "Chaining", optionTag: "A" },
                { optionText: "Linear Probing", optionTag: "B" },
                { optionText: "Rehashing", optionTag: "C" },
                { optionText: "Filtering", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is a load factor in a hash table?",
            options: [
                { optionText: "Number of keys divided by capacity", optionTag: "A" },
                { optionText: "Capacity divided by keys", optionTag: "B" },
                { optionText: "Size of each bucket", optionTag: "C" },
                { optionText: "Total memory used", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When does Java’s HashMap resize?",
            options: [
                { optionText: "When it is full", optionTag: "A" },
                { optionText: "When load factor exceeds threshold", optionTag: "B" },
                { optionText: "When memory is low", optionTag: "C" },
                { optionText: "Manually triggered only", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following is used as a key in HashMap?",
            options: [
                { optionText: "Only strings", optionTag: "A" },
                { optionText: "Only numbers", optionTag: "B" },
                { optionText: "Any object with hashCode() and equals()", optionTag: "C" },
                { optionText: "Only primitive types", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which interface does HashMap implement?",
            options: [
                { optionText: "Map", optionTag: "A" },
                { optionText: "List", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many null keys can a HashMap have?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "Unlimited", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method removes a key-value pair from HashMap?",
            options: [
                { optionText: "delete()", optionTag: "A" },
                { optionText: "erase()", optionTag: "B" },
                { optionText: "remove()", optionTag: "C" },
                { optionText: "clear()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What exception is thrown when using a null key in Hashtable?",
            options: [
                { optionText: "NullPointerException", optionTag: "A" },
                { optionText: "IllegalArgumentException", optionTag: "B" },
                { optionText: "KeyNotFoundException", optionTag: "C" },
                { optionText: "UnsupportedOperationException", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method returns all keys from HashMap?",
            options: [
                { optionText: "keyList()", optionTag: "A" },
                { optionText: "keySet()", optionTag: "B" },
                { optionText: "getKeys()", optionTag: "C" },
                { optionText: "allKeys()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method returns all values from HashMap?",
            options: [
                { optionText: "getAll()", optionTag: "A" },
                { optionText: "allValues()", optionTag: "B" },
                { optionText: "values()", optionTag: "C" },
                { optionText: "getValues()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "HashMap allows:",
            options: [
                { optionText: "Duplicate keys", optionTag: "A" },
                { optionText: "Multiple null keys", optionTag: "B" },
                { optionText: "Duplicate values", optionTag: "C" },
                { optionText: "Both A and C", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which is faster for lookup: HashMap or TreeMap?",
            options: [
                { optionText: "TreeMap", optionTag: "A" },
                { optionText: "HashMap", optionTag: "B" },
                { optionText: "Both are equal", optionTag: "C" },
                { optionText: "Depends on data size", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which function computes index from key in a HashMap?",
            options: [
                { optionText: "hashCode()", optionTag: "A" },
                { optionText: "toString()", optionTag: "B" },
                { optionText: "equals()", optionTag: "C" },
                { optionText: "compareTo()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of retrieving a value from a HashMap?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;