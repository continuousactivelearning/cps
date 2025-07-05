/**
 * Graph Analyzer Service for TypeScript
 * Replaces Python real_graph_analyzer functionality with comprehensive graph analysis
 */

import fs from 'fs/promises';
import path from 'path';
import { GraphData, GraphNode, GraphEdge } from '../types/chat';

interface PathResult {
  path: string[];
  distance?: number;
  reason?: string;
}

interface SubtopicAnalysisResult {
  missing_prerequisites: string[];
  recommended_subtopics: string[];
  target_subtopics?: string[];
  completion_percentage?: number;
}

interface ComprehensiveAnalysisResult {
  recommended_topics: string[];
  clusters?: { [key: number]: string[] };
  foundational_missing?: string[];
}

export class GraphAnalyzerService {
  private graphData: GraphData | null = null;
  private topicNameToId: Map<string, string> = new Map();
  private subtopicNameToId: Map<string, string> = new Map();
  private allIdToData: Map<string, GraphNode> = new Map();
  private adjacencyList: Map<string, Array<{target: string, weight: number, type: string}>> = new Map();
  private reverseAdjacencyList: Map<string, Array<{source: string, weight: number, type: string}>> = new Map();
  private clusters: Map<number, string[]> = new Map();
  private graphDataPath: string;

  constructor(graphDataPath?: string) {
    this.graphDataPath = graphDataPath || path.join(
      __dirname, 
      '..', 
      'queryHandling', 
      'static', 
      'graph', 
      'graph_data.json'
    );
    this.initializeGraph();
  }

  /**
   * Initialize the graph data by loading and processing the JSON file
   */
  private async initializeGraph(): Promise<void> {
    try {
      const graphDataRaw = await fs.readFile(this.graphDataPath, 'utf-8');
      this.graphData = JSON.parse(graphDataRaw) as GraphData;
      
      if (this.graphData?.nodes) {
        this.buildIndexes();
        this.buildAdjacencyLists();
        this.performClustering();
      }
    } catch (error) {
      console.error('Error loading graph data:', error);
      this.graphData = { nodes: [], edges: [] };
    }
  }

  /**
   * Build indexes for fast lookup
   */
  private buildIndexes(): void {
    if (!this.graphData?.nodes) return;

    this.topicNameToId.clear();
    this.subtopicNameToId.clear();
    this.allIdToData.clear();

    for (const node of this.graphData.nodes) {
      this.allIdToData.set(node.id, node);
      
      if (node.type === 'topic') {
        this.topicNameToId.set(node.name.toLowerCase(), node.id);
      } else if (node.type === 'subtopic') {
        this.subtopicNameToId.set(node.name.toLowerCase(), node.id);
      }
    }
  }

  /**
   * Build adjacency lists for graph algorithms
   */
  private buildAdjacencyLists(): void {
    if (!this.graphData?.edges) return;

    this.adjacencyList.clear();
    this.reverseAdjacencyList.clear();

    // Initialize adjacency lists for all nodes
    for (const node of this.graphData.nodes) {
      this.adjacencyList.set(node.id, []);
      this.reverseAdjacencyList.set(node.id, []);
    }

    // Add edges with weights
    for (const edge of this.graphData.edges) {
      const weight = this.getEdgeWeight(edge.type || 'default');
      
      // Forward edge
      const forwardList = this.adjacencyList.get(edge.source) || [];
      forwardList.push({ target: edge.target, weight, type: edge.type || 'default' });
      this.adjacencyList.set(edge.source, forwardList);

      // Reverse edge for predecessor lookup
      const reverseList = this.reverseAdjacencyList.get(edge.target) || [];
      reverseList.push({ source: edge.source, weight, type: edge.type || 'default' });
      this.reverseAdjacencyList.set(edge.target, reverseList);
    }
  }

