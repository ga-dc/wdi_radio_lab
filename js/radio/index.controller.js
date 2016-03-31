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
    var self = this;
    self.newSong = new SongFactory();
    self.songs = SongFactory.query(function(){
        this.playMusic = function(song){
          song.encodedUrl = $sce.trustAsResourceUrl(this.song.audio_url);
          return song.encodedUrl;
        };
    });

    // var audio = new Audio("{{SongShowViewModel.song.audio_url}}");
    // audio.play();
  }
}());
