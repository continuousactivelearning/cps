// src/utils/shortestPath.ts

import fs from "fs";
import path from "path";

interface Node {
  id: string;
}

interface Link {
  source: string;
  target: string;
}

interface GraphJSON {
  nodes: Node[];
  links: Link[];
}

//BFS for shortest path
export function findShortestPath(
  start: string,
  end: string
): string[] | null {
  const dataPath = path.join(__dirname, "../data/concept_graph_full.json");
  const raw = fs.readFileSync(dataPath, "utf-8");
  const graphData: GraphJSON = JSON.parse(raw);

  const adjList: Record<string, string[]> = {};

  // Built adjacency list
  for (const node of graphData.nodes) {
    adjList[node.id] = [];
  }

  for (const link of graphData.links) {
    adjList[link.source].push(link.target);
  }

  // BFS
  const queue: string[][] = [[start]];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const path = queue.shift()!;
    const node = path[path.length - 1];

    if (node === end) return path;
    if (visited.has(node)) continue;

    visited.add(node);

    for (const neighbor of adjList[node] || []) {
      queue.push([...path, neighbor]);
    }
  }

  return null;
}
