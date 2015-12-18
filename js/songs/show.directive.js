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
      link: function(scope,el){
        scope.song = SongFactory.get({id: scope.song.id});
        scope.showBody = false;
        scope.arrow = '\u2193';
        scope.toggleShow = function(){
          scope.showBody=(scope.showBody)?false:true;
          scope.arrow=(scope.showBody)?"\u2191":"\u2193";
        }
      }
    }
  }

})()
