"use strict";

(function(){
  angular
  .module("songs")
  .directive("songForm", [
    "$state",
    "SongFactory",
    function($state){
    return{
      templateUrl: "js/songs/_song_form.html",
      scope: {
        song: '=',
        formType: '@'
      },
      link: function(scope){
        scope.create = function(){
          scope.song.$save().then(
            function(){
              $state.go("songShow", scope.song)
            }
          )
        },
        scope.update = function(){
          scope.song.$update(scope.song, function(song){
            $state.go("songShow", scope.song)
          })
        },
        scope.destroy = function(){
          scope.song.$delete(scope.song, function(){
            $state.go("songIndex")
          })
        }
      }
    }
  }])
})();
