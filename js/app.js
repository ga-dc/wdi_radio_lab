"use strict";

(function() {
  angular
    .module("radio", [
      "ui.router",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

    function RouterFunction($stateProvider){
      $stateProvider
      .state("home", {
        url: "",
        template: "Welcome to Rachel's WDI Radio!"
      })
      .state("songs", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "IndexController",
        controllerAs: "IndexViewModel"
      })
    }

})();
