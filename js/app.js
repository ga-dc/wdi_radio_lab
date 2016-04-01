//put app in expert mode
"use strict"

//begin to define main app.js
//IIFE - keeps the app from having many global variables
(function() {
  angular
//"wdiRadio" is my first argument and the name of the app
//the name is followed by the second argument, which is the function that encloses all functionality of the controller
  .module("wdiRadio", [
//injected ui.router into main module
    "ui.router",
//inject "songs" into app.js
    "songs",
    "ng-token-auth"
  ])
//configuring a model with "$stateProvider"
  .config([
    "$stateProvider",
    RouterFunction
  ])

  .config([
    "$authProvider",
    AuthFunction
  ])

  function AuthFunction($authprovider) {
    $authprovider.configure({
      apiUrl: "http://localhost:3000"
    });
  }

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("Welcome", {
      url: "",
      templateUrl: "js/welcome.html"
    })
      templateUrl: "js/songs/index.html",
  }
}
