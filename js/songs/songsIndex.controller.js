"use strict";

(function(){

  angular
  .module('songs')
  .controller('songsIndexController', [
    "SongsKitchen",
    "$stateParams",
    SongsIndexControllerFunction
  ]);

  function SongsIndexControllerFunction(SongsKitchen){
    this.songs = SongsKitchen.query();
    this.sort_by = function(criteria){
      this.sort_on = criteria;
      this.is_descending = true;
    }
    this.destroy = function(song_index){
      var s = this.songs[song_index];
      this.songs.$delete({id: s.id}, function(success){
        console.log('you did it');
      })
    }
    console.log(this.songs);
  }
}());
