"use strict";

(function(){
  angular
  .module('songs')
  .directive('songShow', function(){
    return {
      templateUrl: 'js/songs/_song_show.html',
      scope: {
        song: '='
      },
      link: function(scope){
        // console.log(scope.song);
        // scope.myName = 'Slim Shady';
      }
    }
  });
})();
