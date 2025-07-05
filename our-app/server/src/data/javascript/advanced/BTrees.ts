import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript B-Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced understanding of B-Trees using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary advantage of B-Trees over binary search trees?",
            options: [
                { optionText: "Fewer disk reads due to higher branching factor", optionTag: "A" },
                { optionText: "Simpler implementation", optionTag: "B" },
                { optionText: "Uses less memory", optionTag: "C" },
                { optionText: "Supports only sequential access", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property makes B-Trees suitable for database indexing?",
            options: [
                { optionText: "Balanced height and high branching factor", optionTag: "A" },
                { optionText: "Only left children are filled", optionTag: "B" },
                { optionText: "It supports recursion", optionTag: "C" },
                { optionText: "It uses hash-based access", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum degree 't' in a B-Tree?",
            options: [
                { optionText: "Minimum number of children a non-root node can have", optionTag: "A" },
                { optionText: "Maximum number of children any node can have", optionTag: "B" },
                { optionText: "Number of levels in the tree", optionTag: "C" },
                { optionText: "Maximum number of keys in root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a B-Tree of order t, what is the maximum number of keys a node can hold?",
            options: [
                { optionText: "2t - 1", optionTag: "A" },
                { optionText: "t", optionTag: "B" },
                { optionText: "2t", optionTag: "C" },
                { optionText: "t - 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a B-Tree of order t, what is the minimum number of keys a non-root node must have?",
            options: [
                { optionText: "t - 1", optionTag: "A" },
                { optionText: "t", optionTag: "B" },
                { optionText: "2t - 1", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when a B-Tree node becomes full during insertion?",
            options: [
                { optionText: "It splits into two and the middle key moves up", optionTag: "A" },
                { optionText: "It rejects the insertion", optionTag: "B" },
                { optionText: "It deletes the oldest key", optionTag: "C" },
                { optionText: "It merges with the parent", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following operations may cause a B-Tree node to merge?",
            options: [
                { optionText: "Deletion", optionTag: "A" },
                { optionText: "Insertion", optionTag: "B" },
                { optionText: "Search", optionTag: "C" },
                { optionText: "Traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is true about the height of a B-Tree?",
            options: [
                { optionText: "It grows slowly with the number of keys", optionTag: "A" },
                { optionText: "It grows linearly with number of keys", optionTag: "B" },
                { optionText: "It remains constant", optionTag: "C" },
                { optionText: "It grows exponentially", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of search operation in B-Trees?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why are B-Trees better than binary search trees for disk access?",
            options: [
                { optionText: "Fewer I/O operations due to high fan-out", optionTag: "A" },
                { optionText: "Smaller code size", optionTag: "B" },
                { optionText: "Faster CPU access", optionTag: "C" },
                { optionText: "It avoids recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What distinguishes a B+ Tree from a B-Tree?",
            options: [
                { optionText: "All values are stored in the leaf nodes in B+", optionTag: "A" },
                { optionText: "Internal nodes store values", optionTag: "B" },
                { optionText: "Leaf nodes don’t store data", optionTag: "C" },
                { optionText: "It doesn’t allow search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When inserting into a B-Tree, what happens if the root node is full?",
            options: [
                { optionText: "It splits and the tree height increases", optionTag: "A" },
                { optionText: "The insertion is rejected", optionTag: "B" },
                { optionText: "The tree is restructured completely", optionTag: "C" },
                { optionText: "The node is merged with a child", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is best for printing a B-Tree?",
            options: [
                { optionText: "Level-order", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Postorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of balancing is used in B-Trees?",
            options: [
                { optionText: "Structural balance via node split/merge", optionTag: "A" },
                { optionText: "Height balancing only", optionTag: "B" },
                { optionText: "AVL balancing", optionTag: "C" },
                { optionText: "Color-based balancing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition violates a B-Tree property?",
            options: [
                { optionText: "Leaf node with fewer than t-1 keys", optionTag: "A" },
                { optionText: "Root with 1 key", optionTag: "B" },
                { optionText: "Internal node with t children", optionTag: "C" },
                { optionText: "Balanced height", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does deletion in B-Trees maintain balance?",
            options: [
                { optionText: "Through borrowing and merging", optionTag: "A" },
                { optionText: "Using red-black rotations", optionTag: "B" },
                { optionText: "Using heapify", optionTag: "C" },
                { optionText: "It doesn't maintain balance", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which component makes B-Trees efficient in databases?",
            options: [
                { optionText: "Disk-friendly block-based structure", optionTag: "A" },
                { optionText: "Recursion", optionTag: "B" },
                { optionText: "Stack overflow handling", optionTag: "C" },
                { optionText: "Faster deletion than insertion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case height of a B-Tree with n keys and degree t?",
            options: [
                { optionText: "log base t of n", optionTag: "A" },
                { optionText: "log n", optionTag: "B" },
                { optionText: "n / t", optionTag: "C" },
                { optionText: "t log n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a B-Tree use case?",
            options: [
                { optionText: "CPU cache replacement", optionTag: "A" },
                { optionText: "Database indexing", optionTag: "B" },
                { optionText: "File systems", optionTag: "C" },
                { optionText: "Key-value stores", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why are leaf nodes linked in B+ Trees?",
            options: [
                { optionText: "To support fast range queries", optionTag: "A" },
                { optionText: "To store child pointers", optionTag: "B" },
                { optionText: "To increase memory", optionTag: "C" },
                { optionText: "To avoid recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
