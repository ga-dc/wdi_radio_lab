'use strict';

(function(){
  angular
  .module('radio')
  .directive('songForm', 
    ['$state',
    'SongsFactory',
    songFormFunction]);

    function songFormFunction($state, SongsFactory){
      return {
        templateUrl: 'js/radio/_song_form.html',
        replace: true,
        scope: {
          song: '=',
          formType: '@'
        },
        link: linkFunction
      }

      function linkFunction(scope) {
        scope.create = function(){
          SongsFactory.save(scope.song, function(song) {
            $state.go('songShow', song);
          });
        }
        scope.update = function() {
          SongsFactory.update(scope.song, function(song) {
            $state.go('songShow', song);
          });
        }
        scope.destroy = function() {
          SongsFactory.destroy(scope.song, function() {
            $state.go('songIndex');
          })
        }
      }
    }
})();