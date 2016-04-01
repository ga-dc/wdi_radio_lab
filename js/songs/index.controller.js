"use strict";

(function() {
  angular
  .module("songs")
  .controller("songIndexController", [
    "songFactory",
    "$stateParams",
    songIndexControllerFunction
  ]);

  function songIndexControllerFunction(songFactory, $stateParams) {
    this.songs = songFactory.query();
    }
})();
