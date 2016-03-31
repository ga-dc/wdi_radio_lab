"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "SongFactory",
    SongIndexControllerFunction
  ]);
  function SongIndexControllerFunction(SongFactory){
    this.songs = SongFactory.query();
    this.newSong = new SongFactory();
    // var audio = new Audio("{{SongShowViewModel.song.audio_url}}");
    // audio.play();
  }
}());
