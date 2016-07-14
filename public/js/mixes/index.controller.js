"use strict";

  (function(){
    angular
    .module("mixes")
    .filter("unsafe", ["$sce", function($sce){
      return $sce.trustasHtml
    }])
    .controller("MixIndexController", [
      "$firebaseArray",
      MixIndexControllerFunction
    ]);

    function MixIndexControllerFunction($firebaseArray){
      // this.break = function(string){
      //   return string.replace(/NEWLINE/g, "<br>")
      //
      // }
      var vm = this;
      var ref = firebase.database().ref().child("mixes");
      vm.mixes = $firebaseArray(ref);


    }
  }());
