#!/usr/bin/env python3
"""
Test script for Groq Cloud integration
Run this to verify everything is working before deployment
"""

import os
import sys
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def test_groq_integration():
    """Test the Groq integration"""
    print("🧪 Testing Groq Cloud Integration...")
    
    # Check if GROQ_API_KEY is set
    groq_key = os.getenv("GROQ_API_KEY")
    if not groq_key or groq_key == "your_groq_api_key_here":
        print("❌ GROQ_API_KEY not found or not set properly")
        print("Please set your actual Groq API key in the .env file")
        return False
    
    print("✅ GROQ_API_KEY found")
    
    try:
        # Test import
        from queryHandling.dynamic.groq_dsa_yt import generate_response, YouTubeResourceFinder
        print("✅ Successfully imported groq_dsa_yt module")
        
        # Test simple response generation
        print("🤖 Testing LLM response generation...")
        test_prompt = "Explain what is a binary search tree in one sentence"
        response = generate_response(test_prompt)
        
        if response and not response.startswith("Error"):
            print("✅ LLM response generation successful")
            print(f"📝 Response: {response[:100]}...")
        else:
            print(f"❌ LLM response generation failed: {response}")
            return False
        
        # Test YouTube resource finder (if API key available)
        youtube_key = os.getenv("YOUTUBE_API_KEY")
        if youtube_key and youtube_key != "your_youtube_api_key_here":
            print("🔍 Testing YouTube resource finder...")
            yt_finder = YouTubeResourceFinder()
            videos = yt_finder.get_videos("binary search")
            
            if videos:
                print(f"✅ YouTube resource finder successful - found {len(videos)} videos")
            else:
                print("⚠️ YouTube resource finder returned no videos (this might be normal)")
        else:
            print("⚠️ YOUTUBE_API_KEY not set - skipping YouTube test")
        
        print("\n🎉 All tests passed! Your Groq integration is ready for deployment.")
        return True
        
    except ImportError as e:
        print(f"❌ Import error: {e}")
        print("Make sure all dependencies are installed: pip install -r queryHandling/dynamic/requirement.txt")
        return False
    except Exception as e:
        print(f"❌ Test failed: {e}")
        return False

def test_server_integration():
    """Test the server integration"""
    print("\n🌐 Testing server integration...")
    
    try:
        from server import app
        print("✅ Server imports successfully")
        
        # Test that the chat endpoint exists
        from fastapi.testclient import TestClient
        client = TestClient(app)
        
        # Test the chat endpoint
        response = client.post("/api/chat", json={"message": "What is a linked list?"})
        
        if response.status_code == 200:
            data = response.json()
            if "response" in data and "videos" in data:
                print("✅ Server chat endpoint working")
                print(f"📝 Response length: {len(data['response'])} characters")
                print(f"📺 Videos found: {len(data['videos'])}")
                return True
            else:
                print("❌ Server response missing expected fields")
                return False
        else:
            print(f"❌ Server returned status code: {response.status_code}")
            return False
            
    except ImportError as e:
        print(f"❌ Server test failed: {e}")
        print("Make sure FastAPI and testclient are installed")
        return False
    except Exception as e:
        print(f"❌ Server test failed: {e}")
        return False

if __name__ == "__main__":
    print("🚀 Groq Cloud Integration Test Suite")
    print("=" * 50)
    
    # Test Groq integration
    groq_success = test_groq_integration()
    
    if groq_success:
        # Test server integration
        server_success = test_server_integration()
        
        if server_success:
            print("\n🎉 All tests passed! Your backend is ready for deployment.")
            sys.exit(0)
        else:
            print("\n❌ Server integration test failed.")
            sys.exit(1)
    else:
        print("\n❌ Groq integration test failed.")
        sys.exit(1) 