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

    // This time, ref contains a reference to a specific grumble.
    var ref = firebase.database().ref().child("songs/" + $stateParams.id);

    // Then we retrieve a $firebaseObject based on ref. Once that asynchronous action is done, we save the resulting grumble to `vm.grumble`.
    $firebaseObject(ref).$loaded().then(function(song){
      vm.song = song
    });
    //   this.song = SongFactory.get({id: $stateParams.id});
  }
}());
