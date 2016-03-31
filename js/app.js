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
  ])

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "index.html"
    })
    .state("songsIndex", {
      url: "/songs",
      templateUrl: "songs/index.html",
      controller: "SongsIndexController",
      controllerAs: "SongsIndexViewModel"
    })
    .state("songsEdit", {
      url: "/songs/:id/edit",
      templateUrl: "songs/edit.html",
      controller: "SongsEditControlelr",
      controllerAs: "SongsEditViewControlelr"
    })
  };
})();
