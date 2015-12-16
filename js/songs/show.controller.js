"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongShowController", [
    "SongFactory",
    "$stateParams",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction(SongFactory, $stateParams){
    this.song = SongFactory.get({id: $stateParams.id})
    this.edit = function(){
      this.song.$update({id: $stateParams.id})
    }
    this.delete = function(){
      this.song.$delete({id: $stateParams.id});
    }
  }
})();
