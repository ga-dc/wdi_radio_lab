"use strict";

(function() {
  angular
  .module("songs")
  .controller("songIndexController", [
    "songFactory",
    songIndexControllerFunction
  ]);

  function songIndexControllerFunction(songFactory) {
    this.songs = songFactory.query();
    }
})();
