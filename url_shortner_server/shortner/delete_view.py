"""delete_view module defines the view that user wants to delete"""

from django.http.request import HttpRequest
from django.http.response import HttpResponse
from django.views.generic import View

from shortner.models import Link


class DeleteView(View):
    """NewView is responsible for creation of new shortened links"""

    def delete(self, request: HttpRequest):
        """delete handles requests to be deleted /delete"""
        stub = request.POST["stub"]
        link = Link(stub)
        link.delete()
        # response = link.to_json()
        return HttpResponse(status=200)
