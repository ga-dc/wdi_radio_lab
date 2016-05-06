"use strict";

(function(){
  angular
  .module("songApp")
  .directive("songShow", function(){
    return{
      templateUrl: "js/components/_show.html",
      scope: {
        song: "="
      },
      link: function(scope) {
        console.log(scope.song);
      }
    };
  });

})();
