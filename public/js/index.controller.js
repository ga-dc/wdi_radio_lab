"use strict";

(function(){
  angular
    .module( "radio" )
    .controller("wdiradioIndexController", [
      "$firebaseArray",
      wdiradioIndexControllerFunction
    ])

  function wdiradioIndexControllerFunction( $firebaseArray ){
    var vm = this;
    var ref = firebase.database().ref().child("songs");
    vm.songs = $firebaseArray(ref);

    vm.delete = function(song){
      vm.songs.$remove(song)
    }

  }
})()
