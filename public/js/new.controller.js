"use strict";

(function(){
  angular
    .module( "radio" )
    .controller("wdiradioNewController", [
      "$firebaseArray",
      "$state",
      wdiradioNewControllerFunction
    ])

    function wdiradioNewControllerFunction( $firebaseArray, $state ){
      var vm = this;
      var ref = firebase.database().ref().child("songs");
      vm.songs = $firebaseArray(ref);

      vm.create = function(){
        vm.songs.$add(vm.newSong).then(function(){
          vm.newSong = {};
          $state.go("wdiradioIndex")
        })
      }
    }
})()
