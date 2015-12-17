"use strict";

(function(){
  angular
    .module("songs")
    .controller("IndexController", [
      "SongFactory",
      ControllerFunction
    ]);

  function ControllerFunction(SongFactory){
    this.songs = SongFactory.query();
  }
}());
