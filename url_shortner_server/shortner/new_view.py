"""new_view module defines the NewView view"""

from django.http.request import HttpRequest
from django.http.response import HttpResponse
from django.views.generic import View
import json

from shortner.models import Link


class NewView(View):
    """NewView is responsible for creation of new shortened links"""

    def post(self, request: HttpRequest):
        """post handles post requests to /new"""
        httpBody = json.loads(request.body)
        long_url = httpBody["long_url"]
        link = Link(long_url)
        link.save()
        response = link.to_json()
        return HttpResponse(response, status=201)
