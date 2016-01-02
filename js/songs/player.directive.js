
"use strict";

(function(){
  angular
    .module("songs")
    .directive("songPlayer", [
      "SongFactory",
      "$state",
      SongPlayerDirectiveFunction
    ])
    function SongPlayerDirectiveFunction(SongFactory, $state){
      return {
        templateUrl: "js/songs/player.html",
        scope: {
          song: "="
        }
      }
    }
})();
