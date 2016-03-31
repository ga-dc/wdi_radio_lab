"use strict";

(function (){
  angular
  .module("songs", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
      RouterFunction
  ]
);


  function RouterFunction($stateProvider){
    $stateProvider
    .state("songsIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    .state("songsShow",{
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"
    });

  }
}());
