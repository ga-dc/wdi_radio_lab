"use strict";

(function(){
  angular
    .module( "radio" )
    .directive( "songPlayer", [
      SongPlayerDirectiveFunction
    ])

    function SongPlayerDirectiveFunction($state){
      return {
        templateUrl: "js/player.html",
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

})()
