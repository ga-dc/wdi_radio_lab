"use strict";

(function(){
  angular
  .module("songs")
  .controller("songIndexController", [
    "songFactory",
    "$sce",
    songIndexControllerFunction
  ]);

  function songIndexControllerFunction( songFactory, $sce ){
    this.songs = songFactory.query(function(response){
      response.forEach(function(song){
        song.audio_url = $sce.trustAsResourceUrl(song.audio_url);
      });
    });
  }
}());
