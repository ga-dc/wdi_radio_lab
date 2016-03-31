
"use strict";

(function() {
  angular
  .module("songs")
  .controller("SongNewController", [
    "SongFactory",
    SongNewControllerFunction
  ]);

  function SongNewControllerFunction(SongFactory) {
    this.song = new SongFactory();
    this.create = function() {
      this.song.$save();
    } // end of create function
  } // end of new song controller
})();
