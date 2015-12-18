"use strict";

(function(){
  angular
  .module('songs')
  .directive('songShow', function(){
    return {
      templateUrl: 'js/songs/_song_show.html',
      restrict: 'E',
      replace: true,
      scope: {
        song: '='
      }
    }
  });
})();
