"use strict";

(function(){
  angular
  .module("songs")
  .factory("SongFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource){
    return $resource("http://localhost:3000/songs/:id", {} {
      // allowing us update method, the factory is what gives us these methods, only on angular objects
      update: {method: "PUT"}
    });
  }
}());
