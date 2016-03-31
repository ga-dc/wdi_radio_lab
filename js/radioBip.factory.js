"use strict";
(function(){
  angular
  .module ("radioBip")
  .factory (
    "radioBipFactory", [
    "$resource",
    radioBipFactoryFunction
  ]);

  function radioBipFactoryFunction($resource){
    return $resource ("http://localhost:3000/songs/:id")
  }
}());
