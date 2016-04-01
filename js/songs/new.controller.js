"use strict";

(function() {
  angular
  .module("songs")
  .controller("newSongController", [
    "songFactory",
    songNewControllerFunction
  ]);
  function songNewControllerFunction(songFactory) {
    this.song = new songFactory();
    this.create = function() {
      this.song.$save();
    };
  }
})();
