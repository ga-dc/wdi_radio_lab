"use strict";

(function(){

  angular
  .module('songs')
  .controller('songsIndexController', ["SongsKitchen", SongsIndexControllerFunction]);

  function SongsIndexControllerFunction(SongsKitchen){
    this.songs = SongsKitchen.query();
  }

}());
