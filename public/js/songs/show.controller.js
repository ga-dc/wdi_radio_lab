"use strict";

(function() {
  angular
  .module("songs")
  .controller( "SongsShowController", [
    "$stateParams",
    "$firebaseObject",
    SongsShowControllerCallback
  ])

  function SongsShowControllerCallback( $stateParams, $firebaseObject ) {
    var vm = this;
    var ref = firebase.database().ref().child("songs/" + $stateParams.id);
    $firebaseObject(ref).$loaded().then(function(song) {
      vm.song = song;
    });
  }
}());
