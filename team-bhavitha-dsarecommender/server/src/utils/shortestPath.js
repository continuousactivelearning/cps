"use strict";
// src/utils/shortestPath.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findShortestPath = findShortestPath;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
//BFS for shortest path
function findShortestPath(start, end) {
    const dataPath = path_1.default.join(__dirname, "../data/concept_graph_full.json");
    const raw = fs_1.default.readFileSync(dataPath, "utf-8");
    const graphData = JSON.parse(raw);
    const adjList = {};
    // Built adjacency list
    for (const node of graphData.nodes) {
        adjList[node.id] = [];
    }
    for (const link of graphData.links) {
        adjList[link.source].push(link.target);
    }
    // BFS
    const queue = [[start]];
    const visited = new Set();
    while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1];
        if (node === end)
            return path;
        if (visited.has(node))
            continue;
        visited.add(node);
        for (const neighbor of adjList[node] || []) {
            queue.push([...path, neighbor]);
        }
    }
    return null;
}
