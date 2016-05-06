"use strict";

(function(){
  angular
    .module("songs")
    .factory("SongFactory", [   // names this as "SongFactory"
      "$resource",              // gives it the $resource dependency
      SongFactoryFunction       // calls, or runs, the function SongFactoryFunction..
    ])

    function SongFactoryFunction($resource) {    // uses Angular's $resource tool ...
      return $resource("http://localhost:3000/songs/:id");  // to retrieve data from this server.

    }

})();
