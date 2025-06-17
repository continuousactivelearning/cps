# developed by: Sriram P
from datasets import load_dataset
import google.generativeai as genai
import csv
import time
import os
from dotenv import load_dotenv


load_dotenv()

gemini_api_key = os.getenv("GEMINI_API_KEY")

#Load  GSM8K dataset
print("Loading GSM8K dataset...")
dataset = load_dataset("gsm8k", "main", split="train")

# Select 200 questions
subset = dataset.select(range(200))


genai.configure(api_key=gemini_api_key)

model = genai.GenerativeModel("gemini-1.5-flash")

# Prepare a list to store the question and its ordered prerequisites
results = []

print("Sending prompts to Gemini Flash...")

#Iterate over each question and get ordered prerequisite concepts
for idx, entry in enumerate(subset):
    question = entry["question"]

    # structured prompt asking for ordered prerequisite knowledge
    prompt = (
        f"Problem: {question}\n"
        "Task: List the prerequisite concepts or skills that a student must understand to solve this problem.\n"
        "Provide the concepts in the correct learning order, starting from the most basic to the most advanced.\n"
        "Respond with a comma-separated list like: concept1, concept2, concept3"
    )

    try:        
        response = model.generate_content(prompt)
        prerequisites = response.text.strip()

    except Exception as e:
        prerequisites = f"ERROR: {str(e)}"

    results.append({
        "question": question,
        "prerequisites": prerequisites
    })

    # Print progress
    print(f"[{idx + 1}/200] Processed")

    # Delay to avoid hitting API rate limits
    time.sleep(1)

#CSV generation
output_file = "gsm8k_ordered_prerequisites.csv"
print(f"Saving results to {output_file}...")

with open(output_file, mode="w", newline='', encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["question", "prerequisites"])
    writer.writeheader()
    writer.writerows(results)

print("Done. File saved successfully.")
