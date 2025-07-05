/**
 * Integrated Chat Handler Service for TypeScript
 * Complete port of Python integrated_chat_handler.py functionality
 */

import fs from 'fs/promises';
import path from 'path';
import { 
  UserProfile, 
  ChatMessage, 
  QueryAnalysis, 
  LearningIntents, 
  LearningGapAnalysis, 
  VideoRecommendation, 
  LearningSession, 
  ChatContext, 
  ChatResponse,
  GraphNode,
  UnknownQueriesLog,
  SpecificAspect
} from '../types/chat';
import { GraphAnalyzerService } from './graphAnalyzerService';
import { YouTubeFinderService, GroqResponseService } from './youtubeGroqService';

export class IntegratedChatHandlerService {
  private frontendPublicPath: string;
  private graphDataPath: string;
  private userProfilePath: string;
  private unknownQueriesLogPath: string;
  private learningSessionsPath: string;

  private graphAnalyzer: GraphAnalyzerService | null = null;
  private youtubeFinder: YouTubeFinderService | null = null;
  private groqService: GroqResponseService;
  private learningSessions: Map<string, LearningSession> = new Map();

  constructor() {
    // Initialize paths
    const currentDir = __dirname;
    this.frontendPublicPath = path.join(currentDir, '..', '..', 'frontend', 'public');
    this.graphDataPath = path.join(currentDir, '..', 'queryHandling', 'static', 'graph', 'graph_data.json');
    this.userProfilePath = path.join(this.frontendPublicPath, 'user_profile.json');
    this.unknownQueriesLogPath = path.join(currentDir, '..', 'queryHandling', 'unknown_queries.json');
    this.learningSessionsPath = path.join(currentDir, '..', 'queryHandling', 'learning_sessions.json');

    // Initialize Groq service immediately to satisfy TypeScript
    this.groqService = new GroqResponseService();

    // Initialize other services asynchronously
    this.initializeServices();
    this.loadLearningSessions();
  }

  /**
   * Initialize all sub-services
   */
  private async initializeServices(): Promise<void> {
    try {
      // Initialize graph analyzer
      this.graphAnalyzer = new GraphAnalyzerService(this.graphDataPath);

      // Initialize YouTube finder
      this.youtubeFinder = new YouTubeFinderService();

      // Initialize Groq service
      this.groqService = new GroqResponseService();

    } catch (error) {
      console.error('Error initializing services:', error);
      this.graphAnalyzer = null;
      this.youtubeFinder = null;
      // Still initialize Groq service as fallback
      this.groqService = new GroqResponseService();
    }
  }

  /**
   * Load user profile from frontend/public directory
   */
  public async loadUserProfile(): Promise<UserProfile | null> {
    try {
      // First try to find the most recent user_profile_*.json file
      const publicDir = await fs.readdir(this.frontendPublicPath);
      const profileFiles = publicDir
        .filter(file => file.startsWith('user_profile_') && file.endsWith('.json'))
        .map(file => path.join(this.frontendPublicPath, file));

      if (profileFiles.length > 0) {
        // Get the most recent file
        let latestFile = profileFiles[0];
        let latestTime = 0;

        for (const file of profileFiles) {
          const stats = await fs.stat(file);
          if (stats.mtime.getTime() > latestTime) {
            latestTime = stats.mtime.getTime();
            latestFile = file;
          }
        }

        const data = await fs.readFile(latestFile, 'utf-8');
        return JSON.parse(data) as UserProfile;
      }

      // Fallback to user_profile.json
      try {
        const data = await fs.readFile(this.userProfilePath, 'utf-8');
        return JSON.parse(data) as UserProfile;
      } catch {
        // File doesn't exist
      }

      console.log('No user profile found');
      return null;

    } catch (error) {
      console.error('Error loading user profile:', error);
      return null;
    }
  }

  /**
   * Analyze user query and determine response strategy
   */
  public analyzeUserQuery(
    query: string, 
    userProfile: UserProfile, 
    chatHistory: ChatMessage[] = []
  ): QueryAnalysis {
    const queryLower = query.toLowerCase();

    // Detect learning flow intents
    const learningIntents = this.detectLearningIntents(queryLower, chatHistory);

    // Check if this is small talk/general conversation
    const smallTalkKeywords = [
      'hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening',
      'how are you', 'what\'s up', 'thanks', 'thank you', 'bye', 'goodbye',
      'nice', 'cool', 'awesome', 'great', 'who are you', 'what can you do'
    ];

    let isSmallTalk = false;
    for (const keyword of smallTalkKeywords) {
      if (queryLower.includes(keyword)) {
        if (queryLower.trim().length <= 20 && 
            ['hello', 'hi', 'hey', 'thanks', 'bye'].some(greet => queryLower.includes(greet))) {
          isSmallTalk = true;
          break;
        } else if (['how are you', 'what\'s up', 'who are you', 'what can you do'].includes(keyword)) {
          isSmallTalk = true;
          break;
        }
      }
    }

    // Override small talk detection for DSA-related queries
    const dsaIndicators = [
      'learn', 'algorithm', 'data structure', 'array', 'tree', 'graph', 'sort', 'search',
      'stack', 'queue', 'heap', 'hash', 'linked list', 'binary', 'dynamic programming',
      'recursion', 'complexity', 'big o', 'time complexity', 'space complexity',
      'what is', 'what are', 'how to', 'explain', 'understand', 'implement', 'code',
      'example', 'tutorial', 'difference between', 'comparison', 'vs', 'versus'
    ];

    if (dsaIndicators.some(indicator => queryLower.includes(indicator))) {
      isSmallTalk = false;
    }

    // Extract known concepts from user profile
    const trulyKnownTopics: string[] = [];
    const knownSubtopics: string[] = [];

    if (userProfile.knownConcepts && this.graphAnalyzer) {
      const topicsData = userProfile.knownConcepts.topics || [];
      const graphData = this.graphAnalyzer.getGraphData();
      
      if (graphData) {
        for (const topicData of topicsData) {
          const topicName = topicData.name;
          const userSubtopics = new Set(
            topicData.subtopics.map(sub => sub.name.toLowerCase())
          );

          // Find this topic in the graph
          const topicNode = graphData.nodes.find(
            node => node.type === 'topic' && node.name.toLowerCase() === topicName.toLowerCase()
          );

          if (topicNode) {
            // Get all subtopics for this topic from the graph
            const requiredSubtopics = new Set(
              graphData.nodes
                .filter(node => node.type === 'subtopic' && node.parent_topic === topicNode.id)
                .map(node => node.name.toLowerCase())
            );

            // Check if user knows all required subtopics
            if (requiredSubtopics.size > 0 && this.isSuperset(userSubtopics, requiredSubtopics)) {
              trulyKnownTopics.push(topicName);
            }

            // Add known subtopics
            knownSubtopics.push(...topicData.subtopics.map(sub => sub.name));
          }
        }
      }
    }

    // Determine if query is about a specific DSA topic/concept
    const mentionedTopics: GraphNode[] = [];
    const mentionedSubtopics: GraphNode[] = [];

    if (this.graphAnalyzer && !isSmallTalk) {
      const foundNodes = this.graphAnalyzer.searchNodes(query);
      for (const node of foundNodes) {
        if (node.type === 'topic') {
          mentionedTopics.push(node);
        } else {
          mentionedSubtopics.push(node);
        }
      }
    }

    return {
      query,
      is_small_talk: isSmallTalk,
      learning_intent: learningIntents,
      truly_known_topics: trulyKnownTopics,
      known_subtopics: knownSubtopics,
      mentioned_topics: mentionedTopics,
      mentioned_subtopics: mentionedSubtopics,
      is_graph_topic: mentionedTopics.length > 0 || mentionedSubtopics.length > 0
    };
  }

