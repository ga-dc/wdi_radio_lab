"use strict";

(function(){
  angular
  .module("songsmodule")
  .factory("SongFactory", [
    SongFactoryFunction
  ]);

  function SongFactoryFunction(){
    return{
      helloWorld: function(){
        console.log("Hello world!");
      }
    };
  }
})();
