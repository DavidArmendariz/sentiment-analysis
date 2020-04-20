import os
from aylienapiclient import textapi
from dotenv import load_dotenv

load_dotenv()

APP_ID = os.environ.get("APP_ID")
API_KEY = os.environ.get("API_KEY")

client = textapi.Client(APP_ID, API_KEY)


def analyze_article(url):
    try:
        # API call to get the summarized text and the whole text
        summary = client.Summarize({"url": url, "sentence_number": 3})
        text = summary["text"]
        # API call to get the sentiment
        sentiment = client.Sentiment({"text": text})
        # API call to get the concepts as a list
        concepts = client.Concepts({"text": text})
        concepts_as_list = list()
        for _, value in concepts["concepts"].items():
            concept = map(lambda c: c["string"], value["surfaceForms"])
            concepts_as_list.append(concept.__next__())
        # API call to get the classifications as a list
        classifications = client.Classify({"url": url})
        classifications_as_list = list()
        for category in classifications["categories"]:
            classifications_as_list.append(category)
        # API call to get the entities
        entities = client.Entities({"text": text})
        return {"sentiment": sentiment, "concepts": concepts_as_list,
                "classification": classifications_as_list, "summary": summary, "entities": entities}
    except Exception as e:
        print("Error when calling the API")
