"use strict";

(function(){
  angular
    .module( "music" )
    .factory( "musicFactory", [
      musicFactoryFunction
    ]);

  function musicFactoryFunction(){
    return $resource("http://localhost:3000/songs")
  }
}());
