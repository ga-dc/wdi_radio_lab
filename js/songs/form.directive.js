"use strict";

(function(){
  angular
  .module("songs")
  .directive("songForm", [
    "SongFactory",
    "$state",
    SongsFormFunction
  ]);
  function SongsFormFunction(SongFactory, $state){
    return {
      templateUrl: "js/songs/_form.html",
      scope: {
        song: "="
      },
      link: function(scope){
        scope.create = function(){
          scope.song.$save(function(response){
            $state.go("songsIndex", {}, {reload: true});
          })
        };
        scope.update = function(){
          scope.song.$update({id: scope.song.id}, function(response){
            console.log("This is the response!!  " + response);
          })
        };
        scope.delete = function(){
          scope.song.$delete({id: scope.song.id}, function(){
            $state.go("songsIndex", {}, {reload: true});
          })
        };
      }
    }
  }
}());
