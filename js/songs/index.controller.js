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
      this.song = new SongFactory();
    }

})();
