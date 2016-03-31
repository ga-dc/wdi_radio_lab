"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider, $locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "js/radio/welcome.html"
    })
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/radio/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    .state("songShow", {
      url: "/_:id",
      templateUrl: "js/radio/_show.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"
    })
    .state("songListen", {
      url: "/:id/listen",
      templateUrl: "js/radio/listen.html",
    });
  }
}());
