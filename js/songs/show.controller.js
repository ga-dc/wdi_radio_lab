"use strict";

(function(){
  angular
    .module( "songs" )
    .controller( "songShowController", [
      "songFactory",
      "$stateParams",
      songShowControllerFunction
    ]);

  function songShowControllerFunction( songFactory, $stateParams ){
    this.song = songFactory.get({id: $stateParams.id});
  }
}());
