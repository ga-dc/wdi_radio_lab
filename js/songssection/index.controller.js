"use strict";

(function(){
  angular
  .module("songsmodule")
  .controller("SongsIndexCtrl", [
    '$state',
    SongsIndexCtrlFunction
  ]);

  function SongsIndexCtrlFunction($state){
    this.songs = songsdata;
  
  }
}());
