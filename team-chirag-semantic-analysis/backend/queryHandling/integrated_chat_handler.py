#!/usr/bin/env python3
"""
Integrated Chat Handler for DSA Learning System

This system:
1. Fetches user_profile.json from frontend/public
2. Uses real_graph_analyzer.py for gap analysis and topic suggestions
3. Integrates with Groq LLM for topic explanations
4. Uses YouTube API via groq_dsa_yt.py for video recommendations
5. Handles dynamic queries not in graph_data.json
6. Logs unknown queries for future graph expansion
"""

import json
import os
import sys
import requests
import time
from typing import Dict, List, Optional, Tuple
from pathlib import Path
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Add the current directory to path for imports
current_dir = Path(__file__).parent
sys.path.append(str(current_dir))
sys.path.append(str(current_dir / "static" / "graph"))
sys.path.append(str(current_dir / "dynamic"))

try:
    from real_graph_analyzer import RealGraphLearningAnalyzer
    from groq_dsa_yt import YouTubeResourceFinder, generate_response
except ImportError as e:
    print(f"Import error: {e}")
    print("Trying alternative imports...")
    try:
        import sys
        sys.path.append(str(current_dir / "static" / "graph"))
        sys.path.append(str(current_dir / "dynamic"))
        from real_graph_analyzer import RealGraphLearningAnalyzer
        from groq_dsa_yt import YouTubeResourceFinder, generate_response
    except ImportError as e2:
        print(f"Alternative import error: {e2}")
        print("Please ensure real_graph_analyzer.py and groq_dsa_yt.py are in the correct locations")
        RealGraphLearningAnalyzer = None
        YouTubeResourceFinder = None

