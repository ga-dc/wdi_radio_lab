"use strict";

(function(){
  angular
    .module("songs")
    .factory( "SongFactory", [
      "$resource",
      SongFactoryFunction
    ]);

  function SongFactoryFunction(){
    return $resource("http://localhost:3000/songs/:id");
  }
}());
