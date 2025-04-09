from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, LeaderboardSerializer, WorkoutSerializer
from .models import users_collection, teams_collection, activities_collection, leaderboard_collection, workouts_collection

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': '/api/users/',
        'teams': '/api/teams/',
        'activities': '/api/activities/',
        'leaderboard': '/api/leaderboard/',
        'workouts': '/api/workouts/',
    })

class UserViewSet(viewsets.ViewSet):
    def list(self, request):
        users = list(users_collection.find())
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

class TeamViewSet(viewsets.ViewSet):
    def list(self, request):
        teams = list(teams_collection.find())
        serializer = TeamSerializer(teams, many=True)
        return Response(serializer.data)

class ActivityViewSet(viewsets.ViewSet):
    def list(self, request):
        activities = list(activities_collection.find())
        serializer = ActivitySerializer(activities, many=True)
        return Response(serializer.data)

class LeaderboardViewSet(viewsets.ViewSet):
    def list(self, request):
        leaderboard = list(leaderboard_collection.find())
        serializer = LeaderboardSerializer(leaderboard, many=True)
        return Response(serializer.data)

class WorkoutViewSet(viewsets.ViewSet):
    def list(self, request):
        workouts = list(workouts_collection.find())
        serializer = WorkoutSerializer(workouts, many=True)
        return Response(serializer.data)
