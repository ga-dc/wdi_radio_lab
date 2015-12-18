"use strict";

(function(){
  angular
  .module("wdiRadio", [
    "ui.router",
    "ng-token-auth",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .config([
    "authProvider",
    AuthConfigFunction
  ]);

  function AuthConfigFunction($authprovider) {
    $authprovider.configure({
      apiUrl: "http://localhost:3000"
    });
  }

  function RouterFunction($stateProvider){
    $stateProvider
    .state("home", {
      url: "",
      template: "Welcome to the World's Best Song App"
    })
    .state("songs", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongsIndexController",
      controllerAs: "SongsIndexViewModel"
    })
    .state("signin", {
      url: "/signin",
      templateUrl: "js/users/signin.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("signout", {
      url: "/signout",
      templateUrl: "js/users/signout.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("signup", {
      url: "/signup",
      templateUrl: "js/users/signup.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    });
  }
}());
