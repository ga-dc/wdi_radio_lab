"use strict";
var audioUrl;

(function(){
  angular
  .module("songApp")
  .controller("SongShowController", [
    "SongFactory",
    "$stateParams",
    "$sce",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction(SongFactory, $stateParams, $sce){
    this.song = SongFactory.get({id: $stateParams.id});
    this.play = function(song){
      this.playSong = song
      // workaround for ng-src not allowing expression {{song.audio_url}}
      this.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url)
    };

    this.play(this.song);

}

}());