  /**
   * Get edge weight based on relationship type for optimal pathfinding
   */
  private getEdgeWeight(edgeType: string): number {
    const weights: { [key: string]: number } = {
      'prerequisite': 0.1,    // Prerequisites are critical - lowest weight (highest priority)
      'sequence': 0.2,        // Sequence learning - very important
      'contains': 0.3,        // Subtopic relationships - important
      'leads_to': 0.5,        // Natural progression - moderate
      'related': 0.8,         // Related concepts - lower priority
      'default': 1.0          // Default relationships
    };
    return weights[edgeType] || 1.0;
  }

  /**
   * Perform clustering based on graph structure and content similarity
   */
  private performClustering(): void {
    if (!this.graphData?.nodes) return;

    this.clusters.clear();
    const topics = this.graphData.nodes.filter(node => node.type === 'topic');
    
    // Simple clustering based on connectivity and content similarity
    const visited = new Set<string>();
    let clusterId = 0;

    for (const topic of topics) {
      if (visited.has(topic.id)) continue;

      const cluster: string[] = [];
      this.dfsCluster(topic.id, visited, cluster);
      
      if (cluster.length > 0) {
        this.clusters.set(clusterId++, cluster);
      }
    }
  }

  /**
   * DFS to find connected components for clustering
   */
  private dfsCluster(nodeId: string, visited: Set<string>, cluster: string[]): void {
    if (visited.has(nodeId)) return;

    visited.add(nodeId);
    const node = this.allIdToData.get(nodeId);
    if (node?.type === 'topic') {
      cluster.push(nodeId);
    }

    // Follow weak connections for clustering (related, leads_to)
    const neighbors = this.adjacencyList.get(nodeId) || [];
    for (const neighbor of neighbors) {
      if (['related', 'leads_to'].includes(neighbor.type)) {
        this.dfsCluster(neighbor.target, visited, cluster);
      }
    }

    // Also check reverse connections
    const reverseNeighbors = this.reverseAdjacencyList.get(nodeId) || [];
    for (const neighbor of reverseNeighbors) {
      if (['related', 'leads_to'].includes(neighbor.type)) {
        this.dfsCluster(neighbor.source, visited, cluster);
      }
    }
  }

  /**
   * Get graph data
   */
  public getGraphData(): GraphData | null {
    return this.graphData;
  }

  /**
   * Get topic ID by name
   */
  public getTopicIdByName(name: string): string | undefined {
    return this.topicNameToId.get(name.toLowerCase());
  }

  /**
   * Get subtopic ID by name
   */
  public getSubtopicIdByName(name: string): string | undefined {
    return this.subtopicNameToId.get(name.toLowerCase());
  }

  /**
   * Get node data by ID
   */
  public getNodeById(id: string): GraphNode | undefined {
    return this.allIdToData.get(id);
  }

  /**
   * Find optimal learning path using Dijkstra's algorithm
   */
  public findOptimalLearningPath(
    completedTopics: string[], 
    targetTopic: string
  ): PathResult {
    try {
      if (!this.graphData?.nodes) {
        return { path: [] };
      }

      // Check if target is already completed
      if (completedTopics.includes(targetTopic)) {
        return { path: [], reason: 'already_completed' };
      }

      // Method 1: Find direct path from any completed topic using Dijkstra
      let bestPath = this.findShortestPath(completedTopics, targetTopic);
      if (bestPath.path.length > 0) {
        return {
          path: bestPath.path.map(id => this.allIdToData.get(id)?.name || id),
          distance: bestPath.distance,
          reason: 'direct_path'
        };
      }

      // Method 2: Find missing prerequisites
      const prerequisites = this.findMissingPrerequisites(completedTopics, targetTopic);
      if (prerequisites.length > 0) {
        return {
          path: prerequisites.map(id => this.allIdToData.get(id)?.name || id),
          distance: prerequisites.length,
          reason: 'prerequisite_chain'
        };
      }

      // Method 3: Use cluster-based recommendations
      const clusterPath = this.findClusterBasedPath(completedTopics, targetTopic);
      return {
        path: clusterPath.map(id => this.allIdToData.get(id)?.name || id),
        distance: clusterPath.length,
        reason: 'cluster_based'
      };

    } catch (error) {
      console.error('Error finding optimal learning path:', error);
      return { path: [] };
    }
  }

