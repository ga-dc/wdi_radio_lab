"use strict";

(function(){
  angular
    .module( "songs" )
    .controller( "songEditController", [
      "songFactory",
      "$stateParams",
      songEditControllerFunction
    ]);

  function songEditControllerFunction( songFactory, $stateParams ){
    this.song = songFactory.get({id: $stateParams.id});
    this.update = function(){
      this.song.$update({id: $stateParams.id})
    }
    this.destroy = function(){
      this.song.$delete({id: $stateParams.id});
    }
  }
}());
