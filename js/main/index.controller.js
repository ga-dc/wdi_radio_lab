"use strict";

(function(){
  angular
    .module("songs")
      .controller("SongIndexController", [
      "SongFactory",
      controllerFunction
    ]);
  function controllerFunction(SongFactory){
    this.songs = SongFactory.query()
  }
})();
