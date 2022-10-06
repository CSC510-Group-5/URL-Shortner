

from unittest import TestCase
from django.test import TestCase, Client
from django.urls import reverse
from shortner.models import Link
import json

class TestViews(TestCase):
    
    def setUp(self):
        self.client = Client()
        self.add_new_url = reverse('add_new')
        self.update_url = reverse('update')
        self.delete_url = reverse('delete')

    def test_all_view(self):
        http_response = self.client.post(self.add_new_url, {
            'long_url': 'https://www.google.com/'
        }, content_type="application/json")
        self.assertEquals(http_response.status_code, 201)

        data = http_response.content
        data = json.loads(data.decode("utf-8"))
        long_url = data["long_url"]
        stub = data["stub"]
        special_code = data["special_code"]

        self.stub_url = reverse('stub', args=[stub])
        http_response = self.client.get(self.stub_url)
        self.assertEquals(http_response.status_code, 302)

        new_long_url = 'https://facebook.com/'
        update_response = self.client.put(self.update_url, {
            'new_long_url': new_long_url,
            'special_code': special_code,
            'stub': stub
        }, content_type="application/json")
        self.assertEquals(update_response.status_code, 201)

        self.stub_url = reverse('stub', args=[stub])
        http_response = self.client.get(self.stub_url)
        print(http_response)
        self.assertEquals(http_response.status_code, 302)
        self.assertEquals(http_response.url, new_long_url)

        delete_reponse = self.client.delete(self.delete_url,{
            'special_code':special_code
        }, content_type="application/json")
        self.assertEquals(delete_reponse.status_code, 204)

        self.stub_url = reverse('stub', args=[stub])
        http_response = self.client.get(self.stub_url)
        self.assertEquals(http_response.status_code, 404)
