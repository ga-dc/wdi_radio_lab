"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsIndexController", [
    "SongFactory",
    "$sce",
    SongsIndexControllerFunction
  ]);

  function SongsIndexControllerFunction(SongFactory, $sce){
    this.songs = SongFactory.query();
    this.newSong = new SongFactory();
  }

})();
