"use strict";
(function(){
  angular
  .module("songs")
  .directive("songShow", directiveFunction)

  function directiveFunction(){
    return {
      templateUrl: "js/songs/_song_show.html",
      restrict: "C",
      replace: true,
      scope: {
        song: '='
      },
      link: function(scope) {
      }
    }
  }
})();
