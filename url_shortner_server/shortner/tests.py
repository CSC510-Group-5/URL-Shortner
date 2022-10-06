from django.test import TestCase
import json

# Create your tests here.
class NewTest(TestCase):
  # def setUp(self) -> None:

  def test1(self):
    # lng_url = b'{"long_url": "www.se231.edu"}'
    # lng_url = lng_url.decode("utf-8")
    lng_url = {"long_url": "www.se231.edu"}
    response_data = self.client.post('/new/', lng_url, content_type="application/json")
    response_data = response_data.content
    response = json.loads(response_data.decode("utf-8"))
    # print(response["long_url"])
    self.assertEqual(lng_url["long_url"], response["long_url"])
