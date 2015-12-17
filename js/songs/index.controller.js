"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongIndexController",[
      "SongFactory",
      "$stateParams",
      SongIndexControllerFunction
    ]);

    function SongIndexControllerFunction(SongFactory, $stateParams){
      this.songs = SongFactory.query();

      this.song = new SongFactory();
      this.create = function(){
        console.log("im triggered")
        this.song.$save()
        location.reload();
    };

  }
}());
