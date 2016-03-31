"use strict";

(function(){
  angular
  .module("songsmodule", [])
  .controller("SongsIndexCtrl", [
    SongsIndexCtrlFunction
  ])

  function SongsIndexCtrlFunction(){
    console.log("I'm in the controller right now.")
  }
}());
