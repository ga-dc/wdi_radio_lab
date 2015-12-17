"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongNewController",[
    "SongFactory",
    SongNewControllerFunction
  ]);

  function SongNewControllerFunction(SongFactory){
    this.newSong = new SongFactory;
    this.create = function(){
      this.newSong.$save()
    };
  }
})()
