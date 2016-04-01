"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsShowController", [
    "SongsFactory",
    "$sce", // for mp3 URL because mp3 file only has https
    "$stateParams",
    SongsShowControllerFunction
  ]);

  function SongsShowControllerFunction(SongsFactory, $sce,  $stateParams){
    console.log("stuff")
    this.song = SongsFactory.get({id: $stateParams.id});
    this.playMusic = function(song){
     return song.encodedurl = $sce.trustAsResourceUrl(this.song.audio_url);
   }
  }
}());
