"use strict";

// uses module as a getting when passing in no additional dependencies
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
