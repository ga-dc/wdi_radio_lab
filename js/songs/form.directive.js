"use strict";

(function(){
  angular
  .module("songs")
  .directive("songForm", function(){
    return {
      templateUrl: "js/songs/_song_form.html",
      restrict: "E",
      replace: true,
      scope: {
        song: "="
      }
    };
  });
})();
