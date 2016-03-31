"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsIndexController", [
//inject factory dependency
      "SongFactory"
      "$sce",
      ControllerFunction
    ])

    function ControllerFunction(SongFactory, $sce) {
//query for songs in the Controller Function
      this.songs = SongFactory.query();
      this.newSong = new SongFactory();
      this.play = function(song){
        this.playSong = song
      }
    }
})();
