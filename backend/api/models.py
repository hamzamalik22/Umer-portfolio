from django.db import models


# Create your models here.
class Profile(models.Model):
    name = models.CharField(max_length=200, null=True)
    job_title = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200, null=True)
    phone = models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=200, null=True)
    country = models.CharField(max_length=200, null=True)
    date_of_birth = models.CharField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.name


class About(models.Model):
    para1 = models.TextField(null=True)
    para2 = models.TextField(null=True)
    service_1_title = models.CharField(max_length=200, null=True)
    service_1_description = models.TextField(null=True)
    service_2_title = models.CharField(max_length=200, null=True)
    service_2_description = models.TextField(null=True)
    service_3_title = models.CharField(max_length=200, null=True)
    service_3_description = models.TextField(null=True)
    service_4_title = models.CharField(max_length=200, null=True)
    service_4_description = models.TextField(null=True)


class Testimonial(models.Model):
    name = models.CharField(max_length=200, null=True)
    message = models.TextField(null=True)

    def __str__(self):
        return self.name


class Education(models.Model):
    school_name = models.CharField(max_length=200, null=True)
    start_year = models.IntegerField(null=True)
    end_year = models.IntegerField(null=True)
    description = models.TextField(null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.name


class Experience(models.Model):
    company_name = models.CharField(max_length=200, null=True)
    start_year = models.IntegerField(null=True)
    end_year = models.CharField(max_length=200, null=True, default="Present")
    description = models.TextField(null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.name


class Skill(models.Model):
    name = models.CharField(max_length=200, null=True)
    level_in_percent = models.IntegerField(null=True)
    end_year = models.IntegerField(null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.name
