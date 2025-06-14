# gsm8k_concepts_extraction.py

from datasets import load_dataset
import google.generativeai as genai
import csv
import time
import os
from dotenv import load_dotenv

load_dotenv()
gemini_api_key = os.getenv("GEMINI_API_KEY")

print("Loading GSM8K dataset...")
dataset = load_dataset("gsm8k", "main", split="train")
subset = dataset.select(range(200))  # First 200 entries

genai.configure(api_key=gemini_api_key)
model = genai.GenerativeModel("gemini-1.5-flash")

unique_concepts = set()

print("Sending prompts to Gemini Flash...")

for idx, entry in enumerate(subset):
    question = entry["question"]

    prompt = (
        f"Problem: {question}\n"
        "Task: List the prerequisite concepts or skills that a student must understand to solve this problem.\n"
        "Provide the concepts in the correct learning order, starting from the most basic to the most advanced.\n"
        "Respond with a comma-separated list like: concept1, concept2, concept3"
    )

    try:
        response = model.generate_content(prompt)
        prerequisites = response.text.strip()
        
        # Split the response by commas and clean each concept
        concepts = [c.strip().title() for c in prerequisites.split(',') if c.strip()]
        unique_concepts.update(concepts)

    except Exception as e:
        print(f"[{idx + 1}/200] ERROR: {str(e)}")
        continue

    print(f"[{idx + 1}/200] Processed")
    time.sleep(1)  # To avoid API rate limits

output_file = "gsm8k_unique_concepts.csv"
print(f"Saving {len(unique_concepts)} unique concepts to {output_file}...")

with open(output_file, mode="w", newline='', encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["Concept"])
    for concept in sorted(unique_concepts):
        writer.writerow([concept])

print("Done. File saved successfully.")
