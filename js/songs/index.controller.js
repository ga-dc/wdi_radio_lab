"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "SongFactory",
    SongIndexController
  ]);

  function SongIndexController(SongFactory){
    this.songs = SongFactory.query();
  }
})();
