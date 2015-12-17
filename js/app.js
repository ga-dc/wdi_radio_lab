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
      })
      .state("show", {
        url: "/songs/:id",
        templateUrl: "js/songs/show.html",
        controller: "ShowController",
        controllerAs: "ShowViewModel"
      })
      .state("new", {
        url: "/songs/new",
        templateUrl: "js/songs/new.html",
        controller: "NewController",
        controller: "NewViewModel"
      });

  }
// End of function
})();
