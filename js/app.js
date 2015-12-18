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
  ]).config([
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
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongsIndexController",
      controllerAs: "SongsIndexViewModel"
    })
    .state("songsShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "SongsShowController",
      controllerAs: "SongsShowViewModel"
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
    });
  }
}());
