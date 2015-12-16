"use strict";

(function(){
  angular
    .module("songs")
    .controller("IndexController", [
      "SongFactory",
      IndexControllerFunction
    ]);

    function IndexControllerFunction(SongFactory){
      this.songs = SongFactory.query();
    }
})();
