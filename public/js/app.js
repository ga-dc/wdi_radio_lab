"use strict";

(function(){
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
      .state("welcome", {
        url: "/",
        templateUrl: "/public/js/wdi_radio/root.html",
      })
      .state("songIndex", {
        url: "/songs",
        templateUrl: "/public/js/wdi_radio/index.html",
        controller: "SongIndexController",
        controllerAs: "SongIndexViewModel"
      })
      .state("songShow", {
        url: "/songs/:id",
        templateUrl: "/public/js/wdi_radio/show.html",
        controller: "SongShowController",
        controllerAs: "SongShowViewModel"
      });
    }
})();
