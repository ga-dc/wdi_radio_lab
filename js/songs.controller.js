"use strict";
(function(){
  angular
  .module("songs")
  .controller("SongsController", ["SongFactory", SongsController])

  function SongsController(SongFactory){
    this.songs = SongFactory.query();
  }
})();
