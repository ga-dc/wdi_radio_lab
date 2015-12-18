"use strict";

(function(){
  angular
  .module("wdiRadio", [
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
  function AuthConfigFunction($authProvider){
    $authProvider.configure({
      apiUrl: "http://localhost:3000"
    });
  }
  function RouterFunction($stateProvider){
    $stateProvider
      .state("radioIndex",{
        url:"/welcome",
        templateUrl:"js/welcome.html"
      })
      .state("signin", {
        url: "/signin",
        templateUrl: "js/users/signin.html",
        controller: "SessionsController",
        controllerAs: "SessionsViewModel"
      })
      .state("songIndex",{
        url:"/songs",
        templateUrl:"js/songs/index.html",
        controller:"SongIndexController",
        controllerAs:"SongIndexViewModel"
      })
  };
})()
