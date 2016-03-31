"use strict";

(function(){
  angular
  .module("songsmodule")
  .controller("SongsShowCtrl", [
    '$stateParams',
    SongsShowCtrlFunction
  ]);

  function SongsShowCtrlFunction($stateParams){
    console.log($stateParams);
    this.song = song[$stateParams.id];
  }
}());
