"use strict";

(function(){
  angular
  .module("radio", [
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
      templateUrl: "js/songs/index.html",
      controller: "indexController"
      // controllerAs: "songxxxxxndexVM"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html"
    });
  }
}());
