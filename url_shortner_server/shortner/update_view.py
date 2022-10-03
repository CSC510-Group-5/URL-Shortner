"""new_view module defines the NewView view"""

from django.http.request import HttpRequest
from django.http.response import HttpResponse
from django.views.generic import View
from shortner.models import Link
class UpdateView(View):
    """UpdateView is responsible for updating the long url of existing links"""

    def put(self, request: HttpRequest):
        """put handles updating requests"""
        long_url = request.PUT["long_url"]
        link = Link(long_url)
        link.save()
        try:
            link = Link.objects.get(stub=stub) #pylint: disable=no-member
            return HttpResponse(status=201)
        except Link.DoesNotExist: #pylint: disable=no-member
            return HttpResponse(status=404)
