"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongShowController",[
    "SongFactory",
    "$stateParams",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction(SongFactory, $stateParams){
    var vm = this;
    vm.songs = SongFactory.get{id: $stateParams.id};
    // write code to pull songs from api
  }


})();
