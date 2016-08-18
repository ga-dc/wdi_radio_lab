"use strict";

(function(){
  angular
    .module("songs")
    .controller("IndexController", [
        "$firebaseArray",
        IndexControllerFunction
    ]);

  function IndexControllerFunction($firebaseArray){
      var vm = this;
      var ref = firebase.database().ref().child("songs");
      vm.songs = $firebaseArray(ref);
      console.log("firefire");
  }
})();


