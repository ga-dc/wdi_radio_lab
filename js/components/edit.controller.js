"use strict";

(function(){
  angular
  .module("songApp")
  .controller("SongEditController", [
    "SongFactory",
    "$stateParams",
    "$window",
    SongEditControllerFunction
  ]);

  function SongEditControllerFunction(SongFactory, $stateParams, $window){
    this.song=SongFactory.get({id: $stateParams.id});
    this.update = function(){
      this.song.$update({id: $stateParams.id});
      $window.location.href = "";
    };
    this.destroy = function(){
      this.song.$delete({id: $stateParams.id});
      $window.location.href = "";
    };
  }
}());
