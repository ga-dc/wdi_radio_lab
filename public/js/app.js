"use strict";

(function(){
  angular
  .module("wdiRadio", [
    "ui.router",
    "firebase",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("Landing", {
      url: "",
      templateUrl: "js/landing.html"
    })
    .state("songs", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongsIndexController",
      controllerAs: "SongsIndexViewModel"
    });
  }
})();
