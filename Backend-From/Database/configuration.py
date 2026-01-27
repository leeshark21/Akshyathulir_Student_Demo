
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

url = "mongodb+srv://leeshark:test123@fastapi.xbsftno.mongodb.net/?appName=Fastapi"

# Create a new client and connect to the server
client = MongoClient(url, server_api=ServerApi('1'))


db = client["student_incu"]
collection = db["data"]

print("MongoDB connected successfully")
