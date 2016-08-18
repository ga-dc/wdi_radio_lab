"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsIndexController", [
    "$firebaseArray",
    SongsIndexControllerFunction
  ]);

  function SongsIndexControllerFunction($firebaseArray){
    var vm = this;
    var ref = firebase.database().ref().child("songs");
    vm.songs = $firebaseArray(ref);
  }
})();
