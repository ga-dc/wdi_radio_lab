"use strict";

(function() {

  angular
  .module('songs')
  .controller('songsShowController', [
    "SongsKitchen",
    "$stateParams",
    "$sce",
    SongsShowFunction]);

  function SongsShowFunction(SongsKitchen, $stateParams, $sce){
    this.song = SongsKitchen.get({id: $stateParams.id});
    this.playSong = function(song){
      return this.song.trusted_url = $sce.trustAsResourceUrl(this.song.audio_url);
    };
  }
  // this.song.trusted_url = $sce.trustAsResourceUrl(this.song.audio_url);

}());
