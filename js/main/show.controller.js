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
    this.update = function(){
      this.song.$update({id: $stateParams.id}, function(){
        $state.go("songIndex")
      })
    }
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
