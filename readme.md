# User Authentication
In our Angular app, Check out to the custom-directive-solution branch to get started

We need to also do some configuring to the wdi_radio_api back-end to allow token based auth through devise.
To get started, clone down or switch over to the latest version of wdi_radio_api, then checkout to the devise-token-authentication branch
Make sure to bundle instal, rake db:setup, and then start your server on localhost:3000

Back in angular app, checkout to a new branch and start to implement user auth

Make sure to load appropriate CDNs in index.html

Create a directory for users

In app, JS load the ng-token-auth dependency to you module

Write a config component and appropriate AuthFunction to use $authProvider in order to configure the proper api url

Inside the RouterFunction, define routes and appropriate actions for the states: signup, signin, and logout.

Create a Sessions controller

Create an auth_nav custom directive and html template files.


Make sure to link them in the main view as an element.
