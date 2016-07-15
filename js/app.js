"use strict";

(function(){
  angular
  .module("song", [
    "ui.router",
    "songs",
    "ngResource"
  ])
  .config(["$stateProvider", RouterFunction]);

    function RouterFunction($stateProvider){
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
