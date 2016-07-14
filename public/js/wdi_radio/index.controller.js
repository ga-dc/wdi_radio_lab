"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongIndexController", [
      "$firebaseArray",
      SongIndexControllerFunction
    ]);

    function SongIndexControllerFunction($firebaseArray){
      var vm = this;
      var ref = firebase.database().ref().child("songs");
      vm.songs = $firebaseArray(ref);

      vm.create = function(){
        vm.songs.$add(vm.newSong).then(function(){
          console.log(vm.newSong)
          vm.newSong = {};
        });
      }
      vm.delete = function(song){
        vm.songs.$remove(song)
      }
      vm.play = function(song){
        vm.playSong = song
        // workaround for ng-src not allowing expression {{song.audio_url}}
        vm.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url)
      }
    }
})();
