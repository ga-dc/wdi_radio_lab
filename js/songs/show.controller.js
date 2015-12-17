"use strict";

(function(){
  angular
    .module("songs")
    .controller("ShowController", [
      "SongFactory",
      "$stateParams",
      ShowControllerFunction
  ]);

  function ShowControllerFunction (SongFactory, $stateParams){
    this.song = SongFactory.get({id: $stateParams.id});
  }

})();
