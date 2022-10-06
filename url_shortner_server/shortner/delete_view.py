"""delete_view module defines the view that user wants to delete"""

from django.http.request import HttpRequest
from django.http.response import HttpResponse
from django.views.generic import View
from shortner.models import Link
import json

class DeleteView(View):
    """DeleteView is responsible for deletion of the shortened links"""

    def delete(self, request: HttpRequest):
        """delete handles requests to be deleted /delete"""
        httpBody = json.loads(request.body)
        special_codes = httpBody["special_code"]
        try:
            member = Link.objects.get(special_code=special_codes)
            member.delete()
            return HttpResponse(status=204)
        except Exception as e:
            error_msg = {"exception":str(e)}
            return HttpResponse(json.dumps(error_msg), status=404)