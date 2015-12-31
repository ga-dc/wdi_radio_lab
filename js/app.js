"use strict";

(function(){
  angular
  .module("wdiRadio", [
    "ui.router",
    "songs",
    "ng-token-auth"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .config([
    "$authProvider",
     AuthConfig
  ]);

  function AuthConfig($authprovider){
    $authprovider.configure({
      apiUrl: "http://localhost:3000"
    });
  }

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songsIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongsIndexController",
      controllerAs: "SongsIndexViewModel",
      resolve: {
        auth: function($auth){
          return $auth.validateUser();
        }
      }
    })
    .state("signup", {
      url: "/signup",
      templateUrl: "js/users/signup.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("signin", {
      url: "/signin",
      templateUrl: "js/users/signin.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("logout", {
      url: "/logout",
      templateUrl: "js/users/logout.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    });
  }

}());
