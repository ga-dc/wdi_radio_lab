"use strict";
(function(){
  angular
  .module("songs")
  .controller("SongShowController", [
    "SongFactory",
    "$stateParams",
    SongShowControllerFunction
  ]);
  function SongShowControllerFunction( SongFactory, $stateParams ){
    console.log($stateParams)
    this.song = SongFactory.get({id: $stateParams.id});
  }
}());
