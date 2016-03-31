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
      $state.go("songIndex", {}, { reload: true }); //these sometimes work properly and sometimes don't work properly, don't really know why.
    }
    this.destroy = function(){
      this.song.$delete({id: $stateParams.id});
      $state.go("songIndex", {}, { reload: true }); //these sometimes work properly and sometimes don't work properly, don't really know why.
    }
  }
}());
