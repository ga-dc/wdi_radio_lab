"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongShowController", [
      "$stateParams",
      "$firebaseObject",
      SongShowControllerFunction
    ]);

  function SongShowControllerFunction($stateParams, $firebaseObject){
    var vm = this;

    var ref = firebase.database().ref().child("songs/" + $stateParams.id);

    $firebaseObject(ref).$loaded().then(function(song){
      vm.song = song
    });

    vm.update = function(){
      vm.song.$save();
    }
  }
})();
