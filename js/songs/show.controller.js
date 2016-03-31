"use strict";

(function(){
  angular
  .module( "songs" )
  .controller( "SongShowController", [
    "SongFactory",
    "$stateParams",
    SongShowControllerFunction
  ]);
  function SongShowControllerFunction(SongFactory){
    this.songs= SongFactory.query();
  }
}());
