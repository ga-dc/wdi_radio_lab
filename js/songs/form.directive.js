"use strict";

(function(){
  angular
    .module('songs')
    .directive('songForm',[
      '$state',
      'SongFactory',
      songForm
    ]);

  function songForm($state, SongFactory){
    return {
      templateUrl: 'js/songs/_song_form.html',
      // replace: true,
      scope: {
        song: '=',
        formType: '@'
      },
      link: linkFunction
    }
    function linkFunction(scope){
      scope.create = function(){
        console.log("create function called");
        SongFactory.save(scope.song, function(song) {
          $state.go('songs', {}, {reload: true});
        });
      }
      scope.update = function(){
        scope.song.$update(scope.song, function(song) {
          $state.go('songs', {}, {reload: true});
        });
      }
      scope.destroy = function(){
        scope.song.$delete(scope.song, function(song) {
          $state.go('songIndex', {}, {reload: true});
        });
      }
    }
  }
})();
