"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongShowController", [
      "SongFactory",
      "$stateParams",
      SongShowControllerFunction
    ]);

  function SongShowControllerFunction(SongFactory, $stateParams){
    this.song = SongFactory.get({id: $stateParams.id})

    this.update = function(song){
      song.$update(song);
    }
    this.destroy = function(song){
      console.log(song)
      SongFactory.remove(song);
      this.song.splice(song, 1)
    }
  }
})();
