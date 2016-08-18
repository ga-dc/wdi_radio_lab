"use strict";
console.log("Mr. poo");
(function(){
  angular
  .module("wdiradio", [
    "ui.router",
    "firebase",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    console.log("Router Call Back!");
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"
    });
  }
})();
