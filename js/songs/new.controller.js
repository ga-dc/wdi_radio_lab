"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsNewController", [
    "SongsFactory",
    "$state",
    SongsNewControllerFunction
  ]);

  function SongsNewControllerFunction( SongsFactory, $state) {
    this.song = new SongsFactory();
    this.create = function(){
      this.song.$save()
      $state.go("songIndex")
    }
  }
}());
