"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongEditController", [
    "$stateParams",
    "SongFactory",
    "$state",
    SongEditControllerFunction
  ])

  function SongEditControllerFunction($stateParams, SongFactory, $state){
    this.song = SongFactory.get({id: $stateParams.id})
    this.update = function(){
      this.song.$update({id: $stateParams.id}).then(
        function(){
          $state.go("songIndex")
        }
      )
    }
    this.destroy = function(){
      this.song.$delete({id: $stateParams.id}).then(
        function(){
          $state.go("songIndex")
        }
      )
    }
  }
})();
