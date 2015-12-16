"use strict";

(function(){
  angular
    .module("wdi-radio", [
      "ui.router",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

    function RouterFunction($stateProvider){
      $stateProvider
      .state("welcome", {
        url: "/",
        templateUrl: "js/main/welcome.html"
      })
      .state("songIndex", {
        url: "/songs",
        templateUrl: "js/main/index.html",
        controller: "SongIndexController",
        controllerAs: "SongIndexViewModel"
      })
      .state("songShow", {
        url: "/songs/:id",
        templateUrl: "js/main/show.html",
        controller: "SongShowController",
        controllerAs: "SongShowViewModel"
      });
    }
})();
