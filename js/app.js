"use strict";

// module for the overall app --> includes here dependencies, routes, controllers, etc

(function(){
  angular
  .module('radioApp', [
    "ui.router",
    "songs"
  ])
  .config(['$stateProvider', RouteBuilder]);

  function RouteBuilder($stateProvider){
    $stateProvider
    .state("songsIndex", {
      url: "/songs",
      templateUrl:"js/songs/index.html",
      controller: "songsIndexController",
      controllerAs: "songsIndexVM"
    })
    .state("songsShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "songsShowController",
      controllerAs: "songsVM"
    });
  }
}());
