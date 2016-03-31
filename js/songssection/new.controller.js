"use strict";

(function(){
  angular
  .module( "songsmodule" )
  .controller( "SongNewController", [
    "SongFactory",
    SongNewControllerFunction
  ]);

  function SongNewControllerFunction( SongFactory ){
    this.song = new SongFactory();
    this.create = function(){
      this.song.$save();
    };
  }
}());
