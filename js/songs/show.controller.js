"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongShowController",[
    "SongFactory",
    "$stateParams",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction(SongFactory, $stateParams){
    this.song = SongFactory.get({id: $stateParams.id});
    this.delete = function(){
      this.song.$remove({id: $stateParams.id})
      console.log("this is happening")
    }
  }
}());
