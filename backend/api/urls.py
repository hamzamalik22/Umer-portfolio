from django.urls import path, include
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

from django.conf import settings  # this
from django.conf.urls.static import static  # this

from rest_framework_simplejwt.views import (  # this one
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path("users/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("users/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("", views.getRoutes, name="getRoutes"),
    path("profile/", views.theProfile, name="profile"),
    path("about/", views.theAbout, name="about"),
    path("testimonials/", views.theTestimonials, name="testimonials"),
    path("education/", views.theEducation, name="education"),
    path("experience/", views.theExperience, name="experience"),
    path("skill/", views.theSkill, name="skill"),
    path("category/", views.theCategory, name="category"),
    path("project/", views.theProject, name="project"),
]
urlpatterns = format_suffix_patterns(urlpatterns)


urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
