from django.shortcuts import render, get_object_or_404
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *


# Create your views here.
@api_view(["GET"])
def getRoutes(request, format=None):
    routes = [
        {"GET, PUT & DELETE": "/api/profile/"},
        {"POST": "/api/users/token/"},
        {"POST": "/api/users/token/refresh/"},
        {"POST & GET": "/api/agents"},
        {"POST,GET,PUT & DELETE": "/api/agents/id/"},
        {"POST & GET": "/api/customers/"},
        {"POST,GET,PUT & DELETE": "/api/customers/id/"},
        {"POST & GET": "/api/orders/"},
        {"POST,GET,PUT & DELETE": "/api/orders/id/"},
        {"GET": "/api/agent/role/"},
        {"POST": "/api/update-password/"},
    ]
    return Response({"Routes": routes})


@api_view(["GET", "PUT", "DELETE"])
def theProfile(request):
    try:
        profile = Profile.objects.get()
    except Profile.DoesNotExist:
        if request.method == "GET":
            return Response(
                {"error": "Profile not found."}, status=status.HTTP_404_NOT_FOUND
            )
        profile = None

    if request.method == "GET":
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
