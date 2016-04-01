"use strict";

(function(){
  angular
  .module("WDIRadio")
  .directive("wadioShow", directiveFunction)

  function directiveFunction (){
    return {
      templateUrl: "js/wadio/_wadio_show.html",
      restrict: "C"
      replace: true,
      scope: {
        wadio: '@'
      },
      link: function(scope){
        scope.artist = "Artist Name";
        scope.artistName = function(){
          alert("blahblahblahdirective");
        }
      }
    }
  }
}
}());
