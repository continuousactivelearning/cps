import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from datasets import load_dataset
import random
import time

# Load environment variables
load_dotenv()

# Configure Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Load GSM8K dataset
try:
    ds = load_dataset("openai/gsm8k", "main", split="train")
except Exception as e:
    print(f"Error loading GSM8K dataset: {e}")
    exit(1)

# Initialize Gemini 1.5 Flash model
try:
    model = genai.GenerativeModel(model_name="gemini-1.5-flash")
except Exception as e:
    print(f"Error loading model: {e}")
    exit(1)

def detect_prerequisites(question, correct_answer="", wrong_answer=""):
    """
    Use Gemini 1.5 Flash to identify all essential prerequisites for a math word problem in the correct learning order.
    """
    prompt = f"""
    Given the following math word problem, identify the mathematical concepts or skills that are ESSENTIAL prerequisites to solve it correctly. If provided, use the correct and wrong answers to refine the analysis of required concepts.

    Problem: {question}
    Correct Answer (if provided): {correct_answer if correct_answer else 'Not provided'}
    Wrong Answer (if provided): {wrong_answer if wrong_answer else 'Not provided'}

    Instructions:
    - List only the concepts that are absolutely necessary to solve the problem.
    - Arrange the concepts in the correct learning order, from most basic to most advanced.
    - Be precise and avoid including related but non-essential concepts.
    - Return the concept names as a comma-separated list (e.g., "basic arithmetic, fractions, percentages").
    - Avoid using parentheses or sublists in the response (e.g., do not return "basic arithmetic (addition, multiplication)").
    - If no prerequisites are required (e.g., the problem is trivial), return "None".
    - If the wrong answer suggests a specific misunderstanding, prioritize the concept most directly related to that misunderstanding.

    Essential Prerequisites:
    """
    
    try:
        response = model.generate_content(prompt)
        print(f"Gemini API response: {response.text}")  # Debug log
        if not response.text or response.text.strip().lower() == "none":
            return ["None"]
        # Clean and parse the response
        prerequisites = [concept.strip() for concept in response.text.strip().split(',') if concept.strip()]
        # Remove any nested structures or parentheses
        cleaned_prerequisites = []
        for concept in prerequisites:
            # Remove parentheses and their contents
            clean_concept = concept.split('(')[0].strip()
            if clean_concept:
                cleaned_prerequisites.append(clean_concept)
        print(f"Parsed prerequisites: {cleaned_prerequisites}")  # Debug log
        return cleaned_prerequisites if cleaned_prerequisites else ["None"]
    except Exception as e:
        print(f"Error in Gemini API call: {e}")
        return ["Error: Unable to detect prerequisites"]

def get_single_missing_prerequisite(prerequisites):
    """
    Select one prerequisite as the missing one, prioritizing more advanced concepts.
    """
    print(f"Input to get_single_missing_prerequisite: {prerequisites}")  # Debug log
    if not prerequisites or "None" in prerequisites or "Error" in prerequisites[0]:
        return "None"
    # Prioritize the last prerequisite (most advanced in the ordered list)
    missing_prereq = prerequisites[-1] if prerequisites else "None"
    print(f"Selected missing prerequisite: {missing_prereq}")  # Debug log
    return missing_prereq

def get_random_gsm8k_question():
    """
    Return a random question from GSM8K dataset.
    """
    return random.choice(ds['train'])['question']

@app.route('/api/detect-prereqs', methods=['POST'])
def detect_prerequisites_api():
    data = request.get_json()
    question = data.get('question')
    correct_answer = data.get('correct_answer', '')
    wrong_answer = data.get('wrong_answer', '')
    
    if not question:
        return jsonify({"error": "No question provided"}), 400
    
    # If "random" is provided, use a random GSM8K question
    if question.lower() == "random":
        question = get_random_gsm8k_question()
    
    all_prerequisites = detect_prerequisites(question, correct_answer, wrong_answer)
    single_missing_prerequisite = get_single_missing_prerequisite(all_prerequisites)
    
    response = {
        "question": question,
        "all_prerequisites": all_prerequisites,
        "single_missing_prerequisite": single_missing_prerequisite
    }
    print(f"API response: {response}")  # Debug log
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)