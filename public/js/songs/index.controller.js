"use strict";

(function(){
  console.log("wassssssssup");
angular
.module("songs")
.controller("SongIndexController", [
  "$firebaseArray",
  SongIndexControllerFunction
]);

function SongIndexControllerFunction($firebaseArray) {
  console.log("Song index controller invode");
  var vm = this;
  var ref = firebase.database().ref().child("songs");
  vm.songs = $firebaseArray(ref);

}
})();
