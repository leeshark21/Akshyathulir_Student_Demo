from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

MONGO_URI = "mongodb+srv://leeshark:test123@fastapi.xbsftno.mongodb.net/?appName=Fastapi"


client = MongoClient(MONGO_URI, server_api=ServerApi('1'))


db = client["incubation_db"]

support_collection = db["suppoert_request"]
Mentor_collection=db["Mentor_Network"]