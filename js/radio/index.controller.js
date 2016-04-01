"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongIndexController", [
      "SongFactory",
      SongIndexControllerFunction
    ]);
  function SongIndexControllerFunction(){
    this.songs = SongFactory.query();
  }
})();
