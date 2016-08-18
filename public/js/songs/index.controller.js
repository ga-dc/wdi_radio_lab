"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongIndexController", [
      "$firebaseArray",
      SongIndexControllerFunction
    ])

  function SongIndexControllerFunction($firebaseArray){
    console.log("index controller called");
    var vm = this;
    var ref = firebase.database().ref().child("songs");
    vm.songs = $firebaseArray(ref);
    vm.create = function(){
      vm.songs.$add(vm.newSong).then(function(){
        vm.newSong = {};
      });
    }
    vm.delete = function(song){
      vm.Songs.$remove(song)
    }
  }
})();
