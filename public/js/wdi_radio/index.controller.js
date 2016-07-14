"use strict";

(function(){
angular
  .module("songs")
  .controller("SongIndexController", [
    "$firebaseArray",
    SongIndexControllerFunction
  ])


function SongIndexControllerFunction($firebaseArray){
  var song = this;
  var ref = firebase.database().ref().child("songs");
  song.songs = $firebaseArray(ref);
  console.log("firebase querrying happening")
}


}())
