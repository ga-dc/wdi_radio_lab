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

    // This time, ref contains a reference to a specific song
    var ref = firebase.database().ref().child("songs/" + $stateParams.id);

    // Then we retrieve a $firebaseObject based on ref. Once that asynchronous action is done, we save the resulting song to `vm.song`.
    $firebaseObject(ref).$loaded().then(function(song){
      vm.song = song
    });

    // triggered when the user clicks "Update Grumble".
    vm.update = function(){
      vm.song.$save();
    }
  }
})();
