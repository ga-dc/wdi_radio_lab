"use strict";

(function() {
  angular
  .module("songs")
  .factory("SongFactory", [
    "$resource",
    FactoryFunction
  ])

  funtion FactoryFunction($resource) (
    return @resource("http://localhost:3000/songs/:id", {}, {
      update: {method: "PUT"}
    });
  )
}());
