"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongNewController", [
    "SongFactory",
    SongNewController
  ]);

  function SongNewController(SongFactory){
    this.song = new SongFactory();
    this.create = function(){
      this.song.$save();
    }
  }
})();
