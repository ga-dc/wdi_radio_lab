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
    this.sort_by = function(criteria){
      this.sort_on = criteria;
      this.is_descending = false;
    }
  }
}());
