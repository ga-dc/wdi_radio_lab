"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(){
    this.songs = songs;
  }





}());