  /**
   * Dijkstra's algorithm implementation for shortest path
   */
  private findShortestPath(startNodes: string[], targetNode: string): { path: string[], distance: number } {
    interface QueueItem {
      node: string;
      distance: number;
      path: string[];
    }

    const distances = new Map<string, number>();
    const previous = new Map<string, string | null>();
    const queue: QueueItem[] = [];

    // Initialize distances
    for (const node of this.allIdToData.keys()) {
      distances.set(node, Infinity);
      previous.set(node, null);
    }

    // Start from all completed topics with distance 0
    for (const startNode of startNodes) {
      if (this.allIdToData.has(startNode)) {
        distances.set(startNode, 0);
        queue.push({ node: startNode, distance: 0, path: [] });
      }
    }

    // Priority queue simulation (could be optimized with proper heap)
    while (queue.length > 0) {
      queue.sort((a, b) => a.distance - b.distance);
      const current = queue.shift()!;

      if (current.node === targetNode) {
        return { path: current.path, distance: current.distance };
      }

      const currentDistance = distances.get(current.node) || Infinity;
      if (current.distance > currentDistance) continue;

      // Check all neighbors
      const neighbors = this.adjacencyList.get(current.node) || [];
      for (const neighbor of neighbors) {
        const newDistance = current.distance + neighbor.weight;
        const existingDistance = distances.get(neighbor.target) || Infinity;

        if (newDistance < existingDistance) {
          distances.set(neighbor.target, newDistance);
          previous.set(neighbor.target, current.node);
          
          const newPath = [...current.path, neighbor.target];
          queue.push({
            node: neighbor.target,
            distance: newDistance,
            path: newPath
          });
        }
      }
    }

    return { path: [], distance: Infinity };
  }

  /**
   * Find missing prerequisites using graph traversal
   */
  private findMissingPrerequisites(completedTopics: string[], targetTopic: string): string[] {
    const missing: string[] = [];
    const visited = new Set<string>(completedTopics);
    const queue = [targetTopic];

    while (queue.length > 0) {
      const current = queue.shift()!;
      if (visited.has(current)) continue;

      visited.add(current);

      // Find prerequisites (incoming edges with prerequisite/sequence type)
      const predecessors = this.reverseAdjacencyList.get(current) || [];
      for (const pred of predecessors) {
        if (['prerequisite', 'sequence'].includes(pred.type) && 
            !completedTopics.includes(pred.source)) {
          if (!missing.includes(pred.source)) {
            missing.push(pred.source);
          }
          queue.push(pred.source);
        }
      }
    }

    // Sort by distance to target (closer prerequisites first)
    missing.sort((a, b) => {
      const distA = this.getDistanceToTarget(a, targetTopic);
      const distB = this.getDistanceToTarget(b, targetTopic);
      return distA - distB;
    });

    return missing.slice(0, 5); // Return top 5 prerequisites
  }

  /**
   * Get graph distance from node to target
   */
  private getDistanceToTarget(node: string, target: string): number {
    const result = this.findShortestPath([node], target);
    return result.distance === Infinity ? 1000 : result.distance;
  }

  /**
   * Find learning path using cluster analysis
   */
  private findClusterBasedPath(completedTopics: string[], targetTopic: string): string[] {
    // Find which cluster the target topic belongs to
    let targetCluster: string[] | null = null;
    for (const cluster of this.clusters.values()) {
      if (cluster.includes(targetTopic)) {
        targetCluster = cluster;
        break;
      }
    }

    if (!targetCluster) return [];

    // Find topics in the same cluster that aren't completed
    const missingInCluster = targetCluster.filter(
      t => !completedTopics.includes(t) && t !== targetTopic
    );

    // Sort by complexity (number of subtopics and prerequisites)
    missingInCluster.sort((a, b) => {
      const complexityA = this.getTopicComplexity(a);
      const complexityB = this.getTopicComplexity(b);
      return complexityA - complexityB;
    });

    return missingInCluster.slice(0, 3); // Return top 3 most relevant topics
  }

