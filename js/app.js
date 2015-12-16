"use strict";

(function() {
  angular
    .module("wdiRadio", [
    "ui.router",
    "songs"
  ]).config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
      .state("home", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongIndexController",
        controllerAs: "SongIndexViewModel"
      });
  }
// End of function
})();