  /**
   * Check if set A is a superset of set B
   */
  private isSuperset(setA: Set<string>, setB: Set<string>): boolean {
    for (const elem of setB) {
      if (!setA.has(elem)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Detect user intents related to learning flow progression
   */
  private detectLearningIntents(query: string, chatHistory: ChatMessage[]): LearningIntents {
    // Limit chat history processing for performance
    const limitedHistory = chatHistory.slice(-3);

    const intents: LearningIntents = {
      wants_next_topic: false,
      confirms_understanding: false,
      needs_more_explanation: false,
      wants_to_complete_topic: false,
      satisfied_with_topic: false,
      wants_confirmation: false,
      says_no_need_help: false
    };

    // Intent patterns
    const patterns = {
      next_topic: [
        'next topic', 'next step', 'what\'s next', 'continue', 'move on', 'proceed',
        'go to next', 'advance', 'ready for next', 'next lesson'
      ],
      understanding: [
        'yes', 'got it', 'understand', 'clear', 'makes sense', 'i know', 'learned',
        'understood', 'ok', 'okay', 'right', 'correct', 'good', 'thanks',
        'i understand this topic', 'i get it'
      ],
      more_explanation: [
        'no', 'don\'t understand', 'confused', 'explain more', 'not clear',
        'can you explain', 'i don\'t get it', 'more details', 'elaborate',
        'need help', 'still confused', 'more examples', 'i need more explanation'
      ],
      completion: [
        'i\'m done', 'completed', 'finished', 'mastered', 'ready to move on',
        'i know this now', 'learned this', 'understand this topic'
      ],
      satisfaction: [
        'satisfied', 'good enough', 'ready', 'confident', 'comfortable',
        'i am satisfied', 'add to profile', 'add to my profile',
        'i am satisfied with this topic', 'ready to add it to my profile'
      ],
      confirmation: [
        'yes', 'yeah', 'yep', 'sure', 'of course', 'definitely', 'absolutely'
      ],
      no_help: [
        'no', 'nope', 'not really', 'i\'m good', 'no thanks', 'no need'
      ]
    };

    // Check patterns
    for (const pattern of patterns.next_topic) {
      if (query.includes(pattern)) {
        intents.wants_next_topic = true;
        break;
      }
    }

    for (const pattern of patterns.understanding) {
      if (query.includes(pattern)) {
        intents.confirms_understanding = true;
        break;
      }
    }

    for (const pattern of patterns.more_explanation) {
      if (query.includes(pattern)) {
        intents.needs_more_explanation = true;
        break;
      }
    }

    for (const pattern of patterns.completion) {
      if (query.includes(pattern)) {
        intents.wants_to_complete_topic = true;
        break;
      }
    }

    for (const pattern of patterns.satisfaction) {
      if (query.includes(pattern)) {
        intents.satisfied_with_topic = true;
        break;
      }
    }

    for (const pattern of patterns.confirmation) {
      if (query.includes(pattern)) {
        intents.wants_confirmation = true;
        break;
      }
    }

    for (const pattern of patterns.no_help) {
      if (query.includes(pattern)) {
        intents.says_no_need_help = true;
        break;
      }
    }

    return intents;
  }

  /**
   * Find learning gaps using graph analyzer
   */
  public findLearningGaps(queryAnalysis: QueryAnalysis, userProfile: UserProfile): LearningGapAnalysis {
    if (!this.graphAnalyzer) {
      return { gaps: [], learning_path: [], known_concepts: [] };
    }

    try {
      // Get user's truly known concepts
      const knownTopicNames = queryAnalysis.truly_known_topics;
      const knownSubtopicNames = queryAnalysis.known_subtopics;

      // Convert to graph node IDs
      const knownConceptIds: string[] = [];

      // Add truly known topics
      for (const topicName of knownTopicNames) {
        const topicId = this.graphAnalyzer.getTopicIdByName(topicName);
        if (topicId) {
          knownConceptIds.push(topicId);
        }
      }

      // Add known subtopics
      for (const subtopicName of knownSubtopicNames) {
        const subtopicId = this.graphAnalyzer.getSubtopicIdByName(subtopicName);
        if (subtopicId) {
          knownConceptIds.push(subtopicId);
        }
      }

      // If query mentions specific topics, find path to those topics
      const targetTopics = queryAnalysis.mentioned_topics;
      const targetSubtopics = queryAnalysis.mentioned_subtopics;

      if (targetTopics.length > 0 || targetSubtopics.length > 0) {
        // Use the first mentioned topic/subtopic as target
        const targetNode = targetTopics.length > 0 ? targetTopics[0] : targetSubtopics[0];
        const targetId = targetNode.id;

        try {
          // Find optimal learning path
          const learningPathResult = this.graphAnalyzer.findOptimalLearningPath(
            knownConceptIds,
            targetId
          );
          const learningPath = learningPathResult.path || [];

          // Find gaps using subtopic analysis
          const gapsResult = this.graphAnalyzer.analyzeSubtopicLearningGaps(
            knownConceptIds,
            targetId
          );
          const gaps = [
            ...gapsResult.missing_prerequisites,
            ...gapsResult.recommended_subtopics
          ];

          // Convert IDs back to names for frontend display
          const gapNames: string[] = [];
          for (const gapId of gaps.slice(0, 5)) {
            const gapNode = this.graphAnalyzer.getNodeById(gapId);
            if (gapNode) {
              gapNames.push(gapNode.name);
            }
          }

          return {
            gaps: gapNames,
            learning_path: learningPath.slice(0, 7),
            target_topic: targetNode,
            known_concepts: [...knownTopicNames, ...knownSubtopicNames]
          };

        } catch (methodError) {
          console.error('Error calling graph analyzer methods:', methodError);
          return {
            gaps: [],
            learning_path: [],
            target_topic: targetNode,
            known_concepts: [...knownTopicNames, ...knownSubtopicNames]
          };
        }
      }

      // General gap analysis for comprehensive learning
      try {
        const comprehensiveResult = this.graphAnalyzer.analyzeLearningGapWithRealGraph(
          knownTopicNames,
          "General Learning"
        );
        const gapNames = comprehensiveResult.recommended_topics.slice(0, 5);

        return {
          gaps: gapNames,
          learning_path: [],
          suggestions: gapNames.slice(0, 3),
          known_concepts: [...knownTopicNames, ...knownSubtopicNames]
        };

      } catch (compError) {
        console.error('Error in comprehensive gap analysis:', compError);
        return {
          gaps: [],
          learning_path: [],
          suggestions: [],
          known_concepts: [...knownTopicNames, ...knownSubtopicNames]
        };
      }

    } catch (error) {
      console.error('Error in gap analysis:', error);
      return { gaps: [], learning_path: [], known_concepts: [] };
    }
  }

  /**
   * Truncate text to save tokens while preserving meaning
   */
  private truncateForTokens(text: string, maxLength: number = 300): string {
    if (text.length <= maxLength) {
      return text;
    }

    // Try to truncate at word boundary
    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > maxLength * 0.8) {
      return truncated.substring(0, lastSpace) + "...";
    } else {
      return truncated + "...";
    }
  }

  /**
   * Generate response using Groq API with optimized token usage
   */
  public async generateGroqResponse(query: string, context: ChatContext): Promise<string> {
    try {
      // Handle small talk with direct responses
      if (context.is_small_talk) {
        return this.generateFallbackResponse(query, context);
      }

      // Optimized system prompt
      const systemPrompt = "You are a DSA tutor. Provide clear, concise explanations with examples. Be encouraging and educational.";

      // Build concise user context
      const userContextParts: string[] = [];

      if (context.target_topic) {
        const topicName = typeof context.target_topic === 'object' && 'name' in context.target_topic 
          ? context.target_topic.name 
          : String(context.target_topic);
        userContextParts.push(`Topic: ${this.truncateForTokens(topicName, 30)}`);
      }

      if (context.gaps && context.gaps.length > 0) {
        const gaps = context.gaps.slice(0, 2);
        const gapsStr = gaps.join(', ');
        userContextParts.push(`Gaps: ${this.truncateForTokens(gapsStr, 50)}`);
      }

      if (context.learning_path && context.learning_path.length > 0) {
        const path = context.learning_path.slice(0, 3);
        const pathStr = path.join(' → ');
        userContextParts.push(`Path: ${this.truncateForTokens(pathStr, 60)}`);
      }

      if (context.known_concepts && context.known_concepts.length > 0) {
        const known = context.known_concepts.slice(0, 2);
        const knownStr = known.join(', ');
        userContextParts.push(`Knows: ${this.truncateForTokens(knownStr, 40)}`);
      }

      // Create concise prompt
      let prompt = query;
      if (userContextParts.length > 0) {
        const contextStr = userContextParts.join(' | ');
        const truncatedContext = this.truncateForTokens(contextStr, 200);
        prompt = `${query}\n\nContext: ${truncatedContext}`;
      }

      // Use Groq service
      const response = await this.groqService.generateResponse(prompt, systemPrompt);

      // Check if response indicates an error
      if (response.startsWith("Error:")) {
        console.log(`Groq API error: ${response}`);
        return this.generateFallbackResponse(query, context);
      }

      return response.trim();

    } catch (error) {
      console.error('Error generating Groq response:', error);
      return this.generateFallbackResponse(query, context);
    }
  }

  /**
   * Generate comprehensive fallback response when Groq API is not available
   */
  private generateFallbackResponse(query: string, context: ChatContext): string {
    const responseParts: string[] = [];

    // Handle small talk
    if (context.is_small_talk) {
      const smallTalkResponses: { [key: string]: string } = {
        'hello': "Hello! I'm your DSA learning assistant. How can I help you today?",
        'hi': "Hi there! Ready to dive into some data structures and algorithms?",
        'how are you': "I'm doing great and ready to help you learn DSA! What would you like to explore?",
        'thanks': "You're welcome! Feel free to ask me anything about data structures and algorithms.",
        'bye': "Goodbye! Keep practicing those algorithms. See you next time!",
        'who are you': "I'm your AI DSA tutor! I can help you learn data structures, algorithms, find learning gaps, and recommend resources.",
        'what can you do': "I can help you with DSA concepts, analyze your learning gaps, suggest learning paths, and find educational videos. Just ask me about any topic!",
        'help': "I'm here to help! You can ask me about specific DSA topics like arrays, trees, sorting algorithms, or ask for learning recommendations based on your profile."
      };

      const queryLower = query.toLowerCase();
      for (const [keyword, response] of Object.entries(smallTalkResponses)) {
        if (queryLower.includes(keyword)) {
          return response;
        }
      }

      return "Hello! I'm your DSA learning assistant. Feel free to ask me about any data structures or algorithms topic!";
    }

    // Enhanced DSA explanations
    const topicExplanations: { [key: string]: string } = {
      'array': "Arrays are linear data structures that store elements in contiguous memory locations. They allow random access to elements using indices and are fundamental to many algorithms. Key operations include insertion, deletion, traversal, and searching.",
      'searching': "Searching algorithms help find specific elements in data structures. Common types include linear search (O(n)) which checks each element sequentially, and binary search (O(log n)) which works on sorted arrays by repeatedly dividing the search space in half.",
      'sorting': "Sorting algorithms arrange elements in a specific order. Popular algorithms include bubble sort, insertion sort, merge sort, and quick sort. Each has different time complexities and use cases.",
      'tree': "Trees are hierarchical data structures with a root node and child nodes. They're used for efficient searching, sorting, and representing hierarchical data. Common types include binary trees, BSTs, and AVL trees.",
      'graph': "Graphs consist of vertices (nodes) and edges (connections). They model relationships between entities and are used in networking, social media, and pathfinding algorithms.",
      'stack': "Stacks follow the Last-In-First-Out (LIFO) principle. They support push (add) and pop (remove) operations. Used in function calls, expression evaluation, and undo operations.",
      'queue': "Queues follow the First-In-First-Out (FIFO) principle. They support enqueue (add) and dequeue (remove) operations. Used in scheduling, breadth-first search, and buffering.",
      'hash': "Hash tables use hash functions to map keys to values, providing O(1) average-case lookup time. They handle collisions through chaining or open addressing.",
      'linked list': "Linked lists store elements in nodes, where each node contains data and a reference to the next node. They allow dynamic size and efficient insertion/deletion.",
      'dynamic programming': "Dynamic programming solves complex problems by breaking them into simpler subproblems and storing results to avoid redundant calculations.",
      'recursion': "Recursion involves functions calling themselves with modified parameters. It's useful for problems that can be broken down into similar smaller problems.",
      'divide and conquer': "This approach divides problems into smaller subproblems, solves them independently, and combines results. Examples include merge sort and quick sort."
    };

    // Generate detailed explanation based on target topic
    if (context.target_topic) {
      const topic = context.target_topic;
      const topicName = typeof topic === 'object' && 'name' in topic ? topic.name : String(topic);
      const topicNameLower = topicName.toLowerCase();

      // Find matching explanation
      let explanation: string | null = null;
      for (const [key, exp] of Object.entries(topicExplanations)) {
        if (topicNameLower.includes(key)) {
          explanation = exp;
          break;
        }
      }

      if (explanation) {
        responseParts.push(`📚 **${topicName}**: ${explanation}`);
      } else {
        responseParts.push(`Great question about **${topicName}**! This is an important concept in data structures and algorithms.`);
      }
    }

    // Add learning path information
    if (context.learning_path && context.learning_path.length > 0) {
      const path = context.learning_path.slice(0, 5);
      responseParts.push(`🛤️ **Suggested learning path**: ${path.join(' → ')}`);
    }

    // Add gap analysis
    if (context.gaps && context.gaps.length > 0) {
      const gaps = context.gaps.slice(0, 3);
      responseParts.push(`📋 **Focus areas for you**: ${gaps.join(', ')}`);
    }

    // Add foundation knowledge
    if (context.known_concepts && context.known_concepts.length > 0) {
      const known = context.known_concepts.slice(0, 3);
      responseParts.push(`✅ **Great foundation! You already know**: ${known.join(', ')}`);
    }

    // Add specific tips based on query content
    const queryLower = query.toLowerCase();
    if (queryLower.includes('time complexity') || queryLower.includes('big o')) {
      responseParts.push("⏱️ **Time Complexity Tip**: Always analyze the worst-case scenario and look for nested loops or recursive calls.");
    } else if (queryLower.includes('space complexity')) {
      responseParts.push("💾 **Space Complexity Tip**: Consider the extra memory used by your algorithm, including recursive call stacks.");
    } else if (queryLower.includes('interview')) {
      responseParts.push("🎯 **Interview Tip**: Practice explaining your thought process and always test with edge cases.");
    }

    // Fallback based on query keywords
    if (responseParts.length === 0) {
      if (queryLower.includes('sort')) {
        responseParts.push("🔄 **Sorting**: Essential for organizing data efficiently. Start with simple algorithms like bubble sort, then move to more efficient ones like merge sort and quick sort.");
      } else if (queryLower.includes('search')) {
        responseParts.push("🔍 **Searching**: Master linear search first, then binary search for sorted data. Understanding these fundamentals opens doors to more advanced algorithms.");
      } else if (queryLower.includes('array')) {
        responseParts.push("📊 **Arrays**: The foundation of many data structures. Master traversal, insertion, deletion, and searching before moving to more complex topics.");
      } else {
        responseParts.push("🚀 **Let's learn together!** I'll help you understand this concept step by step with practical examples and clear explanations.");
      }
    }

    return responseParts.join('\n\n');
  }

  /**
   * Get YouTube video recommendations
   */
  public async getVideoRecommendations(query: string, context: ChatContext): Promise<VideoRecommendation[]> {
    if (!this.youtubeFinder) {
      return [];
    }

    try {
      // Determine search terms based on context
      const searchTerms: string[] = [];

      if (context.target_topic) {
        const topicName = typeof context.target_topic === 'object' && 'name' in context.target_topic 
          ? context.target_topic.name 
          : String(context.target_topic);
        searchTerms.push(topicName);
      }

      if (context.gaps) {
        const gaps = context.gaps.slice(0, 2);
        searchTerms.push(...gaps);
      }

      if (searchTerms.length === 0) {
        // Extract key terms from the query
        const queryWords = query.toLowerCase().split(/\s+/);
        const dsaKeywords = [
          'array', 'linked list', 'stack', 'queue', 'tree', 'graph',
          'sorting', 'searching', 'dynamic programming', 'recursion'
        ];
        const foundKeywords = queryWords.filter(word => dsaKeywords.includes(word));
        
        if (foundKeywords.length > 0) {
          searchTerms.push(...foundKeywords);
        } else {
          searchTerms.push(query);
        }
      }

      // Get videos for each search term
      const allVideos: VideoRecommendation[] = [];
      for (const term of searchTerms.slice(0, 2)) {
        const videos = await this.youtubeFinder.getVideos(term);
        const formattedVideos = this.youtubeFinder.formatVideosForFrontend(videos);
        allVideos.push(...formattedVideos);
      }

      return allVideos.slice(0, 5); // Limit to 5 videos total

    } catch (error) {
      console.error('Error getting video recommendations:', error);
      return [];
    }
  }

  /**
   * Log unknown queries for future analysis
   */
  public async logUnknownQuery(query: string, timestamp: string): Promise<void> {
    try {
      let logData: UnknownQueriesLog;
      
      // Load existing log or create new one
      try {
        const data = await fs.readFile(this.unknownQueriesLogPath, 'utf-8');
        logData = JSON.parse(data);
      } catch {
        logData = { queries: [] };
      }

      // Add new query
      logData.queries.push({
        query,
        timestamp,
        processed: false
      });

      // Save updated log
      await fs.writeFile(this.unknownQueriesLogPath, JSON.stringify(logData, null, 2));

    } catch (error) {
      console.error('Error logging unknown query:', error);
    }
  }

  /**
   * Load learning sessions from file
   */
  private async loadLearningSessions(): Promise<void> {
    try {
      const data = await fs.readFile(this.learningSessionsPath, 'utf-8');
      const sessionsObj = JSON.parse(data);
      
      // Convert object to Map
      this.learningSessions.clear();
      for (const [userId, session] of Object.entries(sessionsObj)) {
        this.learningSessions.set(userId, session as LearningSession);
      }
    } catch (error) {
      console.error('Error loading learning sessions:', error);
      this.learningSessions.clear();
    }
  }

  /**
   * Save learning sessions to file
   */
  private async saveLearningSession(): Promise<void> {
    try {
      // Convert Map to object
      const sessionsObj: { [key: string]: LearningSession } = {};
      for (const [userId, session] of this.learningSessions.entries()) {
        sessionsObj[userId] = session;
      }

      await fs.writeFile(this.learningSessionsPath, JSON.stringify(sessionsObj, null, 2));
    } catch (error) {
      console.error('Error saving learning sessions:', error);
    }
  }

  /**
   * Get or create learning session for user
   */
  public getLearningSession(userId: string): LearningSession {
    if (!this.learningSessions.has(userId)) {
      const newSession: LearningSession = {
        current_path: [],
        completed_topics: [],
        current_step_index: 0,
        target_topic: null,
        session_started: new Date().toISOString(),
        last_updated: new Date().toISOString()
      };
      this.learningSessions.set(userId, newSession);
      this.saveLearningSession();
    }
    return this.learningSessions.get(userId)!;
  }

  /**
   * Update learning session for user
   */
  public updateLearningSession(userId: string, updates: Partial<LearningSession>): void {
    const session = this.getLearningSession(userId);
    Object.assign(session, updates);
    session.last_updated = new Date().toISOString();
    this.saveLearningSession();
  }

  /**
   * Mark current topic as completed and advance to next
   */
  public completeCurrentTopic(userId: string): boolean {
    const session = this.getLearningSession(userId);
    if (session.current_path.length > 0 && session.current_step_index < session.current_path.length) {
      const completedTopic = session.current_path[session.current_step_index];
      session.completed_topics.push({
        topic: completedTopic,
        completed_at: new Date().toISOString()
      });
      session.current_step_index += 1;
      this.saveLearningSession();
      return true;
    }
    return false;
  }

  /**
   * Add completed topic to user profile
   */
  public async addTopicToUserProfile(topicName: string): Promise<boolean> {
    try {
      const userProfile = await this.loadUserProfile();
      if (!userProfile) {
        return false;
      }

      // Add topic to known concepts
      if (!userProfile.knownConcepts) {
        userProfile.knownConcepts = { topics: [], totalTopics: 0, totalSubtopics: 0 };
      }

      // Check if topic already exists
      const existingTopics = userProfile.knownConcepts.topics.map(t => t.name.toLowerCase());
      if (!existingTopics.includes(topicName.toLowerCase())) {
        // Find topic details from graph
        let topicData = null;
        if (this.graphAnalyzer) {
          const topics = this.graphAnalyzer.getAllTopics();
          const foundTopic = topics.find(node => node.name.toLowerCase() === topicName.toLowerCase());
          
          if (foundTopic) {
            topicData = {
              id: foundTopic.id,
              name: foundTopic.name,
              type: 'topic' as const,
              subtopics: [] // Start with empty subtopics
            };
          }
        }

        if (topicData) {
          userProfile.knownConcepts.topics.push(topicData);
          userProfile.knownConcepts.totalTopics += 1;

          // Save updated profile
          const publicDir = await fs.readdir(this.frontendPublicPath);
          const profileFiles = publicDir
            .filter(file => file.startsWith('user_profile_') && file.endsWith('.json'))
            .map(file => path.join(this.frontendPublicPath, file));

          if (profileFiles.length > 0) {
            // Get the most recent file
            let latestFile = profileFiles[0];
            let latestTime = 0;

            for (const file of profileFiles) {
              const stats = await fs.stat(file);
              if (stats.mtime.getTime() > latestTime) {
                latestTime = stats.mtime.getTime();
                latestFile = file;
              }
            }

            await fs.writeFile(latestFile, JSON.stringify(userProfile, null, 2));
            return true;
          }
        }
      }
      return false;
    } catch (error) {
      console.error('Error adding topic to user profile:', error);
      return false;
    }
  }

  /**
   * Main handler for chat messages with learning flow support
   */
  public async handleChatMessage(
    message: string, 
    chatHistory: ChatMessage[] = [], 
    userId: string = "default"
  ): Promise<ChatResponse> {
    const timestamp = new Date().toISOString();

    // Limit chat history to last 3-4 messages for token optimization
    const limitedChatHistory = chatHistory.slice(-4);

    try {
      // Load user profile
      const userProfile = await this.loadUserProfile();
      if (!userProfile) {
        return {
          response: "I couldn't find your user profile. Please complete the onboarding process first to get personalized learning recommendations.",
          videos: [],
          analysis: { error: 'No user profile found' }
        };
      }

      // Get learning session
      const learningSession = this.getLearningSession(userId);

      // Analyze the query with limited chat history context
      const queryAnalysis = this.analyzeUserQuery(message, userProfile, limitedChatHistory);

      // Handle learning flow intents first
      if (queryAnalysis.learning_intent.satisfied_with_topic) {
        return await this.handleTopicCompletion(userId, learningSession, queryAnalysis);
      }

      if (queryAnalysis.learning_intent.wants_next_topic || queryAnalysis.learning_intent.confirms_understanding) {
        return await this.handleNextTopicRequest(userId, learningSession, queryAnalysis);
      }

      if (queryAnalysis.learning_intent.needs_more_explanation) {
        return await this.handleMoreExplanationRequest(message, learningSession, queryAnalysis, limitedChatHistory);
      }

      if (queryAnalysis.learning_intent.wants_to_complete_topic) {
        return await this.handleTopicCompletion(userId, learningSession, queryAnalysis);
      }

      if (queryAnalysis.learning_intent.says_no_need_help) {
        return await this.handleNoResponse(userId, learningSession, queryAnalysis, limitedChatHistory);
      }

      // Handle small talk
      if (queryAnalysis.is_small_talk) {
        const response = await this.generateGroqResponse(message, { is_small_talk: true });
        return {
          response,
          videos: [],
          analysis: {
            small_talk: true,
            known_topics: queryAnalysis.truly_known_topics
          }
        };
      }

      // Check if this is a DSA topic we have in our graph
      if (queryAnalysis.is_graph_topic) {
        // Use graph-based analysis
        const gapAnalysis = this.findLearningGaps(queryAnalysis, userProfile);

        // Update learning session with new path
        const learningPath = gapAnalysis.learning_path || [];
        if (learningPath.length > 0) {
          this.updateLearningSession(userId, {
            current_path: learningPath,
            current_step_index: 0,
            target_topic: gapAnalysis.target_topic?.name || null
          });
        }

        // Identify the next step (first not-yet-known node in the path)
        const knownConcepts = new Set(gapAnalysis.known_concepts || []);
        let nextStep: string | null = null;
        for (const step of learningPath) {
          if (!knownConcepts.has(step)) {
            nextStep = step;
            break;
          }
        }

        // Prepare context for Groq and YouTube for the next step
        const nextStepContext: ChatContext = {
          target_topic: nextStep ? { name: nextStep } : gapAnalysis.target_topic,
          gaps: gapAnalysis.gaps,
          learning_path: learningPath,
          known_concepts: Array.from(knownConcepts),
          is_small_talk: false
        };

        // Generate explanation and videos for the next step
        const nextStepExplanation = nextStep 
          ? await this.generateGroqResponse(nextStep, nextStepContext) 
          : null;
        const nextStepVideos = nextStep 
          ? await this.getVideoRecommendations(nextStep, nextStepContext) 
          : [];

        // Generate concise overall response - focus on the topic and path
        const targetTopic = gapAnalysis.target_topic;
        let response: string;
        if (targetTopic) {
          response = `Great question about ${targetTopic.name}! `;
          if (learningPath.length > 0) {
            response += `Here's your suggested learning path: ${learningPath.join(' → ')}`;
            if (nextStep) {
              response += `\n\n🎯 **Let's start with: ${nextStep}**`;
              response += `\n\nAfter you understand ${nextStep}, just say 'next topic' or 'I understand' to continue to the next step!`;
            }
          }
          if (knownConcepts.size > 0) {
            const knownArray = Array.from(knownConcepts).slice(0, 3);
            response += `\n\nI see you already know: ${knownArray.join(', ')}. Great foundation!`;
          }
        } else {
          response = "Let me help you with your DSA learning journey!";
        }

        return {
          response,
          analysis: {
            gaps: gapAnalysis.gaps,
            learning_path: learningPath,
            next_step: nextStep || undefined,
            next_step_explanation: nextStepExplanation || undefined,
            next_step_videos: nextStepVideos,
            known_topics: queryAnalysis.truly_known_topics,
            mentioned_topics: queryAnalysis.mentioned_topics.map(t => t.name),
            graph_based: true,
            learning_session_active: true,
            progress_tracking: true
          }
        };
      } else {
        // Dynamic handling for topics not in our graph
        await this.logUnknownQuery(message, timestamp);

        // Use Groq to generate response without graph context
        const context: ChatContext = {
          dynamic_query: true,
          known_concepts: queryAnalysis.truly_known_topics,
          is_small_talk: false
        };
        const response = await this.generateGroqResponse(message, context);

        // Get video recommendations based on the query itself
        const videos = await this.getVideoRecommendations(message, context);

        return {
          response,
          videos,
          analysis: {
            dynamic: true,
            logged: true,
            known_topics: queryAnalysis.truly_known_topics
          }
        };
      }

    } catch (error) {
      console.error('Error handling chat message:', error);
      return {
        response: "I'm sorry, there was an error processing your request. Please try again.",
        videos: [],
        analysis: { error: String(error) }
      };
    }
  }

  /**
   * Handle user request to move to next topic in learning path
   */
  private async handleNextTopicRequest(
    userId: string, 
    learningSession: LearningSession, 
    queryAnalysis: QueryAnalysis
  ): Promise<ChatResponse> {
    const currentPath = learningSession.current_path;
    const currentIndex = learningSession.current_step_index;

    if (currentPath.length === 0) {
      return {
        response: "You don't have an active learning path. Please ask about a topic to get started!",
        videos: [],
        analysis: { no_active_path: true }
      };
    }

    // Mark current topic as completed and move to next
    if (currentIndex < currentPath.length) {
      const completedTopic = currentPath[currentIndex];
      this.completeCurrentTopic(userId);

      // Check if there's a next topic
      const updatedSession = this.getLearningSession(userId);
      const newIndex = updatedSession.current_step_index;
      
      if (newIndex < currentPath.length) {
        const nextTopic = currentPath[newIndex];

        // Generate explanation for next topic
        const context: ChatContext = {
          target_topic: { name: nextTopic },
          learning_path: currentPath,
          current_progress: `${newIndex + 1}/${currentPath.length}`,
          is_small_talk: false
        };

        const explanation = await this.generateGroqResponse(`Explain ${nextTopic} in detail`, context);
        const videos = await this.getVideoRecommendations(nextTopic, context);

        const response = `🎉 Great! You've completed **${completedTopic}**!\n\n` +
          `🎯 **Next Topic: ${nextTopic}** (Step ${newIndex + 1}/${currentPath.length})\n\n` +
          "When you're ready to continue or if you understand this topic, just say 'next topic' or 'I understand'!";
        
        return {
          response,
          analysis: {
            topic_completed: completedTopic,
            next_step: nextTopic,
            next_step_explanation: explanation,
            next_step_videos: videos,
            progress: `${newIndex + 1}/${currentPath.length}`,
            learning_path: currentPath,
            topic_progression: true,
            learning_session_active: true
          }
        };
      } else {
        // Path completed
        const targetTopic = learningSession.target_topic;
        if (targetTopic) {
          await this.addTopicToUserProfile(targetTopic);
        }

        return {
          response: `🎉 **Congratulations!** You've completed your learning path and mastered **${targetTopic}**!\n\n✅ This topic has been added to your profile.\n\n🚀 What would you like to learn next?`,
          analysis: {
            path_completed: true,
            mastered_topic: targetTopic || undefined,
            profile_updated: true
          }
        };
      }
    }

    return {
      response: "There seems to be an issue with your learning progress. Let's start fresh - what would you like to learn?",
      videos: [],
      analysis: { progress_error: true }
    };
  }

  /**
   * Handle user request for more explanation
   */
  private async handleMoreExplanationRequest(
    message: string, 
    learningSession: LearningSession, 
    queryAnalysis: QueryAnalysis, 
    chatHistory: ChatMessage[]
  ): Promise<ChatResponse> {
    const currentPath = learningSession.current_path;
    const currentIndex = learningSession.current_step_index;

    if (currentPath.length > 0 && currentIndex < currentPath.length) {
      const currentTopic = currentPath[currentIndex];

      // Check if user is asking about a specific aspect
      const specificAspects: { [key: string]: string[] } = {
        [SpecificAspect.EXAMPLE]: ['example', 'examples', 'sample', 'demo'],
        [SpecificAspect.IMPLEMENTATION]: ['code', 'implement', 'programming', 'syntax'],
        [SpecificAspect.USE_CASE]: ['when to use', 'use case', 'application', 'practical'],
        [SpecificAspect.COMPARISON]: ['difference', 'compare', 'vs', 'versus'],
        [SpecificAspect.STEP_BY_STEP]: ['step', 'process', 'how', 'procedure']
      };

      let requestedAspect: string | null = null;
      for (const [aspect, keywords] of Object.entries(specificAspects)) {
        if (keywords.some(keyword => message.toLowerCase().includes(keyword))) {
          requestedAspect = aspect;
          break;
        }
      }

      // Generate more detailed explanation using limited chat history context
      let contextFromHistory = "";
      if (chatHistory.length > 0) {
        const recentMessages = chatHistory.slice(-2);
        const contextSummary = recentMessages.map(msg => {
          const content = msg.content || msg.message || String(msg);
          return this.truncateForTokens(content, 60);
        });
        contextFromHistory = contextSummary.join(" | ");
      }

      let detailedPrompt: string;
      if (requestedAspect) {
        // Provide specific type of explanation
        switch (requestedAspect) {
          case SpecificAspect.EXAMPLE:
            detailedPrompt = `Provide examples of ${currentTopic} with step-by-step walkthrough.`;
            break;
          case SpecificAspect.IMPLEMENTATION:
            detailedPrompt = `Show code implementation of ${currentTopic} with comments.`;
            break;
          case SpecificAspect.USE_CASE:
            detailedPrompt = `Explain use cases of ${currentTopic}.`;
            break;
          case SpecificAspect.COMPARISON:
            detailedPrompt = `Compare ${currentTopic} with similar concepts.`;
            break;
          default:
            detailedPrompt = `Step-by-step explanation of ${currentTopic}.`;
        }
      } else {
        // More concise prompt to save tokens
        detailedPrompt = `User learning ${currentTopic} needs help. User said: "${message}"
        ${contextFromHistory.length < 200 ? contextFromHistory : ""}
        
        Provide beginner-friendly explanation with:
        1. Simple definition 2. Example 3. Key points
        
        Be encouraging.`;
      }

      const context: ChatContext = {
        target_topic: { name: currentTopic },
        needs_detailed_explanation: true,
        user_confusion: message,
        requested_aspect: requestedAspect || undefined,
        is_small_talk: false
      };

      const detailedExplanation = await this.generateGroqResponse(detailedPrompt, context);
      const videos = await this.getVideoRecommendations(
        `${currentTopic} tutorial beginner ${requestedAspect || ''}`, 
        context
      );

      let response = `No worries! Let me explain **${currentTopic}** in more detail`;
      if (requestedAspect) {
        response += ` with focus on ${requestedAspect.replace('_', ' ')}:\n\n`;
      } else {
        response += ":\n\n";
      }

      response += "Take your time to understand this. When you're ready, let me know if you:\n";
      response += "• Want even more examples (say 'more examples')\n";
      response += "• Have specific questions (just ask!)\n";
      response += "• Feel ready to continue (say 'I understand' or 'next topic')\n";
      response += "• Want to try a different approach (say 'explain differently')";

      return {
        response,
        analysis: {
          detailed_explanation_provided: true,
          current_topic: currentTopic,
          requested_aspect: requestedAspect || undefined,
          next_step: currentTopic,
          next_step_explanation: detailedExplanation,
          next_step_videos: videos,
          learning_support: true,
          learning_session_active: true
        }
      };
    }

    return {
      response: "I'd be happy to explain more! What specific topic would you like me to clarify?",
      videos: [],
      analysis: { general_help_request: true }
    };
  }

  /**
   * Handle when user says 'no'
   */
  private async handleNoResponse(
    userId: string, 
    learningSession: LearningSession, 
    queryAnalysis: QueryAnalysis, 
    chatHistory: ChatMessage[]
  ): Promise<ChatResponse> {
    const currentPath = learningSession.current_path;
    const currentIndex = learningSession.current_step_index;

    if (currentPath.length > 0 && currentIndex < currentPath.length) {
      const currentTopic = currentPath[currentIndex];

      const response = `No worries! I understand you might need something different about **${currentTopic}**.\n\n` +
        "What specific aspect would you like me to explain? For example:\n" +
        `• How ${currentTopic} works step by step\n` +
        `• Real-world examples of ${currentTopic}\n` +
        `• Common mistakes with ${currentTopic}\n` +
        `• Code implementation of ${currentTopic}\n` +
        `• When to use ${currentTopic}\n\n` +
        "Just tell me what you'd like to know more about, and I'll explain it in detail!";

      return {
        response,
        analysis: {
          awaiting_specific_question: true,
          current_topic: currentTopic,
          help_options_provided: true,
          next_step: currentTopic,
          learning_session_active: true
        }
      };
    }

    return {
      response: "I'm here to help! What would you like to know more about?",
      videos: [],
      analysis: { general_help_ready: true }
    };
  }

  /**
   * Handle user confirmation that they want to complete/add current topic
   */
  private async handleTopicCompletion(
    userId: string, 
    learningSession: LearningSession, 
    queryAnalysis: QueryAnalysis
  ): Promise<ChatResponse> {
    const currentPath = learningSession.current_path;
    const currentIndex = learningSession.current_step_index;

    if (currentPath.length > 0 && currentIndex < currentPath.length) {
      const currentTopic = currentPath[currentIndex];

      // Check if this is a satisfaction confirmation
      if (queryAnalysis.learning_intent.satisfied_with_topic) {
        // Add topic to user profile
        const profileUpdated = await this.addTopicToUserProfile(currentTopic);

        // Mark topic as completed and move to next
        this.completeCurrentTopic(userId);

        // Check if there's a next topic
        const newSession = this.getLearningSession(userId);
        const newIndex = newSession.current_step_index;

        if (newIndex < currentPath.length) {
          const nextTopic = currentPath[newIndex];

          const response = `🎉 Excellent! **${currentTopic}** has been added to your profile!\n\n` +
            `🎯 **Next Topic: ${nextTopic}** (Step ${newIndex + 1}/${currentPath.length})\n\n` +
            "Ready to continue with the next topic? Let me know when you want to proceed!";

          // Generate explanation for next topic
          const context: ChatContext = {
            target_topic: { name: nextTopic },
            learning_path: currentPath,
            current_progress: `${newIndex + 1}/${currentPath.length}`,
            is_small_talk: false
          };

          const explanation = await this.generateGroqResponse(`Explain ${nextTopic} in detail`, context);
          const videos = await this.getVideoRecommendations(nextTopic, context);

          return {
            response,
            analysis: {
              topic_added_to_profile: currentTopic,
              profile_updated: profileUpdated,
              next_step: nextTopic,
              next_step_explanation: explanation,
              next_step_videos: videos,
              progress: `${newIndex + 1}/${currentPath.length}`,
              learning_path: currentPath,
              learning_session_active: true
            }
          };
        } else {
          // Path completed
          const targetTopic = learningSession.target_topic;

          return {
            response: `🎉 **Congratulations!** You've completed your entire learning path and mastered **${targetTopic}**!\n\n✅ **${currentTopic}** has been added to your profile.\n\n🚀 What would you like to learn next?`,
            analysis: {
              path_completed: true,
              mastered_topic: targetTopic || undefined,
              profile_updated: profileUpdated,
              final_topic_added: currentTopic
            }
          };
        }
      } else {
        // Ask for confirmation before adding to profile
        const response = `Great to hear you understand **${currentTopic}**! 🎉\n\n` +
          `Are you satisfied with your understanding of **${currentTopic}** and ready to add it to your profile?\n\n` +
          "Reply with:\n" +
          "• **'Yes'** or **'I am satisfied'** - Add to profile and continue\n" +
          "• **'No'** - Get more practice/examples\n" +
          "• **'Next topic'** - Continue without adding to profile";

        return {
          response,
          analysis: {
            awaiting_confirmation: true,
            current_topic: currentTopic,
            confirmation_requested: true,
            next_step: currentTopic,
            learning_session_active: true
          }
        };
      }
    }

    return {
      response: "What topic would you like to work on completing?",
      videos: [],
      analysis: { no_active_topic: true }
    };
  }
}
