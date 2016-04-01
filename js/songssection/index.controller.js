"use strict";

(function(){
  angular
  .module("songsmodule")
  .controller("SongsIndexCtrl", [
    "SongFactory",
    SongsIndexCtrlFunction
  ]);

  function SongsIndexCtrlFunction( SongFactory ){
    this.songs = SongFactory.query();

  }
}());
