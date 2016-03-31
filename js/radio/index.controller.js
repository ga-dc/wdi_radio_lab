"use strict";

(function(){
  angular
  .module("songs")
  .contoller("SongIndexController", [
    "SongFactory",
    SongIndexControllerFunction
  ]);
  function SongIndexControllerFunction(SongFactory){
    this.songs = SongFactory.query();
    this.newSong = new SongFactory();
  }
}());
