"use strict";

(function() {
  angular
  .module("radioApp", ["firebase"])
  .controller("RadioController", [
    "$firebaseArray",
    RadioControllerFunction
  ]);

  function RadioControllerFunction($firebaseArray) {
    vm = this;
    var ref = firebase.database().ref().child("songs");
    vm.songs = $firebaseArray(ref);

    vm.addSong = function() {
      vm.songs.$add({
        text: vm.newTodoText
      }).then(function() {
        vm.newSongText = "";

      })

    }
  }
