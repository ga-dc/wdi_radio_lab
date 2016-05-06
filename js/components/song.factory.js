"use strict";

(function(){
  angular
  .module( "songApp" )
  .factory( "SongFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource) {
    return $resource("http://localhost:3000/songs/:id", {}, {
      update: {method: "put"}
    });
  }
}());
