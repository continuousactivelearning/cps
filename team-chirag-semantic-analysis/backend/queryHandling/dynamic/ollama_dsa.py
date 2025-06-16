import requests
import json
import os
from serpapi import GoogleSearch
from typing import List, Dict, Optional
from dataclasses import dataclass
from datetime import datetime
from urllib.parse import quote

@dataclass
class LearningResource:
    title: str
    description: str
    url: str
    type: str  # 'youtube', 'nptel', or 'article'
    source: str
    metadata: Dict

@dataclass
class TopicResource:
    title: str
    url: str
    source: str
    difficulty: str = "N/A"
    description: str = ""

class DSAResourceFinder:
    def __init__(self, serp_api_key: str):
        self.serp_api_key = serp_api_key
        self.trusted_channels = [
            "mycodeschool",
            "backtobackswe",
            "tusharroy2525",
            "kevinnaughtonjr",
            "williamfiset",
            "freecodecamp",
            "geeksforgeeks",
            "takeuforward",
            "striver_79",
            "neetcode"
        ]
        
    def search_youtube(self, query: str) -> List[LearningResource]:
        """
        Search for YouTube videos using Google search with specific filters
        """
        try:
            # Construct search query with trusted channels
            channel_filter = " OR ".join([f"channel:{channel}" for channel in self.trusted_channels])
            search_query = f"site:youtube.com ({query}) ({channel_filter})"
            
            params = {
                "engine": "google",
                "q": search_query,
                "api_key": self.serp_api_key,
                "num": 5,  # Get top 5 results
                "gl": "us",
                "hl": "en"
            }
            
            search = GoogleSearch(params)
            results = search.get_dict()
            
            resources = []
            if "organic_results" in results:
                for result in results["organic_results"]:
                    link = result.get("link", "")
                    if "youtube.com/watch" in link:
                        # Extract video ID from URL
                        video_id = link.split("v=")[-1].split("&")[0]
                        # Construct clean YouTube URL
                        clean_url = f"https://www.youtube.com/watch?v={video_id}"
                        
                        resources.append(LearningResource(
                            title=result.get("title", ""),
                            description=result.get("snippet", ""),
                            url=clean_url,
                            type="youtube",
                            source="YouTube",
                            metadata={
                                "channel": result.get("displayed_link", "").replace("www.youtube.com/", ""),
                                "search_rank": len(resources) + 1
                            }
                        ))
            
            return resources
        except Exception as e:
            print(f"Error searching YouTube: {str(e)}")
            return []

    def search_nptel(self, query: str) -> List[LearningResource]:
        """
        Search for NPTEL courses related to the query
        """
        try:
            search_query = f"site:nptel.ac.in {query} course"
            
            params = {
                "engine": "google",
                "q": search_query,
                "api_key": self.serp_api_key,
                "num": 3
            }
            
            search = GoogleSearch(params)
            results = search.get_dict()
            
            resources = []
            if "organic_results" in results:
                for result in results["organic_results"]:
                    resources.append(LearningResource(
                        title=result.get("title", ""),
                        description=result.get("snippet", ""),
                        url=result.get("link", ""),
                        type="nptel",
                        source="NPTEL",
                        metadata={
                            "institution": "IIT/IIM",
                            "search_rank": len(resources) + 1
                        }
                    ))
            
            return resources
        except Exception as e:
            print(f"Error searching NPTEL: {str(e)}")
            return []

    def get_learning_resources(self, query: str) -> List[LearningResource]:
        """
        Get all learning resources for a given query
        """
        youtube_resources = self.search_youtube(query)
        nptel_resources = self.search_nptel(query)
        
        # Combine and sort resources
        all_resources = youtube_resources + nptel_resources
        return all_resources

    def get_geeksforgeeks_links(self, topic: str) -> List[TopicResource]:
        """
        Get specific GeeksforGeeks links for a topic
        """
        try:
            # Format topic for URL
            formatted_topic = topic.lower().replace(" ", "-")
            
            # Common GeeksforGeeks URL patterns
            base_urls = {
                "algorithms": f"https://www.geeksforgeeks.org/{formatted_topic}-algorithm/",
                "data-structures": f"https://www.geeksforgeeks.org/{formatted_topic}-data-structure/",
                "problems": f"https://www.geeksforgeeks.org/{formatted_topic}-problems/"
            }
            
            resources = []
            for category, url in base_urls.items():
                resources.append(TopicResource(
                    title=f"GeeksforGeeks {topic} {category.replace('-', ' ').title()}",
                    url=url,
                    source="GeeksforGeeks",
                    description=f"Comprehensive {category} tutorial and implementation"
                ))
            
            return resources
        except Exception as e:
            print(f"Error getting GeeksforGeeks links: {str(e)}")
            return []

    def get_leetcode_links(self, topic: str) -> List[TopicResource]:
        """
        Get specific LeetCode links for a topic
        """
        try:
            # Format topic for URL
            formatted_topic = quote(topic.lower().replace(" ", "-"))
            
            # LeetCode URL patterns
            base_urls = {
                "problems": f"https://leetcode.com/tag/{formatted_topic}/",
                "study-plan": f"https://leetcode.com/study-plan/{formatted_topic}/",
                "discussion": f"https://leetcode.com/discuss/tag/{formatted_topic}"
            }
            
            resources = []
            for category, url in base_urls.items():
                resources.append(TopicResource(
                    title=f"LeetCode {topic} {category.replace('-', ' ').title()}",
                    url=url,
                    source="LeetCode",
                    description=f"Practice problems and solutions for {topic}"
                ))
            
            return resources
        except Exception as e:
            print(f"Error getting LeetCode links: {str(e)}")
            return []

    def get_coursera_links(self, topic: str) -> List[TopicResource]:
        """
        Get specific Coursera links for a topic
        """
        try:
            # Format topic for URL
            formatted_topic = quote(topic.lower().replace(" ", "+"))
            
            # Coursera URL patterns
            base_urls = {
                "courses": f"https://www.coursera.org/search?query={formatted_topic}&index=prod_all_launched_products_term_optimization",
                "specializations": f"https://www.coursera.org/search?query={formatted_topic}&index=prod_all_launched_products_term_optimization&productType=Specialization"
            }
            
            resources = []
            for category, url in base_urls.items():
                resources.append(TopicResource(
                    title=f"Coursera {topic} {category.title()}",
                    url=url,
                    source="Coursera",
                    description=f"Online courses and specializations for {topic}"
                ))
            
            return resources
        except Exception as e:
            print(f"Error getting Coursera links: {str(e)}")
            return []

    def get_topic_resources(self, topic: str) -> List[TopicResource]:
        """
        Get all topic-specific resources
        """
        resources = []
        resources.extend(self.get_geeksforgeeks_links(topic))
        resources.extend(self.get_leetcode_links(topic))
        resources.extend(self.get_coursera_links(topic))
        return resources

