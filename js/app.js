"use strict";

(function() {
  angular
  .module("wdiRadio", [
    "ui.router",
    "ngResource",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("songindex", {
      url: "/songs",
      templateURL: "songs/index.html"
    });
  }
})();
