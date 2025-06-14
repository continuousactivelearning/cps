import requests
import time
from bs4 import BeautifulSoup
from bs4.element import Tag
import json

url = "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/lecture-slides-code/"

session = requests.Session()
time.sleep(2)  # Sleep to avoid overwhelming the server
r = session.get(url)

with open("lecture_slides_code.html", "w", encoding='utf-8') as f:
    f.write(r.text)
print("HTML content retrieved and saved to lecture_slides_code.html")

with open("lecture_slides_code.html", "r", encoding='utf-8') as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, 'html.parser')
rows = soup.find_all("tr")

lecture_titles = []

for row in rows:
    if isinstance(row, Tag):
        cols = row.find_all("td")
        if len(cols) >= 2:
            title = cols[1].get_text(strip=True)
            if title:
                lecture_titles.append(title)

# Save lecture titles to a text file (optional)
with open("lecture_titles.txt", "w", encoding='utf-8') as f:
    for title in lecture_titles:
        f.write(title + "\n")

print(f"Extracted {len(lecture_titles)} lecture titles and saved to lecture_titles.txt")

# Save lecture titles to JSON file
with open("lecture_titles.json", "w", encoding='utf-8') as f_json:
    json.dump(lecture_titles, f_json, ensure_ascii=False, indent=2)

print(f"Saved {len(lecture_titles)} lecture titles to lecture_titles.json")
