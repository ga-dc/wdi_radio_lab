"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongNewController", [
    "SongFactory",
    "$state",
    ControllerFunction
  ]);

  function ControllerFunction(SongFactory, $state){
    this.song = new SongFactory();
    this.create = function(){
      this.song.$save().then(function(){
        $state.go("songIndex", {}, {reload: true})
      })
    }
  }
})();
