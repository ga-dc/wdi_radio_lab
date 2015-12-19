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
      .state("index", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "IndexController",
        controllerAs: "IndexViewModel"
      });
  }
// End of function
})();
