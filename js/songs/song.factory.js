"use strict";

(function(){
  angular
    .module( "songs" )
    .factory( "songFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction( $resource ){
    return $resource( "http://localhost:3000/songs/:id", {}, {
      update: { method: "PUT" }
    });
  }
}());
