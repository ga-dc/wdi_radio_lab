"use strict";

(function(){
  angular
  .module( "songs" )
  .factory("SongFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction( $resource ){
    return $resource( "http://localhost:3000/songs/:id");
  }
}());
