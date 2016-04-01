"use strict";

(function(){
  angular
  .module( "songsmodule" )
  .controller( "SongNewController", [
    "SongFactory",
    "$state",
    SongNewControllerFunction
  ]);

  function SongNewControllerFunction( SongFactory, $state ){
    this.song = new SongFactory();
    this.create = function(){
      this.song.$save();
    };
    this.goToIndex = function(){
      $state.go("songIndex");
    }
  }
}());
