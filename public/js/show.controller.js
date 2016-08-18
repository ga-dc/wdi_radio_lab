"use strict";

(function(){
  angular
    .module( "radio" )
    .controller("wdiradioShowController", [
      "$stateParams",
      "$sce",
      "$firebaseObject",
      wdiradioShowControllerFunction
    ])

    function wdiradioShowControllerFunction($stateParams, $sce, $firebaseObject){
      var vm = this;

      var ref = firebase.database().ref().child("songs/" + $stateParams.id);

      $firebaseObject(ref).$loaded().then(function(song){
        vm.song = song
        });

        vm.play = function(song){
          vm.playSong = song;
          vm.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url);
        }

        vm.update = function(){
          vm.song.$save();
        }
    }

}())
