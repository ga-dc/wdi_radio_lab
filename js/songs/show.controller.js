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
    this.song = SongFactory.get({id: $stateParams.id}, function(song){
      this.song.niceUrl = $sce.trustAsResourceUrl(song.audio_url);
    }.bind(this))
  }
})();
