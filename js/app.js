
"use strict";

(function(){
  angular
  .module("radio", [
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
    .state("radioIndex", {
      url: "/",
      templateUrl: "js/songs/radio.html",
      controller: "RadioIndexController",
      controllerAs: "RadioIndexViewModel"
    })
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    // .state("songShow", {
    //   url: "/songs/:id",
    //   templateUrl: "js/songs/show.html",
    //   controller: "SongShowController",
    //   controllerAs: "SongShowViewModel"
    // });
    ;
  }
}());
