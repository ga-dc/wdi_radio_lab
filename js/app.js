"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    Router
  ]);

  function Router ($stateProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "js/welcome.html"
    })
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
  }




})();
