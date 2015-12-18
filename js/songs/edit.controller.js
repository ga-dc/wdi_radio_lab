"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsEditController", [
    "SongFactory",
    "$stateParams",
    SongsEditControllerFunction
  ]);

  function SongsEditControllerFunction(
    SongFactory, $stateParams ){
      this.song = SongFactory.get({id: $stateParams.id});
      this.update = function(){
        this.song.$update({id: $stateParams.id})
      }
      this.destroy = function(){
        this.song.$delete({id: $stateParams.id});
      }
    }
}());
