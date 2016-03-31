"use strict";

(function(){
  angular
  .module("songs") // don't need array here, just referencing a module
  .controller("SongsIndexController", [
    "SongsFactory",
    SongsIndexControllerFunction
  ]);

  function SongsIndexControllerFunction(SongsFactory){
    this.songs = SongsFactory.query();
  }

}());
