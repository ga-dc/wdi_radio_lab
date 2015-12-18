"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "ng-token-auth",
    "songs"
  ])
  .config([
    "$authProvider",
    AuthConfigFunction
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);
  function AuthConfigFunction($authprovider) {
    $authprovider.configure({
      apiUrl: "http://localhost:3000"
    });
  }
  function RouterFunction($stateProvider){
    $stateProvider
    .state("signup", {
      url: '/signup',
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
    .state("signout", {
      url: "/signout",
      templateUrl: "js/users/signout.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("welcome", {
      url:"/welcome",
      templateUrl: "js/songs/home.html",
      controller: "HomeController",
      controllerAs: "HomeViewModel"
    })
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
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"
    })
    .state("songEdit", {
      url: "/songs/:id/edit",
      templateUrl: "js/songs/edit.html",
      controller: "SongEditController",
      controllerAs: "SongEditViewModel"
    })
  }
}());
