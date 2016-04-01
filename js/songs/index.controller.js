"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "SongsFactory",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(SongsFactory){
    this.songs = SongsFactory.query();
  }
})();
