"use strict";

(function(){
  angular
    .module( "radio" )
    .controller("wdiradioShowController", [
      "$stateParams",
      "$firebaseObject",
      wdiradioShowControllerFunction
    ])

    function wdiradioShowControllerFunction($stateParams, $firebaseObject){
      var vm = this;

      var ref = firebase.database().ref().child("songs/" + $stateParams.id);

      $firebaseObject(ref).$loaded().then(function(song){
        vm.song = song
        });

        vm.update = function(){
          vm.song.$save();
        }

        vm
    }

}())
