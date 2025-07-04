import requests
import json
import os
from typing import List, Dict, Optional
from dataclasses import dataclass
from urllib.parse import quote
import time
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get API keys from environment variables
SERP_API_KEY = os.getenv("SERP_API_KEY")
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not SERP_API_KEY or not YOUTUBE_API_KEY:
    raise ValueError("Please set SERP_API_KEY and YOUTUBE_API_KEY in your .env file")

if not GROQ_API_KEY:
    raise ValueError("Please set GROQ_API_KEY in your .env file")

@dataclass
class VideoResource:
    title: str
    url: str
    channel_name: str
    view_count: str
    duration: str
    description: str = ""

class YouTubeResourceFinder:
    def __init__(self):
        self.youtube_api_key = YOUTUBE_API_KEY
        if not self.youtube_api_key:
            raise ValueError("YouTube API key not found")
            
        # Trusted educational channels with their channel IDs
        self.trusted_channels = {
            "UC8butISFwT-Wl7EV0hUK0BQ": "freeCodeCamp.org",
            "UCD8yeTczadqdARzQUp29PJw": "Abdul Bari",
            "UC4UjAiz8pTb9qabnEJOGnzw": "Tushar Roy - Coding Made Simple",
            "UC1fLEeYICmo3O9cUsqIi7HA": "Computerphile",
            "UCxX9wt5FWQUAAz4UrysqK9A": "CS Dojo",
            "UCFe6jenM1Bc54qtBsIJGRZQ": "Animesh Yadav",
            "UCaO6VoaYJv4kS-TQO_M-N_g": "Love Babbar"
        }
        
        # Common DSA topics and their keywords
        self.topic_keywords = {
            "sorting": ["bubble sort", "merge sort", "quick sort", "heap sort", "insertion sort"],
            "searching": ["binary search", "linear search", "depth first search", "breadth first search"],
            "tree": ["binary tree", "BST", "AVL tree", "red black tree"],
            "graph": ["graph traversal", "dijkstra", "floyd warshall", "minimum spanning tree"],
            "dynamic programming": ["dp", "memoization", "tabulation", "optimal substructure"],
            "array": ["array manipulation", "two pointers", "sliding window"],
            "linked list": ["singly linked list", "doubly linked list", "circular linked list"],
            "stack": ["stack implementation", "stack applications"],
            "queue": ["queue implementation", "priority queue", "circular queue"]
        }

    def get_videos(self, topic: str) -> List[VideoResource]:
        """Get relevant YouTube videos for a DSA topic"""
        try:
            # Construct search query
            search_terms = [topic]
            
            # Add related keywords if topic matches known patterns
            for key, keywords in self.topic_keywords.items():
                if key.lower() in topic.lower():
                    search_terms.extend(keywords[:2])  # Add top 2 related terms
                    break
            
            query = f"{' '.join(search_terms)} programming tutorial"
            print(f"🔍 Searching for: {query}")
            
            # YouTube API search endpoint
            search_url = "https://www.googleapis.com/youtube/v3/search"
            search_params = {
                'part': 'snippet',
                'q': query,
                'key': self.youtube_api_key,
                'type': 'video',
                'order': 'relevance',
                'maxResults': 10,
                'videoDefinition': 'any',
                'videoDuration': 'medium'  # Prefer medium-length videos
            }
            
            response = requests.get(search_url, params=search_params)
            
            if response.status_code != 200:
                print(f"❌ YouTube API error: {response.status_code}")
                return []
            
            data = response.json()
            resources = []
            
            video_ids = [item['id']['videoId'] for item in data.get('items', [])]
            
            if video_ids:
                # Get additional video details
                details_url = "https://www.googleapis.com/youtube/v3/videos"
                details_params = {
                    'part': 'snippet,statistics,contentDetails',
                    'id': ','.join(video_ids),
                    'key': self.youtube_api_key
                }
                
                details_response = requests.get(details_url, params=details_params)
                
                if details_response.status_code == 200:
                    details_data = details_response.json()
                    
                    for item in details_data.get('items', []):
                        video_id = item['id']
                        snippet = item['snippet']
                        statistics = item.get('statistics', {})
                        content_details = item.get('contentDetails', {})
                        
                        # Format view count
                        view_count = statistics.get('viewCount', '0')
                        if view_count.isdigit():
                            views = int(view_count)
                            if views >= 1000000:
                                view_text = f"{views/1000000:.1f}M views"
                            elif views >= 1000:
                                view_text = f"{views/1000:.1f}K views"
                            else:
                                view_text = f"{views} views"
                        else:
                            view_text = "N/A views"
                        
                        # Format duration
                        duration = content_details.get('duration', '')
                        duration_text = self.parse_duration(duration)
                        
                        # Check if from trusted channel
                        channel_id = snippet.get('channelId', '')
                        channel_name = snippet.get('channelTitle', '')
                        is_trusted = channel_id in self.trusted_channels
                        
                        description = f"Video tutorial on {topic}"
                        if is_trusted:
                            description += f" ✅ Trusted educator: {channel_name}"
                        description += f" | {view_text}"
                        if duration_text:
                            description += f" | Duration: {duration_text}"
                        
                        resources.append(VideoResource(
                            title=snippet.get('title', ''),
                            url=f"https://www.youtube.com/watch?v={video_id}",
                            channel_name=channel_name,
                            view_count=view_text,
                            duration=duration_text,
                            description=description
                        ))
            
            # Sort: trusted channels first, then by view count
            resources.sort(key=lambda x: (
                x.channel_name not in self.trusted_channels.values(),
                -int(''.join(filter(str.isdigit, x.view_count.split()[0])) or '0')
            ))
            
            return resources[:5]  # Return top 5
            
        except Exception as e:
            print(f"❌ Error getting YouTube videos: {str(e)}")
            return []

    def parse_duration(self, duration: str) -> str:
        """Parse YouTube API duration format (PT4M13S) to readable format"""
        if not duration:
            return ""
        
        import re
        match = re.match(r'PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?', duration)
        if not match:
            return duration
        
        hours, minutes, seconds = match.groups()
        parts = []
        
        if hours:
            parts.append(f"{hours}h")
        if minutes:
            parts.append(f"{minutes}m")
        if seconds:
            parts.append(f"{seconds}s")
        
        return " ".join(parts)

