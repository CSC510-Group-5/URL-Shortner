# Url-Shortner WebApp 🌐

[![Documentation Badge](https://img.shields.io/badge/APP_Documentation-compodoc-blue.svg)](https://victorious-sky-08a81ed0f.2.azurestaticapps.net/)
[![Build and Push WebApp](https://github.com/CSC510-Group-5/URL-Shortner/actions/workflows/build.yml/badge.svg)](https://github.com/CSC510-Group-5/URL-Shortner/actions/workflows/build.yml)

The URL Shortner WebApp has been developed using Angular 14. This WebApp mainly contains 4 Components and 1 Service:

1. **Input URL Component:** This is used to accept the long url and output the short version of URL and secret access code in the form of a dialog box.
2. **Update URL Component:** This is used to update an existing url by taking the stub, access code and new long url as input.
3. **Delete URL Component:** This is used to delete an existing url using the secret access code as input.
4. **No Page URL Component:** This is used to show a 404 page when no matching url route exists.
5. **API Service:** This service is responsible for connecting with the backend APIs and performing CRUD operations on the database.

## Development

To add new features or fix a bug in the app, you can perform the following steps:

1. Clone the repository
2. Install npm from [here](https://docs.npmjs.com/cli/v6/commands/npm-install)
3. Open terminal/cmd in url-shortner-webapp folder
4. Run npm install -g @angular/cli to install angular cli
5. Run npm install
6. These commands should install the required modules and allow you to run the application.
7. To verify if the setup works, run ng serve and see if you can see the application running on localhost.

## Deployment

We currently have continuous deployment setup for the web application. As part of continuos deployment we build & push the app as a docker image to [GitHub Packages](https://github.com/CSC510-Group-5/URL-Shortner/pkgs/container/url-shortner).

This package can then be deployed to any suitable cloud or on-prem service and the application should work as expected. Currently this docker image is pulled by Azure App Service, which then runs the application as a container.

## Troubleshooting

You might come across errors or issues while setting up, development or deployment. Below are some of the common errors and issues that users face and solutions to resolve them:

1. If you see the following error: `Error: This command is not available when running the Angular CLI outside a workspace.`. This occurs when you try to run ng cli commands outside of the `url-shortner-webapp` folder where currently the angular app source code resides. To resolved this, change directory to `url-shortner-webapp` and re-run the command.