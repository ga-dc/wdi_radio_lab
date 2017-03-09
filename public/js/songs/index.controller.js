"use strict";

(function() {
  angular
  .module("songs")
  .controller( "SongsIndexController", [
    "$firebaseArray",
    SongsIndexControllerCallback
  ])

  function SongsIndexControllerCallback($firebaseArray) {
    var vm = this;
    var ref = firebase.database().ref().child("songs");
    vm.songs = $firebaseArray(ref)
    vm.newEntry = {};

    this.create = function() {
      vm.songs.$add(vm.newEntry);
      vm.newEntry = {};
    }
  }
}());
