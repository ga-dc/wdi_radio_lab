"use strict";

(function () {
  angular
  .module("songs")
  .factory("SongsFactory", [
    "$resource",
    SongsFunction
  ])

  function SongsFunction($resource) {
    return $resource("http://localhost:3000/songs/:id", {}, {
      update: { method: "PUT" }
    });
  }
})();
