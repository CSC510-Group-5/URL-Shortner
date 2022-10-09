# URL Shortner APIs

[![Documentation Badge](https://img.shields.io/badge/API_Documentation-pdoc-blue.svg)](https://lemon-desert-093c6c80f.2.azurestaticapps.net/)

This folder houses the Django API used for the URL Shortner.

The Django project is named `url_shortner_server` while the app within is called `shortner`.

## Development

To add new features or fix a bug in the API, you can perform the following steps:

1. Clone the repository.
1. Install Python 3 from [here](https://www.python.org/downloads/) for your choice of operating system.
1. Run `pip install -r requirements.txt`.
1. Run `python manage.py runserver` to start the server.
1. To make sure the API is running, visit `http://localhost:8000/admin` to see the default Django admin interface.

## Deployment

The API has been deployed using [PythonAnywhere](https://www.pythonanywhere.com/). Instructions for deployment can be found [here](https://help.pythonanywhere.com/pages/DeployExistingDjangoProject/).

## Troubleshooting

Some common HTTP status codes that can be seen in the logs provided by the Django server:

|Status Code|Description|Resolution|
|---|---|---|
|400|Bad Request|Check the HTTP request to be valid for the URL.|
|404|Not Found|The URL being visited has no view attached to it, check the URL.|
|405|Method Not Allowed|The HTTP request is using a different method than the one expected by the URL, check to make sure the correct method is used.|
|500|Internal Server Error|This error usually means there was an exception that was not handled. Check the logs to find the source of the error.|

## Files

|File|Description|
|---|---|
|`manage.py`|This file is used for running Django project commands. Full list can be seen [here](https://docs.djangoproject.com/en/3.2/ref/django-admin/#available-commands)|
|`db.sqlite3`|This is the database of the project, ideally should not be committed to the repository (this repository does not contain this file). If the file is missing, the project generates it.|
|`requirements.txt`|Contains the requirements for the project.|