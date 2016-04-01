"use strict";

(function(){
  angular
    .module( "songs" )
    .controller( "songNewController", [
      "songFactory",
      "$stateParams",
      songNewControllerFunction
    ])

    function songNewControllerFunction( songFactory, $stateParams ){
      this.song = new songFactory();

    }
}());
