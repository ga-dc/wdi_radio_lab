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
    "$authProvider",
    AuthConfigFunction
  ])

  function AuthConfigFunction($authProvider){
    $authProvider.configure({
      apiUrl: "http://localhost:3000"
    })
  }



  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    .state("songNew", {
      url: "/songs/new",
      templateUrl: "js/songs/new.html",
      controller: "SongNewController",
      controllerAs: "SongNewViewModel"
    })
    .state("songEdit",{
      url: "/songs/:id/edit",
      templateUrl: "js/songs/edit.html",
      controller: "SongEditController",
      controllerAs: "SongEditViewModel"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"
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
    .state("signup",{
      url: "/signup",
      templateUrl: "js/users/signup.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })

  }
})();
