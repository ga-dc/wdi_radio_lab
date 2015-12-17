"use strict";

(function(){
  angular
  .module("songs")
  .directive("songForm", [
    "$state",
    "SongFactory",
    function($state, Song){
      return {
      templateUrl: "js/songs/_song_form.html",
      replace: true,
      scope: {
        song: "=",
        formType: "@"
      },
      link: function(scope){
        scope.create = function(){
          scope.song.$save(scope.song, function(song){
            $state.go("songShow", song);
          })
        }
        scope.update = function(){
          scope.song.$update(scope.song, function(song){
            $state.go("songShow", song);
          })
        }
        scope.destroy = function(){
          scope.song.$delete(scope.song, function(){
            $state.go("songIndex");
          })
        }
      }
    }
  }])
})();
