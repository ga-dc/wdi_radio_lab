"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "SongFactory",
    "$state",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(SongFactory, $state){
    this.songs = SongFactory.query();
    this.newSong = new SongFactory();
    this.destroy = function(song){
      SongFactory.delete({id: song.id}, function(response){
        $state.go("songIndex", {}, {reload: true});
      });
    }
    this.modify = function(song){
      song.edit = true;
    }
    this.update = function(song){
      song.edit = false;
      song.$update({id: song.id}, function(response){
        $state.go("songIndex", {}, {reload: true});
      });
    }
  }
}());
