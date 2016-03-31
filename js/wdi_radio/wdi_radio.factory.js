"use strict";

(function(){
  angular
    .module( "wdiRadioApp" )
    .factory( "wdiRadioFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction( $resource ){
    return $resource( "http://localhost:3000/songs/:id", {}, {
      update: { method: "PUT" }
    });
  }
}());
