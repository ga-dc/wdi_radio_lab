"use strict";

(function(){
  angular
  .module("songsmodule")
  .controller("SongsShowCtrl", [
    "SongFactory",
    "$stateParams",
    SongsShowCtrlFunction
  ]);

  function SongsShowCtrlFunction(SongFactory, $stateParams){
    console.log($stateParams);
    this.song = SongFactory.get({id: $stateParams.id});
  }
}());
