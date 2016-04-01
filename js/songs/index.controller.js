"use strict";

(function(){
  angular
  .module("songs")
  .controller("songIndexController", [
    "songFactory",
    songIndexControllerFunction
  ]);

  function songIndexControllerFunction(songFactory){
    var vm = this;
    vm.songs = songFactory.query();

  }
}());
