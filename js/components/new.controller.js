"use strict";

(function(){
  angular
  .module("songApp")
  .controller("SongNewController", [
    "SongFactory",
    "$stateParams",
    "$window",
    "$state",
    SongNewControllerFunction
  ]);


  function SongNewControllerFunction( SongFactory, $stateParams, $window) {
    this.song = new SongFactory();
    this.create = function(){
      this.song.$save();
      $window.location.href = "";
    };
  }
}());
