"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "SongFactory",
    "$stateParams",
    "$sce",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(SongFactory, $stateParams, $sce){
    this.songs = SongFactory.query();
    this.song = new SongFactory();
    this.create = function(){
      this.song.$save()
    }
    this.play = function(song){
       this.currentSong = song;
       this.currentSong.niceUrl = $sce.trustAsResourceUrl(this.currentSong.audio_url);
     }
  }
})();
