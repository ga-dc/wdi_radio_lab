"use strict";

(function(){
  angular
  .module("songIndex")
  .controller("SongsIndexController", [
    "$firebaseArray",
    RadioIndexControllerFunction
  ]);

  function RadioIndexControllerFunction($firebaseArray){
    var vm = this;
    var ref = firebase.database().ref().child("songs");
    vm.songs = $firebaseArray(ref);
  }
}());
