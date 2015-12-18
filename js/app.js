"use strict";


(function(){
  angular
  .module("radio", [
    "ui.router",
    "ng-token-auth",
    "ngResource"
  ])
  .config([
    "$authProvider",
    AuthConfigFunction
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function AuthConfigFunction($authProvider) {
    $authProvider.configure({
      apiUrl: "http://localhost:3000"
    });
  }

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songsIndex", {
      url: "/",
      templateUrl: "js/radio/songsIndex.html",
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
    })
    .state("welcome", {
      url: "/welcome",
      templateUrl: "js/radio/welcome.html",
      controller: "WelcomeController",
      controllerAs: "WelcomeViewModel"
    })
    .state("songShow", {
      url: "/:id",
      templateUrl: "js/radio/songShow.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"
    });

  }

}());
