"use strict";

(function(){
  angular
  .module("songs")
  .directive("songsForm", function() {
    return {
      templateUrl: "songs/_song.form.html",
      replace: true,
      restrict: "C",
      scope: {
        scope: "=",
        formType: "@"
      },
    }
  });
})();
