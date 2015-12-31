"use strict";

(function(){
  angular
    .module("songs")
      .controller("SongShowController", [
        "SongFactory",
        "$stateParams",
        "$state",
        controllerFunction
      ])
  function controllerFunction(SongFactory, $stateParams, $state){
    this.song = SongFactory.get({id: $stateParams.id});
    this.showSong = true;
    this.edit = function(){
      if (this.showSong){
        this.showSong = false;
      }
      else {
        this.showSong = true;
      }
    }
  }
})();
