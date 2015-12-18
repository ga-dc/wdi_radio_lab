'use strict';

(function(){
  angular
  .module('radio')
  .directive('songForm', 
    ['SongsFactory',
    '$state',
    songFormFunction]);

    function songFormFunction(SongsFactory, $state){
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
          console.log(scope.song)
          scope.song.$update({id: scope.song.id}, function(response) {
            console.log(response);
          });
        }
        scope.destroy = function() {
          SongsFactory.remove(scope.song, function() {
            $state.go('songsIndex');
          });
        }
      }
    }
})();