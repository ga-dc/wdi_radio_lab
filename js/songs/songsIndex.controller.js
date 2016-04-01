"use strict";

(function(){

  angular
  .module('songs')
  .controller('songsIndexController', [
    "SongsKitchen",
    "$sce",
    SongsIndexControllerFunction
  ]);

  function SongsIndexControllerFunction(SongsKitchen){
    this.songs = SongsKitchen.query();
  }
}());
