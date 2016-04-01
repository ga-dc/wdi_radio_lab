"use strict";

(function(){
  angular
  .module('songs')
  .controller('NewSongController', [
    'SongsKitchen',
    "$state",
    "$stateParams",
    NewSongControllerFunction
  ]);

  function NewSongControllerFunction(SongsKitchen,$state, $stateParams){
    var newSongVM = this;
    newSongVM.song = new SongsKitchen();
    newSongVM.song.create = function(){
      newSongVM.song.$save(newSongVM.song, function(song){
        $state.go('songsShow', song);
      });
      console.log(newSongVM.song);
    };
  }

}());
