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
    this.song = SongFactory.get({id: $stateParams.id}, function(selectedSong){
      selectedSong.encodedUrl = $sce.trustAsResourceUrl(selectedSong.audio_url);
    });
  }
})();
