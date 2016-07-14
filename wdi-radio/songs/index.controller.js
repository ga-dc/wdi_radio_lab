'use strict';
(function() {
  angular
  .module("songs")
  .controller("songsIndexController",["$firebaseArray",songsIndexControllerFunction])

function songsIndexControllerFunction($firebaseArray){
  console.log("Initializing 'this' variable...");
  var vm = this;
  console.log("Gathering song data...");
  var ref = firebase.database().ref().child("songs");
  console.log("Creating songs array...");
  vm.songs = $firebaseArray(ref);

}


})();
