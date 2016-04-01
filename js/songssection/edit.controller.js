"use strict";

(function(){
  angular
  .module("songsmodule")
  .controller("SongEditController", [
    "SongFactory",
    "$stateParams",
    SongEditControllerFunction
  ]);

  function SongEditControllerFunction( SongFactory, $stateParams ){
    console.log("anything?");
    this.song = SongFactory.get({id: $stateParams.id});
    this.update = function(){
      this.song.$update({id: $stateParams.id});
    };
    this.destroy = function(){
      this.song.$delete({id: $stateParams.id});
    };
  }
})();
