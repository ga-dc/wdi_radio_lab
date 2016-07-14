"use strict";

  (function(){
    angular
    .module("anhtice", [
      "ui.router",
      "mixes",
      "firebase"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

    function RouterFunction($stateProvider){
      $stateProvider
      .state("mixIndex", {
        url: "/mixes",
        templateUrl: "js/mixes/index.html",
        controller: "MixesIndexController",
        controllerAs: "MixesIndexViewModel"
      })
      .state("mixShow", {
        url: "/mixes/:id",
        templateUrl: "js/mixes/show.html",
        controller: "MixesShowController",
        controllerAs: "MixShowViewModel"
      });
    }
  })();
