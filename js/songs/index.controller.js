"use strict";

(function(){
  angular
  .module("songs")
  .controller("indexController", [
    "songFactory",
    indexControllerFunction
  ]);

  function indexControllerFunction(songFactory){
    this.songs = songFactory.query();
  }
}());
