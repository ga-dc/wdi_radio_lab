'use strict'

(function(){
  angular
  .module("songs")
  .factory( "songFacoty", [
    "$resource",
    FactoryFunction
  ])

  function FactoryFunction($resource){
    return $resource( ("http://localhost:3000/songs"), {}, {
      update: {method: "PUT"}
    });
  }
})();
