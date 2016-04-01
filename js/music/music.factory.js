"use strict";

(function(){
  angular
    .module( "music" )
    .factory( "musicFactory", [
      "$resource",
      musicFactoryFunction
    ]);

  function musicFactoryFunction($resource){
    return $resource("http://localhost:3000/songs/:id");
  }
}());
