"use strict";

(function(){

  angular
  .module('songs')
  .factory('SongsKitchen', ['$resource', SongsCooker]);

  function SongsCooker($resource){
    return $resource("http://localhost:3000/songs/:id");
  }

}());
