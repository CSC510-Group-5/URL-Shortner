"""stub_view module has views for stub"""

from django.http.response import HttpResponse, HttpResponseRedirect
from django.views.generic import View

from shortner.models import Link

class StubView(View):
    """StubView redirects user from stub to URL"""

    def get(self, _, stub: str):
        """get redirects user to the long url"""
        try:
            link = Link.objects.get(stub=stub) #pylint: disable=no-member
            return HttpResponseRedirect(link.long_url)
        except Link.DoesNotExist: #pylint: disable=no-member
            return HttpResponse(status=404)
