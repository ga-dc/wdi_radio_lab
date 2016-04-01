"use strict";

(function(){
  angular
  .module("WDIRadio")
  .factory("WadioFactory", [
    "$resource",
    WadioFactoryFunction
  ]);

  function WadioFactoryFunction($resource){
    return $resource("http://localhost:3000/wadio/:id");
  }
}());
