import subprocess

def generate_mcqs(concept: str) -> str:
    prompt = f"""Generate 3 multiple choice questions (MCQs) on the concept: "{concept}".
Each question must have:
1. One correct answer
2. Three wrong but relevant options
3. Options labeled A-D and an 'Answer:' line
Format strictly like:
Q1. ...
A. ...
B. ...
C. ...
D. ...
Answer: B
"""
    result = subprocess.run(
        ["ollama", "run", "mistral", prompt],
        capture_output=True,
        text=True,
        encoding="utf-8"
    )

    if result.returncode != 0:
        return f"❌ Error: {result.stderr.strip()}"
    return result.stdout.strip()
if __name__ == "__main__":
    concept = input("Enter a concept for MCQ generation: ")
    output = generate_mcqs(concept)
    print("\nGenerated MCQs:\n")
    print(output)
