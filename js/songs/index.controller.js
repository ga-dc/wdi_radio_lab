"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsIndexController", [
    "SongFactory",
    "$sce",
    SongsIndexControllerFunction
  ]);

  function SongsIndexControllerFunction(SongFactory, $sce){
    this.songs = SongFactory.query();
    this.newSong = new SongFactory();
    this.play = function(song){
      this.playSong = song
      this.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url)
    }
  }

})();
