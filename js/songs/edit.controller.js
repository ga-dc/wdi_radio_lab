"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsEditController", [
      "SongFactory",
      "$state",
      "$stateParams",
      ControllerFunction
    ])

    function ControllerFunction(SongFactory, $state, $stateParams){
      this.editSong = SongFactory.get({id: $stateParams.id});
      this.update = function(){
        this.editSong.$update({id: $stateParams.id}, function(response){
          $state.go("songs", {}, {reload: true})
        })
      }
      this.destroy = function(){
        this.editSong.$delete({id: $stateParams.id}, function(response){
          $state.go("songs", {}, {reload: true})
        })
      }
    }
})();
