"use strict";

(function(){
  angular
    .module( "songs" )
    .controller( "songEditController", [
      "songFactory",
      "$stateParams",
      "$state",
      songEditControllerFunction
    ]);

  function songEditControllerFunction( songFactory, $stateParams, $state ){
    this.song = songFactory.get({id: $stateParams.id});
    this.update = function(){
      this.song.$update({id: $stateParams.id});
      // $state.go("songIndex"); This "works" but you have to refresh the page to get the changes grrr
    }
    this.destroy = function(){
      this.song.$delete({id: $stateParams.id});
    }
  }
}());