def generate_response(prompt: str, system_prompt: str = None) -> str:
    """Generate a response using Groq's mistral-saba-24b model"""
    if system_prompt is None:
        system_prompt = """You are a helpful AI assistant specialized in explaining algorithms and data structures. 
        Provide clear, step-by-step explanations with examples when appropriate. 
        Focus on accuracy and educational value."""
    
    try:
        headers = {
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json"
        }
        
        payload = {
            "model": "mistral-saba-24b",
            "messages": [
                {
                    "role": "system",
                    "content": system_prompt
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            "temperature": 0.7,
            "max_tokens": 4096,
            "top_p": 0.9
        }
        
        response = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers=headers,
            json=payload
        )
        
        if response.status_code == 200:
            data = response.json()
            return data["choices"][0]["message"]["content"]
        else:
            return f"Error: {response.status_code} - {response.text}"
            
    except Exception as e:
        return f"Error generating response: {str(e)}"

def main():
    print("🚀 Starting DSA Learning Assistant...")
    
    # Check if Groq API key is available
    if not GROQ_API_KEY:
        print("❌ GROQ_API_KEY not found in environment variables. Please set it in your .env file.")
        return
    
    try:
        # Initialize YouTube resource finder
        youtube_finder = YouTubeResourceFinder()
        
        while True:
            topic = input("\nEnter a DSA topic (or 'quit' to exit): ")
            if topic.lower() == 'quit':
                break
            
            print("\n🤖 Generating explanation using Groq API...")
            explanation = generate_response(f"Explain {topic} in detail with examples")
            print("\n📝 Explanation:")
            print(explanation)
            
            print("\n🔍 Finding video resources...")
            videos = youtube_finder.get_videos(topic)
            
            if videos:
                print("\n📺 Recommended Videos:")
                for i, video in enumerate(videos, 1):
                    print(f"\n{i}. {video.title}")
                    print(f"   🔗 {video.url}")
                    print(f"   📊 {video.description}")
            else:
                print("❌ No videos found. Try a different topic.")
                
    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    main()