"use strict";

(function(){
  angular
  .module("songs") // attach to songs module
  .factory("SongsFactory",[
    "$resource", //gives me .get, .save, .query, .remove, .delete
    FactoryFunction //function for factory
  ])

  function FactoryFunction($resource){
    return $resource("http://localhost:3000/songs/:id", {}, {
      update: {method: "PUT"}
    });
  }

}());
