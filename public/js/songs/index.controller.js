"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsIndexController", [
      "$sce",
      "$firebaseArray",
      "$firebaseObject",
      ControllerFunction
    ])

    function ControllerFunction ($sce, $firebaseArray, $firebaseObject){
      var vm = this;
      // Read
      var ref = firebase.database().ref().child("songs");
      $firebaseArray(ref).$loaded().then(function(songs) {
        vm.songs = songs;
      });
      // Create
      vm.newSong = {};
      vm.create = function () {
        vm.songs.$add(vm.newSong);
        vm.newSong = {};
      }
      // Update
      vm.update = function(song) {
        vm.toggleEdit(song);
        vm.songs.$save(song)
      }
      // Destroy
      vm.destroy = function(song) {
        vm.toggleEdit(song);
        vm.songs.$remove(song)
      }
      // Play
      vm.play = function(song){
        vm.playSong = song;
        // workaround for ng-src not allowing expression {{song.audio_url}}
        vm.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url);
      }
      // DOM Manipulation Methods
      vm.toggleNew = function () {
        vm.newSong.visible = !vm.newSong.visible;
      }
      vm.toggleEdit = function (song) {
        song.showEdit = !song.showEdit;
      }
    }
})();
