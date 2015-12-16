"use strict";

(function(){
  angular
    .module("songs")
      .controller("SongShowController", [
        "SongFactory",
        "$stateParams",
        controllerFunction
      ])
  function controllerFunction(SongFactory, $stateParams){
    this.song = SongFactory.get({id: $stateParams.id});
  }
})();
