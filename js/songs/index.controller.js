"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "SongFactory",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(SongFactory, $state){
    this.songs = SongFactory.query();
    this.goToIndex = function(){
      $state.go("songIndex");
    }
  }
}());
