"use strict";

(function(){
  angular
  .module("radioLab", [
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
  ])

  function AuthConfigFunction($authprovider){
    $authprovider.configure({
      apiUrl: "http://localhost:3000"
    })
  }
  function RouterFunction($stateProvider){
    $stateProvider
      .state("songIndex",{
        cache: false,
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongIndexController",
        controllerAs: "SongIndexViewModel"
      })
      .state("songShow",{
        cache: false,
        url: "/songs/:id",
        templateUrl: "js/songs/show.html",
        controller: "SongShowController",
        controllerAs: "SongShowViewModel"
      })
      .state("songEdit",{
        url: "/songs/:id/edit",
        templateUrl: "js/songs/edit.html",
        controller: "SongEditController",
        controllerAs: "SongEditViewModel"
      })
      .state("signin", {
        url: "/signin",
        templateUrl: "js/users/signin.html",
        controller: "SessionsController",
        controllerAs: "SessionsViewModel"
      })
      .state("signout",{
        url: "/signout",
        templateUrl: 'js/users/signout.html',
        controller: "SessionsController",
        controllerAs: "SessionsViewModel"
      })
      .state("signup",{
        url: "/signup",
        templateUrl: 'js/users/signup.html',
        controller: "SessionsController",
        controllerAs: "SessionsViewModel"
      })
  }
}());
