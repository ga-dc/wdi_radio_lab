"use strict";

(function(){
  angular
  .module("songs")
  .directive("playerDirective",[
    PlayerDirectiveFunction
  ])
  function PlayerDirectiveFunction(){
    return {
      templateUrl: "js/songs/_song_player.html",
      restrict:"A",
      replace:true,
      scope:{
        song:"="
      }
    }
  }
})()
