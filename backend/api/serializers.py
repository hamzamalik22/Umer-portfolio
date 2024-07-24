from rest_framework import serializers
from .models import *


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = "__all__"


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = "__all__"


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = "__all__"


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = "__all__"


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    featured_image = serializers.SerializerMethodField()
    category = CategorySerializer(many=False)

    class Meta:
        model = Project
        fields = "__all__"

    def get_featured_image(self, obj):
        request = self.context.get("request", None)
        if request is not None:
            return request.build_absolute_uri(obj.featured_image.url)
        return obj.featured_image.url
