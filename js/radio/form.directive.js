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
          song: '='
          // formType: '@'
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
          SongsFactory.update(scope.song, function(response) {
            console.log(response);
      
            // , function(song) {
            // $state.go('songShow', song);
          });
        }
        scope.destroy = function() {
          SongsFactory.destroy(scope.song, function(response) {
            console.log(response);
            // , function() {
            // $state.go('songIndex');
          })
        }
      }
    }
})();