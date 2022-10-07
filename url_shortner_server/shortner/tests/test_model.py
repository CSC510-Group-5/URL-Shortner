from unittest import TestCase
from shortner.models import Link


class TestModel(TestCase):
    def test_create_new_entry(self):
        link = Link.objects.create(
            long_url="www.ncsu.edu",
            special_code="00000000-0000-0000-0000-000000000000",
            stub="aaaaaaaaaa",
        )
        self.assertIsInstance(link.to_json(), str)
