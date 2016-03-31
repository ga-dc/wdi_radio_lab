"user strict";

(function() {
  angular
  .module("songs")
  .controller("songIndexController", [
    songIndexControllerFunction
  ]);

  function songIndexControllerFunction() {
    this.song = "asdf"
  }
})();
