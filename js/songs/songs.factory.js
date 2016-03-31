"use strict";

(function() {
  angular.module("songs")
    .factory("SongFactory", [
      "$resource",
      SongFactoryFunction
    ]);

  function SongFactoryFunction($resource) {
    var url = "http://localhost:3000/songs/:id";
    return $resource(url, {}, {
      update: {method: "PUT"}
    });
  }
})();
