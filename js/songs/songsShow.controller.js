"use strict";

(function() {

  angular
  .module('songs')
  .controller('songsShowController', ["SongsKitchen", "$stateParams", SongsShowFunction]);

  function SongsShowFunction(SongsKitchen, $stateParams){
    this.song = SongsKitchen.get({id: $stateParams.id})
  }

}());
