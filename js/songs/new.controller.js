"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongNewController", [
    "$state",
    "SongFactory",
    SongNewControllerFunction
  ])
  function SongNewControllerFunction($state, SongFactory){
    this.song = new SongFactory;
    this.create = function(){
      this.song.$save().then(
        function(){
          $state.go("songIndex")
        }
      )
    }
  }
})();
