"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongShowController", [
      "$stateParams",
      "$firebaseObject",  // We are now using $firebaseObject, not $firebaseArray.
      SongShowControllerFunction
    ]);

  function SongShowControllerFunction($stateParams, $firebaseObject){
    var vm = this;

    var ref = firebase.database().ref().child("songs/" + $stateParams.id);

    $firebaseObject(ref).$loaded().then(function(song){
      vm.song = song
    });

    // This method is triggered when the user clicks "Update Song".
    vm.update = function(){
      vm.song.$save();
    }
  }
})();
