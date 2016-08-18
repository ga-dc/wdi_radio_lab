"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsIndexController",[
    "$firebaseArray",
    SongIndexControllerFunction
  ])

  function SongIndexControllerFunction($firebaseArray){
    var vm = this;

    var ref = firebase.database().ref().child("songs");
    vm.songs = $firebaseArray(ref);

  }

})();
