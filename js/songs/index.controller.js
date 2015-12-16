"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "SongFactory",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(SongFactory){
    this.songs = SongFactory.query();
    this.song = new SongFactory();
    this.create = function(){
      this.song.$save()
    }
  }
})();
