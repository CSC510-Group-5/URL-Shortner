"""Views module stores all the views of the application"""

from shortner.new_view import NewView
from shortner.stub_view import StubView
from shortner.delete_view import DeleteView

from shortner.update_view import UpdateView

from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

__all__ = ["NewView", "StubView", "UpdateView", "DeleteView"]

def home(request):
    print("hitting home")
    return render(request, "authentication/index.html")


def signup(request):
    if request.method == "POST":
        username = request.POST["username"]
        fname = request.POST["fname"]
        lname = request.POST["lname"]
        email = request.POST["email"]
        password1 = request.POST["pass1"]
        password2 = request.POST["pass2"]

        myuser = User.objects.create_user(username,email,password1)
        myuser.first_name = fname
        myuser.last_name = lname

        myuser.save()
        messages.success(request, "Your Account has been successfully created.")
        return redirect("home")
    return render(request, "authentication/signup.html")

def signin(request):

    # Only through forms
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["pass1"]

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request,user)
            fname = user.first_name
            return render(request, "homepages/index.html",{"fname":fname})
        else:
            messages.error(request,"Bad Credentials!")
            return redirect("home")

    # Render the main page if we try to access signin through the url (GET)
    return render(request, "authentication/index.html")

def signout(request):
    logout(request)
    messages.success(request, "Logged Out Successfully!")
    return redirect("home")
