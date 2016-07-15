"use strict";

(function(){
  angular
    .module("songs") // Module to control the display of songs
    .controller("SongsIndexController", [
      "$sce",
      "$firebaseArray",
      "$firebaseObject",
      ControllerFunction
    ])

    function ControllerFunction ($sce, $firebaseArray, $firebaseObject){
      var vm = this;
      // Read

      // Try to get the firebase database
      var ref = firebase.database().ref().child("songs");

      // If it was successfully retrieved,. store it
      // I'm not sure what it would do if it can't get the songs.
      // I think this also makes the app wait for the data to
      // come back.
      $firebaseArray(ref).$loaded().then(function(songs) {
        vm.songs = songs;
      });
      // Create an empty "slot" for a new song
      vm.newSong = {};

      // add the user-entered song data to the database
      vm.create = function () {
        vm.songs.$add(vm.newSong);
        // Empties the slot for a new song
        vm.newSong = {};
      }
      // Update
      vm.update = function(song) {
        // Make the song uneditable (that is, remove the edit form)
        // since this happens once the user submitds
        vm.toggleEdit(song);
        // Store the song in the database
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
        // Make a new song visible
        vm.newSong.visible = !vm.newSong.visible;
      }
      vm.toggleEdit = function (song) {
        // Bring a song's edit field on and off display
        song.showEdit = !song.showEdit;
      }
    }
})();
