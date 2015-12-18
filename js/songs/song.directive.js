"use strict";

(function(){
  angular
  .module("songs")
  .directive("songDirective", function(){
    return {
      templateUrl: "/js/songs/_song_show.html",
      restrict: 'E',
      replace: true,
      scope: {
        song: '=',
        showLink: '='
      },
      link: function(scope){
      }
    };
  });
}());
