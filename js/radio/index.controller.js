"use strict";

(function(){

  angular
    .module( "radio" )
    .controller( "SongsIndexController", [
      "SongsFactory",
      SongsIndexControllerFunction
    ]);

    function SongsIndexControllerFunction( ){
      this.songs = SongsFactory.query();
    }

}());