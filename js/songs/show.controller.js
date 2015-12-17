"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsShowController", [
    "SongFactory",
    SongsShowControllerFunction
  ]);
    function SongsShowControllerFunction (SongFactory, $stateParams){
     this.song = SongFactory.get({id: $stateParams.id});
    }
  ]);
}());
