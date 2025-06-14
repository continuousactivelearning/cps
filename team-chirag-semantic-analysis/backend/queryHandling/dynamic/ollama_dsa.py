import requests
import json
import os
from serpapi import GoogleSearch

def setup_ollama():
    """
    Setup Ollama with Mistral model - a good balance of performance and quality
    """
    print("Setting up Ollama with Mistral model...")
    
    # Check if Ollama is running
    try:
        response = requests.get("http://localhost:11434/api/tags")
        if response.status_code != 200:
            print("Error: Ollama server is not running. Please start Ollama first.")
            return None
    except requests.exceptions.ConnectionError:
        print("Error: Could not connect to Ollama server. Please make sure Ollama is installed and running.")
        return None

    # Pull the Mistral model if not already present
    try:
        response = requests.post("http://localhost:11434/api/pull", 
                               json={"name": "mistral"})
        if response.status_code == 200:
            print("Mistral model is ready!")
            return True
    except Exception as e:
        print(f"Error pulling model: {str(e)}")
        return None

def get_serp_results(query):
    """
    Get search results from SERP API
    """
    try:
        params = {
            "engine": "google",
            "q": query,
            "api_key": os.getenv("SERP_API_KEY")
        }
        
        search = GoogleSearch(params)
        results = search.get_dict()
        
        # Extract relevant information from search results
        search_context = []
        if "organic_results" in results:
            for result in results["organic_results"][:3]:  # Get top 3 results
                search_context.append({
                    "title": result.get("title", ""),
                    "snippet": result.get("snippet", ""),
                    "link": result.get("link", "")
                })
        
        return search_context
    except Exception as e:
        print(f"Error getting SERP results: {str(e)}")
        return []

def generate_response(prompt, system_prompt=None):
    """
    Generate a response using Ollama's Mistral model with SERP API integration
    """
    if system_prompt is None:
        system_prompt = """You are a helpful AI assistant specialized in explaining algorithms and data structures. 
        Provide clear, step-by-step explanations with examples when appropriate. 
        Focus on accuracy and educational value."""
    
    # Get search results for context
    search_results = get_serp_results(prompt)
    search_context = "\n".join([f"Title: {r['title']}\nSnippet: {r['snippet']}\nLink: {r['link']}\n" for r in search_results])
    
    # Enhance the prompt with search results
    enhanced_prompt = f"""Based on the following search results and your knowledge, {prompt}

Search Results:
{search_context}"""
    
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
        return f"Error generating respo  nse: {str(e)}"

if __name__ == "__main__":
    print("Starting Ollama setup for DSA explanations...")
    
    if setup_ollama():
        # Test with a more complex prompt that will benefit from search results
        test_prompt = "What is the size of an array?"
        print(f"\nPrompt: {test_prompt}")
        print("\nGenerating response with SERP API integration...")
        response = generate_response(test_prompt)
        print(f"\nResponse: {response}")
        
        # Test with a DSA-specific prompt
        dsa_prompt = "What are the most efficient sorting algorithms for large datasets in 2024?"
        print(f"\nPrompt: {dsa_prompt}")
        print("\nGenerating response with SERP API integration...")
        response = generate_response(dsa_prompt)
        print(f"\nResponse: {response}") 