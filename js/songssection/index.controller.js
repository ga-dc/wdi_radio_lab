"use strict";

(function(){
  angular
  .module("songsmodule")
  .controller("SongsIndexCtrl", [
    SongsIndexCtrlFunction
  ]);

  function SongsIndexCtrlFunction(){
    this.songs = songsdata;
  }
}());
