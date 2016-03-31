"use strict";

(function(){
  angular
  .module("radio")
  .factory("SongFactory", [
    "$resource",
    factoryFunc
  ]);

  function factoryFunc($resource){
    return $resource("http://localhost:3000/songs/:id", {}, {
      update: {method: "PUT"}
    });
  }
})();
