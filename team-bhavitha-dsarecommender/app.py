from flask import Flask, request, jsonify, render_template
from recommendation_engine import recommend_for_learner
import os
import json

app = Flask(__name__, template_folder='templates')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    learner_id = data.get('learner_id')
    mastered_concepts = data.get('mastered_concepts', [])

    profile = {
        'learner_id': learner_id,
        'mastered_concepts': mastered_concepts
    }

    recommended = recommend_for_learner(profile)

    # Save recommendations to file
    os.makedirs('graph/recommendations', exist_ok=True)
    with open(f'graph/recommendations/recommendations_{learner_id}.json', 'w') as f:
        json.dump({'recommended_concepts': recommended}, f, indent=2)

    return jsonify({'recommended_concepts': recommended})

if __name__ == '__main__':
    app.run(debug=True)
