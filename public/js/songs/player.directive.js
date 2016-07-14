"use strict";

(function(){
  angular
    .module("songs")
    .directive("songPlayer", [
      SongPlayerDirectiveFunction
    ])
    function SongPlayerDirectiveFunction($state){
      return {
        templateUrl: "js/songs/player.html",
        scope: {
          song: "="
        },
        link: function (scope) {
          scope.cancel = function () {
            scope.song = null;
          }
        }
      }
    }
})();
