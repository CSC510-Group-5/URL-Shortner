from unittest import TestCase
from django.test import Client
from django.urls import reverse
# from shortner.models import Link
import json


class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.add_new_url = reverse('add_new')
        self.update_url = reverse('update')
        self.delete_url = reverse('delete')

    def test_all_view(self):
        req_long_url = 'https://www.google.com/'
        http_response = self.client.post(self.add_new_url, {
            'long_url': req_long_url
        }, content_type="application/json")
        self.assertEquals(http_response.status_code, 201)

        data = http_response.content
        data = json.loads(data.decode("utf-8"))
        long_url = data["long_url"]
        stub = data["stub"]
        special_code = data["special_code"]
        self.assertEquals(10, len(stub))
        self.assertNotEquals(9, len(stub))
        self.assertEquals(long_url, req_long_url)

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

        # Verify invalid put request with incorrect stub
        update_response = self.client.put(self.update_url, {
            'new_long_url': new_long_url,
            'special_code': special_code,
            'stub': stub+"0"
        }, content_type="application/json")
        self.assertEquals(update_response.status_code, 404)

        self.stub_url = reverse('stub', args=[stub])
        http_response = self.client.get(self.stub_url)
        print(http_response)
        self.assertEquals(http_response.status_code, 302)
        self.assertEquals(http_response.url, new_long_url)
        # Valid delete
        delete_reponse = self.client.delete(self.delete_url, {
            'special_code': special_code
        }, content_type="application/json")
        self.assertEquals(delete_reponse.status_code, 204)
        # Verify error in deleting deleted entry
        delete_reponse = self.client.delete(self.delete_url, {
            'special_code': special_code
        }, content_type="application/json")
        self.assertEquals(delete_reponse.status_code, 404)

        self.stub_url = reverse('stub', args=[stub])
        http_response = self.client.get(self.stub_url)
        self.assertEquals(http_response.status_code, 404)
