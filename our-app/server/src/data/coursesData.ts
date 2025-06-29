import mongoose from "mongoose";

export const coursesData = [
    { courseName: "Arrays", description: "Core concept for storing elements in contiguous memory.", level: "beginner", prerequisites: [] },
    { courseName: "Recursion", description: "Technique of solving problems by breaking them into subproblems.", level: "beginner", prerequisites: [] },
    { courseName: "Complexity Analysis", description: "Analyzing time and space requirements of algorithms.", level: "beginner", prerequisites: [] },

    { courseName: "Linked Lists", description: "Dynamic data structure made of nodes.", level: "beginner", prerequisites: ["Arrays"] },
    { courseName: "Stacks", description: "LIFO data structure.", level: "beginner", prerequisites: ["Arrays", "Linked Lists"] },
    { courseName: "Queues", description: "FIFO data structure.", level: "beginner", prerequisites: ["Arrays", "Linked Lists"] },
    { courseName: "Hash Tables", description: "Key-value based lookup data structure.", level: "intermediate", prerequisites: ["Arrays"] },
    { courseName: "Trees", description: "Hierarchical data structure.", level: "intermediate", prerequisites: ["Linked Lists", "Recursion"] },
    { courseName: "Binary Trees", description: "Tree with max 2 children per node.", level: "intermediate", prerequisites: ["Trees"] },
    { courseName: "Binary Search Trees", description: "Binary Tree with sorted properties.", level: "intermediate", prerequisites: ["Binary Trees"] },
    { courseName: "Heaps", description: "Complete binary tree used in priority queues.", level: "intermediate", prerequisites: ["Trees", "Arrays"] },
    { courseName: "Graphs", description: "Non-linear data structure of nodes and edges.", level: "intermediate", prerequisites: ["Arrays", "Trees"] },

    { courseName: "Sorting Algorithms", description: "Techniques for arranging elements.", level: "intermediate", prerequisites: ["Arrays", "Recursion"] },
    { courseName: "Searching Algorithms", description: "Techniques to find elements.", level: "intermediate", prerequisites: ["Arrays"] },
    { courseName: "Breadth-First Search (BFS)", description: "Graph traversal technique using queue.", level: "intermediate", prerequisites: ["Graphs", "Queues"] },
    { courseName: "Depth-First Search (DFS)", description: "Graph traversal using stack or recursion.", level: "intermediate", prerequisites: ["Graphs", "Recursion", "Stacks"] },

    { courseName: "Divide and Conquer", description: "Algorithm design paradigm.", level: "intermediate", prerequisites: ["Recursion", "Sorting Algorithms"] },
    { courseName: "Greedy Algorithms", description: "Algorithm design using local optimum.", level: "intermediate", prerequisites: ["Sorting Algorithms"] },
    { courseName: "Backtracking", description: "Exploration of all possibilities.", level: "advanced", prerequisites: ["Recursion", "Depth-First Search (DFS)"] },
    { courseName: "Dynamic Programming", description: "Optimizing overlapping subproblems.", level: "advanced", prerequisites: ["Divide and Conquer", "Recursion"] },

    { courseName: "Dijkstra's Algorithm", description: "Shortest path algorithm.", level: "advanced", prerequisites: ["Graphs", "Heaps", "Breadth-First Search (BFS)"] },
    { courseName: "Bellman-Ford Algorithm", description: "Shortest path in negative weights.", level: "advanced", prerequisites: ["Graphs"] },
    { courseName: "Floyd-Warshall Algorithm", description: "All-pairs shortest paths.", level: "advanced", prerequisites: ["Graphs", "Matrices"] },
    { courseName: "Prim's Algorithm", description: "MST using greedy and heap.", level: "advanced", prerequisites: ["Graphs", "Heaps"] },
    { courseName: "Kruskal's Algorithm", description: "MST using DSU and sorting.", level: "advanced", prerequisites: ["Graphs", "Disjoint Set Union", "Sorting Algorithms"] },
    { courseName: "Topological Sort", description: "Ordering DAG nodes.", level: "advanced", prerequisites: ["Graphs", "Depth-First Search (DFS)"] },

    { courseName: "AVL Trees", description: "Self-balancing BST.", level: "advanced", prerequisites: ["Binary Search Trees"] },
    { courseName: "Red-Black Trees", description: "Balanced BST with color properties.", level: "advanced", prerequisites: ["Binary Search Trees"] },
    { courseName: "B-Trees", description: "Balanced tree for DBs.", level: "advanced", prerequisites: ["Binary Search Trees"] },
    { courseName: "Tries", description: "Prefix tree for strings.", level: "advanced", prerequisites: ["Trees", "Strings"] },
    { courseName: "Segment Trees", description: "Range query tree.", level: "advanced", prerequisites: ["Trees", "Arrays"] },
    { courseName: "Fenwick Trees", description: "Binary Indexed Tree.", level: "advanced", prerequisites: ["Arrays", "Binary Operations"] },
    { courseName: "Disjoint Set Union", description: "Union-Find data structure.", level: "advanced", prerequisites: ["Arrays", "Trees"] },
    { courseName: "Suffix Arrays/Trees", description: "Suffix-based indexing.", level: "advanced", prerequisites: ["Strings", "Sorting Algorithms"] },

    { courseName: "Strings", description: "Text data and manipulations.", level: "beginner", prerequisites: ["Arrays"] },
    { courseName: "Matrices", description: "2D array structures.", level: "beginner", prerequisites: ["Arrays"] },
    { courseName: "Binary Operations", description: "Bit manipulation techniques.", level: "intermediate", prerequisites: [] }
];

export const coursesDataWithIds = coursesData.map((course, index) => ({
    ...course,
    _id: new mongoose.Types.ObjectId() // Generate proper MongoDB ObjectIds
}));