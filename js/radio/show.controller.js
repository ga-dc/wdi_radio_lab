"use strict";

console.log("Show Controller");

(function(){
  angular
  .module("radio")
  .controller("SongShowController", [
    "SongsFactory",
    "$stateParams",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction(SongsFactory, $stateParams){
    this.song = SongsFactory.get({id: $stateParams.id});
    console.log(this.song);
  }
}());
