#!/usr/bin/env python3
"""
Test script for DSA validation integration
"""

import sys
import os
from pathlib import Path

# Add the current directory to path for imports
current_dir = Path(__file__).parent
sys.path.append(str(current_dir))

from dsa_topic_validator import DSATopicValidator

def test_dsa_validator():
    """Test the DSA validator with various queries."""
    validator = DSATopicValidator()
    
    test_cases = [
        # DSA-related queries
        ("What is binary search?", True),
        ("How does merge sort work?", True),
        ("Explain dynamic programming", True),
        ("What's the time complexity of quicksort?", True),
        ("How to implement a stack using arrays?", True),
        ("Difference between BFS and DFS", True),
        ("What are the applications of hash tables?", True),
        
        # Non-DSA queries
        ("What's the weather today?", False),
        ("How to cook pasta?", False),
        ("Tell me about web development", False),
        ("What is machine learning?", False),
        ("How to learn Python?", False),
        ("What are the latest movies?", False),
        
        # Edge cases
        ("", False),
        ("a", False),
        ("Hello", False),
        ("array sort tree", True),  # Should be detected as DSA
    ]
    
    print("Testing DSA Topic Validator")
    print("=" * 50)
    
    correct_predictions = 0
    total_tests = len(test_cases)
    
    for query, expected_dsa in test_cases:
        result = validator.validate_dsa_query(query)
        is_dsa = result['is_dsa_related']
        
        status = "✓" if is_dsa == expected_dsa else "✗"
        if is_dsa == expected_dsa:
            correct_predictions += 1
        
        print(f"{status} Query: '{query}'")
        print(f"   Expected: {expected_dsa}, Got: {is_dsa}")
        print(f"   Confidence: {result['confidence']:.3f}")
        print(f"   Keywords: {result['matched_keywords']}")
        if not is_dsa:
            print(f"   Reason: {result['reason']}")
        print()
    
    accuracy = (correct_predictions / total_tests) * 100
    print(f"Accuracy: {accuracy:.1f}% ({correct_predictions}/{total_tests})")
    
    return accuracy >= 80  # Return True if accuracy is good

if __name__ == "__main__":
    success = test_dsa_validator()
    if success:
        print("\n✓ DSA Validator integration test passed!")
    else:
        print("\n✗ DSA Validator integration test failed!")
        sys.exit(1)
