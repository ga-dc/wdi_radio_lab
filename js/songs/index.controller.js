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
    this.play = function(song){
      this.playSong = song
      // workaround for ng-src not allowing expression {{song.audio_url}}
      this.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url)
    }
  }

})();
