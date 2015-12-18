"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsIndexController", [
    "SongFactory",
    ControllerFunction
  ]);

  function ControllerFunction(SongFactory){
    this.test = function(){
        console.log(this.songs)
    }
    this.songs = SongFactory.query()
    this.newSong = new SongFactory()
  }
}())
