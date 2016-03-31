"use strict";

(function() {
  angular
  .module('songs')
  .controller('SongShowController', [
    "SongFactory",
    "$sce",
    "$stateParams",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction(SongFactory, $sce, $stateParams) {
    this.song = SongFactory.get({id: $stateParams.id});
    this.playMusic = function(song) {
      return song.encodedurl = $sce.trustAsResourceUrl(this.song.audio_url);
    }
  }
})();
