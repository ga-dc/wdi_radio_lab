"use strict";

(function(){
  angular
    .module("songs")
    .factory("SongFactory", [
//injecting $resource
      "$resource",
      SongFactoryFunction
    ])

    function SongFactoryFunction($resource) {
      return $resource("http://localhost:3000/songs/:id", {}, {
        update: {method: "PUT"}
      });
    }
})();
