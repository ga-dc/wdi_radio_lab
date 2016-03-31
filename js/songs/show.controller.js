"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongShowController", [
    "$stateParams",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction($stateParams){
    this.song = songs[$stateParams.id];
  }
}());
