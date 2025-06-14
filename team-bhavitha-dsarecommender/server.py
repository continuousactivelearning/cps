from flask import Flask, request, jsonify
from recommendation_engine import recommend_for_learner

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    response = recommend_for_learner(data)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
