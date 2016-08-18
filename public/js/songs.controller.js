"use strict";

(function() {
	angular
	.module("wdiradio")
	.controller("SongsController", [
		"$firebaseArray",
   	SongsControllerFunction
	]);

	function SongsControllerFunction($firebaseArray) {
		var vm = this;

    	var ref = firebase.database().ref().child("songs");
      vm.songs = $firebaseArray(ref);

      vm.newSong = {};
      vm.create = function () {
      	vm.songs.$add(vm.newSong);
      	vm.newSong = {};
      }

      vm.update = function(song) {
      	vm.toggleEdit(song);
      	vm.songs.$save(song);
      }

      vm.destroy = function(song) {
      	vm.toggleEdit(song);
      	vm.songs.$remove(song)
      }

      vm.toggleEdit = function (song) {
      	song.showEdit = !song.showEdit;
      }

      vm.toggleNew = function () {
      	vm.newSong.visible = !vm.newSong.visible;
      }
	}
}());