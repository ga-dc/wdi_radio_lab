"use strict";

(function() {
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
      .state("main", {
        url:"/",
        templateUrl: "js/songs/main.html"
      })
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    });


  }
}());
