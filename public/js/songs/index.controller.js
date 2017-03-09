"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsIndexController", [
      "$firebaseArray",
      "$firebaseObject",
      SongsIndexControllerFunction
  ]);

  function SongsIndexControllerFunction($firebaseArray, $firebaseObject){
    var vm = this;
    var ref = firebase.database().ref().child("songs");
    console.log(ref);
    $firebaseArray(ref).$loaded().then(function(songs){
      vm.songs=songs
      console.log(vm.songs);
    })
    console.log(vm.songs)
    vm.create = function(){
      console.log("bob");
      vm.songs.$add(vm.newSong).then(function(){
        vm.newSong = {};
      });
    }
    vm.delete = function(song){
      vm.songs.$remove(song)
    }

  }
})();
