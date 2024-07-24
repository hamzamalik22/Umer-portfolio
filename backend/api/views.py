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
        {"GET, PUT & DELETE": "/api/about/"},
        {"GET": "/api/testimonials/"},
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


@api_view(["GET"])
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


@api_view(["GET"])
def theAbout(request):
    try:
        about = About.objects.get()
    except About.DoesNotExist:
        if request.method == "GET":
            return Response(
                {"error": "Profile not found."}, status=status.HTTP_404_NOT_FOUND
            )
        about = None

    if request.method == "GET":
        serializer = AboutSerializer(about)
        return Response(serializer.data)


@api_view(["GET", "POST"])  # HTTP methods
def theTestimonials(request, format=None):
    if request.method == "GET":  # Checking method
        tests = Testimonial.objects.all()  # Getting all the data in variable
        serializer = TestimonialSerializer(tests, many=True)  # serializing the data
        return Response({"Testimonials": serializer.data})
