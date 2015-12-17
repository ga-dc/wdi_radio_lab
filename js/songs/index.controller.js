"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "SongFactory",
    "$sce",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(SongFactory, $sce){
    this.songs = SongFactory.query();
  }
})();
