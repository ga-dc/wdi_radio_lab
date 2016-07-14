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
        controller: "MixIndexController",
        controllerAs: "MixIndexViewModel"
      })
      .state("mixShow", {
        url: "/mixes/:id",
        templateUrl: "js/mixes/show.html",
        controller: "MixShowController",
        controllerAs: "MixShowViewModel"
      });
    }
  })();
