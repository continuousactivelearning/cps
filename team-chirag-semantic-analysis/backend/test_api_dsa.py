#!/usr/bin/env python3
"""
Test script to verify DSA validation integration in the API
"""

import requests
import json

def test_api_with_dsa_validation():
    """Test the API with DSA and non-DSA queries."""
    
    api_url = "http://localhost:8000/api/chat"
    
    test_cases = [
        {
            "name": "DSA Query - Binary Search",
            "message": "What is binary search algorithm?",
            "expected_response": True  # Should get a proper response
        },
        {
            "name": "DSA Query - Dynamic Programming",
            "message": "Explain dynamic programming",
            "expected_response": True  # Should get a proper response
        },
        {
            "name": "Non-DSA Query - Weather",
            "message": "What's the weather like today?",
            "expected_response": False  # Should get rejection message
        },
        {
            "name": "Non-DSA Query - Cooking",
            "message": "How to cook pasta?",
            "expected_response": False  # Should get rejection message
        },
        {
            "name": "Non-DSA Query - Web Development",
            "message": "Tell me about web development",
            "expected_response": False  # Should get rejection message
        }
    ]
    
    print("Testing API with DSA Validation")
    print("=" * 50)
    
    for test_case in test_cases:
        print(f"\nTest: {test_case['name']}")
        print(f"Query: {test_case['message']}")
        
        try:
            response = requests.post(api_url, json={
                "message": test_case['message'],
                "chat_history": [],
                "user_id": "test_user"
            })
            
            if response.status_code == 200:
                data = response.json()
                response_text = data.get('response', '')
                analysis = data.get('analysis', {})
                
                print(f"Status: ✅ Success")
                print(f"Response: {response_text[:200]}...")
                
                # Check if the response matches expected behavior
                if test_case['expected_response']:
                    if 'I can only help with Data Structures and Algorithms' in response_text:
                        print("❌ Expected DSA response but got rejection")
                    else:
                        print("✅ Got expected DSA response")
                else:
                    if 'I can only help with Data Structures and Algorithms' in response_text:
                        print("✅ Got expected rejection message")
                    else:
                        print("❌ Expected rejection but got DSA response")
                
                # Show DSA validation info if available
                if 'dsa_validation' in analysis:
                    dsa_info = analysis['dsa_validation']
                    print(f"DSA Related: {dsa_info.get('is_dsa_related', 'N/A')}")
                    print(f"Confidence: {dsa_info.get('confidence', 'N/A')}")
                    print(f"Keywords: {dsa_info.get('matched_keywords', [])}")
                
            else:
                print(f"❌ API Error: {response.status_code}")
                print(f"Response: {response.text}")
                
        except requests.exceptions.RequestException as e:
            print(f"❌ Connection Error: {e}")
        
        print("-" * 30)

if __name__ == "__main__":
    test_api_with_dsa_validation()
