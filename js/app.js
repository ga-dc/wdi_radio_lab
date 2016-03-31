"use strict";

(function(){
  angular
  .module( "radio", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    .state("songShow", {
      url: "/songs",
      templateUrl: "js/songs/show.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"

    })
  }

}());
