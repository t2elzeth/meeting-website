from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models

from . import managers


class User(AbstractBaseUser, PermissionsMixin):
    """Custom User model for authentication"""
    objects = managers.UserManager()

    full_name = models.CharField(max_length=255, verbose_name='Ф.И.О.')
    email = models.EmailField(max_length=255, unique=True, verbose_name='Почта')
    age = models.IntegerField()
    city = models.CharField(max_length=255, default="")
    marrital_status = models.CharField(max_length=255, default="")
    about = models.CharField(max_length=500, default="")

    MAN = 'man'
    WOMAN = 'woman'
    HIDDEN = 'hidden'
    SEX_CHOICES = (
        (MAN, 'Man'),
        (WOMAN, 'Woman'),
        (HIDDEN, 'Hidden')
    )
    sex = models.CharField(max_length=255, choices=SEX_CHOICES)
    religion = models.CharField(max_length=255)

    is_staff = models.BooleanField(default=False)

    # No longer need in usernames, email is enough to login
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  # Email & Password are required by default.

    def get_full_name(self):
        """Returns full name of user"""
        return self.full_name

    def __str__(self):
        return f"Account of {self.get_username()}"

    def has_perm(self, perm, obj=None):
        """Does the user have a specific permission?"""
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        """Does the user have permissions to view the app `app_label`?"""
        # Simplest possible answer: Yes, always
        return True
