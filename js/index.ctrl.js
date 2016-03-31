"use strict";

(function(){
  angular
  .module("radio")
  .controller("RadioIndexCtrl", [
    "SongFactory",
    ctrlFunc
  ]);

  function ctrlFunc(RadioFactory){
    this.songs = SongFactory.query();
  }
})();
