"use strict";

(function(){
  console.log("form directtive called");
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