  /**
   * Calculate topic complexity based on subtopics and prerequisites
   */
  private getTopicComplexity(topicId: string): number {
    const subtopicCount = this.getSubtopicsForTopic(topicId).length;
    const prerequisiteCount = (this.reverseAdjacencyList.get(topicId) || [])
      .filter(edge => edge.type === 'prerequisite').length;
    
    return subtopicCount + prerequisiteCount * 2; // Prerequisites are weighted more
  }

  /**
   * Analyze subtopic learning gaps with comprehensive analysis
   */
  public analyzeSubtopicLearningGaps(
    completedSubtopics: string[], 
    targetTopicId: string
  ): SubtopicAnalysisResult {
    try {
      if (!this.graphData?.nodes) {
        return { missing_prerequisites: [], recommended_subtopics: [] };
      }

      const targetNode = this.allIdToData.get(targetTopicId);
      if (!targetNode) {
        return { missing_prerequisites: [], recommended_subtopics: [] };
      }

      // Get all subtopics for the target topic
      const targetSubtopics = this.getSubtopicsForTopic(targetTopicId);
      const targetSubtopicIds = targetSubtopics.map(node => node.id);
      const completedSet = new Set(completedSubtopics);

      // Find completed and missing subtopics within target topic
      const completedInTarget = targetSubtopicIds.filter(id => completedSet.has(id));
      const missingInTarget = targetSubtopicIds.filter(id => !completedSet.has(id));

      // Find prerequisite subtopics from other topics
      const prerequisiteSubtopics = this.findPrerequisiteSubtopics(targetTopicId, completedSubtopics);

      // Sort missing subtopics by priority
      const sortedMissing = this.sortSubtopicsByPriority(missingInTarget, completedSubtopics);

      const completionPercentage = targetSubtopicIds.length > 0 
        ? (completedInTarget.length / targetSubtopicIds.length) * 100 
        : 0;

      return { 
        missing_prerequisites: prerequisiteSubtopics.slice(0, 5),
        recommended_subtopics: sortedMissing.slice(0, 5),
        target_subtopics: targetSubtopicIds,
        completion_percentage: completionPercentage
      };
    } catch (error) {
      console.error('Error analyzing subtopic learning gaps:', error);
      return { missing_prerequisites: [], recommended_subtopics: [] };
    }
  }

  /**
   * Find prerequisite subtopics from other topics
   */
  private findPrerequisiteSubtopics(targetTopicId: string, completedSubtopics: string[]): string[] {
    const prerequisites: string[] = [];
    const targetSubtopics = this.getSubtopicsForTopic(targetTopicId);
    const targetSubtopicIds = targetSubtopics.map(node => node.id);
    const completedSet = new Set(completedSubtopics);

    // Look for subtopics that have prerequisite connections to the target topic's subtopics
    for (const node of this.graphData!.nodes) {
      if (node.type === 'subtopic' && 
          !completedSet.has(node.id) &&
          !targetSubtopicIds.includes(node.id)) {
        
        // Check if this subtopic connects to any target subtopic
        const connections = this.adjacencyList.get(node.id) || [];
        for (const connection of connections) {
          if (targetSubtopicIds.includes(connection.target) &&
              ['prerequisite', 'sequence'].includes(connection.type)) {
            prerequisites.push(node.id);
            break;
          }
        }
      }
    }

    return prerequisites;
  }

  /**
   * Sort subtopics by learning priority
   */
  private sortSubtopicsByPriority(subtopicIds: string[], completedSubtopics: string[]): string[] {
    const priorities = subtopicIds.map(id => ({
      id,
      priority: this.calculateSubtopicPriority(id, completedSubtopics)
    }));

    priorities.sort((a, b) => b.priority - a.priority);
    return priorities.map(p => p.id);
  }

