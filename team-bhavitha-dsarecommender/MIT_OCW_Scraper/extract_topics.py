import fitz  # PyMuPDF
import os
import json

# Step 1: Topics to search for
topics = ["Loops", "Algorithms", "Conditionals", "Variables", "Functions", "Recursion", "Branching", "Expressions", "Computation"]

# Step 2: Extract text from PDF
def extract_text(pdf_path):
    text = ""
    doc = fitz.open(pdf_path)
    for page in doc:
        text += page.get_text()
    return text.strip()

# Step 3: Match text with topics
def find_topics(text):
    found = []
    for topic in topics:
        if topic.lower() in text.lower():
            found.append(topic)
    return found

# Step 4: Main script
def main():
    pdf_path = "mit_pdfs/lecture_01.pdf"
    raw_text = extract_text(pdf_path)

    # Save raw text
    os.makedirs("raw_text", exist_ok=True)
    with open("raw_text/lecture_01_raw.txt", "w", encoding="utf-8") as f:
        f.write(raw_text)

    # Find matched topics
    matched_topics = find_topics(raw_text)
    
    # Save concept JSON
    os.makedirs("json_output", exist_ok=True)
    data = [{"title": topic, "content": raw_text} for topic in matched_topics]
    with open("json_output/lecture_01_concepts.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

    print("✅ Lecture 1 processed and saved!")

if __name__ == "__main__":
    main()
