"use strict";

(function(){
  angular
  .module("wdiRadio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songsIndex", {
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
    });
  }

}());
