"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsIndexController", [
    "SongFactory",
    SongsIndexControllerFunction
  ]);

  function SongsIndexControllerFunction(SongFactory){
    this.songs = SongFactory.query();
    this.newSong = new SongFactory();
  }
}());
