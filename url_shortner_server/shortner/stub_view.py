"""stub_view module has views for stub"""

from django.http.response import HttpResponseRedirect
from django.views.generic import View

from shortner.constants import REDIRECT_404_URL
from shortner.models import Link


class StubView(View):
    """StubView redirects user from stub to URL"""

    def get(self, _, stub: str):
        """get redirects user to the long url"""
        try:
            link = Link.objects.get(stub=stub)  # pylint: disable=no-member
            return HttpResponseRedirect(link.long_url)
        except Link.DoesNotExist:  # pylint: disable=no-member
            return HttpResponseRedirect(REDIRECT_404_URL)
