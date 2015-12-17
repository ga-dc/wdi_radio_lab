"use strict";

(function(){
  angular
  .module("songs")
  .directive("showDirective",[
    "$state",
    "$stateParams",
    "SongFactory",
    ShowDirectiveFunction
  ])

  function ShowDirectiveFunction($state,$stateParams,SongFactory){
    return {
      templateUrl:"js/songs/_song_show.html",
      replace: true,
      restrict:"A",
      scope:{
        song: "="
      },
      link: function(scope){
        scope.song = SongFactory.get({id: $stateParams.id});
      }
    }
  }

})()
