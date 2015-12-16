"use strict";

(function(){
  angular
  .module("radio")
  .controller("SongShowController", [
    "SongsFactory",
    "$stateParams",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction(SongsFactory, $stateParams){
    this.song = SongsFactory.get({id: $stateParams.id});
    this.update = function() {
      this.song.$update({id: $stateParams.id});
    };
  }
}());
