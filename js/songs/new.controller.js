"use strict";

(function(){
  angular
  .module('songs')
  .controller('NewSongController', [
    'SongsKitchen',
    "$state",
    NewSongControllerFunction
  ]);

  function NewSongControllerFunction(SongsKitchen,$state){
    var newSongVM = this;
    newSongVM.song = new SongsKitchen();
    newSongVM.song.create = function(){
      newSongVM.song.$save();
      $state.go('songsIndex');
      console.log(newSongVM.song);
    }
  }

}());
