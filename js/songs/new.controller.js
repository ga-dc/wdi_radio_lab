"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsNewController", [
    "SongFactory",
    "#stateParams",
    SongsNewControllerFunction
  ])

  function SongsNewControllerFunction(SongFactory, $stateParams){
    this.song = new SongFactory();
    this.create = function(){
      this.song.$save()
    }
  }
}());
