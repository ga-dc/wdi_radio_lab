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
      this.newSong = new SongsFactory();
      this.create = function(){
        this.newSong.$save();
        console.log(this.newSong);
      }
    };

}());