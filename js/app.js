"use strict";

(function(){
  angular
  .module("radioLab", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

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
  }
}());
