import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
from analysis.analyze_article import analyze_article
from utils.token_required import token_required

load_dotenv()
app = Flask(__name__)
CORS(app)


@app.route("/article_analysis", methods=["POST"])
@token_required
def article_analysis():
    data = request.get_json()
    url = data.get("url")
    result = analyze_article(url)
    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
