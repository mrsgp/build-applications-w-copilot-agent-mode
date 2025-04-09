from pymongo import MongoClient
from django.conf import settings

# Establish MongoDB connection
client = MongoClient(settings.MONGO_HOST, settings.MONGO_PORT)
db = client[settings.MONGO_DB_NAME]

# Example collections
users_collection = db['users']
teams_collection = db['teams']
activities_collection = db['activities']
leaderboard_collection = db['leaderboard']
workouts_collection = db['workouts']
