"use strict";

(function(){
  angular
    .module("songs")
    .controller("songIndexController", [
      "ui.router",
      "ugResources",
      SongIndexControllerFunction
    ]);
  function SongIndexControllerFunction(){
    this.songs = SongFactory.query();
  }
})();
