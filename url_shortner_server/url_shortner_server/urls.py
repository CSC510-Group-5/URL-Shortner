"""url_shortner_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls.static import static


from shortner.views import NewView, StubView, UpdateView, DeleteView, home, signin, signout, signup, homepage

urlpatterns = [
    path("admin/", admin.site.urls, name='admin'),
    path("new/", NewView.as_view(), name='add_new'), #homepage/new to get it as post message in homepage. Figure it out later.
    path("delete/", DeleteView.as_view(), name='delete'),
    path("stub/<slug:stub>/", StubView.as_view(), name='stub'),
    path("update/", UpdateView.as_view(), name='update'),
    path('', home, name="home"),
    path('signup', signup, name="signup"),
    path('signin', signin, name="signin"),
    path('signout', signout, name="signout"),
    # re_path(r'homepage/(?P<fname>[\w-]+)/$', homepage, name='homepage' ),
    path('homepage/<str:fname>', homepage, name='homepage')
]
