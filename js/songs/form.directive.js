"use strict";
(function(){
  angular
  .module("songs")
  .directive('songForm', [
    "SongFactory",
    "$state",
    GrumbleFormDirectiveFunction
  ]);
  function GrumbleFormDirectiveFunction(SongFactory, $state){
    return {
      templateUrl: 'js/songs/_song_form.html',
      replace: true,
      scope: {
        song: "=",
        formType: '@'
      },
      link: function(scope){
        scope.create = function(){
          scope.song.$save(scope.song, function(song) {
            $state.go('/songs/' + song.id);
          });
        }
        scope.update = function(){
          scope.song.$update(scope.song, function(song) {
            $state.go('songIndex', {id:song.id});
          });
        }
        scope.delete = function(){
          scope.grumble.$delete({id: scope.grumble.id}, function(){
            $state.go("grumbleIndex", {}, {reload: true});
          });
        }
      }
    }
  }
})();
