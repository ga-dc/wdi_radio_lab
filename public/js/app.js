
"use strict";

(function(){
  angular
  .module("radio", ["firebase"])
  .controller("RadioController", [
    "$firebaseArray",
    RadioControllerFunction
  ]);

  function RadioController($firebaseArray){
    vm = this;
    var ref = firebase.database().ref().child("radios");
    vm.todos = $firebaseArray(ref);
  }
}());
