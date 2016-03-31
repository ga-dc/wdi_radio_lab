"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongEditController", [
      "SongFactory",
      "$stateParams",
      SongEditControllerFunction
    ]);

    function SongEditControllerFunction(SongFactory , $stateParams){
      this.song = SongFactory.get({id: $stateParams.id});
      this.update = function(){
        this.song.$update({id: $stateParams.id});
      };
      this.destroy = function(){
        this.song.$delete({id: $stateParams.id});
      };
    }
}());