class IntegratedChatHandler:
    def __init__(self):
        """Initialize the integrated chat handler."""
        self.frontend_public_path = Path(__file__).parent.parent.parent / "frontend" / "public"
        self.graph_data_path = current_dir / "static" / "graph" / "graph_data.json"
        self.user_profile_path = self.frontend_public_path / "user_profile.json"
        self.unknown_queries_log = current_dir / "unknown_queries.json"
        
        # Initialize components
        try:
            if RealGraphLearningAnalyzer is not None:
                self.graph_analyzer = RealGraphLearningAnalyzer(str(self.graph_data_path))
            else:
                self.graph_analyzer = None
            
            if YouTubeResourceFinder is not None:
                self.youtube_finder = YouTubeResourceFinder()
            else:
                self.youtube_finder = None
        except Exception as e:
            print(f"Error initializing components: {e}")
            self.graph_analyzer = None
            self.youtube_finder = None
        
        # Groq API configuration
        self.groq_api_key = os.getenv("GROQ_API_KEY")
        self.groq_base_url = "https://api.groq.com/openai/v1/chat/completions"
        
        # Learning session tracking
        self.learning_sessions_path = current_dir / "learning_sessions.json"
        self.learning_sessions = self.load_learning_sessions()
        
    def load_user_profile(self) -> Optional[Dict]:
        """Load user profile from frontend/public directory."""
        try:
            # First try to find the most recent user_profile_*.json file
            profile_files = list(self.frontend_public_path.glob("user_profile_*.json"))
            if profile_files:
                # Sort by modification time and get the most recent
                latest_profile = max(profile_files, key=lambda p: p.stat().st_mtime)
                with open(latest_profile, 'r', encoding='utf-8') as f:
                    return json.load(f)
            
            # Fallback to user_profile.json
            if self.user_profile_path.exists():
                with open(self.user_profile_path, 'r', encoding='utf-8') as f:
                    return json.load(f)
            
            print("No user profile found")
            return None
            
        except Exception as e:
            print(f"Error loading user profile: {e}")
            return None
    
    def analyze_user_query(self, query: str, user_profile: Dict, chat_history: List[Dict] = None) -> Dict:
        """Analyze user query and determine response strategy."""
        query_lower = query.lower()
        
        # Detect learning flow intents
        learning_intents = self.detect_learning_intents(query_lower, chat_history or [])
        
        # Check if this is small talk/general conversation
        small_talk_keywords = [
            'hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening',
            'how are you', 'what\'s up', 'thanks', 'thank you', 'bye', 'goodbye',
            'nice', 'cool', 'awesome', 'great', 'who are you', 'what can you do'
        ]
        
        # More precise small talk detection - check for exact phrases or word boundaries
        is_small_talk = False
        for keyword in small_talk_keywords:
            if keyword in query_lower:
                # Check if it's a standalone greeting or the query is very short
                if len(query_lower.strip()) <= 20 and any(greet in query_lower for greet in ['hello', 'hi', 'hey', 'thanks', 'bye']):
                    is_small_talk = True
                    break
                elif keyword in ['how are you', 'what\'s up', 'who are you', 'what can you do']:
                    is_small_talk = True
                    break
        
        # Override small talk detection for DSA-related queries
        dsa_indicators = [
            'learn', 'algorithm', 'data structure', 'array', 'tree', 'graph', 'sort', 'search',
            'stack', 'queue', 'heap', 'hash', 'linked list', 'binary', 'dynamic programming',
            'recursion', 'complexity', 'big o', 'time complexity', 'space complexity',
            'what is', 'what are', 'how to', 'explain', 'understand', 'implement', 'code',
            'example', 'tutorial', 'difference between', 'comparison', 'vs', 'versus'
        ]
        
        if any(indicator in query_lower for indicator in dsa_indicators):
            is_small_talk = False
        
        # Extract known concepts from user profile - properly validate topic knowledge
        truly_known_topics = []
        known_subtopics = []
        
        if 'knownConcepts' in user_profile and self.graph_analyzer:
            topics_data = user_profile['knownConcepts'].get('topics', [])
            for topic_data in topics_data:
                topic_name = topic_data['name']
                user_subtopics = set([sub['name'].lower() for sub in topic_data.get('subtopics', [])])
                
                # Find this topic in the graph
                topic_node = None
                for node in self.graph_analyzer.graph_data.get('nodes', []):
                    if node['type'] == 'topic' and node['name'].lower() == topic_name.lower():
                        topic_node = node
                        break
                
                if topic_node:
                    # Get all subtopics for this topic from the graph
                    required_subtopics = set()
                    for node in self.graph_analyzer.graph_data.get('nodes', []):
                        if (node['type'] == 'subtopic' and 
                            node.get('parent_topic') == topic_node['id']):
                            required_subtopics.add(node['name'].lower())
                    
                    # Check if user knows all required subtopics
                    if required_subtopics and user_subtopics.issuperset(required_subtopics):
                        truly_known_topics.append(topic_name)
                    
                    # Add known subtopics
                    known_subtopics.extend([sub['name'] for sub in topic_data.get('subtopics', [])])
        
        # Determine if query is about a specific DSA topic/concept
        mentioned_topics = []
        mentioned_subtopics = []
        
        if self.graph_analyzer and not is_small_talk:
            # Check if query mentions any topics/subtopics from the graph
            for node in self.graph_analyzer.graph_data.get('nodes', []):
                node_name = node['name'].lower()
                node_keywords = [kw.lower() for kw in node.get('keywords', [])]
                
                # Enhanced matching logic
                query_words = query_lower.split()
                
                # Check for exact matches or keyword matches
                if (node_name in query_lower or 
                    any(keyword in query_lower for keyword in node_keywords) or
                    any(word in node_name for word in query_words if len(word) > 3) or
                    # Check for partial matches with common variations
                    any(node_name.startswith(word) or word.startswith(node_name) 
                        for word in query_words if len(word) > 4)):
                    
                    if node['type'] == 'topic':
                        mentioned_topics.append(node)
                    else:
                        mentioned_subtopics.append(node)
        
        return {
            'query': query,
            'is_small_talk': is_small_talk,
            'learning_intent': learning_intents,
            'truly_known_topics': truly_known_topics,
            'known_subtopics': known_subtopics,
            'mentioned_topics': mentioned_topics,
            'mentioned_subtopics': mentioned_subtopics,
            'is_graph_topic': len(mentioned_topics) > 0 or len(mentioned_subtopics) > 0
        }
    
    def detect_learning_intents(self, query: str, chat_history: List[Dict]) -> Dict:
        """Detect user intents related to learning flow progression."""
        # Limit chat history processing for performance - only use last 3 messages
        limited_history = chat_history[-3:] if chat_history else []
        
        intents = {
            'wants_next_topic': False,
            'confirms_understanding': False,
            'needs_more_explanation': False,
            'wants_to_complete_topic': False,
            'satisfied_with_topic': False,
            'wants_confirmation': False,
            'says_no_need_help': False
        }
        
        # Intent patterns
        next_topic_patterns = [
            'next topic', 'next step', 'what\'s next', 'continue', 'move on', 'proceed',
            'go to next', 'advance', 'ready for next', 'next lesson'
        ]
        
        understanding_patterns = [
            'yes', 'got it', 'understand', 'clear', 'makes sense', 'i know', 'learned',
            'understood', 'ok', 'okay', 'right', 'correct', 'good', 'thanks',
            'i understand this topic', 'i get it'
        ]
        
        more_explanation_patterns = [
            'no', 'don\'t understand', 'confused', 'explain more', 'not clear', 
            'can you explain', 'i don\'t get it', 'more details', 'elaborate',
            'need help', 'still confused', 'more examples', 'i need more explanation'
        ]
        
        completion_patterns = [
            'i\'m done', 'completed', 'finished', 'mastered', 'ready to move on',
            'i know this now', 'learned this', 'understand this topic'
        ]
        
        satisfaction_patterns = [
            'satisfied', 'good enough', 'ready', 'confident', 'comfortable',
            'i am satisfied', 'add to profile', 'add to my profile',
            'i am satisfied with this topic', 'ready to add it to my profile'
        ]
        
        confirmation_patterns = [
            'yes', 'yeah', 'yep', 'sure', 'of course', 'definitely', 'absolutely'
        ]
        
        no_help_patterns = [
            'no', 'nope', 'not really', 'i\'m good', 'no thanks', 'no need'
        ]
        
        # Check patterns
        for pattern in next_topic_patterns:
            if pattern in query:
                intents['wants_next_topic'] = True
                break
                
        for pattern in understanding_patterns:
            if pattern in query:
                intents['confirms_understanding'] = True
                break
                
        for pattern in more_explanation_patterns:
            if pattern in query:
                intents['needs_more_explanation'] = True
                break
                
        for pattern in completion_patterns:
            if pattern in query:
                intents['wants_to_complete_topic'] = True
                break
                
        for pattern in satisfaction_patterns:
            if pattern in query:
                intents['satisfied_with_topic'] = True
                break
        
        for pattern in confirmation_patterns:
            if pattern in query:
                intents['wants_confirmation'] = True
                break
        
        for pattern in no_help_patterns:
            if pattern in query:
                intents['says_no_need_help'] = True
                break
        
        return intents
    
    def find_learning_gaps(self, query_analysis: Dict, user_profile: Dict) -> Dict:
        """Use graph analyzer to find learning gaps and suggest learning paths."""
        if not self.graph_analyzer:
            return {'gaps': [], 'suggestions': [], 'learning_path': []}
        
        try:
            # Get user's truly known concepts (only topics where all subtopics are known)
            known_topic_names = query_analysis['truly_known_topics']
            known_subtopic_names = query_analysis['known_subtopics']
            
            # Convert to graph node IDs
            known_concept_ids = []
            
            # Add truly known topics
            for topic_name in known_topic_names:
                topic_id = self.graph_analyzer.topic_name_to_id.get(topic_name.lower())
                if topic_id:
                    known_concept_ids.append(topic_id)
            
            # Add known subtopics
            for subtopic_name in known_subtopic_names:
                subtopic_id = self.graph_analyzer.subtopic_name_to_id.get(subtopic_name.lower())
                if subtopic_id:
                    known_concept_ids.append(subtopic_id)
            
            # If query mentions specific topics, find path to those topics
            target_topics = query_analysis['mentioned_topics']
            target_subtopics = query_analysis['mentioned_subtopics']
            
            if target_topics or target_subtopics:
                # Use the first mentioned topic/subtopic as target
                target_node = target_topics[0] if target_topics else target_subtopics[0]
                target_id = target_node['id']
                
                # Use the real graph analyzer methods
                try:
                    # Find optimal learning path using the graph analyzer
                    if hasattr(self.graph_analyzer, 'find_optimal_learning_path'):
                        learning_path_result = self.graph_analyzer.find_optimal_learning_path(
                            completed_topics=known_concept_ids,
                            target_topic=target_id
                        )
                        # Extract path from result
                        learning_path = learning_path_result.get('path', []) if isinstance(learning_path_result, dict) else []
                    else:
                        learning_path = []
                    
                    # Find gaps using subtopic analysis
                    if hasattr(self.graph_analyzer, 'analyze_subtopic_learning_gaps'):
                        gaps_result = self.graph_analyzer.analyze_subtopic_learning_gaps(
                            completed_subtopics=known_concept_ids,
                            target_topic_id=target_id
                        )
                        # Extract gaps from result
                        if isinstance(gaps_result, dict):
                            gaps = gaps_result.get('missing_prerequisites', []) + gaps_result.get('recommended_subtopics', [])
                        else:
                            gaps = []
                    else:
                        gaps = []
                    
                    # Convert IDs back to names for frontend display
                    gap_names = []
                    for gap_id in gaps[:5]:  # Top 5 gaps
                        gap_node = self.graph_analyzer.all_id_to_data.get(gap_id)
                        if gap_node:
                            gap_names.append(gap_node['name'])
                    
                    path_names = []
                    for step_id in learning_path[:7]:  # Top 7 steps
                        step_node = self.graph_analyzer.all_id_to_data.get(step_id)
                        if step_node:
                            path_names.append(step_node['name'])
                    
                    return {
                        'gaps': gap_names,
                        'learning_path': path_names,
                        'target_topic': target_node,
                        'known_concepts': known_topic_names + known_subtopic_names
                    }
                    
                except Exception as method_error:
                    print(f"Error calling graph analyzer methods: {method_error}")
                    # Fallback to basic analysis
                    return {
                        'gaps': [],
                        'learning_path': [],
                        'target_topic': target_node,
                        'known_concepts': known_topic_names + known_subtopic_names
                    }
            
            # General gap analysis for comprehensive learning
            try:
                if hasattr(self.graph_analyzer, 'analyze_learning_gap_with_real_graph'):
                    # Use the comprehensive analysis method
                    known_topic_names = [self.graph_analyzer.all_id_to_data.get(id, {}).get('name', '') for id in known_concept_ids]
                    comprehensive_result = self.graph_analyzer.analyze_learning_gap_with_real_graph(
                        completed_topics_names=known_topic_names,
                        target_topic_name="General Learning"
                    )
                    
                    if isinstance(comprehensive_result, dict):
                        gap_names = comprehensive_result.get('recommended_topics', [])[:5]
                    else:
                        gap_names = []
                else:
                    gap_names = []
                
                return {
                    'gaps': gap_names,
                    'learning_path': [],
                    'suggestions': gap_names[:3],  # Top 3 suggestions
                    'known_concepts': known_topic_names + known_subtopic_names
                }
                
            except Exception as comp_error:
                print(f"Error in comprehensive gap analysis: {comp_error}")
                return {
                    'gaps': [],
                    'learning_path': [],
                    'suggestions': [],
                    'known_concepts': known_topic_names + known_subtopic_names
                }
            
        except Exception as e:
            print(f"Error in gap analysis: {e}")
            return {'gaps': [], 'suggestions': [], 'learning_path': []}
    
    def _truncate_for_tokens(self, text: str, max_length: int = 300) -> str:
        """Truncate text to save tokens while preserving meaning."""
        if len(text) <= max_length:
            return text
        
        # Try to truncate at word boundary
        truncated = text[:max_length]
        last_space = truncated.rfind(' ')
        if last_space > max_length * 0.8:  # If we can find a good break point
            return truncated[:last_space] + "..."
        else:
            return truncated + "..."
    
    def generate_groq_response(self, query: str, context: Dict) -> str:
        """Generate response using Groq API via groq_dsa_yt module with optimized token usage."""
        try:
            # Handle small talk with direct responses
            if context.get('is_small_talk'):
                return self.generate_fallback_response(query, context)
            
            # Check if Groq API key is available
            if not self.groq_api_key:
                print("Warning: GROQ_API_KEY not found. Using fallback response.")
                return self.generate_fallback_response(query, context)
            
            # Optimized system prompt - more concise
            system_prompt = """You are a DSA tutor. Provide clear, concise explanations with examples. Be encouraging and educational."""
            
            # Build concise user context - limit token usage
            user_context_parts = []
            
            if context.get('target_topic'):
                topic = context['target_topic']
                topic_name = topic['name'] if isinstance(topic, dict) else str(topic)
                user_context_parts.append(f"Topic: {self._truncate_for_tokens(topic_name, 30)}")
            
            if context.get('gaps') and len(context['gaps']) > 0:
                gaps = context['gaps'][:2]  # Limit to top 2 gaps
                gaps_str = ', '.join(gaps)
                user_context_parts.append(f"Gaps: {self._truncate_for_tokens(gaps_str, 50)}")
            
            if context.get('learning_path') and len(context['learning_path']) > 0:
                path = context['learning_path'][:3]  # Limit to first 3 steps
                path_str = ' → '.join(path)
                user_context_parts.append(f"Path: {self._truncate_for_tokens(path_str, 60)}")
            
            if context.get('known_concepts') and len(context['known_concepts']) > 0:
                known = context['known_concepts'][:2]  # Reduced to 2 concepts
                known_str = ', '.join(known)
                user_context_parts.append(f"Knows: {self._truncate_for_tokens(known_str, 40)}")
            
            # Create concise prompt
            if user_context_parts:
                context_str = ' | '.join(user_context_parts)
                # Ensure total context doesn't exceed token limit
                context_str = self._truncate_for_tokens(context_str, 200)
                prompt = f"{query}\n\nContext: {context_str}"
            else:
                prompt = query
            
            # Use the generate_response function from groq_dsa_yt.py with reduced max_tokens
            response = generate_response(prompt, system_prompt)
            
            # Check if response indicates an error
            if response.startswith("Error:"):
                print(f"Groq API error: {response}")
                return self.generate_fallback_response(query, context)
            
            return response.strip()
                
        except Exception as e:
            print(f"Error generating Groq response: {e}")
            return self.generate_fallback_response(query, context)
    
    def generate_fallback_response(self, query: str, context: Dict) -> str:
        """Generate a comprehensive fallback response when Groq API is not available."""
        response_parts = []
        
        # Handle small talk
        if context.get('is_small_talk'):
            small_talk_responses = {
                'hello': "Hello! I'm your DSA learning assistant. How can I help you today?",
                'hi': "Hi there! Ready to dive into some data structures and algorithms?",
                'how are you': "I'm doing great and ready to help you learn DSA! What would you like to explore?",
                'thanks': "You're welcome! Feel free to ask me anything about data structures and algorithms.",
                'bye': "Goodbye! Keep practicing those algorithms. See you next time!",
                'who are you': "I'm your AI DSA tutor! I can help you learn data structures, algorithms, find learning gaps, and recommend resources.",
                'what can you do': "I can help you with DSA concepts, analyze your learning gaps, suggest learning paths, and find educational videos. Just ask me about any topic!",
                'help': "I'm here to help! You can ask me about specific DSA topics like arrays, trees, sorting algorithms, or ask for learning recommendations based on your profile."
            }
            
            query_lower = query.lower()
            for keyword, response in small_talk_responses.items():
                if keyword in query_lower:
                    return response
            
            return "Hello! I'm your DSA learning assistant. Feel free to ask me about any data structures or algorithms topic!"
        
        # Enhanced DSA explanations
        topic_explanations = {
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
        }
        
        # Generate detailed explanation based on target topic
        if context.get('target_topic'):
            topic = context['target_topic']
            topic_name = topic['name'].lower()
            
            # Find matching explanation
            explanation = None
            for key, exp in topic_explanations.items():
                if key in topic_name:
                    explanation = exp
                    break
            
            if explanation:
                response_parts.append(f"📚 **{topic['name']}**: {explanation}")
            else:
                response_parts.append(f"Great question about **{topic['name']}**! This is an important concept in data structures and algorithms.")
        
        # Add learning path information
        if context.get('learning_path') and len(context['learning_path']) > 0:
            path = context['learning_path'][:5]
            response_parts.append(f"🛤️ **Suggested learning path**: {' → '.join(path)}")
        
        # Add gap analysis
        if context.get('gaps') and len(context['gaps']) > 0:
            gaps = context['gaps'][:3]
            response_parts.append(f"📋 **Focus areas for you**: {', '.join(gaps)}")
        
        # Add foundation knowledge
        if context.get('known_concepts') and len(context['known_concepts']) > 0:
            known = context['known_concepts'][:3]
            response_parts.append(f"✅ **Great foundation! You already know**: {', '.join(known)}")
        
        # Add specific tips based on query content
        query_lower = query.lower()
        if 'time complexity' in query_lower or 'big o' in query_lower:
            response_parts.append("⏱️ **Time Complexity Tip**: Always analyze the worst-case scenario and look for nested loops or recursive calls.")
        elif 'space complexity' in query_lower:
            response_parts.append("💾 **Space Complexity Tip**: Consider the extra memory used by your algorithm, including recursive call stacks.")
        elif 'interview' in query_lower:
            response_parts.append("🎯 **Interview Tip**: Practice explaining your thought process and always test with edge cases.")
        
        # Fallback based on query keywords
        if not response_parts:
            if 'sort' in query_lower:
                response_parts.append("🔄 **Sorting**: Essential for organizing data efficiently. Start with simple algorithms like bubble sort, then move to more efficient ones like merge sort and quick sort.")
            elif 'search' in query_lower:
                response_parts.append("🔍 **Searching**: Master linear search first, then binary search for sorted data. Understanding these fundamentals opens doors to more advanced algorithms.")
            elif 'array' in query_lower:
                response_parts.append("📊 **Arrays**: The foundation of many data structures. Master traversal, insertion, deletion, and searching before moving to more complex topics.")
            else:
                response_parts.append("🚀 **Let's learn together!** I'll help you understand this concept step by step with practical examples and clear explanations.")
        
        return "\n\n".join(response_parts)
    
    def get_video_recommendations(self, query: str, context: Dict) -> List[Dict]:
        """Get YouTube video recommendations using the existing YouTube finder."""
        if not self.youtube_finder:
            return []
        
        try:
            # Determine search terms based on context
            search_terms = []
            
            if context.get('target_topic'):
                search_terms.append(context['target_topic']['name'])
            
            if context.get('gaps'):
                gaps = context['gaps'][:2]  # Top 2 gaps
                for gap in gaps:
                    gap_name = self.graph_analyzer.all_id_to_data.get(gap, {}).get('name')
                    if gap_name:
                        search_terms.append(gap_name)
            
            if not search_terms:
                # Extract key terms from the query
                query_words = query.lower().split()
                dsa_keywords = ['array', 'linked list', 'stack', 'queue', 'tree', 'graph', 
                               'sorting', 'searching', 'dynamic programming', 'recursion']
                search_terms = [word for word in query_words if word in dsa_keywords]
                
                if not search_terms:
                    search_terms = [query]
            
            # Get videos for each search term
            all_videos = []
            for term in search_terms[:2]:  # Limit to 2 terms to avoid too many API calls
                videos = self.youtube_finder.get_videos(term)
                all_videos.extend(videos)
            
            # Convert to the format expected by the frontend
            formatted_videos = []
            for video in all_videos[:5]:  # Limit to 5 videos total
                formatted_videos.append({
                    'title': video.title,
                    'url': video.url,
                    'description': video.description or f"Learn about {video.title}",
                    'channel': video.channel_name,
                    'duration': video.duration,
                    'views': video.view_count
                })
            
            return formatted_videos
            
        except Exception as e:
            print(f"Error getting video recommendations: {e}")
            return []
    
    def log_unknown_query(self, query: str, timestamp: str):
        """Log queries that don't match anything in the graph for future analysis."""
        try:
            # Load existing log or create new one
            if self.unknown_queries_log.exists():
                with open(self.unknown_queries_log, 'r', encoding='utf-8') as f:
                    log_data = json.load(f)
            else:
                log_data = {'queries': []}
            
            # Add new query
            log_data['queries'].append({
                'query': query,
                'timestamp': timestamp,
                'processed': False
            })
            
            # Save updated log
            with open(self.unknown_queries_log, 'w', encoding='utf-8') as f:
                json.dump(log_data, f, indent=2, ensure_ascii=False)
                
        except Exception as e:
            print(f"Error logging unknown query: {e}")
    
    def load_learning_sessions(self) -> Dict:
        """Load learning sessions from file."""
        try:
            if self.learning_sessions_path.exists():
                with open(self.learning_sessions_path, 'r', encoding='utf-8') as f:
                    return json.load(f)
            return {}
        except Exception as e:
            print(f"Error loading learning sessions: {e}")
            return {}
    
    def save_learning_sessions(self):
        """Save learning sessions to file."""
        try:
            with open(self.learning_sessions_path, 'w', encoding='utf-8') as f:
                json.dump(self.learning_sessions, f, indent=2, ensure_ascii=False)
        except Exception as e:
            print(f"Error saving learning sessions: {e}")
    
    def get_learning_session(self, user_id: str) -> Dict:
        """Get or create learning session for user."""
        if user_id not in self.learning_sessions:
            self.learning_sessions[user_id] = {
                'current_path': [],
                'completed_topics': [],
                'current_step_index': 0,
                'target_topic': None,
                'session_started': datetime.now().isoformat(),
                'last_updated': datetime.now().isoformat()
            }
            self.save_learning_sessions()
        return self.learning_sessions[user_id]
    
    def update_learning_session(self, user_id: str, updates: Dict):
        """Update learning session for user."""
        session = self.get_learning_session(user_id)
        session.update(updates)
        session['last_updated'] = datetime.now().isoformat()
        self.save_learning_sessions()
    
    def complete_current_topic(self, user_id: str) -> bool:
        """Mark current topic as completed and advance to next."""
        session = self.get_learning_session(user_id)
        if session['current_path'] and session['current_step_index'] < len(session['current_path']):
            completed_topic = session['current_path'][session['current_step_index']]
            session['completed_topics'].append({
                'topic': completed_topic,
                'completed_at': datetime.now().isoformat()
            })
            session['current_step_index'] += 1
            self.save_learning_sessions()
            return True
        return False
    
    def add_topic_to_user_profile(self, topic_name: str) -> bool:
        """Add completed topic to user profile."""
        try:
            user_profile = self.load_user_profile()
            if not user_profile:
                return False
            
            # Add topic to known concepts
            if 'knownConcepts' not in user_profile:
                user_profile['knownConcepts'] = {'topics': [], 'totalTopics': 0, 'totalSubtopics': 0}
            
            # Check if topic already exists
            existing_topics = [t['name'].lower() for t in user_profile['knownConcepts']['topics']]
            if topic_name.lower() not in existing_topics:
                # Find topic details from graph
                topic_data = None
                if self.graph_analyzer:
                    for node in self.graph_analyzer.graph_data.get('nodes', []):
                        if node['type'] == 'topic' and node['name'].lower() == topic_name.lower():
                            topic_data = {
                                'id': node['id'],
                                'name': node['name'],
                                'type': 'topic',
                                'subtopics': []  # Start with empty subtopics
                            }
                            break
                
                if topic_data:
                    user_profile['knownConcepts']['topics'].append(topic_data)
                    user_profile['knownConcepts']['totalTopics'] += 1
                    
                    # Save updated profile
                    profile_files = list(self.frontend_public_path.glob("user_profile_*.json"))
                    if profile_files:
                        latest_profile = max(profile_files, key=lambda p: p.stat().st_mtime)
                        with open(latest_profile, 'w', encoding='utf-8') as f:
                            json.dump(user_profile, f, indent=2, ensure_ascii=False)
                        return True
            return False
        except Exception as e:
            print(f"Error adding topic to user profile: {e}")
            return False
    
    def handle_chat_message(self, message: str, chat_history: List[Dict] = None, user_id: str = "default") -> Dict:
        """Main handler for chat messages with learning flow support."""
        timestamp = datetime.now().isoformat()
        
        # Limit chat history to last 3-4 messages for token optimization
        limited_chat_history = None
        if chat_history:
            limited_chat_history = chat_history[-4:]  # Keep only last 4 messages
        
        try:
            # Load user profile
            user_profile = self.load_user_profile()
            if not user_profile:
                return {
                    'response': "I couldn't find your user profile. Please complete the onboarding process first to get personalized learning recommendations.",
                    'videos': [],
                    'analysis': {'error': 'No user profile found'}
                }
            
            # Get learning session
            learning_session = self.get_learning_session(user_id)
            
            # Analyze the query with limited chat history context
            query_analysis = self.analyze_user_query(message, user_profile, limited_chat_history)
            
            # Handle learning flow intents first
            if query_analysis['learning_intent']['satisfied_with_topic']:
                return self.handle_topic_completion(user_id, learning_session, query_analysis)
            
            if query_analysis['learning_intent']['wants_next_topic'] or query_analysis['learning_intent']['confirms_understanding']:
                return self.handle_next_topic_request(user_id, learning_session, query_analysis)
            
            if query_analysis['learning_intent']['needs_more_explanation']:
                return self.handle_more_explanation_request(message, learning_session, query_analysis, limited_chat_history)
            
            if query_analysis['learning_intent']['wants_to_complete_topic']:
                return self.handle_topic_completion(user_id, learning_session, query_analysis)
            
            if query_analysis['learning_intent']['says_no_need_help']:
                return self.handle_no_response(user_id, learning_session, query_analysis, limited_chat_history)
            
            # Handle small talk
            if query_analysis['is_small_talk']:
                response = self.generate_groq_response(message, {'is_small_talk': True})
                return {
                    'response': response,
                    'videos': [],
                    'analysis': {
                        'small_talk': True,
                        'known_topics': query_analysis['truly_known_topics']
                    }
                }
            
            # Check if this is a DSA topic we have in our graph
            if query_analysis['is_graph_topic']:
                # Use graph-based analysis
                gap_analysis = self.find_learning_gaps(query_analysis, user_profile)

                # Update learning session with new path
                learning_path = gap_analysis.get('learning_path', [])
                if learning_path:
                    self.update_learning_session(user_id, {
                        'current_path': learning_path,
                        'current_step_index': 0,
                        'target_topic': gap_analysis.get('target_topic', {}).get('name')
                    })

                # Identify the next step (first not-yet-known node in the path)
                known_concepts = set(gap_analysis.get('known_concepts', []))
                next_step = None
                for step in learning_path:
                    if step not in known_concepts:
                        next_step = step
                        break

                # Prepare context for Groq and YouTube for the next step
                next_step_context = {
                    'target_topic': {'name': next_step} if next_step else gap_analysis.get('target_topic'),
                    'gaps': gap_analysis.get('gaps', []),
                    'learning_path': learning_path,
                    'known_concepts': list(known_concepts),
                    'is_small_talk': False
                }

                # Generate explanation and videos for the next step
                next_step_explanation = self.generate_groq_response(next_step or message, next_step_context) if next_step else None
                next_step_videos = self.get_video_recommendations(next_step or message, next_step_context) if next_step else []

                # Generate concise overall response - focus on the topic and path
                target_topic = gap_analysis.get('target_topic')
                if target_topic:
                    response = f"Great question about {target_topic['name']}! "
                    if learning_path:
                        response += f"Here's your suggested learning path: {' → '.join(learning_path)}"
                        response += f"\n\n🎯 **Let's start with: {next_step}**" if next_step else ""
                        response += f"\n\nAfter you understand {next_step}, just say 'next topic' or 'I understand' to continue to the next step!"
                    if list(known_concepts):
                        response += f"\n\nI see you already know: {', '.join(list(known_concepts)[:3])}. Great foundation!"
                else:
                    response = "Let me help you with your DSA learning journey!"

                return {
                    'response': response,
                    'analysis': {
                        'gaps': gap_analysis.get('gaps', []),
                        'learning_path': learning_path,
                        'next_step': next_step,
                        'next_step_explanation': next_step_explanation,
                        'next_step_videos': next_step_videos,
                        'known_topics': query_analysis['truly_known_topics'],
                        'mentioned_topics': [t['name'] for t in query_analysis['mentioned_topics']],
                        'graph_based': True,
                        'learning_session_active': True,
                        'progress_tracking': True
                    }
                }
            
            else:
                # Dynamic handling for topics not in our graph
                self.log_unknown_query(message, timestamp)
                
                # Use Groq to generate response without graph context
                context = {
                    'dynamic_query': True,
                    'known_concepts': query_analysis['truly_known_topics'],
                    'is_small_talk': False
                }
                response = self.generate_groq_response(message, context)
                
                # Get video recommendations based on the query itself
                videos = self.get_video_recommendations(message, context)
                
                return {
                    'response': response,
                    'videos': videos,
                    'analysis': {
                        'dynamic': True,
                        'logged': True,
                        'known_topics': query_analysis['truly_known_topics']
                    }
                }
            
        except Exception as e:
            print(f"Error handling chat message: {e}")
            return {
                'response': "I'm sorry, there was an error processing your request. Please try again.",
                'videos': [],
                'analysis': {'error': str(e)}
            }
    
    def handle_next_topic_request(self, user_id: str, learning_session: Dict, query_analysis: Dict) -> Dict:
        """Handle user request to move to next topic in learning path."""
        current_path = learning_session.get('current_path', [])
        current_index = learning_session.get('current_step_index', 0)
        
        if not current_path:
            return {
                'response': "You don't have an active learning path. Please ask about a topic to get started!",
                'videos': [],
                'analysis': {'no_active_path': True}
            }
        
        # Mark current topic as completed and move to next
        if current_index < len(current_path):
            completed_topic = current_path[current_index]
            self.complete_current_topic(user_id)
            
            # Check if there's a next topic
            new_index = learning_session['current_step_index']
            if new_index < len(current_path):
                next_topic = current_path[new_index]
                
                # Generate explanation for next topic
                context = {
                    'target_topic': {'name': next_topic},
                    'learning_path': current_path,
                    'current_progress': f"{new_index + 1}/{len(current_path)}",
                    'is_small_talk': False
                }
                
                explanation = self.generate_groq_response(f"Explain {next_topic} in detail", context)
                videos = self.get_video_recommendations(next_topic, context)
                
                response = f"🎉 Great! You've completed **{completed_topic}**!\n\n"
                response += f"🎯 **Next Topic: {next_topic}** (Step {new_index + 1}/{len(current_path)})\n\n"
                response += "When you're ready to continue or if you understand this topic, just say 'next topic' or 'I understand'!"
                
                return {
                    'response': response,
                    'analysis': {
                        'topic_completed': completed_topic,
                        'next_step': next_topic,
                        'next_step_explanation': explanation,
                        'next_step_videos': videos,
                        'progress': f"{new_index + 1}/{len(current_path)}",
                        'learning_path': current_path,
                        'topic_progression': True
                    }
                }
            else:
                # Path completed
                target_topic = learning_session.get('target_topic')
                self.add_topic_to_user_profile(target_topic)
                
                return {
                    'response': f"🎉 **Congratulations!** You've completed your learning path and mastered **{target_topic}**!\n\n✅ This topic has been added to your profile.\n\n🚀 What would you like to learn next?",
                    'analysis': {
                        'path_completed': True,
                        'mastered_topic': target_topic,
                        'profile_updated': True
                    }
                }
        
        return {
            'response': "There seems to be an issue with your learning progress. Let's start fresh - what would you like to learn?",
            'videos': [],
            'analysis': {'progress_error': True}
        }
    
    def handle_more_explanation_request(self, message: str, learning_session: Dict, query_analysis: Dict, chat_history: List[Dict]) -> Dict:
        """Handle user request for more explanation when they don't understand."""
        current_path = learning_session.get('current_path', [])
        current_index = learning_session.get('current_step_index', 0)
        
        if current_path and current_index < len(current_path):
            current_topic = current_path[current_index]
            
            # Check if user is asking about a specific aspect
            specific_aspects = {
                'example': ['example', 'examples', 'sample', 'demo'],
                'implementation': ['code', 'implement', 'programming', 'syntax'],
                'use_case': ['when to use', 'use case', 'application', 'practical'],
                'comparison': ['difference', 'compare', 'vs', 'versus'],
                'step_by_step': ['step', 'process', 'how', 'procedure']
            }
            
            requested_aspect = None
            for aspect, keywords in specific_aspects.items():
                if any(keyword in message.lower() for keyword in keywords):
                    requested_aspect = aspect
                    break
            
            # Generate more detailed explanation using limited chat history context
            context_from_history = ""
            if chat_history:
                # Only use last 2-3 messages for context to reduce tokens
                recent_messages = chat_history[-2:]  # Reduced to 2 messages
                # Create concise context summary
                context_summary = []
                for msg in recent_messages:
                    if isinstance(msg, dict):
                        content = msg.get('content', msg.get('message', str(msg)))
                        # Truncate each message
                        truncated = self._truncate_for_tokens(str(content), 60)
                        context_summary.append(truncated)
                context_from_history = " | ".join(context_summary)
            
            if requested_aspect:
                # Provide specific type of explanation
                if requested_aspect == 'example':
                    detailed_prompt = f"Provide examples of {current_topic} with step-by-step walkthrough."
                elif requested_aspect == 'implementation':
                    detailed_prompt = f"Show code implementation of {current_topic} with comments."
                elif requested_aspect == 'use_case':
                    detailed_prompt = f"Explain use cases of {current_topic}."
                elif requested_aspect == 'comparison':
                    detailed_prompt = f"Compare {current_topic} with similar concepts."
                else:
                    detailed_prompt = f"Step-by-step explanation of {current_topic}."
            else:
                # More concise prompt to save tokens
                detailed_prompt = f"""User learning {current_topic} needs help. User said: "{message}"
                {context_from_history if len(context_from_history) < 200 else ""}
                
                Provide beginner-friendly explanation with:
                1. Simple definition 2. Example 3. Key points
                
                Be encouraging."""
            
            context = {
                'target_topic': {'name': current_topic},
                'needs_detailed_explanation': True,
                'user_confusion': message,
                'requested_aspect': requested_aspect,
                'is_small_talk': False
            }
            
            detailed_explanation = self.generate_groq_response(detailed_prompt, context)
            videos = self.get_video_recommendations(f"{current_topic} tutorial beginner {requested_aspect or ''}", context)
            
            response = f"No worries! Let me explain **{current_topic}** in more detail"
            if requested_aspect:
                response += f" with focus on {requested_aspect.replace('_', ' ')}:\n\n"
            else:
                response += ":\n\n"
            
            response += "Take your time to understand this. When you're ready, let me know if you:\n"
            response += "• Want even more examples (say 'more examples')\n"
            response += "• Have specific questions (just ask!)\n"
            response += "• Feel ready to continue (say 'I understand' or 'next topic')\n"
            response += "• Want to try a different approach (say 'explain differently')"
            
            return {
                'response': response,
                'analysis': {
                    'detailed_explanation_provided': True,
                    'current_topic': current_topic,
                    'requested_aspect': requested_aspect,
                    'next_step': current_topic,
                    'next_step_explanation': detailed_explanation,
                    'next_step_videos': videos,
                    'learning_support': True,
                    'learning_session_active': True
                }
            }
        
        return {
            'response': "I'd be happy to explain more! What specific topic would you like me to clarify?",
            'videos': [],
            'analysis': {'general_help_request': True}
        }
    
    def handle_no_response(self, user_id: str, learning_session: Dict, query_analysis: Dict, chat_history: List[Dict]) -> Dict:
        """Handle when user says 'no' - ask what they want to know and explain it."""
        current_path = learning_session.get('current_path', [])
        current_index = learning_session.get('current_step_index', 0)
        
        if current_path and current_index < len(current_path):
            current_topic = current_path[current_index]
            
            response = f"No worries! I understand you might need something different about **{current_topic}**.\n\n"
            response += "What specific aspect would you like me to explain? For example:\n"
            response += f"• How {current_topic} works step by step\n"
            response += f"• Real-world examples of {current_topic}\n"
            response += f"• Common mistakes with {current_topic}\n"
            response += f"• Code implementation of {current_topic}\n"
            response += f"• When to use {current_topic}\n\n"
            response += "Just tell me what you'd like to know more about, and I'll explain it in detail!"
            
            return {
                'response': response,
                'analysis': {
                    'awaiting_specific_question': True,
                    'current_topic': current_topic,
                    'help_options_provided': True
                }
            }
        
        return {
            'response': "I'm here to help! What would you like to know more about?",
            'videos': [],
            'analysis': {'general_help_ready': True}
        }
    
    def handle_topic_completion(self, user_id: str, learning_session: Dict, query_analysis: Dict) -> Dict:
        """Handle user confirmation that they want to complete/add current topic."""
        current_path = learning_session.get('current_path', [])
        current_index = learning_session.get('current_step_index', 0)
        
        if current_path and current_index < len(current_path):
            current_topic = current_path[current_index]
            
            # Check if this is a satisfaction confirmation
            if query_analysis['learning_intent']['satisfied_with_topic']:
                # Add topic to user profile
                profile_updated = self.add_topic_to_user_profile(current_topic)
                
                # Mark topic as completed and move to next
                self.complete_current_topic(user_id)
                
                # Check if there's a next topic
                new_session = self.get_learning_session(user_id)
                new_index = new_session['current_step_index']
                
                if new_index < len(current_path):
                    next_topic = current_path[new_index]
                    
                    response = f"🎉 Excellent! **{current_topic}** has been added to your profile!\n\n"
                    response += f"🎯 **Next Topic: {next_topic}** (Step {new_index + 1}/{len(current_path)})\n\n"
                    response += "Ready to continue with the next topic? Let me know when you want to proceed!"
                    
                    # Generate explanation for next topic
                    context = {
                        'target_topic': {'name': next_topic},
                        'learning_path': current_path,
                        'current_progress': f"{new_index + 1}/{len(current_path)}",
                        'is_small_talk': False
                    }
                    
                    explanation = self.generate_groq_response(f"Explain {next_topic} in detail", context)
                    videos = self.get_video_recommendations(next_topic, context)
                    
                    return {
                        'response': response,
                        'analysis': {
                            'topic_added_to_profile': current_topic,
                            'profile_updated': profile_updated,
                            'next_step': next_topic,
                            'next_step_explanation': explanation,
                            'next_step_videos': videos,
                            'progress': f"{new_index + 1}/{len(current_path)}",
                            'learning_path': current_path,
                            'learning_session_active': True
                        }
                    }
                else:
                    # Path completed
                    target_topic = learning_session.get('target_topic')
                    
                    return {
                        'response': f"🎉 **Congratulations!** You've completed your entire learning path and mastered **{target_topic}**!\n\n✅ **{current_topic}** has been added to your profile.\n\n🚀 What would you like to learn next?",
                        'analysis': {
                            'path_completed': True,
                            'mastered_topic': target_topic,
                            'profile_updated': profile_updated,
                            'final_topic_added': current_topic
                        }
                    }
            else:
                # Ask for confirmation before adding to profile
                response = f"Great to hear you understand **{current_topic}**! 🎉\n\n"
                response += f"Are you satisfied with your understanding of **{current_topic}** and ready to add it to your profile?\n\n"
                response += "Reply with:\n"
                response += "• **'Yes'** or **'I am satisfied'** - Add to profile and continue\n"
                response += "• **'No'** - Get more practice/examples\n"
                response += "• **'Next topic'** - Continue without adding to profile"
                
                return {
                    'response': response,
                    'analysis': {
                        'awaiting_confirmation': True,
                        'current_topic': current_topic,
                        'confirmation_requested': True
                    }
                }
        
        return {
            'response': "What topic would you like to work on completing?",
            'videos': [],
            'analysis': {'no_active_topic': True}
        }
        
# Example usage and testing
if __name__ == "__main__":
    handler = IntegratedChatHandler()
    
    # Test query
    test_query = "I want to learn about binary trees"
    result = handler.handle_chat_message(test_query)
    
    print("Response:", result['response'])
    print("Videos:", len(result['videos']))
    if result.get('analysis'):
        print("Analysis:", result['analysis'])
