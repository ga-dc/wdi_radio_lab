"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "SongFactory",
    "$sce",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction( SongFactory, $sce ){
    var self =this;
    self.songs = SongFactory.query();
    this.newSong = new SongFactory();
    this.setCurrent = function(song){
      this.current = song;
      this.current.audio_url = $sce.trustAsResourceUrl(this.current.audio_url);
    }
  }
}());
