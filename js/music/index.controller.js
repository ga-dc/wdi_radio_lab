"use strict";

(function(){
  angular
  .module("music")
  .controller("musicIndexController", [
    "musicFactory",
    MusicIndexControllerFunction
  ]);

  function MusicIndexControllerFunction(musicFactory){
    this.music = musicFactory.query();
    console.log(this.music)
  }
}());
