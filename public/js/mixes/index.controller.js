"use strict";

  (function(){
    angular
    .module("mixes")
    .controller("MixIndexController", [
      "$firebaseArray",
      MixIndexControllerFunction
    ]);

    function MixIndexControllerFunction($firebaseArray){
      var vm = this;
      var ref = firebase.database().ref().child("mixes");
      vm.mixes = $firebaseArray(ref);


    }
  }());
