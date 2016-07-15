
"use strict",

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    "$firebaseArray",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction($firebaseArray){
    var vm = this;
    var ref = firebase.database().ref().child("songs");
    $firebaseArray(ref).$loaded().then(function(response){
      vm.songs= response;
    });

  }

}());
