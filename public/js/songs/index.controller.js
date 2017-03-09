"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "$firebaseArray",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction($firebaseArray){
    console.log("controller called");
    var vm = this;
    var ref = firebase.database().ref().child("songs");
    console.log($firebaseArray(ref));
    vm.songs = $firebaseArray(ref);
    vm.create = function(){
      vm.songs.$add(vm.newSong).then(function(){
        vm.newSong = {};
      });
    }

    // triggered whenever the user clicks "Delete Song".
    // It takes a song as an argument.
    vm.delete = function(song){
      vm.songs.$remove(song)
    }
  }
})();
