"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsShowController", [
    "SongFactory",
    "$stateParams",
    "$sce",
    SongShowFunction
  ]);

  function SongShowFunction(SongFactory, $stateParams, $sce){
    this.song = SongFactory.get({id: $stateParams.id});
  }
})();
