"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongShowController",[
    "SongFactory",
    "$stateParams",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction(SongFactory,$stateParams){
    this.song = SongFactory.get({id: $stateParams.id});
    this.delete = function(){
      SongFactory.remove({id: $stateParams.id});
    }
    this.formVisible = false;
    this.toggleForm = function(){
      this.formVisible = (this.formVisible)?false:true;
    }
  }
})()
