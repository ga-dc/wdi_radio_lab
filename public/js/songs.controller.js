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
	}
}());