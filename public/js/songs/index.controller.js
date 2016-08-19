"use strict";
console.log("test")
(function(){
  angular
  .module("songs")
  .controller("SongsIndexController",[
    "$firebaseArray",
    "$firebaseObject",
    ControllerFunction
  ]);

  function($firebaseArray, $firebaseObject){
    var vm = this;
    //Read
    console.log("working index controller");
    var ref = firebase.database().ref().child("songs");
    $firebaseArray(ref).$loaded().then(function(songs) {
      vm.songs = songs;
    })
  }
})();
