"use strict";

(function(){
  angular
  .module("songApp")
  .controller("SongIndexController", [
    "SongFactory",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(SongFactory) {
    this.songs = SongFactory.query();

  }
}());
