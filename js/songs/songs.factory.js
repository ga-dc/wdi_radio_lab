"use strict";

(function(){
  angular
  .module("songs")
  .factory("SongFactory",[
    "$resource",
    factoryFunction
  ]);

  function factoryFunction($resource){
    return $resource("http://localhost:3000/songs/:id", {}, {
        update: { method: "PUT"}
      });
  }
}());
