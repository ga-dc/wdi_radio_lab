"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongShowController", [
    "SongFactory",
    "$stateParams",
    SongShowController
  ]);

  function SongShowController(SongFactory, $stateParams){
    this.song = SongFactory.get({id: $stateParams.id});
  }
})();