  /**
   * Calculate priority for a missing subtopic based on connections to completed ones
   */
  private calculateSubtopicPriority(subtopicId: string, completedSubtopics: string[]): number {
    let priority = 0.0;
    const completedSet = new Set(completedSubtopics);

    // Check connections FROM completed subtopics TO this subtopic
    const reverseConnections = this.reverseAdjacencyList.get(subtopicId) || [];
    for (const connection of reverseConnections) {
      if (completedSet.has(connection.source)) {
        switch (connection.type) {
          case 'prerequisite':
            priority += 3.0;
            break;
          case 'sequence':
            priority += 2.0;
            break;
          case 'leads_to':
            priority += 1.5;
            break;
          default:
            priority += 1.0;
        }
      }
    }

    // Check connections FROM this subtopic TO completed subtopics
    const forwardConnections = this.adjacencyList.get(subtopicId) || [];
    for (const connection of forwardConnections) {
      if (completedSet.has(connection.target)) {
        priority += 0.5;
      }
    }

    // Bonus for subtopics with more connections overall
    const totalConnections = forwardConnections.length + reverseConnections.length;
    priority += totalConnections * 0.1;

    return priority;
  }

  /**
   * Comprehensive learning gap analysis using real graph structure
   */
  public analyzeLearningGapWithRealGraph(
    completedTopicsNames: string[], 
    targetTopicName: string
  ): ComprehensiveAnalysisResult {
    try {
      if (!this.graphData?.nodes) {
        return { recommended_topics: [] };
      }

      const completedSet = new Set(completedTopicsNames.map(t => t.toLowerCase()));
      const foundational: string[] = [];
      const intermediate: string[] = [];
      const advanced: string[] = [];

      // Categorize missing topics by difficulty/prerequisites
      for (const node of this.graphData.nodes) {
        if (node.type === 'topic' && !completedSet.has(node.name.toLowerCase())) {
          const complexity = this.getTopicComplexity(node.id);
          const isFoundational = this.isFoundationalTopic(node.name);
          
          if (isFoundational) {
            foundational.push(node.name);
          } else if (complexity < 3) {
            intermediate.push(node.name);
          } else {
            advanced.push(node.name);
          }
        }
      }

      // Prioritize foundational topics first
      let recommended: string[] = [];
      if (foundational.length > 0) {
        recommended = foundational.slice(0, 3);
      } else if (intermediate.length > 0) {
        recommended = intermediate.slice(0, 3);
      } else {
        recommended = advanced.slice(0, 3);
      }

      // Add remaining topics to fill up to 5 recommendations
      const remaining = [...intermediate, ...advanced].filter(
        topic => !recommended.includes(topic)
      );
      recommended.push(...remaining.slice(0, 5 - recommended.length));

      return { 
        recommended_topics: recommended.slice(0, 5),
        clusters: this.getClustersAsObject(),
        foundational_missing: foundational
      };
    } catch (error) {
      console.error('Error in comprehensive learning gap analysis:', error);
      return { recommended_topics: [] };
    }
  }

  /**
   * Convert clusters Map to object for JSON serialization
   */
  private getClustersAsObject(): { [key: number]: string[] } {
    const clustersObj: { [key: number]: string[] } = {};
    for (const [clusterId, topicIds] of this.clusters.entries()) {
      clustersObj[clusterId] = topicIds.map(id => 
        this.allIdToData.get(id)?.name || id
      );
    }
    return clustersObj;
  }

  /**
   * Check if a topic is foundational
   */
  private isFoundationalTopic(topicName: string): boolean {
    const foundational = [
      'array', 'linked list', 'stack', 'queue', 
      'sorting', 'searching', 'recursion'
    ];
    return foundational.some(f => topicName.toLowerCase().includes(f));
  }

  /**
   * Reload graph data from file
   */
  public async reloadGraphData(): Promise<void> {
    await this.initializeGraph();
  }

  /**
   * Get all topics
   */
  public getAllTopics(): GraphNode[] {
    if (!this.graphData?.nodes) return [];
    return this.graphData.nodes.filter(node => node.type === 'topic');
  }

