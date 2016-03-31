"use strict";

(function(){
  angular
  .module("songs")
  .factory("SongFactory", [
    "$resource",
    SongFactory
  ]);

  function SongFactory($resource){
    return $resource("http://localhost:3000/songs/:id", {}, {
      update: {method: "PUT"}
    });
  }
})();
