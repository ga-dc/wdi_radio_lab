"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongDeleteController",[
      "SongFactory",
      "$stateParams",
      SongDeleteControllerFunction
  ])

  function SongDeleteControllerFunction(SongFactory,$stateParams){
    // this.delete = function()
    console.dir(SongFactory)
    // SongFactory.$remove({id: $stateParams.id});
  }

})();
