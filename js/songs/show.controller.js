"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongShowController", [
    "SongFactory",
    "$stateParams",
    "$sce",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction(SongFactory, $stateParams, $sce){
    this.song = SongFactory.get({id: $stateParams.id});
    this.encodedUrl = $sce.trustAsResourceUrl(this.song.audio_url)
  }
}());
