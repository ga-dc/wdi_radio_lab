"use strict";

(function(){
  angular
  .module("music")
  .controller("musicShowController", [
    "musicFactory",
    "$stateParams",
    "$sce",
    MusicShowControllerFunction
  ]);

  function MusicShowControllerFunction(musicFactory, $stateParams, $sce){
    this.music = musicFactory.get({id: $stateParams.id})

    this.setCurrent= function(song){
    this.current= song
    this.current.audio_url= $sce.trustAsResourceUrl(this.current.audio_url);
    console.log(this.current.audio_url)
  };
  }


}());
