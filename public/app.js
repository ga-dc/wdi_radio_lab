"use strict";

(function(){
  angular
  .module("wdiradio", [
    "ui.router",
    "radio"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "js/home.html",
      controller: "HomeController",
      controllerAs: "homeCtrl"
    })
    .state("songs", {
      url: "/songs",
      templateUrl: "js/songs.html",
      controller: "SongsController",
      controllerAs: "songsCtrl"
    })
  }
}());
