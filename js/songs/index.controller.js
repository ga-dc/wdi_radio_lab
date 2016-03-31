"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(){
    this.songs= "These are the songs in this app."
  }
}());
