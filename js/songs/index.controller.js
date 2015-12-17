"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "SongFactory",
    "$sce",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(SongFactory, $sce){
    this.songs = SongFactory.query();
    this.newSong = new SongFactory();
    this.play = function(song){
      this.playSong = song
      // workaround for ng-src not allowing expression {{song.audio_url}}
      this.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url)
    }
  }
}());
