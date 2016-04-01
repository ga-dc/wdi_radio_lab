"use strict";

(function(){
  angular
    .module( "wdiRadio" )
    .controller( "SongsShowController", [
      "wdiRadioFactory",
      "$stateParams",
      SongsShowControllerFunction
    ]);

  function SongsShowControllerFunction( wdiRadioFactory, $stateParams ){
    this.song = wdiRadioFactory.get({id: $stateParams.id});
  }
}());
