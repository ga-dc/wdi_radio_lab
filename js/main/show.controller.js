"use strict";

(function(){
  angular
    .module("songs")
      .controller("SongShowController", [
        "SongFactory",
        "$stateParams",
        controllerFunction
      ])
  function controllerFunction(SongFactory, $stateParams){
    this.song = SongFactory.get({id: $stateParams.id});
    this.showSong = true;
    this.destroy = function(){
      this.song.$delete({id: $stateParams.id})
    }
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
