import { Topic } from '../models/Topic';
import { UserTopic } from '../models/UserTopic';

interface Prerequisites {
  [key: string]: string[];
}

class RecommendationService {
  private static prerequisites: Prerequisites = {
    "Arrays": [],
    "Searching & Sorting": ["Arrays"],
    "Hashing": ["Searching & Sorting", "Arrays"],
    "LinkedLists": ["Arrays"],
    "Stacks": ["LinkedLists"],
    "Queues": ["LinkedLists"],
    "Recursion": ["Stacks"],
    "Backtracking": ["Recursion"],
    "Greedy": ["Searching & Sorting"],
    "DP": ["Recursion", "Backtracking", "Greedy"],
    "Trees": ["Recursion"],
    "BinaryTree": ["Trees"],
    "BST": ["BinaryTree"],
    "AVLTree": ["BST"],
    "RedBlackTree": ["BST"],
    "BTree": ["BinaryTree"],
    "BPlusTree": ["BTree"],
    "SegmentTree": ["Arrays", "Recursion"],
    "FenwickTree": ["Arrays"],
    "Heaps": ["Arrays"],
    "MinHeap": ["Heaps"],
    "MaxHeap": ["Heaps"],
    "Graphs": ["Trees", "DFS", "BFS", "DP"],
    "DFS": ["Graphs"],
    "BFS": ["Graphs"],
    "Dijkstra": ["Graphs", "Heaps"],
    "Kruskal": ["Graphs", "DisjointSet"],
    "Prim": ["Graphs", "Heaps"],
    "PriorityQueue": ["Heaps"],
    "Trie": ["Strings", "Hashing"],
    "Knapsack": ["DP"],
    "LCS": ["DP"],
    "SudokuSolver": ["Backtracking"],
    "TopologicalSort": ["Graphs", "DFS"],
    "BellmanFord": ["Graphs"],
    "FloydWarshall": ["Graphs"],
    "DisjointSet": ["Arrays"],
    "SlidingWindow": ["Arrays"],
    "TwoPointer": ["Arrays"],
    "PrefixSum": ["Arrays"],
    "NumberTheory": ["Math"],
    "GCD": ["NumberTheory"],
    "Sieve": ["NumberTheory"],
    "ModularExponentiation": ["NumberTheory"],
    "ChineseRemainderTheorem": ["NumberTheory"],
    "EulerTotient": ["NumberTheory"],
    "InclusionExclusion": ["NumberTheory"],
    "FastExponentiation": ["ModularExponentiation"],
    "BitManipulation": ["Arrays"],
    "DivideAndConquer": ["Recursion"],
    "MergeSort": ["DivideAndConquer"],
    "QuickSort": ["DivideAndConquer"],
    "BinarySearch": ["DivideAndConquer"],
    "ClosestPair": ["DivideAndConquer"],
    "StrassenMatrix": ["DivideAndConquer"],
    "Karatsuba": ["DivideAndConquer"],
    "BranchAndBound": ["Backtracking"],
    "NQueens": ["BranchAndBound"],
    "TSP": ["BranchAndBound"],
    "JobAssignment": ["BranchAndBound"],
    "Math": [],
    "Strings": ["Arrays"]
  };

  static async getNextTopics(knownTopics: string[]): Promise<string[]> {
    const nextTopics = new Set<string>();
    
    // For each known topic
    for (const topic of knownTopics) {
      // Find all topics that have this known topic as a prerequisite
      for (const [potentialNext, prereqs] of Object.entries(this.prerequisites)) {
        if (
          // The topic is not already known
          !knownTopics.includes(potentialNext) && 
          // All prerequisites are met
          prereqs.every(prereq => knownTopics.includes(prereq))
        ) {
          nextTopics.add(potentialNext);
        }
      }
    }

    return Array.from(nextTopics).sort();
  }

  static async generateRecommendations(userId: string, knownTopics: string[]) {
    try {
      console.log('Generating recommendations for user:', userId);
      console.log('Known topics:', knownTopics);
      
      // Get user's specific progress data
      const userProgress = await UserTopic.find({ userEmail: userId });
      console.log('User progress data:', userProgress.length, 'topics');
      
      // Get next possible topics based on prerequisites
      const nextTopics = await this.getNextTopics(knownTopics);
      console.log('Next topics based on prerequisites:', nextTopics);
      
      // Filter out topics that the user has already started or completed
      const userStartedTopics = userProgress.map(up => up.topicName);
      const availableTopics = nextTopics.filter(topic => !userStartedTopics.includes(topic));
      console.log('Available topics (excluding user progress):', availableTopics);
      
      // Get full topic details from database
      const topicDetails = await Topic.find({ name: { $in: availableTopics } });
      console.log('Topic details from database:', topicDetails.length, 'topics found for user:', userId);
      
      // Sort recommendations by difficulty
      const difficultyWeight = {
        'beginner': 1,
        'intermediate': 2,
        'advanced': 3
      };

      const recommendations = topicDetails.map(topic => {
        // Calculate personalized confidence based on user's learning pattern
        const userCompletedCount = userProgress.filter(up => up.status === 'completed').length;
        const userInProgressCount = userProgress.filter(up => up.status === 'in-progress').length;
        
        // Higher confidence if user has completed more topics
        let confidence = 0.8;
        if (userCompletedCount > 5) confidence = 0.9;
        if (userCompletedCount > 10) confidence = 0.95;
        
        // Lower confidence if user has many in-progress topics (might be overwhelmed)
        if (userInProgressCount > 3) confidence *= 0.8;
        
        return {
          topicId: topic._id,
          name: topic.name,
          description: topic.description,
          difficulty: topic.difficulty,
          estimatedTime: topic.estimatedTime,
          totalProblems: topic.totalProblems,
          prerequisites: topic.prerequisites,
          confidence: confidence,
          priority: topic.difficulty === 'beginner' ? 'high' : 
                   topic.difficulty === 'intermediate' ? 'medium' : 'low'
        };
      });

      console.log('Final recommendations for user:', userId, ':', recommendations);

      // Sort by difficulty (easier topics first)
      recommendations.sort((a, b) => 
        difficultyWeight[a.difficulty as keyof typeof difficultyWeight] - 
        difficultyWeight[b.difficulty as keyof typeof difficultyWeight]
      );

      return recommendations;
    } catch (error) {
      console.error('Error generating recommendations:', error);
      throw error;
    }
  }
}

export default RecommendationService; 