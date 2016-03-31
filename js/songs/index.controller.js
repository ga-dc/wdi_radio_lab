'use strict';

(function(){
  angular
  .module("songs")
  .controller("songIndexController", [
    "SongFactory",
    SongIndexControllerFunction
  ]);
  function SongIndexControllerFunction( SongFactory ){
    this.songs = SongFactory.query();
  }
})();
