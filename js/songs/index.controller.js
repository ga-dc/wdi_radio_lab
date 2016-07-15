"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongIndexController", [
      "SongFactory",
      "$stateParams",
      SongIndexControllerFunction
    ]);

  function SongIndexControllerFunction(SongFactory, $stateParams){
    var vm = this;
    vm.songs = SongFactory.query();

    vm.sort_songs_by = function(name){
      vm.sort_on = name;
      vm.is_descending = !(vm.is_descending);
    }

    vm.create = function(song){
      vm.song = new SongFactory(song);
      SongFactory.save(song)
    }
  }
}());
