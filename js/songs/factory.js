"use strict";

(function(){
  angular
  .module("songs")
  .factory("RadioFactory", [
    "$resource",
    RadioFactoryFunction
  ]);
  function RadioFactoryFunction($resource){
    return $resource("http://localhost:8080/songs/:id", {}, {
      update:{ method: "PUT"}
    });
  }
})();
