"use strict";

(function(){

  angular
    .module( "radio" )
    .controller( "SongsIndexController", [
      "SongsFactory",
      SongsIndexControllerFunction
    ]);

    function SongsIndexControllerFunction( SongsFactory ){
      this.songs = SongsFactory.query();
    }

}());