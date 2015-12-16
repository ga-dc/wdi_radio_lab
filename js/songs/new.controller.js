"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsNewController", [
      "SongFactory",
      "$state",
      ControllerFunction
    ])

    function ControllerFunction(SongFactory, $state){
      this.newSong = new SongFactory();
      this.create = function(){
        this.newSong.$save(function(response){
          $state.go("songs", {}, {reload: true})
        })
      }
    }
})();
