import { buildPrerequisiteGraph } from './graphBuilder';
import type { PrerequisiteGraph } from '../types/customTypes';

// Get all prerequisites (recursively) for a target node in the graph.
function collectAllPrerequisites(target: string, graph: PrerequisiteGraph, visited = new Set<string>()): Set<string> {
    if (visited.has(target)) return visited;
    visited.add(target);
    for (const prereq of graph[target] || []) {
        collectAllPrerequisites(prereq, graph, visited);
    }
    return visited;
}

// Topological sort with randomization among available nodes.
function randomizedTopoSort(nodes: Set<string>, graph: PrerequisiteGraph): string[] {
    const inDegree: Record<string, number> = {};
    for (const node of nodes) inDegree[node] = 0;
    for (const node of nodes) {
        for (const prereq of graph[node] || []) {
            if (nodes.has(prereq)) inDegree[node]++;
        }
    }
    const result: string[] = [];
    const available: string[] = Array.from(nodes).filter(n => inDegree[n] === 0);
    while (available.length) {
        // Randomly pick a node from available
        const idx = Math.floor(Math.random() * available.length);
        const node = available.splice(idx, 1)[0];
        result.push(node);
        for (const n of nodes) {
            if ((graph[n] || []).includes(node)) {
                inDegree[n]--;
                if (inDegree[n] === 0) available.push(n);
            }
        }
    }
    return result;
}

// Main function to get recommended path.
export async function getRecommendedPath(
    completed: string[],
    target: string
): Promise<string[]> {
    // Build graph dynamically from the database
    const graph = await buildPrerequisiteGraph();

    // If target course doesn't exist in the graph
    if (!(target in graph)) {
        console.warn(`Target course "${target}" not found in the course graph.`);
        return [];
    }

    const prereqs = collectAllPrerequisites(target, graph);
    prereqs.delete(target);
    for (const c of completed) {
        prereqs.delete(c);
    }
    const path = randomizedTopoSort(prereqs, graph);
    path.push(target);
    return path;
} 