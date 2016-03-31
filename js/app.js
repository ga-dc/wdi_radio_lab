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

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("songIndex", {
      url: "/",
      templateUrl: "js/songs/index.html",
      controller: "songIndexController",
      controllerAs: "songIndexViewModel"
    })
    .state("songShow", {
      url: "/:id",
      templateUrl: "js/songs/show.html",
      controller: "songShowController",
      controllerAs: "songShowViewModel"
    });
  }
})();
