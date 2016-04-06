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
      url: "/songs",
      templateURL: "js/songs/index.html",
      controller: "songIndexController",
      controllerAs: "songIndexViewModel"
    });
  }
})();