def setup_ollama():
    """
    Setup Ollama with Mistral model
    """
    print("Setting up Ollama with Mistral model...")
    
    try:
        response = requests.get("http://localhost:11434/api/tags")
        if response.status_code != 200:
            print("Error: Ollama server is not running. Please start Ollama first.")
            return None
    except requests.exceptions.ConnectionError:
        print("Error: Could not connect to Ollama server. Please make sure Ollama is installed and running.")
        return None

    try:
        response = requests.post("http://localhost:11434/api/pull", 
                               json={"name": "mistral"})
        if response.status_code == 200:
            print("Mistral model is ready!")
            return True
    except Exception as e:
        print(f"Error pulling model: {str(e)}")
        return None

def generate_response(prompt: str, resource_finder: DSAResourceFinder, system_prompt: Optional[str] = None) -> str:
    """
    Generate a response using Ollama's Mistral model with topic-specific resources
    """
    if system_prompt is None:
        system_prompt = """You are a helpful AI assistant specialized in explaining algorithms and data structures. 
        Provide clear, step-by-step explanations with examples when appropriate. 
        Focus on accuracy and educational value. When recommending learning resources, ensure they are relevant 
        and from trusted sources."""
    
    # Get topic-specific resources
    resources = resource_finder.get_topic_resources(prompt)
    
    # Group resources by source
    grouped_resources = {}
    for r in resources:
        if r.source not in grouped_resources:
            grouped_resources[r.source] = []
        grouped_resources[r.source].append(r)
    
    # Format resources for the prompt
    resources_context = []
    
    # Add GeeksforGeeks resources
    if "GeeksforGeeks" in grouped_resources:
        gfg_resources = grouped_resources["GeeksforGeeks"]
        resources_context.append("GeeksforGeeks Resources:")
        for r in gfg_resources:
            resources_context.append(f"- {r.title}: {r.url}")
    
    # Add LeetCode resources
    if "LeetCode" in grouped_resources:
        lc_resources = grouped_resources["LeetCode"]
        resources_context.append("\nLeetCode Resources:")
        for r in lc_resources:
            resources_context.append(f"- {r.title}: {r.url}")
    
    # Add Coursera resources
    if "Coursera" in grouped_resources:
        coursera_resources = grouped_resources["Coursera"]
        resources_context.append("\nCoursera Resources:")
        for r in coursera_resources:
            resources_context.append(f"- {r.title}: {r.url}")
    
    resources_str = "\n".join(resources_context)
    
    # Enhance the prompt with resources
    enhanced_prompt = f"""Based on the following learning resources and your knowledge, {prompt}

Learning Resources:
{resources_str}

Please provide a comprehensive answer and recommend these specific learning resources when appropriate."""
    
    try:
        response = requests.post("http://localhost:11434/api/generate",
                               json={
                                   "model": "mistral",
                                   "prompt": enhanced_prompt,
                                   "system": system_prompt,
                                   "stream": False,
                                   "options": {
                                       "temperature": 0.7,
                                       "top_p": 0.9,
                                       "top_k": 40,
                                       "num_ctx": 4096,
                                   }
                               })
        
        if response.status_code == 200:
            return response.json()["response"]
        else:
            return f"Error: {response.status_code} - {response.text}"
            
    except Exception as e:
        return f"Error generating response: {str(e)}"

if __name__ == "__main__":
    print("Starting Ollama setup for DSA explanations...")
    
    if setup_ollama():
        # Initialize resource finder
        resource_finder = DSAResourceFinder(os.getenv("SERP_API_KEY"))
        
        # Test with a DSA-specific prompt
        test_prompt = "What are the most efficient sorting algorithms for large datasets?"
        print(f"\nPrompt: {test_prompt}")
        print("\nGenerating response with topic-specific resources...")
        response = generate_response(test_prompt, resource_finder)
        print(f"\nResponse: {response}")
        
        # Test with a more complex prompt that will benefit from search results
        dsa_prompt = "What are the most efficient sorting algorithms for large datasets in 2024?"
        print(f"\nPrompt: {dsa_prompt}")
        print("\nGenerating response with topic-specific resources...")
        response = generate_response(dsa_prompt, resource_finder)
        print(f"\nResponse: {response}") 