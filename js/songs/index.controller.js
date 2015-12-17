"use strict";

(function(){
  angular
    .module("songs")
    .controller("IndexController", [
      "SongFactory",
      "$stateParams",
      IndexControllerFunction

    ]);

    function IndexControllerFunction(SongFactory, $stateParams){
      this.song = SongFactory.get({id: $stateParams.id});
      this.songs = SongFactory.query();
      this.newSong = new SongFactory();
      this.create = function() {
        this.newSong.$save();
      };
    }

})();
