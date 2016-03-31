"use strict";

(function(){
  angular
    .module( "music" )
    .factory( "musicFactory", [
      musicFactoryFunction
    ]);

  function musicFactoryFunction(){
    return {
      helloWorld: function(){
        console.log( "Hello world!" );
      }
    }
  }
}());
