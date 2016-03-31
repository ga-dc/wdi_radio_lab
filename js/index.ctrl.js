"use strict";

(function(){
  angular
  .module("radio")
  .controller("RadioIndexCtrl", [
    "SongFactory",
    ctrlFunc
  ]);

  function ctrlFunc(SongFactory){
    this.songs = SongFactory.query();
    console.log("BONER!!!");
  }
})();
