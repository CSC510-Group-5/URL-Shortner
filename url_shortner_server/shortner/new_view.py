"""new_view module defines the NewView view"""

from django.http.request import HttpRequest
from django.http.response import HttpResponse
from django.views.generic import View

from shortner.models import Link


class NewView(View):
    """NewView is responsible for creation of new shortened links"""

    def post(self, request: HttpRequest):
        """post handles post requests to /new"""
        long_url = request.POST["long_url"]
        link = Link(long_url)
        link.save()
        return HttpResponse(status=201)
