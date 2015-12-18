"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "$sce",
    "SongFactory",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction($sce,SongFactory){
    this.songs = SongFactory.query();
    this.newSong = new SongFactory();
    this.playSong;
    this.play = function(song){
      this.playSong = song;
      this.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url);
    }
  }

})();
