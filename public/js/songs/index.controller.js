"use strict";

(function(){
angular
.module("songs")
.controller("SongsIndexController", [
  "$firebaseArray",

  ControllerFunction
])
function ControllerFunction($firebaseArray){
  var vm = this;
  var ref = firebase.database().ref().child("songs");
    vm.songs = $firebaseArray(ref);

  vm.play = function(song){
    vm.playSong = song;
    vm.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url);
  }
}

})();
