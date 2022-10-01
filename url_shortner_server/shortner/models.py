"""Models module deals with models representing entities in the application"""

from random import seed, choice
from uuid import uuid4

from django.db import models

from shortner.constants import CHARS, STUB_LENGTH

class Link(models.Model):
    """Link model refers to a conversion of a long URL to a shortened one"""
    # 2083 is the max length of URL supported by Microsoft Edge
    long_url = models.CharField(max_length=2083)
    special_code = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    stub = models.CharField(max_length=STUB_LENGTH, unique=True)

    def save(self, *args, **kwargs):
        seed(str(self.special_code))
        self.stub = ''.join(choice(CHARS) for _ in range(STUB_LENGTH))
        super().save(*args, **kwargs)
