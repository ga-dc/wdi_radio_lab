"use strict";

(function(){
  angular
  .module("music")
  .controller("musicShowController", [
    "musicFactory",
    "stateParams",
    MusicShowControllerFunction
  ]);

  function MusicShowControllerFunction(musicFactory){
    this.music = musicFactory.get({id: $stateParams.id});
  }
}());
