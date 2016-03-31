"use strict";

(function(){
  angular
  .module("songs")
  .directive("songForm", [
    "SongFactory",
    "$state",
    SongFormDirectiveFunction
  ]);

  function SongFormDirectiveFunction(SongFactory, $state){
    return{
      templateUrl: "js/wdi_radio/form.html",
      scope: {
        song: "="
      },
      link: function(scope){
        scope.create = function(){
          scope.song.$save(function(response){
            $state.go("songIndex", {}, {reload: true});
          });
        }
      }
    }
  }
}());
