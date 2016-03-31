'use strict';

(function(){
  angular
  .module("songs")
  .controller("SongShowController",[
    "SongFactory",
    SongShowControllerFunction
  ]);
  function SongShowControllerFunction(SongFactory){
    this.songs = SongFactory.query();
  }

})();
