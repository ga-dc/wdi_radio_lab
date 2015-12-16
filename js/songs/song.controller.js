"use strict";
//come back to this
(function(){
  angular
  .module("songs")
  .controller("SongController",[
    "SongFactory",
    "$stateParams",
    SongControllerFunction
  ])

  function SongControllerFunction(SongFactory,$stateParams){
    this.songs = SongFactory.query();

    this.song = SongFactory.get({id: $stateParams.id})




  }

})();
