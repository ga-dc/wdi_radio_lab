"use strict";

(function(){
  angular
  .module("songs")
  .controller("EditController",[
    "SongFactory",
    "$stateParams",
    "$state",
    EditController
  ])

  function EditController (SongFactory, $stateParams, $state){
    this.song = SongFactory.get({id: $stateParams.id})
    this.update = function(){
      this.song.$update({id: $stateParams.id}).then(function(){
        $state.go('songs')
      });
    }
    this.destroy = function(){
      this.song.$delete({id: $stateParams.id}).then(function(){
        $state.go('songs')
      });
    }
  }
})();
