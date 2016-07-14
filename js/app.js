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
  ])


  function RouterFunction($stateProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "js/songs/welcome.html"
    })
    .state("songIndex", {
      url: "/songs",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel",
      templateUrl: "js/songs/index.html"
    })
    // .state("songShow", {
    //   url: "/songs/:id",
    //   controller: "SongShowController",
    //   controllerAs: "SongShowViewModel",
    //   templateUrl: "js/songs/show.html"
    // })

  }
}());