  /**
   * Get all subtopics for a topic using real graph relationships
   */
  public getSubtopicsForTopic(topicId: string): GraphNode[] {
    if (!this.graphData?.nodes) return [];
    
    const subtopics: GraphNode[] = [];
    
    // Method 1: Use adjacency list for direct contains relationships
    const connections = this.adjacencyList.get(topicId) || [];
    for (const connection of connections) {
      if (connection.type === 'contains') {
        const subtopicNode = this.allIdToData.get(connection.target);
        if (subtopicNode && subtopicNode.type === 'subtopic') {
          subtopics.push(subtopicNode);
        }
      }
    }
    
    // Method 2: Fallback to parent_topic relationships
    if (subtopics.length === 0) {
      for (const node of this.graphData.nodes) {
        if (node.type === 'subtopic' && node.parent_topic === topicId) {
          subtopics.push(node);
        }
      }
    }
    
    return subtopics;
  }

  /**
   * Search nodes by keywords with enhanced matching
   */
  public searchNodes(query: string): GraphNode[] {
    if (!this.graphData?.nodes) return [];
    
    const queryLower = query.toLowerCase();
    const queryWords = queryLower.split(/\s+/).filter(word => word.length > 2);
    const results: Array<{node: GraphNode, score: number}> = [];
    
    for (const node of this.graphData.nodes) {
      const nodeName = node.name.toLowerCase();
      const nodeKeywords = (node.keywords || []).map(k => k.toLowerCase());
      let score = 0;
      
      // Exact name match (highest score)
      if (nodeName === queryLower) {
        score += 10;
      }
      // Name contains query
      else if (nodeName.includes(queryLower)) {
        score += 8;
      }
      // Query contains name (for shorter names)
      else if (queryLower.includes(nodeName) && nodeName.length > 3) {
        score += 6;
      }
      
      // Keyword matches
      for (const keyword of nodeKeywords) {
        if (keyword === queryLower) {
          score += 9;
        } else if (keyword.includes(queryLower) || queryLower.includes(keyword)) {
          score += 4;
        }
      }
      
      // Word-based matching
      for (const word of queryWords) {
        if (word.length > 3) {
          if (nodeName.includes(word)) {
            score += 3;
          }
          for (const keyword of nodeKeywords) {
            if (keyword.includes(word)) {
              score += 2;
            }
          }
        }
      }
      
      // Partial word matching for longer words
      for (const word of queryWords) {
        if (word.length > 4) {
          if (nodeName.startsWith(word) || word.startsWith(nodeName)) {
            score += 1;
          }
        }
      }
      
      if (score > 0) {
        results.push({ node, score });
      }
    }
    
    // Sort by score (descending) and return nodes
    results.sort((a, b) => b.score - a.score);
    return results.slice(0, 10).map(result => result.node);
  }

  /**
   * Enhanced node search by name with fuzzy matching
   */
  public findNodeByName(name: string): string | null {
    const nameLower = name.toLowerCase().trim();
    
    // Exact match
    if (this.topicNameToId.has(nameLower)) {
      return this.topicNameToId.get(nameLower)!;
    }
    if (this.subtopicNameToId.has(nameLower)) {
      return this.subtopicNameToId.get(nameLower)!;
    }
    
    // Partial matches
    const allNames = [...this.topicNameToId.entries(), ...this.subtopicNameToId.entries()];
    const matches: Array<{name: string, id: string, score: number}> = [];
    
    for (const [storedName, nodeId] of allNames) {
      let score = 0;
      
      if (storedName.includes(nameLower)) {
        score += 5 - Math.abs(storedName.length - nameLower.length) * 0.1;
      }
      if (nameLower.includes(storedName)) {
        score += 4 - Math.abs(storedName.length - nameLower.length) * 0.1;
      }
      
      // Word-based matching
      const nameWords = nameLower.split(/\s+/);
      const storedWords = storedName.split(/\s+/);
      const commonWords = nameWords.filter(word => storedWords.includes(word));
      score += commonWords.length * 2;
      
      if (score > 0) {
        matches.push({ name: storedName, id: nodeId, score });
      }
    }
    
    if (matches.length > 0) {
      matches.sort((a, b) => b.score - a.score);
      return matches[0].id;
    }
    
    return null;
  }
}
