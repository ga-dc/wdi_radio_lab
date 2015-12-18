"use strict";

(function(){

  angular
    .module( "radio" )
    .controller( "SongsIndexController", [
      "SongsFactory",
      "$stateParams",
      SongsIndexControllerFunction
    ]);

    function SongsIndexControllerFunction( SongsFactory, $stateParams ){
      this.songs = SongsFactory.query();
      this.song = new SongsFactory();

      // this.create = function(){
      //   this.song.$save();
      //   console.log(this.song);
      // }
    };

}());