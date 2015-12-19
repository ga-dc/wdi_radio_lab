"use strict";

(function(){
  angular
  .module("wdi-radio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/views/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    .state("songNew", {
      url: "/songs/new",
      templateUrl: "js/songs/views/new.html",
      controller: "SongNewController",
      controllerAs: "SongNewViewModel"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/views/show.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"
    });
  }
}());
