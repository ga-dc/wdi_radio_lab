"use strict";

(function(){
  angular
  .module('songs')
  .directive('songsDirective', function(){
    return {
      templateUrl: "/js/songs/_song_show.html",
      restrict: 'E',
      replace: true,
      scope: {
        song: '=',

      },
      link: function(scope){

      }
    };
  });
})();
