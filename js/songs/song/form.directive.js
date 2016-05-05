"use strict";

(function(){
  angular
  .module("radio")
  .directive('songShow', function(){
    return {
      templateUrl: "js/songs/_song.html",
      replace: true,
      scope: {
        song: '='
      }
    }
  });
})();
