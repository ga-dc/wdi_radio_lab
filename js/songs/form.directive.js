"use strict";

(function(){
  angular
  .module('songs')
  .directive('songForm', function(){
    return {
      templateUrl: 'js/songs/_song_form.html',
      replace: true,
      restrict: "C",
      scope: {
        song: '=',
        formType: '@'
      },
      link: function(scope){
        scope.create = function(){
          scope.song.$save()
        }
        scope.update = function(){
          scope.song.$update({id: scope.song.id})
        }
        scope.delete = function(){
          scope.song.$delete({id: scope.song.id})
        }
      }
    }
  });
})();
