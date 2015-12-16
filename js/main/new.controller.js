"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongNewController", [
    "SongFactory",
    ControllerFunction
  ]);

  function ControllerFunction(SongFactory){
    this.song = new SongFactory();
    this.create = function(){
      this.song.$save();
      console.log("saved")
    }
  }
})();
