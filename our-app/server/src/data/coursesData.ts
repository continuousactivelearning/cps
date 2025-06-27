import mongoose from "mongoose";

export const coursesData = [
    { title: "Arrays", description: "Core concept for storing elements in contiguous memory.", level: "beginner", prerequisites: [] },
    { title: "Recursion", description: "Technique of solving problems by breaking them into subproblems.", level: "beginner", prerequisites: [] },
    { title: "Complexity Analysis", description: "Analyzing time and space requirements of algorithms.", level: "beginner", prerequisites: [] },

    { title: "Linked Lists", description: "Dynamic data structure made of nodes.", level: "beginner", prerequisites: ["Arrays"] },
    { title: "Stacks", description: "LIFO data structure.", level: "beginner", prerequisites: ["Arrays", "Linked Lists"] },
    { title: "Queues", description: "FIFO data structure.", level: "beginner", prerequisites: ["Arrays", "Linked Lists"] },
    { title: "Hash Tables", description: "Key-value based lookup data structure.", level: "intermediate", prerequisites: ["Arrays"] },
    { title: "Trees", description: "Hierarchical data structure.", level: "intermediate", prerequisites: ["Linked Lists", "Recursion"] },
    { title: "Binary Trees", description: "Tree with max 2 children per node.", level: "intermediate", prerequisites: ["Trees"] },
    { title: "Binary Search Trees", description: "Binary Tree with sorted properties.", level: "intermediate", prerequisites: ["Binary Trees"] },
    { title: "Heaps", description: "Complete binary tree used in priority queues.", level: "intermediate", prerequisites: ["Trees", "Arrays"] },
    { title: "Graphs", description: "Non-linear data structure of nodes and edges.", level: "intermediate", prerequisites: ["Arrays", "Trees"] },

    { title: "Sorting Algorithms", description: "Techniques for arranging elements.", level: "intermediate", prerequisites: ["Arrays", "Recursion"] },
    { title: "Searching Algorithms", description: "Techniques to find elements.", level: "intermediate", prerequisites: ["Arrays"] },
    { title: "Breadth-First Search (BFS)", description: "Graph traversal technique using queue.", level: "intermediate", prerequisites: ["Graphs", "Queues"] },
    { title: "Depth-First Search (DFS)", description: "Graph traversal using stack or recursion.", level: "intermediate", prerequisites: ["Graphs", "Recursion", "Stacks"] },

    { title: "Divide and Conquer", description: "Algorithm design paradigm.", level: "intermediate", prerequisites: ["Recursion", "Sorting Algorithms"] },
    { title: "Greedy Algorithms", description: "Algorithm design using local optimum.", level: "intermediate", prerequisites: ["Sorting Algorithms"] },
    { title: "Backtracking", description: "Exploration of all possibilities.", level: "advanced", prerequisites: ["Recursion", "Depth-First Search (DFS)"] },
    { title: "Dynamic Programming", description: "Optimizing overlapping subproblems.", level: "advanced", prerequisites: ["Divide and Conquer", "Recursion"] },

    { title: "Dijkstra's Algorithm", description: "Shortest path algorithm.", level: "advanced", prerequisites: ["Graphs", "Heaps", "Breadth-First Search (BFS)"] },
    { title: "Bellman-Ford Algorithm", description: "Shortest path in negative weights.", level: "advanced", prerequisites: ["Graphs"] },
    { title: "Floyd-Warshall Algorithm", description: "All-pairs shortest paths.", level: "advanced", prerequisites: ["Graphs", "Matrices"] },
    { title: "Prim's Algorithm", description: "MST using greedy and heap.", level: "advanced", prerequisites: ["Graphs", "Heaps"] },
    { title: "Kruskal's Algorithm", description: "MST using DSU and sorting.", level: "advanced", prerequisites: ["Graphs", "Disjoint Set Union", "Sorting Algorithms"] },
    { title: "Topological Sort", description: "Ordering DAG nodes.", level: "advanced", prerequisites: ["Graphs", "Depth-First Search (DFS)"] },

    { title: "AVL Trees", description: "Self-balancing BST.", level: "advanced", prerequisites: ["Binary Search Trees"] },
    { title: "Red-Black Trees", description: "Balanced BST with color properties.", level: "advanced", prerequisites: ["Binary Search Trees"] },
    { title: "B-Trees", description: "Balanced tree for DBs.", level: "advanced", prerequisites: ["Binary Search Trees"] },
    { title: "Tries", description: "Prefix tree for strings.", level: "advanced", prerequisites: ["Trees", "Strings"] },
    { title: "Segment Trees", description: "Range query tree.", level: "advanced", prerequisites: ["Trees", "Arrays"] },
    { title: "Fenwick Trees", description: "Binary Indexed Tree.", level: "advanced", prerequisites: ["Arrays", "Binary Operations"] },
    { title: "Disjoint Set Union", description: "Union-Find data structure.", level: "advanced", prerequisites: ["Arrays", "Trees"] },
    { title: "Suffix Arrays/Trees", description: "Suffix-based indexing.", level: "advanced", prerequisites: ["Strings", "Sorting Algorithms"] },

    { title: "Strings", description: "Text data and manipulations.", level: "beginner", prerequisites: ["Arrays"] },
    { title: "Matrices", description: "2D array structures.", level: "beginner", prerequisites: ["Arrays"] },
    { title: "Binary Operations", description: "Bit manipulation techniques.", level: "intermediate", prerequisites: [] }
];

export const coursesDataWithIds = coursesData.map((course, index) => ({
    ...course,
    _id: new mongoose.Types.ObjectId() // Generate proper MongoDB ObjectIds
}));