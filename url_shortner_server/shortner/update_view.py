"""update_view module defines the UpdateView view"""

from django.http.request import HttpRequest
from django.http.response import HttpResponse
from django.views.generic import View
from shortner.models import Link
import json

class UpdateView(View):
    """UpdateView is responsible for updating the long url of existing links"""

    def put(self, request: HttpRequest):
        """put handles updating requests"""
        data = json.loads(request.body)
        print(data)
        new_long_url = data["new_long_url"]
        special_code = data["special_code"]
        stub = data["stub"]
        try:
            link = Link.objects.get(stub=stub) #pylint: disable=no-member
            link.long_url = new_long_url
            link.save()
            return HttpResponse(link.long_url, status=201)
        except Link.DoesNotExist: #pylint: disable=no-member
            return HttpResponse("Incorrect stub/special code", status=404)
